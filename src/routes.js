import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/about' component={About} />
  </Switch>
);