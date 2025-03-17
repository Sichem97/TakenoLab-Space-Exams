import React from 'react'
import { Link} from 'react-router-dom'
import QuizData from './QuizData'

function Quiz() {
  return (
    <div className='our-portfolio section'>
        <section class="section section-sm section-first bg-default text-center" id="services">
        <div class="container">
          <div class="row row-30 justify-content-center">
            <div class="col-md-7 col-lg-5 col-xl-6 text-lg-left wow fadeInUp">
                <h1 class="box-icon-modern-title">
                    <Link>QUIZ<br/>SPACE</Link>
                </h1>
                <div className='note'>
                <h5><span>Note :</span></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat vitae quaerat facere recusandae, soluta laborum rem delectus qui tempore architecto amet totam perferendis, tenetur expedita cupiditate cumque molestias accusamus saepe laboriosam quae alias nam? Unde magnam voluptatum, aliquam molestiae ipsa atque alias quibusdam, ea voluptatibus, est cum quis aut odio fugiat repellendus eaque fugit eos repellat perferendis? Quaerat ex quod odio blanditiis? Fugit deserunt iure error odio accusantium similique consequuntur quod sit quos molestias, corporis, adipisci eum sed perferendis minima molestiae quisquam! Similique a iusto nulla quia consequuntur labore.</p>
                </div>
            </div>
            
            <div class="col-lg-7 col-xl-6">
              <div class="row row-30">
                {
                  QuizData.map((assign)=>(
                    <div class="col-sm-6 wow fadeInRight" data-wow-delay=".1s">
                  <Link>
                  <article class="box-icon-modern box-icon-modern-2">
                    <div class="box-icon-modern-icon linearicons-phone-in-out"></div>
                    <h5 class="box-icon-modern-title">
                        {assign.title}
                    </h5>

                    <span class="box-icon-modern-title">
                        {assign.duration} min
                    </span>

                    <div class="box-icon-modern-decor"></div>
                    <p class="box-icon-modern-text">By {assign.Author}</p>
                  </article>
                  </Link>
                </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Quiz