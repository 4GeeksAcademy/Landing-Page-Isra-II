import React from "react";
import Banner from "./Banner";
import Intro from "../Intro";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const BodyComponent = () => {
  return (
    <div className="container-fluid  justify-content-center  mt-3">
      <ul
        className="nav nav-pills mb-3 justify-content-center  "
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Servicios
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-galery"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Galería
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contacto
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        >
          <Intro />
          <Banner />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
          <Services />
        </div>
        <div
          className="tab-pane fade"
          id="pills-galery"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        >
          <Gallery />
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        >
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BodyComponent;
