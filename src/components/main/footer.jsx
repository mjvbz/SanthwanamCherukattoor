import React from 'react'

function Footer() {

      {/* <!-- move top --> */}
      <button onclick="topFunction()" id="movetop" title="Go to top">
      &#10548;
    </button>

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

  // <script src="assets/js/jquery-3.3.1.min.js"></script>
  // <script src="assets/js/theme-change.js"></script>

  // <script src="assets/js/owl.carousel.js"></script>

  
    $(document).ready(function () {
      $("#owl-demo2").owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          736: {
            items: 1,
            nav: false
          },
          991: {
            items: 2,
            margin: 30,
            nav: false
          },
          1080: {
            items: 3,
            nav: false
          }
        }
      })
    });

  
  // <script src="assets/js/jquery.waypoints.min.js"></script>
  // <script src=""></script>

  // <script src="assets/js/bootstrap.min.js"></script>

    $('.counter').countUp();

  {/* <!-- //stats number counter -->
  <!-- disable body scroll which navbar is in active --> */}
  <script>
    $(function () {
      $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
      })
    });
  </script>
  {/* <!-- disable body scroll which navbar is in active -->

  <!--/MENU-JS--> */}

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("click", function () {
      $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      };
      $(window).on("resize", function () {
        if ($(window).width() > 991) {
          $("header").removeClass("active");ht
        };
      });
    });

  {/* <!--//MENU-JS--> */}


  <script src="assets/js/bootstrap.min.js"></script>

  return (
    <div>
       {/* <!-- footer --> */}
  <section class="w3l-footer-29-main">
    <div class="footer-29 py-5">
      <div class="container py-lg-4">
        <div class="row footer-top-29">
          <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
            <div class="footer-logo mb-3">
              <a class="navbar-brand" href="/">Santhwanam</a>
            </div>
            <p>The Santhwanam Cherukattoor is a team of members working towards conducting dignified last rites for your loved one.</p>
            <ul class="mt-3">
              <li><a href="tel:+918075350621"><span class="fa fa-phone"></span> +(91) 8075350621</a></li>
              <li><a href="mailto:santhwanamcherukattoor@gmail.com" class="mail"><span class="fa fa-envelope-open-o"></span>
                  santhwanamcherukattoor@gmail.com</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

            <ul>
             <h6 class="footer-title-29">History</h6>
              <li><a href="about.html">About Us</a></li>
              <li><a href="blog.html"> Blog Posts</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
            <h6 class="footer-title-29">Useful Links</h6>
            <ul>
              <li><a href="#terms">Terms of service</a></li>
              <li><a href="#privacy"> Privacy policy</a></li>
            </ul>

          </div>
          <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
            <h6 class="footer-title-29">Contact Us Today </h6>
            <p>The demise of a loved one is one of the most painful experiences in human life. It is inevitable to happen at some stage of our lives.</p>

            <form action="#" class="subscribe" method="post">
              <button class="btn btn-style btn-primary w-100 mt-3">Message Us!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- //footer -->

  <!-- copyright --> */}
  <section class="w3l-copyright">
    <div class="container">
      <div class="row bottom-copies">
        <p class="col-lg-8 copy-footer-29">© 2021 Santhwanam Cherukattoor. All rights reserved. Design by <a
            href="https://santhwanamcherukattoor.com/" target="_blank">Santhwanam</a></p>

        <div class="col-lg-4 main-social-footer-29">
          <a href="#facebook" class="facebook"><span class="fa fa-whatsapp"></span></a>
          <a href="#twitter" class="twitter"><span class="fa fa-phone"></span></a>
          <a href="#instagram" class="instagram"><span class="fa fa-envelope"></span></a>
          <a href="https://goo.gl/maps/bHZMNkJSF2AMLvp78" class="linkedin"><span class="fa fa-map-marker"></span></a>
        </div>
      </div>
    </div>
  </section> 
    </div>
  )
}

export default Footer
