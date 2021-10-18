import React from "react";

function Navbar() {
  return (
    <div>
      <div class="header-w3l">
        {/* <!--header--> */}
        <header id="site-header" class="header-w3l fixed-top">
          <div class="container">
            <nav class="navbar navbar-expand-lg stroke">
              <a class="navbar-brand" href="/">
                <span class="sub-logo">Santhwanam</span>
                <span> Cherukattoor</span>
              </a>
              {/* <!-- if logo is image enable this   
            <a class="navbar-brand" href="#index.html">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </a> --> */}
              <button
                class="navbar-toggler  collapsed bg-gradient"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                  <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </span>
              </button>

              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mx-lg-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="products.html">
                      Products
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li class="search-bar ml-lg-3 mr-lg-5 mt-lg-0 mt-4">
                    {/* <!--/search-right--> */}
                    <form
                      class="search position-relative"
                      action="/search"
                      method="POST"
                    >
                      <input
                        type="submit"
                        value="See Our Gallery               "
                        class="search__input"
                        name="search"
                        placeholder=" Our Gallery.."
                        onload="equalWidth()"
                        required=""
                      />
                      <span class="fa fa-camera-retro search__icon"></span>
                    </form>

                    {/* <!--//search-right--> */}
                  </li>
                </ul>
              </div>
              {/* <!-- toggle switch for light and dark theme --> */}
              <div class="mobile-position">
                <nav class="navigation">
                  <div class="theme-switch-wrapper">
                    <label class="theme-switch" for="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div class="mode-container">
                        <i class="gg-sun"></i>
                        <i class="gg-moon"></i>
                      </div>
                    </label>
                  </div>
                </nav>
              </div>
              {/* <!-- //toggle switch for light and dark theme --> */}
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
