import React from 'react'

import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import gcxLogo from '../assets/gcx-gce.png'

const Process = () => (
  <main className="text-center splash-page">
    <Helmet>
      <title>Processing Request</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content form-holder">
      <h1>SIT TIGHT CHECK YOUR EMAIL!</h1>
      <p>Cool graphic</p>
    </div>
  </main>
)

export default Process;