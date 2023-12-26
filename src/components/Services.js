import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Reusable ServiceItem component
const ServiceItem = ({ iconClass, title, description }) => (
  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
    <div className="services-item bg-light rounded" style={{border:"2px solid #000"}}>
      <div className="p-4 text-center services-content">
        <div className="services-content-icon">
          <i className={iconClass}></i>
          <h4 className="mb-3">{title}</h4>
          <p className="mb-4">{description}</p>
          <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill mesoButton">Read More</a>
        </div>
      </div>
    </div>
  </div>
);

const Services = ({servicesRef}) => {
  const serviceItems = [
    {
      iconClass: 'fa fa-code fa-7x mb-4 text-primary',
      title: 'Web Design',
      description: 'Immerse your audience in visually stunning and intuitive designs. Our team of designers combines aesthetics with usability, ensuring your digital presence leaves a lasting impression.',
    },
    {
      iconClass: 'fa fa-file-code fa-7x mb-4 text-primary',
      title: 'Web Development',
      description: 'Behind every great design lies powerful development. We specialize in crafting websites and applications that not only look impressive but also function seamlessly. Your success is our code.',
    },
    {
      iconClass: 'fa fa-external-link-alt fa-7x mb-4 text-primary',
      title: 'UI/UX Design',
      description: 'User experiences are at the heart of what we do. We prioritize user-centric design, ensuring that every interaction with your digital platform is intuitive, enjoyable, and memorable.',
    },
    {
      iconClass: 'fas fa-user-secret fa-7x mb-4 text-primary mesoIcon',
      title: 'Web Security',
      description: 'In an era of digital threats, we prioritize your peace of mind. Our web security experts implement robust measures to safeguard your online assets, ensuring a fortress against potential vulnerabilities.',
    },
    {
      iconClass: 'fa fa-envelope-open fa-7x mb-4 text-primary',
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    },
    {
      iconClass: 'fas fa-laptop fa-7x mb-4 text-primary mesoIcon',
      title: 'Programming',
      description: 'Coding is an art, and we are masters of our craft. From scripting elegant solutions to optimizing performance, our programming expertise forms the backbone of your digital success.',
    },
  ];

  return (
    <div className="container-fluid services py-5 mb-5" ref={servicesRef}>
      <Container>
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">Our Services</h5>
          <h1>Services Built Specifically For Your Business</h1>
        </div>
        <Row className="g-5 services-inner">
          {serviceItems.map((item, index) => (
            <ServiceItem
              key={index}
              iconClass={item.iconClass}
              title={item.title}
              description={item.description}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
