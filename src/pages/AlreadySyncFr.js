import React from 'react'
import {Helmet} from "react-helmet";
import gcxLogo from '../assets/gcx-gce.png'
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const queryParameters = new URLSearchParams(window.location.search)
const type = queryParameters.get("user")

const alreadysyncfr = () => (
    <main className="text-center toolkit-container">
    <Helmet>
            <title>Synchronisation</title>
    </Helmet>
    <img className="gcx-logo" src={gcxLogo} alt="GCXchange | GCÉchange" />
    <div className="content sync-content">
      <h1 className="pb-3 sr-only">gcxchange | <span lang="fr">gcéchange</span></h1>
            <h2 className="pb-4 h1">Synchronisation de votre ministère avec GCÉchange  </h2>
            <div className="content-sync">

            
            <p className="lead mb-4 content-left">
                        Votre ministère d’origine s’est chargé de créer des comptes GCÉchange pour ses employés, mais pour une raison ou une autre, votre profil n’a pas été correctement créé. Pour résoudre ce problème, veuillez contacter votre équipe de la technologie de l’information (TI) en utilisant le modèle ci-dessous : 
            </p><br></br>
          
            <p className="lead mb-4 content-left">
                Bonjour,<br></br><br></br>

                Lors de l’inscription à un compte GCÉchange, l’équipe de soutien de GCÉchange m’a conseillé de transmettre ce message à mon service de la TI :<br></br><br></br>



                        Veuillez ajouter cet utilisateur au groupe FID de TBS. Cela leur permettra de rejoindre le locataire de GCÉchange/FID et de voir son compte automatiquement établi.<br></br><br></br>

                        Vous trouverez ci-dessous l’adresse courriel du ministère de l’utilisateur :<br></br><br></br>

                {type}<br></br><br></br>

                Merci! 
            </p><br></br>
            
            <p className="lead mb-4 content-left">
                        <span className="toolkit-bold">L’équipe de soutien de GCÉchange   </span><br></br><br></br>
                        Pour tout problème ou question que vous pourriez avoir après avoir contacté votre équipe informatique, veuillez contacter l’équipe de soutien de GCÉchange pour plus d’assistance.  <br></br><br></br>



                        Merci de votre collaboration! C’est avec enthousiasme que nous envisageons la poursuite de notre collaboration!  <br></br><br></br>

                L’équipe GCÉchange 
                </p>
            </div>
        </div>
        <footer>
            <div className="d-flex align-items-center flex-between">
                <img className="goc-canada first-item-footer" src={govCandaEn} alt="Gouvernement du Canada" /> 
                <div><a herf="https://www.gcx-gce.gc.ca/static/media/gcx_terms_fr.588a12c3ce3545665f6d.pdf">Conditions d'utilisation</a></div>
                <div><a herf="mailto:support-soutien@gcx-gce.gc.ca">Aide</a></div>
                <div><a herf="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">Allé à gcé</a></div>
                <img className="goc-canada item" src={Canada} alt="Symbole du gouvernement du Canada" />
            </div>
        </footer>
    </main>

)

export default alreadysyncfr;
