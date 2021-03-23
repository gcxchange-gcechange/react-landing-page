import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap';

const StepSection = props => {
  const {
    alignment,
    text,
    img
  } = props;
  
    var align;
    if(alignment && alignment === 'right') {
      align = "right";
    } else {
      align = "left";
    }

    const alignLayout = (
      <Fragment>
        {align === "left" ? 
          <Fragment>
          <Col md="7" className="d-flex">
            <div className="d-flex align-items-center">
              <div className="step-content">
                <h2 className="display-4">{text.step} <span className="highlight">{text.number}</span></h2>
                <p className="lead">{text.paragraph}</p>
              </div>
            </div>
          </Col>
          <Col md="5" className="d-flex">
            <div className="d-flex align-items-center">
              <img src={img} alt="" />
            </div>
          </Col>
        </Fragment>
      :
        <Fragment>
          <Col md="5" className="d-flex order-xs-12 order-sm-12 order-md-1 order-lg-1">
            <div className="d-flex align-items-center">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col md="7" className="d-flex order-xs-1 order-sm-1 order-md-12 order-lg-12">
            <div className="d-flex align-items-center">
              <div className="step-content">
                <h2 className="display-4">{text.step} <span className="highlight">{text.number}</span></h2>
                <p className="lead">{text.paragraph}</p>
              </div>
            </div>
          </Col>
        </Fragment>
        }
          
        </Fragment>
    );

    return (
      <div className="step-section">
        <Container className="step-area">
          <Row>
            {alignLayout}
          </Row>
        </Container>    
        <hr /> 
      </div>    
    );
}

export default StepSection
