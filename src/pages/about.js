import React, { useEffect } from 'react'
import './../css/bootstrap.min.css'
import WOW from 'wowjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Layout from '../Layout/layout'
import about1 from './../img/about-1.jpg'
import about2 from './../img/about-2.jpg'
import about3 from './../img/about-3.jpg'
import teacher from './../img/call-to-action.jpg'
import team1 from './../img/team-1.png'
import team2 from './../img/team-2.jpg'
import team3 from './../img/team-3.jpg'

const AboutSection = () => {
  useEffect(() => {
    new WOW.WOW().init()
  }, [])

  return (
    <Layout title="School-About">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-4">
                Learn More About Our Work And Our Cultural Activities
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore
                duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at
                dolor est vero nonumy magna.
              </p>
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Read More
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle flex-shrink-0"
                      src="./../img/user.jpg"
                      alt=""
                      style={{ width: '45px', height: '45px' }}
                    />
                    <div className="ms-3">
                      <h6 className="text-primary mb-1">Jhon Doe</h6>
                      <small>CEO & Founder</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 about-img wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    className="img-fluid w-75 rounded-circle bg-light p-3"
                    src={about1}
                    alt=""
                  />
                </div>
                <div
                  className="col-6 text-start"
                  style={{ marginTop: '-150px' }}
                >
                  <img
                    className="img-fluid w-100 rounded-circle bg-light p-3"
                    src={about2}
                    alt=""
                  />
                </div>
                <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                  <img
                    className="img-fluid w-100 rounded-circle bg-light p-3"
                    src={about3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: '400px' }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src={teacher}
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Become A Teacher</h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a className="btn btn-primary py-3 px-5" href="">
                    Get Started Now<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '600px' }}
          >
            <h1 className="mb-3">Popular Teachers</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src={team1}
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src={team2}
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src={team3}
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutSection
