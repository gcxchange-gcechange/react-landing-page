import React from 'react'

import {Helmet} from "react-helmet";

import gcxLogo from '../assets/gcx-gce.png'
import maintenance from '../assets/img/maintenance.png'

const Maintenance = () => (
  <main className="text-center maintenance-page">
    <Helmet>
      <title>Maintenance - gcx-gce.gc.ca</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content">
      <h1 className="pb-3 sr-only">gcxchange | <span lang="fr">gcéchange</span></h1>
      <h2 className="pb-4 h1">Maintenance</h2>
      <p className="lead mb-4">Hello! We're working hard on improving the registration page, we'll be back soon!</p>
      <p className="lead" lang="fr">Bonjour! Nous travaillons fort pour améliorer la page d'inscription, de retour bientôt!</p>
      <img src={maintenance} alt="" />
    </div>
  </main>
)

export default Maintenance;
