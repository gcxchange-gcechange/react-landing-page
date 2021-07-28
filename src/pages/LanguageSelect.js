import React from 'react'

import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import gcxLogo from '../assets/gcx-gce.png'

const Index = () => (
  <main className="text-center splash-page">
    <Helmet>
      <title>gcx-gce.gc.ca</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content">
      <h1 className="pb-3 sr-only">gcxchange | <span lang="fr">gcéchange</span></h1>
      <h1 className="pb-3 h1">Welcome | <span lang="fr">Bienvenue</span></h1>
      <Link className="btn btn-primary btn-lg mr-2" to="/home">English</Link>
      <Link className="btn btn-primary btn-lg" lang="fr" to="/accueil">Français</Link>
    </div>
  </main>
)

export default Index;
