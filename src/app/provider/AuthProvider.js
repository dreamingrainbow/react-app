import React, { createContext, useReducer } from 'react';

import { withIdleTimer, useIdleTimer } from 'react-idle-timer';

import { AuthModal } from './AuthModal';

const actions = {
  SET_AUTHENTICATED: (prevState, action) => {
    const newState = prevState;
    newState.authenticated = action.payload;
    return { ...prevState, ...newState };
  },
  SET_OPEN: (prevState, action) => {
    const newState = prevState;
    newState.open = action.payload;
    return { ...prevState, ...newState };
  },
  SET_IDLE_STATE: (prevState, action) => {
    const newState = prevState;
    newState.idleState = action.payload;
    return { ...prevState, ...newState };
  },
  SET_USER: (prevState, action) => {
    const newState = prevState;
    newState.user = action.payload;
    return { ...prevState, ...newState };
  },
  SET_ERROR: (prevState, action) => {
    const newState = prevState;
    newState.error = action.payload;
    return { ...prevState, ...newState };
  },
};

export const initialState = {
  authenticated: false,
  token: null,
  open: false,
  idleState: 'Active',
  user: {},
  error: null,
};

export const init = () => {
  return initialState;
};

export const AuthContext = createContext(initialState);

const { Provider } = AuthContext;

const AuthProvider = withIdleTimer(({ activate, children }) => {
  
  const [state, dispatch] = useReducer(
    (_state, _action) => {
      if (!_action.type || !actions.hasOwnProperty(_action.type)) {
        // console.log(_action);
        throw new Error('Error: Action Not Found!');
      }
      return actions[_action.type](_state, _action);
    },
    initialState,
    init
  );

  const { authenticated, open, idleState, user, error } = state;

  const setAuthenticated = (payload) => {
    dispatch({ type: 'SET_AUTHENTICATED', payload });
  };

  const setOpen = (payload) => {
    dispatch({ type: 'SET_OPEN', payload });
  };

  const setIdleState = (payload) => {
    dispatch({ type: 'SET_IDLE_STATE', payload });
  };

  const setUser = (payload) => {
    dispatch({ type: 'SET_USER', payload });
  };

  const setError = (payload) => {
    dispatch({ type: 'SET_ERROR', payload });
  };

  const logout = () => {
    setIdleState('Idle');
    setOpen(false);
    setUser({});
    setAuthenticated(false);
    pause();
  };

  const handleAuthenticate = ({ email, token }) => {
    // console.log('handleAuthenticate', email, token);
    setUser({
      email,
      token,
    });
    start();
    setAuthenticated(true);
  };

  const refreshToken = (token) => {
    setUser({
      ...user,
      token,
    });
    setAuthenticated(true);
    reset();
    setIdleState('Active');
    handleStillHere();
    return true;
  };

  const handleMFACode = ({ code }) => {
    console.log('handleMFACode', code);
  };

  const handleStillHere = () => {
    activate();
    start();
    setOpen(false);
    // console.log('handleStillHere');
  };

  const onPrompt = () => {
    // console.log('onPrompt');
    setIdleState('Prompted');
    setOpen(true);
  };

  const onIdle = () => {
    // console.log('onIdle');
    setIdleState('Idle');
    pause();
    // removeAuth();
  };

  const onActive = () => {
    setIdleState('Active');
  };

  const onAction = () => {
    // console.log('onAction');
  };

  const onPresenceChange = (presence) => {
    const isIdle = presence.type === 'idle';
    const isPrompted = presence.type === 'active' && presence.prompted;
    const isActive = presence.type === 'active' && !presence.prompted;
    if (isIdle) {
      onIdle();
    } else if (isPrompted) {
      onPrompt();
    } else if (isActive) {
      onActive();
    }
  };

  const {
    start,
    reset,
    pause,
    getRemainingTime,
    getPromptBeforeIdleTime,
    getPromptedTime,
    getIdleTime,
    getActiveTime,
  } = useIdleTimer({
    timeout: 1000 * 60 * 5, // 15 minutes
    promptBeforeIdle: 1000 * 60 * 1, // 1 minute
    onPrompt,
    onIdle,
    onActive,
    onAction,
    onPresenceChange,
  });

  React.useEffect(() => {
    if (authenticated) {
      start();
    } else {
      pause();
    }
  }, [authenticated]);

  const value = {
    dispatch,
    authenticated,
    setAuthenticated,
    open,
    setOpen,
    activate, // function to activate the idle timer
    start, // function to start the idle timer
    reset, // function to reset the idle timer
    pause, // function to pause the idle timer
    getIdleTime, // function to get the idle time
    getActiveTime, // function to get the active time
    getRemainingTime, // function to get the remaining time
    getPromptBeforeIdleTime, // function to get the prompt before idle time
    getPromptedTime, // function to get the prompted time
    idleState, // state to track the idle state
    handleStillHere, // function to handle the still here event
    onPrompt, // function to handle the prompt event
    onIdle, // function to handle the idle event
    onActive, // function to handle the active event
    onAction, // function to handle the action event
    onPresenceChange, // function to handle the presence change event
    setIdleState, // function to set the idle state
    setUser, // function to set the user
    setError, // function to set the error
    user, // state to track the user
    error, // state to track the error
    handleAuthenticate, // function to handle the authenticate event
    handleMFACode, // function to handle the MFA code event
    logout, // function to logout
    refreshToken, // function to refresh the token
  };

  return (
    <Provider value={value}>
      {children}
      <AuthModal open={value.open} />
    </Provider>
  );
});

export default AuthProvider;
