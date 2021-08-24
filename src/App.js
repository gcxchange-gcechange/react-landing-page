import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import LanguageSelect from "./pages/LanguageSelect";
import ToolkitEn from "./pages/ToolkitEn";
import ToolkitFr from "./pages/ToolkitFr";

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
              <Route exact path="/en/toolkit">
                <ToolkitEn  />
              </Route>
              <Route exact path="/fr/toolkit">
                <ToolkitFr />
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
