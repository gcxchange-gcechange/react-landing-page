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
      <div className="process-body process-title">
        <p className="process-mrg-20">Félicitations pour votre inscription à GCÉchange! Nous vous enverrons un courriel dans les <strong>20 prochaines minutes</strong> avec un lien vers votre page d’accueil personnelle GCÉchange.</p>
        <p className="process-mrg-20">N’oubliez pas de vérifier votre <strong>dossier Courrier indésirable</strong> au cas où notre courriel s’y retrouverait. Merci!</p>
      </div>
        <img className="info-img" src={processingImage} alt="" />    
        <p style={{textAlign:"left"}}>Si vous ne recevez pas notre courriel d’ici 20 minutes, rendez-vous à la <span><a href="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">page d’accueil de GCÉchange</a></span> et veillez à ce que votre page ait bel et bien été créée.</p>
        <p style={{textAlign:"left"}}>Si le poblème persiste, veuillez communiquer avec le service de soutien, à <span><a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca.</a></span></p>
    </div>
  </main>
)

export default ProcessFr;