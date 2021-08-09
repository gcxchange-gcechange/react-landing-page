import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import LanguageSelect from "./pages/LanguageSelect";
import Maintenance from "./pages/Maintenance";

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
              <Route exact path="/">
                {process.env.REACT_APP_MAINTENANCE_MODE ?
                  <Maintenance />
                  :
                  <LanguageSelect />
                }
              </Route>
            </Switch>
          </Router>
      </div>
  )
}

export default App
