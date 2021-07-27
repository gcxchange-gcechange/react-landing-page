import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "@fontsource/montserrat";

import Home from "./pages/home";
import LanguageSelect from "./pages/LanguageSelect";
import Process from "./pages/Process";

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="content">
          <Router
            forceRefresh={true}
          >
            <Switch>
              <Route exact path="/home">
                <Home lang="en-us" />
              </Route>
              <Route exact path="/accueil">
                <Home lang="fr-ca" />
              </Route>
              <Route exact path="/process">
                <Process />
              </Route>
              <Route exact path="/">
                <LanguageSelect />
              </Route>
            </Switch>
          </Router>
      </div>
  )
}

export default App
