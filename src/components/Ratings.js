import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ratings = () => {
    return (
        <div  className="py-5 mesoRating">
            <Container>
                <Row className="d-flex flex-wrap">
                    <Col lg="3" className="wow fadeIn" data-wow-delay=".1s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">99</h1>
                            <h5 className="text-white mt-1">Success in getting happy customer</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">25</h1>
                            <h5 className="text-white mt-1">Thousands of successful business</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">120</h1>
                            <h5 className="text-white mt-1">Total clients who love MesoTech</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">5</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Ratings;
