import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsList from './components/posts-index';

const Greeting = () => (
  <div>
    Hello There!
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsList} />
  </Route>
);
