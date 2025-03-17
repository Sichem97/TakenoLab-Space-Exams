import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'


function Services() {
  return (
    <div id="portfolio" class="our-portfolio section">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h2>Exams &amp; Assignememts <br /> <span>Online</span></h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <Link to='/Quiz'>
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="hidden-content">
                <p>Daily Available</p>
              </div>
              <div class="showed-content">
              <h4>Quiz</h4>

              </div>
            </div>
          </Link>
        </div>

        <div class="col-lg-3 col-sm-6">
          <Link to='/Assignements'>
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <div class="hidden-content">
                <p>Weekly Available</p>
              </div>
              <div class="showed-content">
              <h4>Assignements</h4>
              </div>
            </div>
          </Link>
        </div>

        <div class="col-lg-3 col-sm-6">
          <Link to='/Exams'>
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="hidden-content">
                <p>Available after the course program</p>
              </div>
              <div class="showed-content">
              <h4>Exams</h4>
              </div>
            </div>
          </Link>
        </div>

        <div class="col-lg-3 col-sm-6">
          <Link to=''>
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="hidden-content">
                <p>Coming soon</p>
              </div>
              <div class="showed-content">
              <h4>Project Submittion</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services