import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from '../pages/Chat';
import Join from '../pages/Join';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default Routes;
