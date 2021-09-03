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

const ToolkitEn = () => (
    <div>
    <main lang="en" className="toolkit-container">
        <Container fluid>
            <Row className="bg-toolkit-head">
                <div className="head-container">
                    <nav className="d-flex lang-select">
                        <a className="ml-auto" href="/fr/toolkit">Français</a>
                    </nav>
                    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
                    <hr />
                    <h1>gc<span className="toolkit-highlight">x</span>change toolkit</h1>
                    <div>
                        <a href="#resource-holder" className="btn btn-primary btn-lg mt-3">Get communications products</a>
                    </div> 
                </div>  
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">What is gc<span className="toolkit-highlight">x</span>change?</h2>
                    <div className="toolkit-text-holder">
                    gc<span className="toolkit-highlight">x</span>change = a modern platform that will keep employees <span className="toolkit-bold">up to date</span> with what’s happening <span className="toolkit-bold">across the GC</span> and allow them to <span className="toolkit-bold">collaborate</span> with people beyond their organization... <span className="toolkit-bold">all in one place</span>.
                    </div>
                </div>
            </Row>
            <Row className="bg-toolkit-highlight">
                <div className="toolkit-info-box">
                    <h2>In <span className="toolkit-bold">one spot</span> you'll be able to:</h2>
                    <Row>
                        <Col>
                            <ul>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Collaborate with other employees</span> and with the outside world using Microsoft Teams
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>    
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Co-author documents</span> with other public servants from other departments    
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Create or join <span className="toolkit-bold">cross-departmental communities</span>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        <span className="toolkit-bold">Have group discussions/direct messages</span> with colleagues across the GC
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
                                        <span className="toolkit-bold">View departmental and GC-wide</span> communications    
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        View content and information that is <span className="toolkit-bold">personalized for you</span>    
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Access <span className="toolkit-bold">GC-wide corporate tools</span> like pay and careers    
                                    </div> 
                                </li>
                                <li className="d-flex">
                                    <div class="mr-3 mt-3">
                                        <span class="chevron right"></span>
                                    </div>
                                    <div>
                                        Access your <span className="toolkit-bold">department’s current intranet</span> easily through gcxchange    
                                    </div>
                                </li>
                            </ul>
                        </Col>    
                    </Row>
                </div>
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">When can I get on gc<span className="toolkit-highlight">x</span>change?</h2>
                    <div className="toolkit-text-holder">
                        <span className="toolkit-bold">Good news! Onboarding to gcxchange has already begun.</span> Departments and agencies are being onboarded according to this strategically designed timeline.
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">What about the GCTools?</h2>
                    <div className="toolkit-text-holder mb-3">
                        <span className="toolkit-bold">Yes, the rumours are true. gcxchange will replace all of the GCTools,</span> including GCintranet, GCconnex, GCdirectory, GCpedia, and eventually, GCcollab.
                    </div>
                    <div className="toolkit-text-holder">
                        But have no fear—the tools will be phased out slowly over the next two years and will continue to run until all public servants have access to gcxchange. Plenty of time for users to re-visit existing content and bring it over to gcxchange as they see fit. It’s an opportunity to start fresh on a blank canvas!
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Communications products</h2>
                    <div className="toolkit-text-holder">
                        We want to see gcxchange become the <span className="toolkit-bold">official digital workspace for all GC employees,</span> where we can seamlessly connect no matter what department or agency we’re from!
                    </div>
                    <div className="toolkit-text-holder">
                        We need <span className="toolkit-bold">your</span> help to make this vision a reality!
                    </div>
                </div>
            </Row>
            <Row className="resource-row">
                <div id="resource-holder" className="toolkit-row-holder">
                    <h2 className="toolkit-bold">Help spread the word!</h2>
                    <div className="resource-text">
                        <span className="toolkit-bold">Download</span> the official communications products below to help promote gcxchange within your departments and networks:
                    </div>
                    <Row>
                        <Col>
                            <div className="toolkit-accordion">
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="comms-plan" className="toolkit-accordion-button d-flex" ><div className="mr-3"><span class="chevron right"></span></div><div>Communications plan</div></Button>
                                    <UncontrolledCollapse toggler="#comms-plan">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Communications plan
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/communication%20plan%20_%20plan%20de%20communication-20210901T151658Z-001.zip?sp=r&st=2021-09-01T17:40:02Z&se=2025-09-02T01:40:02Z&spr=https&sv=2020-08-04&sr=b&sig=A%2FITnZndZ6RPJzbgHxj6oCDkD8tyD7pdua4l8c6UIRM%3D">Download <span className="sr-only">Communications plan</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="comms-products" className="toolkit-accordion-button d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Communications products</div></Button>
                                    <UncontrolledCollapse toggler="#comms-products">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Communications products
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/communications%20products%20_%20produits%20de%20communication-20210901T152222Z-001.zip?sp=r&st=2021-09-01T17:59:27Z&se=2025-09-02T01:59:27Z&spr=https&sv=2020-08-04&sr=b&sig=dAhRNGcQJyppSsXrPFC2%2FBYxHWBqmBvonSEKNwOzF4o%3D">Download <span className="sr-only">Communications products</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="design-branding" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Design and branding</div></Button>
                                    <UncontrolledCollapse toggler="#design-branding">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Design and branding
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/design%20%26%20branding%20_%20design%20et%20image%20de%20marque%20-20210901T152450Z-001.zip?sp=r&st=2021-09-01T17:39:02Z&se=2025-09-02T01:39:02Z&spr=https&sv=2020-08-04&sr=b&sig=hc8JoePEUGQC1w6GQz3xxWMN3ektcgbrn34AFwisFjo%3D">Download <span className="sr-only">Design and branding</span></a>
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
                                    <Button color="link" id="social-media" className="toolkit-accordion-button d-flex" ><div className="mr-3"><span class="chevron right"></span></div><div>Social Media</div></Button>
                                    <UncontrolledCollapse toggler="#social-media">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Social Media
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/social%20media%20_%20m%C3%A9dias%20sociaux%20-20210901T152523Z-001.zip?sp=r&st=2021-09-01T17:42:41Z&se=2025-09-02T01:42:41Z&spr=https&sv=2020-08-04&sr=b&sig=BdkVmSPmOVanCgpVVSWFajJfFKbmFX008ZnnUMCz%2BUc%3D">Download <span className="sr-only">Social Media</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="promotional-videos" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div><div>Promotional videos</div></Button>
                                    <UncontrolledCollapse toggler="#promotional-videos">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Promotional videos
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/promotional%20videos%20_%20vid%C3%A9os%20promotionnelles%20-20210901T152520Z-001.zip?sp=r&st=2021-09-01T17:41:53Z&se=2025-09-02T01:41:53Z&spr=https&sv=2020-08-04&sr=b&sig=yujfNxfflcOlsEOi%2FrdVkxffBwWrePn5MrWJ2dQJvTo%3D">Download <span className="sr-only">Promotional videos</span></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="depart-calendar" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div>Departmental onboarding calendar<div></div></Button>
                                    <UncontrolledCollapse toggler="#depart-calendar">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>File Title</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Department Onboarding Calendar
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/department%20onboarding%20_%20embarquement%20des%20minist%C3%A8res-20210901T152433Z-001.zip?sp=r&st=2021-09-01T17:38:17Z&se=2025-09-02T01:38:17Z&spr=https&sv=2020-08-04&sr=b&sig=FAk%2BsWw8zLFEWNlFWaEc2SkhjgVnmgbTUiMRlEIoOnY%3D">Download <span className="sr-only">Department Onboarding Calendar</span></a>
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
                    <h2 className="toolkit-display-header">Haven't Registered yet?</h2>
                    <div className="toolkit-text-holder">
                        <a href="/" className="btn btn-primary btn-lg"> Register now!</a>
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

export default ToolkitEn;
