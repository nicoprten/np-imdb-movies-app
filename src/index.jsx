import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './store/index.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)