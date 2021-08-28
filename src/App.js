import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Nav />
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
    </div>
  );
}

export default App;
