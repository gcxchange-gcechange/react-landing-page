import React from 'react'

import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import processingImage from '../assets/img/processing-img.png';

const ProcessFr = () => (
  <main lang="fr" className="text-center splash-page process-splash">
    <Helmet>
      <title>Attendez patiemment, nous avons presque fini de configurer votre compte! Vous recevrez bientôt un courriel de notre part.</title>
    </Helmet>
    <div className="process-holder form-holder">
      <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
      <h1 className="process-title">Félicitations pour votre inscription à GCÉchange! Nous vous enverrons un courriel dans les <strong>20 prochaines minutes</strong> avec un lien vers votre page d’accueil personnelle GCÉchange.</h1>
      <img className="info-img" src={processingImage} alt="" />
      <p>N’oubliez pas de vérifier votre <strong>dossier Courrier indésirable</strong> au cas où notre courriel s’y retrouverait. Merci!</p>
      <p>Si vous ne recevez pas notre courriel d’ici 20 minutes, rendez-vous à la  <a href="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">page d’accueil de GCÉchange</a> et veillez à ce que votre page ait bel et bien été créée.</p>
      <p>Si le problème persiste, veuillez communiquer avec le service de soutien, à <a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca.</a></p>
    </div>
  </main>
)

export default ProcessFr;