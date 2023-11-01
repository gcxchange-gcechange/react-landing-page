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
      <h1 className="process-title">Congratulations, you joined GCXchange!</h1><br></br><span>We will send you an email in the next <strong>20 minutes</strong> with a link to your personal GCXchange homepage.</span>
      <img className="info-img" src={processingImage} alt="" />
      <p>Please don’t forget to check your <strong>Junk Email Folder</strong> in case it finds its way there – Thank you!</p>
      <p>If you don't receive an email after 20 minutes, please go to the <a href = "https://gcxgce.sharepoint.com/SitePages/Home.aspx">GCXchange homepage</a> and check if your page has been successfully created.</p>
      <p>If any issues persist after the above steps have been performed, please contact our support agents at <a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca.</a></p>
    </div>
  </main>
)

export default ProcessEn;