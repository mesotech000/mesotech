import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../App.css"
function Header({aboutScroll,
  servicesScroll,
  projectsScroll,
  contactScroll}) {
  return (
    <div className="container-fluid bg-primary mesoNavbar">
      <div className="container">
        <Navbar dark expand="lg" className="py-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">Meso<span className="text-secondary mesoColour">Tech</span> </h1>
          </a>
          <button type="button" className="navbar-toggler me-0 collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse bg-transparent collapse" id="navbarCollapse" >
            <Nav className="ms-auto mx-xl-auto p-0 mesoNav">
              <NavItem>
                <span  className="nav-item nav-link active text-secondary mesoColour">Home</span>
              </NavItem>
              <NavItem>
                <span onClick={aboutScroll} className="nav-item nav-link">About</span>
              </NavItem>
              <NavItem>
                <span onClick={servicesScroll} className="nav-item nav-link">Services</span>
              </NavItem>
              <NavItem>
                <span onClick={projectsScroll} className="nav-item nav-link">Projects</span>
              </NavItem>
           
              <NavItem>
                <span className="nav-item nav-link" onClick={contactScroll}>Contact</span>
              </NavItem>
            </Nav>
          </div>
          <div className="d-none d-xl-flex flex-shrink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href="" className="position-relative animated tada infinite phonenimate">
                <i className="fa fa-phone-alt text-white fa-2x"></i>
                <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                  <span><i className="fa fa-comment-dots text-secondary mesoColour"></i></span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary mesoColour">Call: + 0793521690</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
