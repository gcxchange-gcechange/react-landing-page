import React from 'react'
import { Container, Row, Col, UncontrolledCollapse, Button } from 'reactstrap';
import gcxLogo from '../assets/gcx-gce.png'

const ToolkitEn = () => (
    <div>
    <main className="toolkit-container">
        <Container fluid>
            <Row className="bg-toolkit-head">
                <div className="toolkit-row-holder">
                    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
                    <h1 className="">gc<span className="toolkit-highlight">x</span>change toolkit</h1>
                    <div>
                        <a href="#resource-holder" className="btn btn-primary btn-lg mt-3">I am an anchor that looks like a button</a>
                    </div> 
                </div>  
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">What is gcxchange</h2>
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
                                <li>Collaborate with other employees and with the outside world using Microsoft Teams</li>
                                <li>
                                    Co-author documents with other public servants from other departments
                                </li>
                                <li>Create or join cross-departmental communities</li>
                                <li>Have group discussions/direct messages with colleagues across the GC</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Thing 1</li>
                                <li>Thing 1</li>
                                <li>Thing 1</li>
                                <li>Thing 1</li>
                            </ul>
                        </Col>    
                    </Row>
                </div>
            </Row>
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">When can I get on gc<span className="toolkit-highlight">x</span>change?</h2>
                    <div className="toolkit-text-holder">
                        <span className="toolkit-bold">Good news! Onboarding to Gcxchange has already begun.</span> Departments and agencies are being onboarded according to this strategically designed timeline.
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">What about the GCTools?</h2>
                    <div className="toolkit-text-holder">
                        <span className="toolkit-bold">Yes, the rumours are true. Gcxchange will replace all of the GCTools,</span> including GCintranet, GCconnex, GCdirectory, GCpedia, and eventually, GCcollab.
                    </div>
                </div>
            </Row>
            <hr className="toolkit-hr" />
            <Row>
                <div className="toolkit-row-holder">
                    <h2 className="toolkit-display-header">Communications products</h2>
                    <div className="toolkit-text-holder">
                        We want to see Gcxchange become the <span className="toolkit-bold">official digital workspace for all GC employees,</span> where we can seamlessly connect no matter what department or agency we’re from!
                    </div>
                    <div className="toolkit-text-holder">
                        We need <span className="toolkit-bold">your</span> help to make this vision a reality!
                    </div>
                </div>
            </Row>
            <Row>
                <div id="resource-holder" className="toolkit-row-holder">
                    <h2 className="toolkit-bold">Help spread the word!</h2>
                    <div>
                        <span className="toolkit-bold">Download</span> the official communications products below to help promote gcxchange within your departments and networks:
                    </div>
                    <Row>
                        <Col>
                            <div className="toolkit-accordion">
                                <div className="toolkit-accordion-item">
                                    <Button id="comms-plan" className="toolkit-accordion-button">Communications plan</Button>
                                    <UncontrolledCollapse toggler="#comms-plan">
                                        Hello?!
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item">
                                    <Button id="comms-products" className="toolkit-accordion-button">Communications products</Button>
                                    <UncontrolledCollapse toggler="#comms-products">
                                        Hello again?!
                                    </UncontrolledCollapse>  
                                </div>
                                <div className="toolkit-accordion-item" className="toolkit-accordion-button">
                                    <Button id="design-branding">Design and branding</Button>
                                    <UncontrolledCollapse toggler="#design-branding">
                                        Hello again?!
                                    </UncontrolledCollapse>  
                                </div>    
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Button id="promotional-videos">Promotional videos</Button>
                                <UncontrolledCollapse toggler="#promotional-videos">
                                    Hello?!
                                </UncontrolledCollapse>  
                            </div>
                            <div>
                                <Button id="depart-calendar">Departmental onboarding calendar</Button>
                                <UncontrolledCollapse toggler="#depart-calendar">
                                    Hello again?!
                                </UncontrolledCollapse>  
                            </div>
                            <div>
                                <Button id="backgrounder">Backgrounder presentation</Button>
                                <UncontrolledCollapse toggler="#backgrounder">
                                    Hello again?!
                                </UncontrolledCollapse>  
                            </div>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    </main>
    <footer>
        Footer here!
    </footer>
    </div>
)

export default ToolkitEn;