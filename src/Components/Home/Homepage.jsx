import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>Welcome to TakenoLAB HUB space</h6>
                <h2>Find <em>Assignements</em> &amp; <span>Exams</span> here</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum adipisci non, tempora iste repudiandae delectus voluptas dignissimos. Odit exercitationem nobis laborum facere maxime qui corporis iure vitae unde et.</p>
                <form id="search" action="#" method="GET">
                  <fieldset>
                    <input type="address" name="address" class="email" placeholder="Here for assignement?" autocomplete="on" required disabled/>
                  </fieldset>
                  <fieldset>
                    <button type="submit" class="main-button"><Link to='/Services'>Find here</Link></button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="./assets/logo.png" alt="takenoLAB logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Homepage