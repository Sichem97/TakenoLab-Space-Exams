import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    //  Header Area Start 
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            {/*  Logo Start  */}
            <a href="index.html" class="logo">
              <h4>takenoLAB <span>Exams</span></h4>
            </a>
            {/*  Logo End  */}

            {/*  Menu Start  */}
            <ul class="nav">
              <li class="scroll-to-section"><Link to='/' class="active">Home</Link></li>
              <li class="scroll-to-section"><Link to='/Services'>Services</Link></li>
              <li class="scroll-to-section"><div class="main-red-button"><Link to='Contact'>Feedback</Link></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
             {/* Menu End  */}

          </nav>
        </div>
      </div>
    </div>
  </header>
//    Header Area End 
  )
}

export default Header