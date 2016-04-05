import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App';
import Chat from '../containers/Chat';

export default function(store) {
  return (
    <Route path='/' component={Chat}>

    </Route>
  )
}
