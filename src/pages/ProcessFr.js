import React from 'react'

import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import processingImage from '../assets/img/processing-img.png';

const ProcessFr = () => (
  <main lang="fr" className="text-center splash-page">
    <Helmet>
      <title>Processing Request</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="process-holder form-holder">
      <h1 className="process-title">Attendez patiemment, nous avons presque fini de configurer votre compte! Vous recevrez bientôt un courriel de notre part.</h1>
      <img className="info-img" src={processingImage} alt="" />
      <p>Si vous ne recevez pas de courriel après 10 minutes, veuillez communiquer avec nous à l’adresse suivante : <a href="mailto:support-soutien@gcx-gce.gc.ca.">support-soutien@gcx-gce.gc.ca.</a></p>
    </div>
  </main>
)

export default ProcessFr;