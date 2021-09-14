import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button, Table } from 'reactstrap';
import FileDownload from 'js-file-download';
import Axios from 'axios';
import gcxLogo from '../assets/gcx-gce.png';
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const downloadlink = (url) => {
    const title = url.split('net/gcxchange/').pop().split("?")[0];
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
    <main lang="fr" className="toolkit-container">
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
                                                        Plan de communication
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/communication%20plan%20_%20plan%20de%20communication-20210901T151658Z-001.zip?sp=r&st=2021-09-01T17:40:02Z&se=2025-09-02T01:40:02Z&spr=https&sv=2020-08-04&sr=b&sig=A%2FITnZndZ6RPJzbgHxj6oCDkD8tyD7pdua4l8c6UIRM%3D">Télécharger <span className="sr-only">Plan de communication</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="comms-products" className="toolkit-accordion-button d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Documents d'accompagnement</div></Button>
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
                                                        Documents d'accompagnement
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/communications%20products%20_%20produits%20de%20communication-20210901T152222Z-001.zip?sp=r&st=2021-09-01T17:59:27Z&se=2025-09-02T01:59:27Z&spr=https&sv=2020-08-04&sr=b&sig=dAhRNGcQJyppSsXrPFC2%2FBYxHWBqmBvonSEKNwOzF4o%3D">Télécharger <span className="sr-only">Documents d'accompagnement</span></a>
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
                                                        Conception et image de marque
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/design%20%26%20branding%20_%20design%20et%20image%20de%20marque%20-20210901T152450Z-001.zip?sp=r&st=2021-09-01T17:39:02Z&se=2025-09-02T01:39:02Z&spr=https&sv=2020-08-04&sr=b&sig=hc8JoePEUGQC1w6GQz3xxWMN3ektcgbrn34AFwisFjo%3D">Télécharger <span className="sr-only">Conception et image de marque</span></a>
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
                                                        Médias sociaux
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/social%20media%20_%20m%C3%A9dias%20sociaux%20-20210901T152523Z-001.zip?sp=r&st=2021-09-01T17:42:41Z&se=2025-09-02T01:42:41Z&spr=https&sv=2020-08-04&sr=b&sig=BdkVmSPmOVanCgpVVSWFajJfFKbmFX008ZnnUMCz%2BUc%3D">Télécharger <span className="sr-only">Médias sociaux</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
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
                                                        Vidéos promotionnelles
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/promotional%20videos%20_%20vid%C3%A9os%20promotionnelles%20-20210901T152520Z-001.zip?sp=r&st=2021-09-01T17:41:53Z&se=2025-09-02T01:41:53Z&spr=https&sv=2020-08-04&sr=b&sig=yujfNxfflcOlsEOi%2FrdVkxffBwWrePn5MrWJ2dQJvTo%3D">Télécharger <span className="sr-only">Vidéos promotionnelles</span></a>
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
                                                        Embarquement des ministères
                                                    </td>
                                                    <td>
                                                            <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/department%20onboarding%20_%20embarquement%20des%20minist%C3%A8res-20210901T152433Z-001.zip?sp=r&st=2021-09-01T17:38:17Z&se=2025-09-02T01:38:17Z&spr=https&sv=2020-08-04&sr=b&sig=FAk%2BsWw8zLFEWNlFWaEc2SkhjgVnmgbTUiMRlEIoOnY%3D">Télécharger <span className="sr-only">Embarquement des ministères</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>   
                            </div>
                        </Col>
                    </Row>
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
