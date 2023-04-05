import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function About(props) {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#191919",
    backgroundColor: props.mode === "dark" ? "#191919" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3 text-center"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          animation: "fadeInUp 1s forwards",
        }}
      >
        About Us
      </h1>
      <br />
      <br />
      <div>
        <div className="row">
          <div
            className="col-md-6 order-md-1 order-2 d-flex align-items-center fade-in"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <p className="lead">
              Welcome to Wordify! We are a dynamic platform designed to help you
              create error-free content with ease. <br />
              <br /> Discover the endless possibilities with our feature-packed
              website - designed to enhance your experience with customizable
              text, Grammarly integration, and versatile light/dark modes.
            </p>
          </div>
          <div className="col-md-6 order-md-2 order-1 d-flex align-items-center">
            <img
              className="img-fluid"
              src="https://cdn.questionpro.com/userimages/site_media/text-analysis.png"
              alt="Text Analysis"
              height="4px"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <h1
      className="text-center"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          animation: "fadeInUp 1s forwards",
        }}
      >
        Our Features
      </h1>
      <br />
      <br />
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Text Analysis</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              {/* <img src="https://cdn.questionpro.com/userimages/site_media/text-analysis.png" alt="Text Analysis" className='mx-2' height='100px' /> */}
              You can analyze your text quickly and efficiently, including word
              count, character count, and more. So whether you're a student, a
              professional, or just looking to improve your writing, we're here
              to help. Try our tool today and see how it can help you!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>
                Grammar, Punctuation, and Spelling Checking using Grammarly
              </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Grammarly integration enables our website to provide automatic
              grammar, punctuation, and spelling corrections for a better user
              experience. The website aims to provide Grammarly's advanced
              capabilities and other features to ensure that your text is
              polished and professional.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our website is fully browser compatible, ensuring that you can
              access and use it seamlessly across all major web browsers
              including Chrome, Firefox, Safari, and Edge. So no matter which
              browser you prefer to use, you can be confident that our website
              will function perfectly for you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              data-bs-parent="#accordionExample"
              aria-controls="collapseFour"
            >
              <strong>Customizable Light/Dark Mode Functionality</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
            Experience a comfortable viewing experience with our customizable light/dark mode feature. With a simple toggle switch, you can switch between light and dark mode to suit your personal preferences and reduce eye strain. Whether you prefer a bright and energetic interface or a calming and muted one, our website will adapt to your needs. Give your eyes the break they deserve and enjoy a seamless browsing experience with our light/dark mode feature.
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
