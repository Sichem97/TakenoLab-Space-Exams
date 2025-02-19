import React from 'react'
import './services.css'

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
          <a href="#">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="hidden-content">
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div class="showed-content">
              <h4>Quiz</h4>

              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-sm-6">
          <a href="#">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <div class="hidden-content">
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div class="showed-content">
              <h4>Assignements</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-sm-6">
          <a href="#">
            <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="hidden-content">
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div class="showed-content">
              <h4>Exams</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services