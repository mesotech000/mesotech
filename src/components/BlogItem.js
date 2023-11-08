import React from 'react';
import { Col } from 'reactstrap';

const BlogItem = ({ imgSrc, category, title, author, date, description }) => (
  <Col lg={6} xl={4} className="wow fadeIn" style={{ visibility: 'visible' }}>
    <div className="blog-item position-relative bg-light rounded" style={{border:"2px solid #000"}}>
      <img src={imgSrc} className="img-fluid w-100 rounded-top" alt="" />
      <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px',border:"2px solid #000" }}>
        {category}
      </span>
      <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
        <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
          <a href="" className="btn text-white">Read More</a>
        </div>
        <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
          <div className="blog-icon-1">
            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
          </div>
          <div className="blog-icon-2">
            <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
            <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
            <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
          </div>
        </div>
      </div>
      <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
        <img src="https://www.sciencenews.org/wp-content/uploads/2022/12/120222_JR_50YA-Apollo-17_feat-1030x578.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" style={{height:"80px",width:"80px"}} alt="" />
        <h5 className="">{author}</h5>
        <span className="text-secondary">{date}</span>
        <p className="py-2">{description}</p>
      </div>
      <div className="blog-coment d-flex justify-content-between px-4 py-2 border  rounded-bottom" style={{backgroundColor:"#f8f9fa"}}>
        <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
        <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
      </div>
    </div>
  </Col>
);

export default BlogItem;
