

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import store from './store';
import App from './components/app';
import HistoryHome from './components/historyhome';
import Logout from './components/logout';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
        	<Router history={hashHistory}>
        		<Route path="/" component={App} />
        		<Route path="/Vacations" component={HistoryHome} />
            <Route path="/logout" component={Logout} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
);
