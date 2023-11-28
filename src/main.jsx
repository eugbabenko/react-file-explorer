import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';

import { store } from './redux/store.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Wrap the app with ChakraProvider to enable Chakra UI theming */}
        <ChakraProvider>
            {/* Provide the Redux store to the entire application */}
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>
);
