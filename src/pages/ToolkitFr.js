import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button, Table } from 'reactstrap';
import FileDownload from 'js-file-download';
import Axios from 'axios';
import gcxLogo from '../assets/gcx-gce.png';
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const downloadlink = (url) => {
    const title = url.split('net/toolkit/').pop().split("?")[0];
    Axios({
    url: url,
    method: 'GET',
    responseType: 'blob', // Important
    }).then((response) => {
        FileDownload(response.data, title);
    });
}

const ToolkitFr = () => (
    <div>
    <main className="toolkit-container">
        <Container fluid>
            <Row className="bg-toolkit-head">
                <div className="head-container">
                    <nav className="d-flex lang-select">
                        <a className="ml-auto" href="/en/toolkit">English</a>
                    </nav>
                    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
                    <hr />
                    <h1>Boîte à outils gc<span className="toolkit-highlight">é</span>change</h1>
                    <div>
                        <a href="#resource-holder" className="btn btn-primary btn-lg mt-3">Obtenir des produits de communication</a>
                    </div> 
                </div>  
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Qu’est-ce que gc<span className="toolkit-highlight">é</span>change?</h2>
                    <div className="toolkit-text-holder">
                    Gc<span className="toolkit-highlight">é</span>change est une plateforme moderne qui tiendra les employés <span className="toolkit-bold">au courant</span> de ce qui se passe <span className="toolkit-bold">à l’échelle du gouvernement du Canada</span> et qui leur permettra de <span className="toolkit-bold">collaborer</span> avec des personnes de l’extérieur de leur organisation <span className="toolkit-bold">en un seul endroit. </span> 
                    </div>
                </div>
            </Row>
            <Row className="bg-toolkit-highlight">
                <div className="toolkit-info-box">
                    <h2>À partir d’un <span className="toolkit-bold">emplacement unique</span>, vous pourrez : </h2>
                    <Row>
                        <Col>
                            <ul>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Collaborer avec d’autres employés</span> et le monde extérieur en utilisant Microsoft Teams 
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>    
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Corédiger des documents</span> avec des fonctionnaires d’autres ministères     
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Créer <span className="toolkit-bold">des collectivités interministérielles</span> ou s’y joindre  
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Avoir des discussions de groupe et échanger des messages directs</span> avec des collègues de l’ensemble du GC 
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Voir les communications <span className="toolkit-bold">ministérielles et pangouvernementales </span>  
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Visualiser du contenu et des renseignements <span className="toolkit-bold">personnalisés pour vous </span>  
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Accéder <span className="toolkit-bold">aux outils organisationnels de l’ensemble du gouvernement</span> en lien avec la paie, les carrières, etc. 
                                    </div> 
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Accéder facilement à <span className="toolkit-bold">l’intranet actuel de votre ministère</span> par l’intermédiaire de gcéchange 
                                    </div>
                                </li>
                            </ul>
                        </Col>    
                    </Row>
                </div>
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Quand pourrai-je accéder à gc<span className="toolkit-highlight">é</span>change?  </h2>
                    <div className="toolkit-text-holder">
                        <span className="toolkit-bold">Bonne nouvelle! L’intégration à gcéchange a déjà commencé.</span> Les ministères et organismes sont intégrés conformément à ce calendrier stratégique. 
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Qu’en est-il des OutilsGC? </h2>
                    <div className="toolkit-text-holder mb-3">
                        <span className="toolkit-bold">Oui, ce n’est pas juste une rumeur. Gcéchange remplacera tous les OutilsGC</span>, y compris GCintranet, GCconnex, GCannuaire, GCpédia et, plus tard, GCcollab.  
                    </div>
                    <div className="toolkit-text-holder">
                        Mais soyez sans crainte : les outils seront retirés du service de façon graduelle au cours des deux prochaines années, et continueront de fonctionner jusqu’à ce que tous les fonctionnaires aient accès à gcéchange. Les utilisateurs ont amplement le temps de revoir le contenu existant et de le transférer à gcéchange comme bon leur semble. C’est l’occasion de repartir de zéro sur une toile vierge! 
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Produits de communication</h2>
                    <div className="toolkit-text-holder">
                        Nous voulons que gcéchange devienne <span className="toolkit-bold">l’espace de travail numérique officiel de tous les employés du GC</span> et qu’il nous permette d’établir des liens en toute continuité, peu importe notre ministère ou organisme de provenance! 
                    </div>
                    <div className="toolkit-text-holder">
                        Nous avons besoin de votre aide pour y arriver!  
                    </div>
                </div>
            </Row>
            <Row className="resource-row">
                <div id="resource-holder" className="toolkit-row-holder">
                    <h2 className="toolkit-bold">Aidez-nous à passer le mot! </h2>
                    <div className="resource-text">
                        <span className="toolkit-bold">Téléchargez</span> les produits de communication officiels ci-dessous pour promouvoir gcéchange dans vos ministères et réseaux : 
                    </div>
                    <Row>
                        <Col>
                            <div className="toolkit-accordion">
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="comms-plan" className="toolkit-accordion-button d-flex" ><div className="mr-3"><span class="chevron right"></span></div><div>Plan de communication</div></Button>
                                    <UncontrolledCollapse toggler="#comms-plan">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        community page setup
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/community%20page%20setup%20FR.pdf?sp=r&st=2021-08-25T12:49:23Z&se=2026-08-25T20:49:23Z&spr=https&sv=2020-08-04&sr=b&sig=aXayX1ZzPkQn3mLTHfvgUdLDHU%2B7tct0XV5LA8i29W4%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        GCTools to gcxchange
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/GCTools%20to%20gcxchange%20FR.pdf?sp=r&st=2021-08-25T13:35:55Z&se=2026-08-25T21:35:55Z&spr=https&sv=2020-08-04&sr=b&sig=CImL9IkKlHZNtcRFNZN4OF2QsmPUNaLCxPUugAKjQEc%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="comms-products" className="toolkit-accordion-button d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>CProduits de communication</div></Button>
                                    <UncontrolledCollapse toggler="#comms-products">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        gcxchange communications implementation plan 
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20communications%20implementation%20plan%20FR.pdf?sp=r&st=2021-08-25T13:38:20Z&se=2026-08-25T21:38:20Z&spr=https&sv=2020-08-04&sr=b&sig=O3CFcwVWDxpK901OD2sYf4lSF02zNXE%2FfPLKkCz8Gn8%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange onboarding steps
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20onboarding%20steps%20FR.pdf?sp=r&st=2021-08-25T13:38:53Z&se=2026-08-25T21:38:53Z&spr=https&sv=2020-08-04&sr=b&sig=D7NTI4Aen%2BiRecKxLgJi%2BP4Q63IVgzKS%2FwTrF5oPHPQ%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="design-branding" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Conception et image de marque</div></Button>
                                    <UncontrolledCollapse toggler="#design-branding">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        gcxchange styleguide
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20styleguide%20FR.jpg?sp=r&st=2021-08-25T13:39:23Z&se=2026-08-25T21:39:23Z&spr=https&sv=2020-08-04&sr=b&sig=pfb%2B2U8rAYFbpufSsQY6SKoYjQvsZjw9lIHbOrlUcYo%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_books
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_books_BIL.png?sp=r&st=2021-08-25T13:40:08Z&se=2026-08-25T21:40:08Z&spr=https&sv=2020-08-04&sr=b&sig=20Ymg7f9M1%2Br5szHastl9cMvTItYB7YqhDlrW4kBO94%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_contact 
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_contact_BIL.png?sp=r&st=2021-08-25T13:40:22Z&se=2026-08-25T21:40:22Z&spr=https&sv=2020-08-04&sr=b&sig=CzK496lpKejTtFVerorHLJhCGFZHBh0wpOTFl%2BgU4Vw%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_contact2
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_contact2_BIL.png?sp=r&st=2021-08-25T13:40:34Z&se=2026-08-25T21:40:34Z&spr=https&sv=2020-08-04&sr=b&sig=ZOsmrXr%2BfCZoIzRvvxxb%2FTZTSR0xIUuO1JJ2w2fsXQI%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_devices
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_devices_BIL.png?sp=r&st=2021-08-25T13:41:09Z&se=2026-08-25T21:41:09Z&spr=https&sv=2020-08-04&sr=b&sig=IIylNR7CQ3GQjr8s6ia6UVgzqKmBdkqS0H4ZQHeyWAQ%3D" )}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_discussion
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_discussion_BIL.png?sp=r&st=2021-08-25T13:41:26Z&se=2026-08-25T21:41:26Z&spr=https&sv=2020-08-04&sr=b&sig=9M%2BDGb9GZTD%2BTqmOXDYHnjlGFXWc1aLyZUdF5LJG%2BoE%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_laptop
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_laptop_BIL.png?sp=r&st=2021-08-25T13:41:48Z&se=2026-08-25T21:41:48Z&spr=https&sv=2020-08-04&sr=b&sig=KSBd4TJF130XZCLT0wZG8YsdhX3P3e1%2FRPBJnyVHmf0%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_lookingfor
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_lookingfor_BIL.png?sp=r&st=2021-08-25T13:42:01Z&se=2026-08-25T21:42:01Z&spr=https&sv=2020-08-04&sr=b&sig=Zf950hTiR3sgjJ1yA74Qc2k%2BDbJd9WrW9xhBeY3afDU%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_orgchart
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_orgchart_BIL.png?sp=r&st=2021-08-25T13:42:15Z&se=2026-08-25T21:42:15Z&spr=https&sv=2020-08-04&sr=b&sig=032LrETnDRXgVSX%2Fdr7tdIx6rO99sHoarBO4mZy8OAg%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_writting
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_writting_BIL.png?sp=r&st=2021-08-25T13:42:30Z&se=2026-08-25T21:42:30Z&spr=https&sv=2020-08-04&sr=b&sig=S9V7RvUNTp5hmq%2BUpIGhar%2Frcqk9KCiGpBl000H21m0%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="social-media" className="toolkit-accordion-button d-flex" ><div className="mr-3"><span class="chevron right"></span></div><div>Médias sociaux</div></Button>
                                    <UncontrolledCollapse toggler="#social-media">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        gcxchange Twitter generic video
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20Twitter%20generic%20video%20FR.mp4?sp=r&st=2021-08-25T13:39:55Z&se=2026-08-25T21:39:55Z&spr=https&sv=2020-08-04&sr=b&sig=2bd7zyXQNSeb7WaxLwTkH5mxhOIUD7TwbTjBWhP%2BgTk%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                            </div>
                            
                        </Col>
                        <Col>
                            <div className="toolkit-accordion">
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="promotional-videos" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Vidéos promotionnelles </div></Button>
                                    <UncontrolledCollapse toggler="#promotional-videos">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Video - gcxchange teaser
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/Video%20-%20gcxchange%20teaser%20FR.mp4?sp=r&st=2021-08-25T13:43:09Z&se=2026-08-25T21:43:09Z&spr=https&sv=2020-08-04&sr=b&sig=3fRs6oZ7ow5MFcd2s5W3Ft4sTbbPxaJRocLP1vXTN0U%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="depart-calendar" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div>Calendrier d’intégration des ministères<div></div></Button>
                                    <UncontrolledCollapse toggler="#depart-calendar">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Department Onboarding Calendar
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={downloadlink("https://sttoolkitprodstd.blob.core.windows.net/gcxchange/Department%20Onboarding%20Calendar%20BIL.xlsx?sp=r&st=2021-08-25T12:55:06Z&se=2026-08-25T20:55:06Z&spr=https&sv=2020-08-04&sr=b&sig=KKOUL0sJ7kCbodQfQeb7VAF1UdyFmErpNHJzwC8RLqU%3D")}
                                                            color="link"
                                                        >
                                                            Télécharger
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="backgrounder" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div>Présentation du document d’information<div></div></Button>
                                    <UncontrolledCollapse toggler="#backgrounder">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Télécharger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        TEST
                                                    </td>
                                                    <td>
                                                        TEST Télécharger!
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>    
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <a href="#" className="btn btn-primary" Télécharger>Tout Télécharger</a>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Pas encore inscrit?</h2>
                    <div className="toolkit-text-holder">
                        <a href="/" className="btn btn-primary btn-lg">Inscrivez-vouse maintenant!</a>
                    </div>
                </div>
            </Row>
        </Container>
    </main>
    <footer>
      <Container>
        <Row>
          <Col md="12" className="footer-imgs">
            <div className="d-flex align-items-center ">
              <img className="goc-canada" src={govCandaEn} alt="" />
              <img className="ml-auto goc-canada" src={Canada} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
)

export default ToolkitFr;
