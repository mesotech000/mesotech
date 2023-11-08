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
                        <h1 className="mb-4">About MesoTech Agency And It's Innovative IT Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                        <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                        <Button color="secondary" className="rounded-pill px-5 py-3 text-white mesoButton">More Details</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
