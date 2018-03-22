import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import routes from './routes';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
