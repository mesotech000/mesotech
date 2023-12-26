import { Container, Row, Col } from 'reactstrap';
import '../App.css'

function TopBar() {
  return (
    <div className="bg-dark mesoTopbar">
      <Container>
        <Row className="d-flex justify-content-between align-items-center py-2">
          <Col xs="auto">
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>Daystar university,Athi river</small>
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>messotechke@gmail.com</small>
          </Col>
          <Col xs="auto" className="text-secondary d-none d-xl-flex marquee">
            <small>🔧 Discover Our Services:
Web Design 🎨 | Web Development 💻 | UI/UX Design 🖌️ | Web Security 🔒 | Programming Solutions 🚀</small>
          </Col>
          <Col xs="auto" className='icons'>
            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default TopBar
