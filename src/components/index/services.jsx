import React from 'react';
import Ab from '../images/ab.jpg'

function Services() {
  return (
    <div>
      {/* <!-- /w3l-content-2--> */}
  <div class="w3l-content-2 py-5">
    <div class="container py-md-5 py-2">
      <div class="row whybox-wrap">
        <div class="col-lg-6 whybox-wrap-left">
          <div class="title-content text-left">
            <h6 class="title-subhny">Extraordinary Services</h6>
            <h3 class="title-w3l mb-sm-5 mb-4 pb-2">Why You Should Choose Santhwanam?</h3>
          </div>

          <div class="whybox-wrap-grid mb-4">
            <div class="icon">
              <span class="fa fa-check"></span>
            </div>
            <div class="info">
              <h4><a href="about.html">High-quality Funeral Services</a></h4>
              <p class="mt-3">We are here to help you create an honour that is elite and personalized for you and your loved one.</p>
            </div>
          </div>
          <div class="whybox-wrap-grid mb-4">
            <div class="icon">
              <span class="fa fa-handshake-o"></span>
            </div>
            <div class="info">
              <h4><a href="about.html">Best Class Funeral Services</a></h4>
              <p class="mt-3">Our team is a highly experienced group of professionals committed to providing support and compassion. </p>
            </div>
          </div>
          <div class="whybox-wrap-grid mb-4">
            <div class="icon">
              <span class="fa fa-hand-o-up"></span>
            </div>
            <div class="info">
              <h4><a href="about.html">One Stop Funeral Solutions</a></h4>
              <p class="mt-3">At-need and pre-plan funeral service provider for people of all religions and communities. </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 whybox-wrap-right pl-lg-5 position-relative mt-lg-0 mt-4">
          <img style={{paddingLeft: 10}} src={Ab} alt="just" class="img-fluid radius-image" />
        </div>
      </div>

    </div>
  </div>
  {/* <!-- //w3l-content-2--> */}
  {/* <!-- /w3l-content-4--> */}
  <section class="w3l-content-4 py-5" id="features">
    <div class="content-4-main py-lg-5 py-md-4">
      <div class="container">
        <div class="title-content text-center">
          <h6 class="title-subhny">Extraordinary Services</h6>
          <h3 class="title-w3l mb-sm-5 mb-4 pb-lg-2">Our Services.</h3>
        </div>
        <div class="content-info-in row">
          <div class="content-left col-lg-6">
            <div class="row content4-right-grids mb-sm-5 mb-4">
              <div class="col-lg-2 col-3 content4-right-icon">
                <div class="content4-icon icon-clr1">
                  <span class="fa fa-ambulance"></span>
                </div>
              </div>
              <div class="col-lg-10 col-9 content4-right-info pl-4">
                <h6><a href="about.html">Ambulance Services</a></h6>
                <p>LCoping with the loss of a loved one is one of the most terrible experiences a person can have, and organising their funeral and last rites may be even more difficult.</p>
              </div>
            </div>
            <div class="row content4-right-grids mb-sm-5 mb-4">
              <div class="col-lg-2 col-3 content4-right-icon">
                <div class="content4-icon icon-clr2">
                  <span class="fa fa-medkit"></span>
                </div>
              </div>
              <div class="col-lg-10 col-9 content4-right-info pl-4">
                <h6><a href="about.html">Funeral Services</a></h6>
                <p>The grief of losing a loved one is one that no one should ever have to go through. It’s a pain that can’t be described or quantified. Even if the sorrow of loss is unavoidable, it nonetheless leaves one distraught. We will always feel sympathy for the families who are going through difficult times.</p>
              </div>
            </div>
          </div>
          <div class="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-2">
            <div class="row content4-right-grids mb-sm-5 mb-4">
              <div class="col-lg-2 col-3 content4-right-icon">
                <div class="content4-icon icon-clr3">
                  <span class="fa fa-heartbeat"></span>
                </div>
              </div>
              <div class="col-lg-10 col-9 content4-right-info pl-4">
                <h6><a href="about.html">Dead Body Transpotations</a></h6>
                <p>The demise of a loved one brings with it a lot of responsibilities that you may need to take care of. Out of everything, the dead body transport service or ambulance services of your loved one are the most crucial.</p>
              </div>
            </div>
            <div class="row content4-right-grids mb-sm-5 mb-4">
              <div class="col-lg-2 col-3 content4-right-icon">
                <div class="content4-icon icon-clr4">
                  <span class="fa fa-plus-circle"></span>
                </div>
              </div>
              <div class="col-lg-10 col-9 content4-right-info pl-4">
                <h6><a href="about.html"> Freezer Services</a></h6>
                <p>A dead body freezer box is available for hire through The Santhwanam Cherukattoor services. They’re made with the intention of preserving the body of the departed. The body may begin to deteriorate and have a foul odour soon after death.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Services
