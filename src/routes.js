import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import repository from './pages/Repository';
import main from './pages/Main';
// import { Container } from './styles';

export default function Reoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={main} />
        <Route path="/repository/:repository" component={repository} />
      </Switch>
    </BrowserRouter>
  );
}
