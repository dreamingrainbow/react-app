import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../store/index';

import AppProvider from './AppProvider';

const Provider = () => {
    return (
        <ReduxProvider store={store}>
            <AppProvider />
        </ReduxProvider>
      );   
};

export default Provider;