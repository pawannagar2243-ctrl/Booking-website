import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // 🔥 scroll pe baar-baar chalega
    offset: 120,   // scroll par thoda delay se trigger
  });
  AOS.refresh();
}, []);

  return (
    <footer
      style={{
        background: "#ff7a59",
        padding: "80px 0",
        textAlign: "center",
      }}
    >
      <div className="container">

        {/* MENU */}
        <div className="d-flex justify-content-center gap-5 mb-5 flex-wrap" data-aos="fade-down">
		  <Link className="menu-link text-dark text-decoration-none fs-5" to="/">Home</Link>
		  <Link className="menu-link text-dark text-decoration-none fs-5" to="/AboutUs">About us</Link>
		  <Link className="menu-link text-dark text-decoration-none fs-5" to="/OurServices">Our Services</Link>
		  <Link className="menu-link text-dark text-decoration-none fs-5" to="/Gallery">Gallery</Link>
		  <Link to="/Contact" className="menu-link text-dark text-decoration-none fs-5">Contact</Link>
		</div>

        {/* SOCIAL ICONS */}
        <div className="d-flex justify-content-center gap-4 mb-4" data-aos="zoom-in">
          <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://m.me/Pawan Nagar">
		  <FaFacebookF size={25} className=" menu-link text-dark" /></a>
          <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://www.instagram.com/pawannagar902/direct/inbox/">
		  <FaInstagram size={25} className="menu-link text-dark" /></a>
          <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://twitter.com/pawannagar2243">
		  <FaTwitter size={25} className="menu-link text-dark" /></a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-dark fs-5 mb-4" data-aos="fade-up">
          @2026 - All Right Reserved.
        </p>

        {/* BOTTOM TEXT */}
        <p className="text-white fs-4" data-aos="fade-up" data-aos-delay="200">
          Website made in WebWave builder.
        </p>

      </div>
    </footer>
  );
}

export default Footer;