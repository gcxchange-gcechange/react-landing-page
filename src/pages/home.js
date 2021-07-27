import React, {Fragment} from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Collapse } from 'reactstrap';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Checkbox, Stack } from '@fluentui/react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";

// import { sp } from "@pnp/sp/presets/all";

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import logo from '../assets/gcx-gce.png'
import gcxLogo from '../assets/img/gcx-eng-logo.png'
import gcxLogoFR from '../assets/img/gcx-fr-logo.png'

import Canada from '../assets/img/FIP_BIL_couleurs-04.png';
import govCandaEn from '../assets/img/FIP_BIL_couleurs-03.png';
import govCanadaFr from '../assets/img/FIP_BIL_couleurs-05.png';
import heroImage from '../assets/img/hero-img.png';

import i18n from '../i18n/lang';
import { getDepartTest, getDomains, sendUser } from '../services/DepartmentService';

initializeIcons();
const iconProps = { iconName: 'Accept' };

function capitalizeFirstLetter(string) {
  var caps = string[0].toUpperCase() + string.slice(1);
  var removeNums = caps.replace(/[0-9]/g, '');
  return removeNums;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isInitLoad: true, // Change this to true!
      emailInput: '',
      yesCloudEmail: false,
      cloudEmail: '',
      department: '',
      departList: [{key: '00007', text: 'TESTING'},],
      domainList: [{key: '00007', dom: 'test.gc.ca'},],
      isEmailDomainValid: false,
      isCloudDomainValid: false,
      isValid: false,
    };
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onSubmit () {
    let emailWork = this.state.emailInput;
    let emailCloud = (this.state.cloudEmail ? this.state.cloudEmail : this.state.emailInput);
    let department = this.state.department.key;
    let splitEmail = emailWork.split('@');
    let firstName = capitalizeFirstLetter(splitEmail[0].split('.')[0]);
    let lastName = capitalizeFirstLetter(splitEmail[0].split('.')[1]);
    sendUser({
      EmailWork: emailWork,
      EmailCloud: emailCloud,
      FirstName: firstName,
      LastName: lastName,
      Department: department,
    }).then(data => {
      if(data) {
        if(data.status === 200){
          this.setState({
            isValid: true,
          })
        } else {
          console.log('Something went wrong');
        }
      }
    })
  }

  componentDidMount () {
    // Grab the sharepoint list here on mount
    // initialize department lists
    let departs = [];
    let domains = [];
    getDepartTest().then(e => {
      if(e) {
        e.map((field) => {
          departs.push({
            key: field.fields.RG_x0020_Code,
            text: field.fields.Legal_x0020_Title,
          })
        })
      }
      this.setState({
        departList: departs,
      })
    })
    // initialize domain list
    getDomains().then(d => {
      if(d) {
        d.map((domain) => {
          domains.push({
            key: domain.fields.RG_x0020_Code,
            dom: domain.fields.GoCDomain,
          })
        })
      }
      console.log(domains);
      this.setState({
        domainList: domains,
        isInitLoad: false,
      })
    })
    console.log('MOUNTED!');
    // on success set initload state false
  }

  checkEmail (email, mailType) {
    if (email.includes('@')) {
      // console.log('I am going to start checking')
      let domain = email.split('@');
      // compare email domain to our list object
      if(this.state.domainList.length != 0) {
        this.state.domainList.map((domState) => {
          if(domState.dom === domain[1]) {
            if(mailType === 'email'){
              this.setState({
                department: {key: domState.key},
                isEmailDomainValid: true,
                emailInput: email,
              })
            } else {
              this.setState({
                isCloudDomainValid: true,
                cloudEmail: email,
              })
            }
          } /* else {
            if(mailType === 'email'){
              console.log('NOPE');
              this.setState({
                isEmailDomainValid: false,
              })
            } else {
              this.setState({
                isCloudDomainValid: false,
              })
            }
            
          } */
        })
      }
    }
  }

  render() {

    var lang = i18n[this.props.lang];

    document.documentElement.lang = this.props.lang;

    return (
      <Fragment>
        <Helmet>
          <title>{lang.title}</title>
        </Helmet>
        <main>
          <section className="cta-hero">
            <Container>
              <Row>
                <Col>
                  <nav className="d-flex lang-select">
                    <h1 className="sr-only">{lang.title}</h1>
                    {this.props.lang === "en-us" ? <Link className="ml-auto" to="/accueil" lang="fr-ca">Français</Link> : <Link className="ml-auto" to="/home" lang="en-us">English</Link> }
                  </nav>
                  <div className="form-holder">
                    <Row className="row-holder">
                      <Col md="6" className="info-holder">
                        <img className="goc-canada" src={govCandaEn} alt={lang.footer.goc} />
                        <div className="info-content">
                          <img className="info-img" src={heroImage} alt="" />
                          <h1 className="info-header">gc<span className="info-highlight">x</span>change is here</h1>
                          <p className="info-sub">Say hello to the Government of Canada's new digital workspace. With one simple sign-on you can:</p>
                          <ul className="info-list">
                            <li><span className="info-highlight">collaborate</span> with public servants</li>
                            <li><span className="info-highlight">stay in touch</span> with what</li>
                            <li><span className="info-highlight">access information</span> that matters</li>
                            <li><span className="info-highlight">share</span> your content with the GC community</li>
                          </ul> 
                        </div>
                      </Col>
                      <Col md="6" className="form-padding">
                      <img className="logo-img" src={logo} alt="gcéchange" />
                      {this.state.isInitLoad ? <Spinner size={SpinnerSize.large} className="form-padding" label="Loading" ariaLive="assertive" /> :
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            this.onSubmit()
                          }}  
                        >
                          <div className="form-title">
                            Resgister
                          </div>
                          <TextField
                            required
                            label="Departmental email address"
                            onChange={(e) => {
                              this.checkEmail(e.target.value, 'email');
                              // console.log(e.target.value);
                            }}
                            iconProps={this.state.isEmailDomainValid && iconProps}
                          />
                          {this.state.isEmailDomainValid ? 
                            <span className="input-helper-text valid">
                              Valid email domain!
                            </span> :
                            <span className="input-helper-text">
                              Please enter a valid gc email
                            </span>
                          }
                          <Checkbox
                            label="Is this email is also my cloud ID"
                            defaultChecked
                            onChange={this.toggle}
                            className="input-padding"
                          />
                          <Collapse isOpen={this.state.isOpen}>
                            <TextField
                              label="Cloud ID Email Address"
                              onChange={(e) => {
                                this.checkEmail(e.target.value, 'cloud');
                                // console.log(e.target.value);
                              }}
                              iconProps={this.state.isCloudDomainValid && iconProps}
                            />
                            {this.state.isCloudDomainValid ? 
                            <span className="input-helper-text valid">
                              Valid email domain!
                            </span> :
                            <span className="input-helper-text">
                              Please enter a valid gc email
                            </span>
                          }
                          </Collapse>
                          <Dropdown
                            required
                            label="Department"
                            options={this.state.departList}
                            onChange={(e, o) => {
                              // Set the department state
                              console.log(o);
                              this.setState({
                                department: o,
                              });
                              console.log(this.state.department);
                            }}
                            selectedKey={this.state.department ? this.state.department.key : undefined}
                          />
                          <input className="input-padding submit-btn" disabled={!this.state.isEmailDomainValid} type="submit" value="Register" />
                          <div className="help-holder">
                            Having issues? <a href="#">Contact our help desk</a>
                          </div>
                        </Form>
                      }
                      {this.state.isValid && <Redirect to="/process" />}
                      <img className="ml-auto canada-fip" src={Canada} alt={lang.footer.symbol} />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>      
      </Fragment>
    );
  }
}

export default Home;
