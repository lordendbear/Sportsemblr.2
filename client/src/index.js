import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
// TODO: Remove
import '../node_modules/toastr/build/toastr.min.css';

import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Route path="/" component={App} />
        </Router >
    </Provider >,
    document.getElementById('root')
);

registerServiceWorker();
