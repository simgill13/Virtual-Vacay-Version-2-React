

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from './store';
import App from './components/app';
import Headings from './components/headings';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
        	<Router history={hashHistory}>
        		<Route path="/" component={App} />
        		<Route path="/history" component={Headings} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
);
