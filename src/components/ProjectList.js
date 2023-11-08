import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ui from "../assets/images/ui.png"
import cybersecurity from '../assets/images/cybersec.png'
import software from '../assets/images/sofware.png'
import graphicdesign from '../assets/images/graphics.png'
import devops from '../assets/images/devops.png'
import ai from '../assets/images/ai.png'
const projects = [
    {
      imgSrc: ui,
      title: 'UI design',
      description: 'User Interface designs',
    },
    {
      imgSrc: cybersecurity,
      title: 'Cyber Security',
      description: 'Our own cyber security institute',
    },
    {
      imgSrc: software,
      title: 'Softwares',
      description: 'Mobile, web and desktop apps',
    },
    {
      imgSrc: graphicdesign,
      title: 'Graphic Design',
      description: 'Logos and posters',
    },
    {
      imgSrc: devops,
      title: 'Dev Ops',
      description: 'Automated Systems',
    },
    {
      imgSrc: ai,
      title: 'AI',
      description: 'Artificial Intelligence Models',
    },
  ];

const ProjectItem = ({ imgSrc, title, description }) => (
  <Col md={6} lg={4} className="wow fadeIn" style={{ visibility: 'visible' }}>
    <div className="project-item">
      <div className="project-img">
       
        <img src={imgSrc} className="img-fluid w-100 " style={{border:"3px solid #000",borderRadius:"20px"}} alt={title} />
        
    <div className="project-content mesoProjects">
          <a href="#" className="text-center">
            <h4 className="text-secondary">{title}</h4>
            <p className="m-0 text-white">{description}</p>
          </a>
        </div>
      
      </div>
   
    </div>
  </Col>
);

const ProjectList = ({projectsRef}) => (
  <div className="container-fluid project py-5 mb-5" ref={projectsRef}>
    <Container>
      <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px', visibility: 'visible' }}>
        <h5 className="text-primary">Our Project</h5>
        <h1>Our Recently Completed Projects</h1>
      </div>
      <Row className="g-5">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </Row>
    </Container>
  </div>
);

export default ProjectList;
