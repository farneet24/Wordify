import React from "react";

function Footer(props) {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      {/* <div class="container my-5"> */}
      <br />
      <br />
      <br />
      <footer class={`bg-dark text-center text-lg-start text-white`}>
        {/* <!-- Grid container --> */}
        <div class="container p-4">
          {/* <!--Grid row--> */}
          <div class="row my-4">
            {/* <!--Grid column--> */}
            <div
              class="col-lg-3 col-md-6 mb-4 mb-md-0"
              style={{ backgroundColor: "transparent" }}
            >
              <div
                class="bg-dark d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img
                  src="https://i.ibb.co/FbGPSq7/pngtree-letter-w-logo-png-png-image-3045051-fotor-bg-remover-20230404232758.png"
                  height="150"
                  alt="Wordify Logo"
                  title="Wordify"
                />
              </div>

              <p class="text-center">
                Unleash your creativity and let your words come to life with
                Wordify
              </p>

              <ul class="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a class="text-white px-2" href="https://www.linkedin.com/in/farneet-singh-6b155b208/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a class="text-white px-2" href="https://www.instagram.com/farneetsingh7/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="text-white ps-2" href="https://github.com/farneet24" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 mx-5">ML Projects</h5>

              <ul class="list-unstyled">
                <li class="mb-2">
                  <a
                    href="https://thread-mind.vercel.app/"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="fa-regular fa-file-lines pe-3"></i>ThreadMind
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://farneet24-sms-spam-app-r53bi4.streamlit.app/"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="fa-regular fa-message pe-3"></i>SMS/Email Spam
                    Analyzer
                  </a>
                </li>
                <li class="mb-2 text-white">
                  <a
                    href="https://farneet24-chatanalyzer-app-pi7gil.streamlit.app/"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="fa-solid fa-chart-simple pe-3"></i>WhatsApp Chat
                    Analyzer
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 mx-3 px-2">Web-D Projects</h5>

              <ul class="list-unstyled">
                <li class="mb-2">
                  <a
                    href="#!"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="fa-sharp fa-regular fa-clipboard pe-3"></i>
                    Scribble-Notes Keeper
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://news-daily-swart.vercel.app/"
                    class="text-white"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="fa-regular fa-newspaper pe-3"></i>NewsDaily
                  </a>
                </li>
                <li class="mb-2">
                    <i class="fa-solid fa-file-word pe-3"></i>Wordify
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 mx-4 px-5">Contact</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-map-marker-alt pe-3"></i>New Delhi, Delhi, India
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope pe-3 mb-0"></i>
                    farneetsingh.abhi@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: Farneet Singh
        </div>
        {/* <!-- Copyright --> */}
      </footer>

      {/* <!-- End of .container --> */}
    </div>
  );
}

export default Footer;
