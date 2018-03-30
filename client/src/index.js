import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import { loadEvents } from './actions/eventActions';
import { loadPlaces } from './actions/placeActions';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

store.dispatch(loadEvents());
store.dispatch(loadPlaces());

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Route path="/" component={App} />
        </Router >
    </Provider >,
    document.getElementById('root')
);

registerServiceWorker();
