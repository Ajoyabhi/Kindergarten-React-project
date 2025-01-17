import React, { useEffect, useState } from 'react'
import './../css/bootstrap.min.css' // Include Bootstrap
import './../lib/animate/animate.css' // Include Animate.css
import './../lib/owlcarousel/assets/owl.carousel.min.css' // Include Owl Carousel CSS
import './../lib/owlcarousel/owl.carousel.js' // Import Owl Carousel JS
import './../css/style.css' // Custom Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'


const Header = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating content loading or initialization
    setTimeout(() => {
      setIsLoading(false) // Set isLoading to false after 2 seconds (simulating content loading)
    }, 1000) // Adjust this timeout as per your requirement or remove if not needed
  }, [])

  return (
    <div className="container-xxl bg-white p-0">
      {/* Conditionally render content based on loading state */}
      {isLoading ? (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Navbar Start */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="/contact" className="navbar-brand">
              <h1 className="m-0 text-primary">
                <i className="fa fa-book-reader me-3"></i>KinderGarten
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <a href="/carol" className="nav-item nav-link">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link active">
                  About Us
                </a>
                <a href="classes.html" className="nav-item nav-link">
                  Classes
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                    <a href="facility.html" className="dropdown-item">
                      School Facilities
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Popular Teachers
                    </a>
                    <a href="call-to-action.html" className="dropdown-item">
                      Become A Teacher
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Make Appointment
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Error
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
              <a
                href=""
                className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
              >
                Join Us
                <i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
          {/* Navbar End */}
        </>
      )}
    </div>
  )
}

export default Header
