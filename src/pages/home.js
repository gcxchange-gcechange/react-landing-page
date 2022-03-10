import React, {Fragment} from 'react'
import { Container, Row, Col, Form, Collapse } from 'reactstrap';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Checkbox, MessageBar, MessageBarType, } from '@fluentui/react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";

import 'react-html5video/dist/styles.css';

import logo from '../assets/gcx-gce.png'

import Canada from '../assets/img/FIP_BIL_couleurs-04.png';
import govCandaEn from '../assets/img/FIP_BIL_couleurs-03.png';
import govCanadaFr from '../assets/img/FIP_BIL_couleurs-05.png';
import heroImage from '../assets/img/hero-img.png';

import i18n from '../i18n/lang';
import { getDepartments, getDomains, sendUser } from '../services/DepartmentService';

initializeIcons();
const iconProps = { iconName: 'Accept' };

function capitalizeFirstLetter(string) {
  // Format names
  // If the email isn't in the proper format return 'N/A'
  if(string){
    var caps = string[0].toUpperCase() + string.slice(1);
    var removeNums = caps.replace(/[0-9]/g, '');
    return removeNums; 
  } else {
    return 'N/A';
  }
  
}

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
      departList: [{key: '00007', text: 'TESTING'},],
      domainList: [{key: '00007', dom: 'test.gc.ca'},],
      isEmailDomainValid: false,
      isCanadaEmail: false,
      isCloudDomainValid: false,
      isValid: false,
      backendError: false,
      backendMsg: '',
      emailMatch: false,
      confirmEmail: '',
      isSendLoading: false,
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
    let emailWork = this.state.emailInput.toLowerCase();
    let emailCloud = (this.state.cloudEmail ? this.state.cloudEmail.toLowerCase() : this.state.emailInput.toLowerCase());
    let department = this.state.department.key;
    let splitEmail = emailWork.split('@');
    let firstName = capitalizeFirstLetter(splitEmail[0].split('.')[0]);
    let lastName = capitalizeFirstLetter(splitEmail[0].split('.')[1]);
    this.setState({
      isSendLoading: true,
    });
    sendUser({
      EmailWork: emailWork,
      EmailCloud: emailCloud,
      FirstName: firstName,
      LastName: lastName,
      Department: department,
    }).then(data => {
      if(data) {
        if(data.status && data.status === 200){
          this.setState({
            isValid: true,
          });
        } else {
          var lang = i18n[this.props.lang];
          if(data.includes("already registered")) {
            this.setState({
              backendError: true,
              backendMsg: lang.form.backendErrorUserRegistered,
              isSendLoading: false,
            });
          } else {
            this.setState({
              backendError: true,
              backendMsg: lang.form.backendError,
              isSendLoading: false,
            });
          }
          
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
    getDepartments().then(e => {
      if(e) {
        e.map((field) => {
          departs.push({
            key: field.fields.RG_x0020_Code,
            text: (this.props.lang === 'fr-ca') ? field.fields.Appellation_x0020_l_x00e9_gale : field.fields.Legal_x0020_Title,
          })
        })
      }
      // sort alphabetical
      departs.sort((a, b) => { if(a.text < b.text) { return -1; } if(a.text > b.text) { return 1; } return 0; })
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
      this.setState({
        domainList: domains,
        isInitLoad: false,
      })
    })
  }

  checkEmail (email, mailType) {
    // List of invalid Domains to provide user feedback
    const invalidDomains = [
      'canada.ca',
      'gmail.com',
      'hotmail.com',
      'live.com',
      'yahoo.com',
      'yahoo.ca', 
      'hotmail.ca', 
      'bell.net', 
      'shaw.ca', 
      'sympatico.ca', 
      'rogers.com',
    ]
    var isValid = false;
    if (email.includes('@')) {
      let domain = email.split('@');
      // compare email domain to our list object
      if(this.state.domainList.length !== 0) {
        if(mailType === 'email'){
          this.setState({
            isEmailDomainValid: false,
            isCanadaEmail: false,
            emailInput: email,
          })
          // Check if the user is trying to put a canada.ca email
          if(invalidDomains.includes(domain[1].toLowerCase())){
            this.setState({
              isCanadaEmail: true,
            })
          }
        } else {
          this.setState({
            isCloudDomainValid: false,
          })
          if(domain[1] === 'canada.ca'){
            this.setState({
              isCloudDomainValid: true,
            })
          }
        }
        
        this.state.domainList.map((domState) => {
            if (domState.dom === domain[1].toLowerCase()) {
              if (mailType === 'email') {
                console.log("domstatekey " + domState.key + " domstate " + domState.dom + " domain " + domain[1])

                this.setState({
                  department: {key: domState.key},
                  isEmailDomainValid: true,
                  isCanadaEmail: false,
                })
                isValid = true;
                console.log("depat key" + domState.key)
              } else {
                this.setState({
                  isCloudDomainValid: true,
                  cloudEmail: email,
                })
              }
            }
        })

        // Add check for unrecognized domains that are not in invalid domain list
        if(!isValid && mailType === 'email') {
          this.setState({
            isCanadaEmail: true,
          })
        }
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
                        <img className="goc-canada" src={(this.props.lang === 'fr-ca')? govCanadaFr : govCandaEn} alt={lang.footer.goc} />
                        <div className="info-content">
                          <img className="info-img" src={heroImage} alt="" />
                          <h1 className="info-header" dangerouslySetInnerHTML={{__html: lang.hero.h1}} />
                          <p className="info-sub">{lang.hero.subtitle}</p>
                          <ul className="info-list">
                            <li dangerouslySetInnerHTML={{__html: lang.hero.list1}} />
                            <li dangerouslySetInnerHTML={{__html: lang.hero.list2}} />
                            <li dangerouslySetInnerHTML={{__html: lang.hero.list3}} />
                            <li dangerouslySetInnerHTML={{__html: lang.hero.list4}} />
                          </ul> 
                        </div>
                      </Col>
                      <Col md="6" className="form-padding">
                      <img className="logo-img" src={logo} alt="gcéchange" />
                      {this.state.isInitLoad ? <Spinner size={SpinnerSize.large} className="form-padding" label={lang.form.loading} ariaLive="assertive" /> :
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            this.onSubmit()
                          }}  
                        >
                          <div className="form-title">
                            {lang.form.submitBtn}
                          </div>
                          <TextField
                            required
                            label={lang.form.emailLabel}
                            placeholder={lang.form.emailPlaceholder}
                            onChange={(e) => {
                              e.target.value = e.target.value.toLowerCase()
                              this.checkEmail(e.target.value, 'email');
                              if (e.target.value === this.state.confirmEmail) {
                                this.setState({
                                  emailMatch: true,
                                })
                              } else {
                                this.setState({
                                  emailMatch: false,
                                })
                              }
                            }}
                            iconProps={this.state.isEmailDomainValid && iconProps}
                            errorMessage={this.state.isCanadaEmail ? lang.form.emailHelperText : ""}
                          />
                          <TextField
                            required
                            label={lang.form.confirmEmail}
                            onChange={(e) => {
                              this.setState({
                                confirmEmail: e.target.value,
                              });
                              console.log(`This input ${e.target.value}`);
                              console.log(`Email state ${this.state.emailInput}`);
                              if (e.target.value === this.state.emailInput) {
                                this.setState({
                                  emailMatch: true,
                                });
                              } else {
                                this.setState({
                                  emailMatch: false,
                                });
                              }
                            }}
                            iconProps={this.state.emailMatch && iconProps}
                            errorMessage={(!this.state.emailMatch && this.state.confirmEmail.length > 0) && lang.form.confirmEmailHelperText}
                          />
                          <div className="input-padding">
                            <Checkbox
                              label={lang.form.cloudEmailCheck}
                              onChange={this.toggle}
                            />
                          </div>
                          
                          <Collapse isOpen={this.state.isOpen}>
                            <TextField
                              label={lang.form.cloudLabel}
                              ariaDescribedBy="cloudHelperText"
                              placeholder={lang.form.cloudPlaceholder}
                              onChange={(e) => {
                                this.checkEmail(e.target.value, 'cloud');
                              }}
                              iconProps={this.state.isCloudDomainValid && iconProps}
                            />
                          </Collapse>
                          <Dropdown
                            required
                            label={lang.form.departmentLabel}
                            placeholder={lang.form.departmentPlaceholder}
                            options={this.state.departList}
                            onChange={(e, o) => {
                              // Set the department state
                              console.log(o);
                              this.setState({
                                department: o,
                              });
                            }}
                            selectedKey={this.state.department ? this.state.department.key : undefined}
                          />
                          {(this.state.backendError && 
                            <MessageBar
                              className="input-padding"
                              messageBarType={MessageBarType.error}
                              isMultiline={true}
                            >
                              <span 
                                dangerouslySetInnerHTML={{__html: this.state.backendMsg }}
                              />
                            </MessageBar>
                          )}
                          {(this.state.isSendLoading) ? 
                            <Spinner size={SpinnerSize.small} label={lang.form.loading} ariaLive="assertive" className="form-padding" /> :
                            <input className="input-padding submit-btn" disabled={(!this.state.isEmailDomainValid || !this.state.department || !this.state.emailMatch) ? true : false} type="submit" value={lang.form.submitBtn} />

                          }
                          
                          <div className="help-holder" dangerouslySetInnerHTML={{__html: lang.form.help}} />
                        </Form>
                      }
                      {this.state.isValid && <Redirect to={(this.props.lang === 'fr-ca') ? '/fr/process' : '/en/process'} />}
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
