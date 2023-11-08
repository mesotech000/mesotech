import React from 'react';
import { Container, Row } from 'reactstrap';
import BlogItem from './BlogItem';
import appdevelopment from '../assets/images/appdevelopment.png'
import webdevelopment from '../assets/images/webdevelopment.png'
import webdesign from '../assets/images/webdesign.png'




const blogItems = [
  {
    imgSrc: webdesign,
    category: 'Web Design',
    title: 'Blog Title 1',
    author: 'Daniel Martin',
    date: '24 March 2023',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum...',
  },
  {
    imgSrc: webdevelopment,
    category: 'Development',
    title: 'Blog Title 2',
    author: 'Daniel Martin',
    date: '23 April 2023',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum...',
  },
  {
    imgSrc: appdevelopment,
    category: 'Mobile App',
    title: 'Blog Title 3',
    author: 'Daniel Martin',
    date: '30 Jan 2023',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum...',
  },
  // Add more blog items as needed
];


const BlogList = () => (
  <div className="container-fluid blog py-5 mb-5 mesoBlog">
    <Container>
      <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px', visibility: 'visible' }}>
        <h5 className="text-primary">Our Blog</h5>
        <h1>Latest Blog &amp; News</h1>
      </div>
      <Row className="g-5 justify-content-center">
        {blogItems.map((blogItem, index) => (
          <BlogItem
            key={index}
            imgSrc={blogItem.imgSrc}
            category={blogItem.category}
            title={blogItem.title}
            author={blogItem.author}
            date={blogItem.date}
            description={blogItem.description}
          />
        ))}
      </Row>
    </Container>
  </div>
);

export default BlogList;
