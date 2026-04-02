import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from "./SEO";
function AboutUs() {
      const [years, setYears] = useState(0);
	  const [team, setTeam] = useState(0);
	  const [clients, setClients] = useState(0);

  useEffect(() => {
    let y = 0, t = 0, c = 0;

    const interval = setInterval(() => {
      if (y < 10) y++;
      if (t < 20) t++;
      if (c < 500) c += 10;

      setYears(y);
      setTeam(t);
      setClients(c);

      if (y >= 10 && t >= 20 && c >= 500) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);
  
   useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // 🔥 scroll pe baar-baar chalega
    offset: 120,   // scroll par thoda delay se trigger
  });
}, []);
  return (
    <>
	 <SEO
        title="Magic of the moment|About Us"
        description="Learn more about our photography services and team."
      />
     <section
      className="d-flex align-items-center"
      style={{
       minHeight: "400px",
       padding: "60px 0",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('1620_nylwfn_img_b9c500aba9f8c3135ff783f3e3d8f0f9.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid " data-aos="fade-right">

        <div className="d-flex align-items-center">
          
          {/* Orange Line */}
          <div
            style={{
              width: "5px",
              height: "60px",
              background: "#ff7a59",
              marginRight: "10px",
            }}
          ></div>

          {/* Text */}
          <h1
            className="text-white"
            style={{ fontSize: "30px",fontFamily: "serif"}}
          >
            About Us
          </h1>

        </div>

      </div>
    </section>
	<section className="py-5"style={{ background: "#f5f5f5"}}>
      <div className="container-fluid">
        <div className="row align-items-center px-4">

          {/* LEFT */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0"data-aos="fade-right">
            <h1
              className="fw-bold "
              style={{
                color: "#ff7a59",
                fontSize: "50px",
				fontFamily: "serif",
              }}
            >
              Learn More About What We Work For You
            </h1>

            <p className="text-muted mt-3 fs-5"
              style={{ lineHeight: "1.6",fontFamily: "serif", }}
            >
				Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis sed. Praesent nec feugiat velit, sit amet tempor justo. Suspendisse ac imperdiet urna, sed faucibus felis. Praesent fringilla sem non ligula venenatis laoreet. In sed iaculis eros. Aliquam laoreet erat volutpat eleifend varius. Nulla ultrices, urna interdum tincidunt ullamcorper.
            </p>

            <button className="btn-dark-outline-1 mt-4 text-white">
              <a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Contact Us</a>
            </button>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-6"data-aos="fade-left">
            <img
              src="Camera.webp"
              alt="studio"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
	<section style={{ background: "#ff7a59", padding: "50px 0" }}data-aos="fade-up">
      <div className="container">
        <div className="row text-center text-white">

          {/* 1 */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h1 className="fw-bold display-1">{years}</h1>
            <h5 className="mt-3 text-muted">Years Of Experience</h5>
          </div>

          {/* 2 */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h1 className="fw-bold display-1">{team}</h1>
            <h5 className="mt-3 text-muted">Best Of Team</h5>
          </div>

          {/* 3 */}
          <div className="col-12 col-md-4">
            <h1 className="fw-bold display-1">{clients}</h1>
            <h5 className="mt-3  text-muted">Happy Clients</h5>
          </div>

        </div>
      </div>
    </section>
	      <section style={{ background: "#f5f5f5", padding: "60px 0" }}>
        
        {/* HEADING */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#ff7a59" }}>
            Happy Clients
          </h1>
        </div>

        <div className="container">
          <div className="row g-5">

            {/* CARD 1 - LEFT */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white shadow position-relative">
                {/* QUOTE */}
                <div data-aos="fade-up"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "20px",
                    background: "#ff7a59",
                    color: "#343434",
                    padding: "10px 20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="download 5.svg"
                    alt="quote icon"
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>

                <p className="text-muted mt-4" data-aos="fade-up">
                  Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis sed. Praesent nec feugiat velit, sit amet tempor justo.
                </p>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">Ann Smith</h6>
                    <small style={{ color: "#ff7a59" }}>Client</small>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 - BOTTOM */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white shadow position-relative">

                <div data-aos="fade-up"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "20px",
                    background: "#ff7a59",
                    color: "#343434",
                    padding: "10px 20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="download 5.svg"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>

                <p className="text-muted mt-4" data-aos="fade-up">
                  Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis sed. Praesent nec feugiat velit, sit amet tempor justo.
                </p>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">Jamie Britton</h6>
                    <small style={{ color: "#ff7a59" }}>Client</small>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 - RIGHT */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white shadow position-relative">

                <div data-aos="fade-up"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "20px",
                    background: "#ff7a59",
                    color: "#343434",
                    padding: "10px 20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="download 5.svg"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>

                <p className="text-muted mt-4"data-aos="fade-up">
                  Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis sed. Praesent nec feugiat velit, sit amet tempor justo.
                </p>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">Evelyn Curtis</h6>
                    <small style={{ color: "#ff7a59" }}>Client</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
	</>
  )
}

export default AboutUs
