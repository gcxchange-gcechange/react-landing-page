import React from 'react'
import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const queryParameters = new URLSearchParams(window.location.search)
const type = queryParameters.get("user")

const Maintenance = () => (
    <main className="text-center toolkit-container">
    <Helmet>
      <title>Already sync</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content sync-content">
      <h1 className="pb-3 sr-only">gcxchange | <span lang="fr">gcéchange</span></h1>
      <h2 className="pb-4 h1">Your department is already sync!</h2>
            <p className="lead mb-4 content-left">
                Dear GCXchange User,<br></br>
                Your home department participated in a process to automatically create GCXchange accounts for its employees. Please contact your IT Team using the following template and they will be ready to assist you.
            </p>
            <hr class="toolkit-hr"></hr>
            <p className="lead mb-4 content-left">
            Template:<br></br>

            Hello from the GCXchange Team!<br></br>

            The colleague contacting you today attempted to register on GCXchange. Please add them to the TBS Identity Federation Group so that they can be added to the GCXchange/IDF tenant, and have their account automatically created for them.<br></br>

                Below is their departmental email:{type}<br></br>



            Thank you!<br></br>

            GCXchange Support
            </p>
            <hr class="toolkit-hr"></hr>
            <p className="lead mb-4 content-left">
                For any issues or questions that you may have once you contact your IT Team, please reach out to GCXchange Support.<br></br>



                Thank you!<br></br>

                The GCXchange Team
            </p>
        </div>
        <footer>
            <div className="d-flex align-items-center flex-between">
                <img className="goc-canada first-item-footer" src={govCandaEn} alt="" /> 
                <div><a herf="www.google.ca">Terms and Conditions</a></div>
                <div><a herf="www.google.ca">Help</a></div>
                <div><a herf="www.google.ca">Go to GCX</a></div>
                <img className="goc-canada item" src={Canada} alt="" />
            </div>
        </footer>
    </main>

)

export default Maintenance;
