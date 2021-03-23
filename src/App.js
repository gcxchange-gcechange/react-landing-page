import React from 'react'
//
//import { Router } from './components/Router'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import Index from "./pages/index";

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="content">
          <Router>
            <Switch>
              <Route exact path="/home">
                <Home lang="en-us" />
              </Route>
              <Route exact path="/accueil">
                <Home lang="fr-ca" />
              </Route>
              <Route exact path="/">
                <Index />
              </Route>
            </Switch>
          </Router>
      </div>
  )
}

export default App
