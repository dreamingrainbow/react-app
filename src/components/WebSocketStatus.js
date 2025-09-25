import React from 'react';
import { useWebSocket } from '../app/provider/WebSocketProvider';
import { Box, Button, Typography, CircularProgress } from '@mui/material';

const WebSocketStatus = () => {
  const { isConnected, reconnectAttempts, maxRetriesReached, manualReconnect, liveAPI = false } = useWebSocket();

  if (isConnected || !liveAPI) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        padding: 2,
        backgroundColor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {!maxRetriesReached ? (
        <>
          <CircularProgress size={20} />
          <Typography>
            Connecting... (Attempt {reconnectAttempts + 1}/5)
          </Typography>
        </>
      ) : (
        <>
          <Typography color="error">
            Connection failed after 5 attempts
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={manualReconnect}
          >
            Reconnect
          </Button>
        </>
      )}
    </Box>
  );
};

export default WebSocketStatus; 