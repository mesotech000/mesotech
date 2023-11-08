import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Landing = () => {
    return (
        <Container fluid={true} style={{padding:"7.5vw 0"}} >
            <Container className='mesoLanding'>
            <Row className="justify-content-between">
                <Col xs="12" md="6" className="order-2 order-md-1 mesoInfo">
                    <h2 className='title--xxl'>Services that help you grow</h2>
                    <p className='text--size-s'>Elevate your business with us we have your back with superb services, efficient systems and 24/7 friendly support.</p>
                    <Button color="primary" className=" btn--xl">Start Now</Button>
                </Col>
                <Col xs="12" md="4" className="order-1 order-md-2">
                    <img src="https://i.yourimageshare.com/YRtrbHKevO.webp" alt="Description" className="img-fluid"/>
                </Col>
            </Row>
            </Container>
        </Container>
    );
};

export default Landing;
