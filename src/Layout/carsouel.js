import React from 'react';
import slide1 from './../img/carousel-1.jpg'
import slide2 from './../img/carousel-2.jpg'
import "owl.carousel"


const HeaderCarousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="owl.carousel header-carousel position-relative">
        {/* First Carousel Item */}
        <div className="owl.carousel-item position-relative">
          <img className="img-fluid" src={slide1} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Schools play a crucial role in laying the foundation for a child's education and personal growth..
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </a>
                  <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Carousel Item */}
        <div className="owl.carousel.item position-relative">
          <img className="img-fluid" src={slide2} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Make A Brighter Future For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </a>
                  <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCarousel;
