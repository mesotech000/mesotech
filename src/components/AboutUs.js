import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const AboutUs = ({ aboutRef }) => {
    return (
        <div className="container-fluid py-5 my-5" ref={aboutRef}>
            <Container className="pt-5">
                <Row className="g-5">
                    <Col lg="5" md="6" sm="12" className="wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="https://i.yourimageshare.com/b2VLshzo1x.webp" className="img-fluid w-75 rounded" alt="" style={{marginBottom: '25%'}}/>
                            <div className="position-absolute w-75" style={{top: '25%', left: '25%'}}>
                                <img src="https://i.yourimageshare.com/bEeTFK6y0S.webp" className="img-fluid w-100 rounded" style={{border:"3px solid #000"}} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col lg="7" md="6" sm="12" className="wow fadeIn mesoAbout" data-wow-delay=".5s">
                        <h5 className="text-primary">About Us</h5>
                        <h1 className="mb-4">About MessoTech Agency And It's Innovative IT Solutions</h1>
                        <p>Welcome to MessoTech, where innovation, creativity, and security converge to redefine your digital experience.</p>
                        <p className="mb-4">At MessoTech, we are not just a team of experts; we are architects of digital solutions, weaving together seamless web design, robust web development, captivating UI/UX experiences, cutting-edge web security, and precision programming.</p>
                        <Button color="secondary" className="rounded-pill px-5 py-3 text-white mesoButton">More Details</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
