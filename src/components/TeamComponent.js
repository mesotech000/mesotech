import React,{useRef,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamCarousel = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }

  const settings = {
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3, // show 5 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: 'Full Name 1',
      designation: 'Designation 1',
      imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
    },
    {
      name: 'Full Name 2',
      designation: 'Designation 2',
      imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
    },
    {
        name: 'Full Name 3',
        designation: 'Designation 1',
        imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
      },
      {
        name: 'Full Name 4',
        designation: 'Designation 2',
        imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
      },
      {
        name: 'Full Name 5',
        designation: 'Designation 1',
        imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
      },
      {
        name: 'Full Name 6',
        designation: 'Designation 2',
        imgSrc: 'https://themewagon.github.io/HighTechIT/img/team-3.jpg',
      },
    // Add more team members as needed
  ];

  return (
    <div className="container-fluid py-5 mb-5 team">
      <Container className='teamContainer'>
        <Row className="text-center mx-auto pb-5">
          <Col md={{ size: 6, offset: 3 }}>
            <h5 className="text-primary">Our Team</h5>
            <h1>Meet our expert Team</h1>
          </Col>
        </Row>
        <div className="owl-nav"><div className="owl-prev" onClick={previousSlide}>
        <i className="fas fa-chevron-left"></i></div><div className="owl-next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i></div></div>
        <Slider ref={sliderRef} {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded team-item teamCard">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src={member.imgSrc}
                      className="img-fluid w-100 rounded-circle"
                    
                      alt={member.name}
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4>{member.name}</h4>
                    <p className="m-0">{member.designation}</p>
                  </div>
                  {/* Add social media links here */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default TeamCarousel;
