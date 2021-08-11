import React from 'react'

import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import processingImage from '../assets/img/processing-img.png';

const ProcessEn = () => (
  <main className="text-center splash-page process-splash">
    <Helmet>
      <title>Sit tight, we’re almost finished setting up your account! You’ll be getting an email from us soon. </title>
    </Helmet>
    <div className="process-holder form-holder">
      <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
      <h1 className="process-title">Sit tight, we’re almost finished setting up your account! You’ll be getting an email from us soon. </h1>
      <img className="info-img" src={processingImage} alt="" />
      <p>If you don't receive an email after 10 minutes, please contact us at <a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca. </a></p>
    </div>
  </main>
)

export default ProcessEn;