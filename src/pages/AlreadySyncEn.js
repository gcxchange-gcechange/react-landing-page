import React from 'react'
import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const queryParameters = new URLSearchParams(window.location.search)
const type = queryParameters.get("user")

const alreadysync = () => (
    <main className="text-center toolkit-container">
    <Helmet>
      <title>Already sync</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content sync-content">
      <h1 className="pb-3 sr-only">gcxchange | <span lang="fr">gcéchange</span></h1>
            <h2 className="pb-4 h1">Your department's synchronization with GCXchange has you covered!</h2>
            <div className="content-sync">

            
            <p className="lead mb-4 content-left">
                    Your home department has taken care of setting up GCXchange accounts for its employees, but for one reason or another your profile was not properly created. To fix this issue, please contact your Information Technology (IT) team by using the template below:
            </p><br></br>
          
            <p className="lead mb-4 content-left">
                Hello,<br></br><br></br>

                While registering for a GCXchange account, the GCXchange support team has advised me to relay this message to my IT department:<br></br><br></br>



                Please add this user to the TBS Identity Federation Group (IDF). This will allow them to join the GCXchange/IDF tenant and have their account automatically established.<br></br><br></br>

                Below is the user’s departmental email:<br></br><br></br>

                {type}<br></br><br></br>

                Thank you! 
            </p><br></br>
            
            <p className="lead mb-4 content-left">
                <span className="toolkit-bold">GCXchange Support Team </span><br></br><br></br>
                For any issues or questions that you may have once you contact your IT Team, please reach out to the GCXchange Support for further assistance.<br></br><br></br>



                Thank you for your cooperation!<br></br><br></br>

                The GCXchange Team 
                </p>
            </div>
        </div>
        <footer>
            <div className="d-flex align-items-center flex-between">
                <img className="goc-canada first-item-footer" src={govCandaEn} alt="Government of Canada" /> 
                <div><a herf="https://www.gcx-gce.gc.ca/static/media/gcx_terms_en.7b9ac15818e30845358c.pdf">Terms and Conditions</a></div>
                <div><a herf="mailto:support-soutien@gcx-gce.gc.ca">Help</a></div>
                <div><a herf="https://gcxgce.sharepoint.com/">Go to GCX</a></div>
                <img className="goc-canada item" src={Canada} alt="" />
            </div>
        </footer>
    </main>

)

export default alreadysync;
