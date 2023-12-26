import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn' }}>
      <Container className="pt-5 pb-4">
        <Row className="g-5">
          <Col lg="3" md="6">
            <a href="index.html">
              <h1 className="text-white fw-bold d-block">Messo<span className="text-secondary">Tech</span> </h1>
            </a>
            <p className="mt-4 text-light">At MessoTech, we are not just a team of experts; we are architects of digital solutions, weaving together seamless web design, robust web development, captivating UI/UX experiences, cutting-edge web security, and precision programming.</p>
            <div className="d-flex hightech-link">
              <Button className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></Button>
              <Button className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></Button>
              <Button className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></Button>
              <Button className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Button>
            </div>
          </Col>
          <Col lg="3" md="6">
            <a href="#" className="h3 text-secondary">Short Link</a>
            <div className="mt-4 d-flex flex-column short-link">
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About us</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Projects</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog</a>
            </div>
          </Col>
          <Col lg="3" md="6">
            <a href="#" className="h3 text-secondary">Help Link</a>
            <div className="mt-4 d-flex flex-column help-link">
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FQAs</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</a>
            </div>
          </Col>
          <Col lg="3" md="6">
            <a href="#" className="h3 text-secondary">Contact Us</a>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <a href="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> Daystar University, Athi river</a>
              <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +254 743600740</a>
              <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> messotechke@gmail.com</a>
            </div>
          </Col>
        </Row>
        <hr className="text-light mt-5 mb-4" />
        <Row>
          <Col md="6" className="text-center text-md-start">
            <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Messotech</a>, All right reserved.</span>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
