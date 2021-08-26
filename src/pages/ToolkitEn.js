import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button, Table } from 'reactstrap';
import gcxLogo from '../assets/gcx-gce.png';
import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

const ToolkitEn = () => (
    <div>
    <main className="toolkit-container">
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
                                                        Community page setup EN
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/community%20page%20setup%20EN.pdf?sp=r&st=2021-08-25T12:39:08Z&se=2026-08-25T20:39:08Z&spr=https&sv=2020-08-04&sr=b&sig=%2BXBdWD7nNUtDmpq7XSGk7%2FNusU6LtOR3I9S%2BFD2lIrQ%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        GCTools to gcxchange EN
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/GCTools%20to%20gcxchange%20EN.pdf?sp=r&st=2021-08-25T13:35:20Z&se=2026-08-25T21:35:20Z&spr=https&sv=2020-08-04&sr=b&sig=YjzelrVIAt%2BbOmM5LnLmBC7XBmd1JXPTZPyLOlhEXnY%3D" download>Download</a>
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
                                                        gcxchange communications implementation plan EN 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20communications%20implementation%20plan%20EN.pdf?sp=r&st=2021-08-25T13:38:02Z&se=2026-08-25T21:38:02Z&spr=https&sv=2020-08-04&sr=b&sig=aRbbrgftbFM7j4exODN2PYaqFQTPXECTGqrKbtyX45w%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange onboarding steps EN 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20onboarding%20steps%20EN.pdf?sp=r&st=2021-08-25T13:38:37Z&se=2026-08-25T21:38:37Z&spr=https&sv=2020-08-04&sr=b&sig=DUCPTKnmXQ3veg028g6zuYBgVmoD77Xwu8RlLsHG4lk%3D" download>Download</a>
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
                                                        gcxchange styleguide EN
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20styleguide%20EN.jpg?sp=r&st=2021-08-25T13:39:08Z&se=2026-08-25T21:39:08Z&spr=https&sv=2020-08-04&sr=b&sig=UzY4lIcq%2B4dyqXBwruBLQejUnXPi8O7SyIjumAQ3kow%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_books_BIL
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_books_BIL.png?sp=r&st=2021-08-25T13:40:08Z&se=2026-08-25T21:40:08Z&spr=https&sv=2020-08-04&sr=b&sig=20Ymg7f9M1%2Br5szHastl9cMvTItYB7YqhDlrW4kBO94%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_contact_BIL 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_contact_BIL.png?sp=r&st=2021-08-25T13:40:22Z&se=2026-08-25T21:40:22Z&spr=https&sv=2020-08-04&sr=b&sig=CzK496lpKejTtFVerorHLJhCGFZHBh0wpOTFl%2BgU4Vw%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_contact2_BIL
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_contact2_BIL.png?sp=r&st=2021-08-25T13:40:34Z&se=2026-08-25T21:40:34Z&spr=https&sv=2020-08-04&sr=b&sig=ZOsmrXr%2BfCZoIzRvvxxb%2FTZTSR0xIUuO1JJ2w2fsXQI%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_devices_BIL 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_devices_BIL.png?sp=r&st=2021-08-25T13:41:09Z&se=2026-08-25T21:41:09Z&spr=https&sv=2020-08-04&sr=b&sig=IIylNR7CQ3GQjr8s6ia6UVgzqKmBdkqS0H4ZQHeyWAQ%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_discussion_BIL
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_discussion_BIL.png?sp=r&st=2021-08-25T13:41:26Z&se=2026-08-25T21:41:26Z&spr=https&sv=2020-08-04&sr=b&sig=9M%2BDGb9GZTD%2BTqmOXDYHnjlGFXWc1aLyZUdF5LJG%2BoE%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_laptop_BIL 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_laptop_BIL.png?sp=r&st=2021-08-25T13:41:48Z&se=2026-08-25T21:41:48Z&spr=https&sv=2020-08-04&sr=b&sig=KSBd4TJF130XZCLT0wZG8YsdhX3P3e1%2FRPBJnyVHmf0%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_lookingfor_BIL
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_lookingfor_BIL.png?sp=r&st=2021-08-25T13:42:01Z&se=2026-08-25T21:42:01Z&spr=https&sv=2020-08-04&sr=b&sig=Zf950hTiR3sgjJ1yA74Qc2k%2BDbJd9WrW9xhBeY3afDU%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_orgchart_BIL
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_orgchart_BIL.png?sp=r&st=2021-08-25T13:42:15Z&se=2026-08-25T21:42:15Z&spr=https&sv=2020-08-04&sr=b&sig=032LrETnDRXgVSX%2Fdr7tdIx6rO99sHoarBO4mZy8OAg%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        gcxchange_illustration_writting_BIL 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange_illustration_writting_BIL.png?sp=r&st=2021-08-25T13:42:30Z&se=2026-08-25T21:42:30Z&spr=https&sv=2020-08-04&sr=b&sig=S9V7RvUNTp5hmq%2BUpIGhar%2Frcqk9KCiGpBl000H21m0%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
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
                                                        gcxchange Twitter generic video EN 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/gcxchange%20Twitter%20generic%20video%20EN.mp4?sp=r&st=2021-08-25T13:39:38Z&se=2026-08-25T21:39:38Z&spr=https&sv=2020-08-04&sr=b&sig=jhUQnUT52YgI3pJWRiBulLqbQxe8JXvA6xVTBeghBvQ%3D" download>Download</a>
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
                                                        Video - gcxchange promo video EN
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/Video%20-%20gcxchange%20promo%20video%20EN.mp4?sp=r&st=2021-08-25T13:42:45Z&se=2026-08-25T21:42:45Z&spr=https&sv=2020-08-04&sr=b&sig=MXcpQ8l4PMyDUMFuwxKo4egqNMoQodanm1i3ZInJzOU%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Video - gcxchange teaser EN
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/Video%20-%20gcxchange%20teaser%20EN.mp4?sp=r&st=2021-08-25T13:42:57Z&se=2026-08-25T21:42:57Z&spr=https&sv=2020-08-04&sr=b&sig=QSEVVfY%2F8%2FGYTdifY3OW1hv0OKYySDrqXUaS%2Bob6%2FX8%3D" download>Download</a>
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
                                                        Department Onboarding Calendar BIL 
                                                    </td>
                                                    <td>
                                                        <a href="https://sttoolkitprodstd.blob.core.windows.net/gcxchange/Department%20Onboarding%20Calendar%20BIL.xlsx?sp=r&st=2021-08-25T12:55:06Z&se=2026-08-25T20:55:06Z&spr=https&sv=2020-08-04&sr=b&sig=KKOUL0sJ7kCbodQfQeb7VAF1UdyFmErpNHJzwC8RLqU%3D" download>Download</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button color="link" id="backgrounder" className="d-flex"><div className="mr-3"><span class="chevron right mr-3"></span></div>Backgrounder presentation<div></div></Button>
                                    <UncontrolledCollapse toggler="#backgrounder">
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
                                                        TEST
                                                    </td>
                                                    <td>
                                                        TEST DOWNLOAD!
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
                        <a href="#" className="btn btn-primary">Download All</a>
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
