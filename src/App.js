import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Hero from './pages/Hero';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="scroll">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favorite">
          <Favorite />
        </Route>
        <Route exact path="/hero/:id">
          <Hero />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
