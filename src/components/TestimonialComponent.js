import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialComponent = () => {
  
  const testimonials = [
    {
      id: 1,
      name: 'Client Name 1',
      profession: 'Profession 1',
      rating: 5,
      image: 'https://themewagon.github.io/HighTechIT/img/testimonial-1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Client Name 2',
      profession: 'Profession 2',
      rating: 4,
      image: 'https://themewagon.github.io/HighTechIT/img/testimonial-1.jpg',
      text: 'Praesent in feugiat ipsum. Vestibulum interdum vitae libero sit amet.',
    },
    {
      id: 3,
      name: 'Client Name 3',
      profession: 'Profession 3',
      rating: 3,
      image: 'https://themewagon.github.io/HighTechIT/img/testimonial-1.jpg',
      text: 'Nulla eget urna sit amet tortor cursus, ac viverra eros.',
    },
    {
        id: 4,
        name: 'Client Name 4',
        profession: 'Profession 4',
        rating: 4,
        image: 'https://themewagon.github.io/HighTechIT/img/testimonial-1.jpg',
        text: 'Nulla eget urna sit amet tortor cursus, ac viverra eros.',
      },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <div className="container-fluid testimonial py-5 mb-5">
      <Container>
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn' }}>
          <h5 className="text-primary">Our Testimonial</h5>
          <h1>Our Client Saying!</h1>
        </div>
       
 <Slider {...settings}>
 {testimonials.map((testimonial) => (
   <div key={testimonial.id}>
     <div className="testimonial-item border p-4">
       <div className="d-flex align-items-center">
         <div>
           <img src={testimonial.image} alt={testimonial.name} />
         </div>
         <div className="ms-4">
           <h4 className="text-secondary">{testimonial.name}</h4>
           <p className="m-0 pb-3">{testimonial.profession}</p>
           <div className="d-flex pe-5">
             {Array.from({ length: testimonial.rating }, (_, i) => (
               <i key={i} className="fas fa-star me-1 text-primary"></i>
             ))}
           </div>
         </div>
       </div>
       <div className="border-top mt-4 pt-3">
         <p className="mb-0 paragraphs" >{testimonial.text}</p>
       </div>
     </div>
   </div>
 ))}
</Slider>
     
      </Container>
    </div>
  );
};

export default TestimonialComponent;
