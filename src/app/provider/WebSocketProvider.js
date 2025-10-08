import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import { useGenerateApiKeyMutation } from '../../store/createApiInstance';
import useSnackbar from '../../hooks/useSnackbar';

const WebSocketContext = createContext(null);

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export const WebSocketProvider = ({ children, liveAPI = false }) => {
  const [url, setUrl] = useState('ws://localhost:8080');
  const [apiKey, setApiKey] = useState('');
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [maxRetriesReached, setMaxRetriesReached] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [keyError, setKeyError] = useState(null);
  const [live, setLive] = useState(liveAPI);
  const maxReconnectAttempts = 5;

  const [generateApiKey] = useGenerateApiKeyMutation();
  const { enqueueSnackbar } = useSnackbar();

  // Refs to track connection state without causing re-renders
  const connectionStateRef = useRef({
    isConnecting: false,
    attempts: 0,
    currentSocket: null,
    reconnectTimeout: null,
    hasAttemptedKeyGeneration: false,
  });

  const cleanupConnection = useCallback(() => {
    if (connectionStateRef.current.currentSocket) {
      connectionStateRef.current.currentSocket.close();
      connectionStateRef.current.currentSocket = null;
    }
    if (connectionStateRef.current.reconnectTimeout) {
      clearTimeout(connectionStateRef.current.reconnectTimeout);
      connectionStateRef.current.reconnectTimeout = null;
    }
  }, []);

  const generateAndSetApiKey = useCallback(async () => {
    try {
      setIsGeneratingKey(true);
      setKeyError(null);
      const result = await generateApiKey();
      if (result.data) {
        setApiKey(result.data.apiKey);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Failed to generate API key:', err);
      setKeyError(err);
      enqueueSnackbar({
        message: 'Failed to generate API key',
        variant: 'error',
      });
      return false;
    } finally {
      setIsGeneratingKey(false);
    }
  }, [generateApiKey, enqueueSnackbar]);

  const connect = useCallback(async () => {
    // Don't try to connect if we're already connecting or have reached max retries
    if (
      connectionStateRef.current.isConnecting ||
      connectionStateRef.current.attempts >= maxReconnectAttempts
    ) {
      return;
    }

    // Clean up any existing connection
    cleanupConnection();

    // Set connecting state
    connectionStateRef.current.isConnecting = true;
    connectionStateRef.current.attempts += 1;
    setReconnectAttempts(connectionStateRef.current.attempts);

    // Create WebSocket URL with API key
    const wsUrl = new URL(url);
    wsUrl.searchParams.append('api_key', apiKey);
    const wsUrlWithKey = wsUrl.toString();

    // Create new WebSocket
    const ws = new WebSocket(wsUrlWithKey);
    connectionStateRef.current.currentSocket = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
      connectionStateRef.current.isConnecting = false;
      connectionStateRef.current.attempts = 0;
      setIsConnected(true);
      setReconnectAttempts(0);
      setMaxRetriesReached(false);
      setSocket(ws);
      enqueueSnackbar({
        message: 'WebSocket connected successfully',
        variant: 'success',
      });
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log(message);
        setMessages((prevMessages) => [message, ...prevMessages]);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
        enqueueSnackbar({
          message: 'Error parsing WebSocket message',
          variant: 'error',
        });
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
      connectionStateRef.current.isConnecting = false;
      setIsConnected(false);
      setSocket(null);

      if (connectionStateRef.current.attempts < maxReconnectAttempts) {
        const timeout = Math.min(
          1000 * Math.pow(2, connectionStateRef.current.attempts),
          30000
        );
        connectionStateRef.current.reconnectTimeout = setTimeout(async () => {
          // Clean up any existing connection before retrying
          cleanupConnection();
          connectionStateRef.current.hasAttemptedKeyGeneration = false;
          connectionStateRef.current.attempts += 1;
          setReconnectAttempts(connectionStateRef.current.attempts);

          const success = await generateAndSetApiKey();
          if (success) {
            await new Promise((resolve) => setTimeout(resolve, 0));
            connect();
          }
        }, timeout);
        enqueueSnackbar({
          message: `Connection lost. Attempting to reconnect (${connectionStateRef.current.attempts + 1}/${maxReconnectAttempts})`,
          variant: 'warning',
        });
      } else {
        setMaxRetriesReached(true);
        enqueueSnackbar({
          message: 'Connection failed after maximum retry attempts',
          variant: 'error',
        });
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      enqueueSnackbar({
        message: 'WebSocket connection error',
        variant: 'error',
      });
    };
  }, [url, apiKey, cleanupConnection, maxReconnectAttempts, enqueueSnackbar]);

  const manualReconnect = useCallback(async () => {
    connectionStateRef.current.attempts = 0;
    setReconnectAttempts(0);
    setMaxRetriesReached(false);
    connectionStateRef.current.hasAttemptedKeyGeneration = false;
    enqueueSnackbar({
      message: 'Generating new API key and attempting to reconnect...',
      variant: 'info',
    });

    // Clean up existing connection first
    cleanupConnection();

    // Generate new API key and wait for it to be set
    const success = await generateAndSetApiKey();
    if (success) {
      // Wait for the next render cycle to ensure state is updated
      await new Promise((resolve) => setTimeout(resolve, 0));
      connect();
    }
  }, [connect, enqueueSnackbar, generateAndSetApiKey, cleanupConnection]);

  // Initial connection and API key generation
  useEffect(() => {
    const initializeConnection = async () => {
      if (!liveAPI) {
        return;
      }
      if (!apiKey && !connectionStateRef.current.hasAttemptedKeyGeneration) {
        connectionStateRef.current.hasAttemptedKeyGeneration = true;
        const success = await generateAndSetApiKey();
        if (!success) {
          console.error('Failed to generate API key');
          return;
        }
      }
      if (apiKey) {
        connect();
      }
    };

    initializeConnection();
    return cleanupConnection;
  }, [connect, cleanupConnection, apiKey, generateAndSetApiKey, liveAPI]);

  const sendMessage = useCallback(
    (message) => {
      if (socket && isConnected) {
        socket.send(JSON.stringify(message));
      } else {
        console.error('WebSocket is not connected');
        enqueueSnackbar({
          message: 'Cannot send message: WebSocket is not connected',
          variant: 'error',
        });
      }
    },
    [socket, isConnected, enqueueSnackbar]
  );

  const broadcast = useCallback(
    (message) => {
      if (socket && isConnected) {
        socket.send(message);
      } else {
        console.error('WebSocket is not connected');
        enqueueSnackbar({
          message: 'Cannot broadcast: WebSocket is not connected',
          variant: 'error',
        });
      }
    },
    [socket, isConnected, enqueueSnackbar]
  );

  const setDestinationUrl = useCallback((url) => {
    setUrl(url);
  }, []);

  const value = {
    socket,
    isConnected,
    sendMessage,
    broadcast,
    setDestinationUrl,
    reconnectAttempts,
    maxRetriesReached,
    manualReconnect,
    messages,
    isGeneratingKey,
    keyError,
    liveAPI: live,
    setLiveAPI: setLive,
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
