import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/favorite">
        <Favorite />
      </Route>
      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
