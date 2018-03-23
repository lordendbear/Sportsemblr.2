import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
//import routes from './routes';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './components/auth/Register'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Route path="/register" component={Register} />
        </Router >
    </Provider >,
    document.getElementById('root')
);

registerServiceWorker();
