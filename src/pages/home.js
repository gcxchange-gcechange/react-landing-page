import React, {Fragment} from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import {Helmet} from "react-helmet";

import StepSection from '../components/StepSection';

import gcxLogo from '../assets/gcx-gce.png'
import imgConfig from '../assets/config.png';
import imgArch from '../assets/arch.png';
import imgComp from '../assets/comp.png';
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
                  <div className="text-center">
                    <img className="logo-img" src={gcxLogo} alt="gcxchange | gcéchange" />
                    <div className="mb-5 heading-zone text-center d-block">
                      <h1 className="display-2 pb-3">{lang.hero.h1part01}<span className="highlight">{lang.hero.h1part02}</span>{lang.hero.h1part03}</h1>
                      <p className="mt-1 lead">{lang.hero.subtitle}</p>
                    </div>
                    <Button color="primary" size="lg">
                      {lang.hero.ctabutton}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <StepSection
              text={lang.step1}
              img={imgConfig}
              alignment="left"
            />

            <StepSection
              text={lang.step2}
              img={imgArch}
              alignment="right"
            />

            <StepSection
              text={lang.step3}
              img={imgConfig}
              alignment="left"
            />

            <StepSection
              text={lang.step4}
              img={imgArch}
              alignment="right"
            />
          </section>
          <section className="onboarding-section">
            <Container className="mb-5 pb-4">
              <Row>
                <Col sm="12">
                  <div className="text-center mt-3">
                    <h2 className="mb-5">{lang.onboarding.heading}</h2>
                  </div>
                </Col>
                <Col sm="4">
                  <div><img src={imgComp} alt="" /></div>
                  <div className="text-center mt-3">
                    <Button color="primary">{lang.onboarding.download}</Button>
                  </div>
                </Col>
                <Col sm="4">
                  <div><img src={imgComp} alt="" /></div>
                  <div className="text-center mt-3">
                    <Button color="primary">{lang.onboarding.download}</Button>
                  </div>
                </Col>
                <Col sm="4">
                  <div><img src={imgComp} alt="" /></div>
                  <div className="text-center">
                    <Button color="primary">{lang.onboarding.download}</Button>
                  </div>
                </Col>
                </Row>
            </Container>
            <Container className="pb-2">
              <Row>
                <Col>
                  <div className="text-center">
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
              <Col>
                <div className="text-center">
                  <h2 className="mb-4">{lang.footer.heading}</h2>
                  <div className="mb-3">
                    <a href={lang.footer.linkHref}>{lang.footer.linkText}</a>
                  </div>
                  <p className="mb-0">{lang.footer.goc}</p>
                  <a href="mailto:gcxchange-gcechange@tbs-sct.gc.ca">gcxchange-gcechange@tbs-sct.gc.ca</a>
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
