import React, {Fragment} from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Collapse } from 'reactstrap';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Checkbox, Stack } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

// import { sp } from "@pnp/sp/presets/all";

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import logo from '../assets/gcx-gce.png'
import gcxLogo from '../assets/img/gcx-eng-logo.png'
import gcxLogoFR from '../assets/img/gcx-fr-logo.png'

import stepOneEn from '../assets/img/steps1_EN.png'
import stepTwoEn from '../assets/img/steps2_EN.png'
import stepThreeEn from '../assets/img/steps3_EN.png'

import stepOneFr from '../assets/img/steps1_FR.png'
import stepTwoFr from '../assets/img/steps2_FR.png'
import stepThreeFr from '../assets/img/steps3_FR.png'

import teaserVideo from '../assets/video/Gcxchange teaser 6_EN.mp4';
import teaserVideoVTT from '../assets/video/WEBVTT.vtt';
import teaserVideoPoster from '../assets/video/videoPosterEn.jpg';

import teaserVideoFR from '../assets/video/Gcxchange teaser 7_FR.mp4';
import teaserVideoVTTFR from '../assets/video/WEBVTT - FR.vtt';
import teaserVideoPosterFR from '../assets/video/videoPosterFr.jpg';

import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

import i18n from '../i18n/lang';
import { getDepartTest, getDomains } from '../services/DepartmentService';

initializeIcons();
/*
(async () => {
  sp.setup({
    sp: {
      headers: {
        Accept: "application/json;odata=verbose",
      },
      baseUrl: ""
    },
  });
  
  const w = await sp.web.get();
  console.log(w);
})();
*/
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isInitLoad: true,
      emailInput: '',
      yesCloudEmail: false,
      cloudEmail: '',
      department: '',
      departList: [],
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
    console.log('SUBMIT FUNCTION');
  }

  componentDidMount () {
    // Grab the sharepoint list here on mount
    // initialize department lists
    let departs = [];
    getDepartTest().then(e => {
      if(e) {
        e.map((field) => {
          departs.push({
            key: field.fields.RG_x0020_Code,
            text: field.fields.Legal_x0020_Title,
          })
        })
      }
      console.log(departs);
      this.setState({
        departList: departs,
      })
    })
    // initialize domain list
    getDomains().then(d => {
      console.log(d);
    })
    console.log('MOUNTED!');
    // on success set initload state false
  }

  checkEmail (email) {
    if (email.includes('@')) {
      // console.log('I am going to start checking')
      let domain = email.split('@');
      console.log(domain[1]);
      // compare email domain to our list object

      // get domain and update department value?
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
                      <Col md="5">
                      <img className="logo-img" src={logo} alt="gcéchange" />
                      <Form
                        className="form-padding"
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.onSubmit()
                        }}  
                      >
                        <div>
                          REGISTER
                        </div>
                        <TextField
                          required
                          label="EMAIL"
                          onChange={(e) => {
                            this.checkEmail(e.target.value);
                            // console.log(e.target.value);
                          }}
                        />
                        <Checkbox
                          label="Is this email the same as teams or something?"
                          defaultChecked
                          onChange={this.toggle}
                          className="input-padding"
                        />
                        <Collapse isOpen={this.state.isOpen}>
                          <TextField
                            label="CLOUD EMAIL"
                            onChange={(e) => {
                              this.checkEmail(e.target.value);
                              // console.log(e.target.value);
                            }}
                          />
                        </Collapse>
                        <Dropdown
                          required
                          label="DEPARTMENTS"
                          options={this.state.departList}
                          onChange={(e, o) => {
                            // Set the department state
                            console.log(o);
                            this.setState({
                              department: o.key,
                            });
                          }}
                        />
                        <input className="input-padding" type="submit" value="REGISTER" />
                        <div>
                          having issues? here is a mailto link
                        </div>
                      </Form>
                      </Col>
                      <Col md="7" className="info-holder">
                        <div className="info-content">
                          <div>
                            <h2>Placeholder Title</h2>
                            <p>Placeholder body text</p>
                          </div>
                          <div>
                            <h3>Placeholder Title</h3>
                            <p>Placeholder body text</p>
                          </div>
                          <div>
                            <h3>Placeholder Title</h3>
                            <p>Placeholder body text</p>
                          </div>
                          <div>
                            <h3>Placeholder Title</h3>
                            <p>Placeholder body text</p>
                          </div>  
                        </div>
                        
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
