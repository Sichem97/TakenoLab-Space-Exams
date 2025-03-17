import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
          <p>© Copyright 2025 takenoLAB HUB. All Rights Reserved. 
          
          <br/>Design: <Link>Pillar of Africa</Link></p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer