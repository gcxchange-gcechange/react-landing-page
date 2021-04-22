import React, {Fragment} from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import gcxLogo from '../assets/img/gcx-eng-logo.png'
import stepOneEn from '../assets/img/stepOneEn.png'
import stepTwoEn from '../assets/img/stepTwoEn.png'
import stepThreeEn from '../assets/img/stepThreeEn.png'

import teaserVideo from '../assets/video/Gcxchange teaser 6_EN.mp4';
import teaserVideoVTT from '../assets/video/WEBVTT.vtt';
import teaserVideoPoster from '../assets/video/videoPosterEn.jpg';

import Canada from '../assets/img/Canada-blanc-01.png';
import govCandaEn from '../assets/img/gouv_BLANC_EN-01.png';

import i18n from '../i18n/lang';

class Home extends React.Component {
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
                  <div className="text-center">
                    <img className="logo-img" src={gcxLogo} alt="gcxchange | gcéchange" />
                    <div className="mb-5 heading-zone text-center d-block">
                      <h2 className="display-2 pb-3" dangerouslySetInnerHTML={{__html: lang.hero.h1}} />
                      <p className="mt-1 lead">{lang.hero.subtitle}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <Row>
                <Col>
                  <div className="step-section">
                    <h2  className="display-4" dangerouslySetInnerHTML={{__html: lang.step1.heading}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step1.paragraph1}} />
                    <img className="mb-5" src={stepOneEn} alt="" />
                    <hr />
                  </div>
                  <div className="step-section">
                    <h2  className="display-4" dangerouslySetInnerHTML={{__html: lang.step2.heading}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step2.paragraph1}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step2.paragraph2}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step2.paragraph3}} />
                    <img className="mb-5" src={stepTwoEn} alt="" />
                    <hr />
                  </div>
                  <div className="step-section">
                    <h2  className="display-4" dangerouslySetInnerHTML={{__html: lang.step3.heading}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step3.paragraph1}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step3.paragraph2}} />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step3.paragraph3}} />
                    <img src={stepThreeEn} alt="" />
                    <p className="lead" dangerouslySetInnerHTML={{__html: lang.step3.paragraph4}} />
                    <p className="lead mb-5" dangerouslySetInnerHTML={{__html: lang.step3.paragraph5}} />
                    <hr />
                  </div>
                  <div className="text-center">
                    <Button className="mt-5 mb-5" color="primary" size="lg" href={lang.hero.link} target="_blank">
                      {lang.hero.ctabutton}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="onboarding-section">
            <Container className="pb-2">
              <Row>
                <Col>
                  <div className="text-center">
                    <div className="mb-5">
                      <Video
                        controls={['PlayPause', 'Seek', 'Time', 'Captions', 'Volume', 'Fullscreen']}
                        poster={teaserVideoPoster}
                        copy={{
                          play: lang.onboarding.videoPlay,
                          pause: lang.onboarding.videoPause,
                          mute: lang.onboarding.videoMute,
                          unmute: lang.onboarding.videoUnmute,
                          volume: lang.onboarding.videoVolume,
                          fullscreen: lang.onboarding.videoFullscreen,
                          seek: lang.onboarding.videoSeek,
                          captions: lang.onboarding.videoCaptions,
                        }}
                      >
                        <source src={teaserVideo} type="video/mp4" />
                        <track label="English" kind="subtitles" srcLang="en" src={teaserVideoVTT} default />
                      </Video>
                    </div>
                    <p className="lead">{lang.onboarding.paragraph}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
        <footer>
          <Container>
            <Row>
              <Col md="12" className="mb-5">
                <div className="text-center">
                  <h2 className="mb-4">{lang.footer.heading}</h2>
                  <div className="mb-3">
                    <a href={lang.footer.linkHref}>{lang.footer.linkText}</a>
                  </div>
                  <p className="mb-0">{lang.footer.goc}</p>
                  <a href="mailto:gcxchange-gcechange@tbs-sct.gc.ca">gcxchange-gcechange@tbs-sct.gc.ca</a>
                </div>
              </Col>
              <Col md="12" className="footer-imgs">
                <div className="d-flex align-items-center ">
                  <img className="goc-canada" src={govCandaEn} alt={lang.footer.goc} />
                  <img className="ml-auto" src={Canada} alt={lang.footer.symbol} />
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      
      </Fragment>
    );
  }
}

export default Home;
