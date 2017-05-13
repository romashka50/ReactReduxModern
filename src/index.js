import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Resources from './components/resources';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router >
      <div>
        <Route path="/" component={App} />
        <Route path="/resources" component={Resources} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
