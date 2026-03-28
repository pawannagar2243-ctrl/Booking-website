import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function OurServices() {

  
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // 🔥 scroll pe baar-baar chalega
    offset: 120,   // scroll par thoda delay se trigger
  });
}, []);
  return (
    <>
     <section
      className="d-flex align-items-center"
      style={{
        height: "400px",
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
            Our Services
          </h1>

        </div>

      </div>
    </section>
	<section style={{ background: "#f5f5f5", padding: "70px 0",backgroundColor:"#fff" }}>

      {/* HEADING */}
      <div className="text-center mb-5">
        <h1 style={{ color: "#ff7a59", fontWeight: "bold" }}>
          Our Focus Services
        </h1>
        <p className="text-muted text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque.
        </p>
      </div>

      <div className="container">
        <div className="row g-5 text-center">

          {/* LEFT CARD */}
          <div className="col-md-4" data-aos="fade-up">
            <img src="unsplash-image.webp" className="img-fluid"style={{ height: "220px", width: "100%", objectFit: "cover" }}data-aos="fade-up"/>
			<div className="p-4" data-aos="fade-up"style={{backgroundColor:"#F5F5F5"}}>
				<h3 data-aos="fade-up" style={{ color: "#ff7a59" }}>Family Package</h3>
				<p className="text-muted"data-aos="fade-up">
				  Sed ut perspiciatis unde omnis <br /> iste natus error sit voluptatem <br />accusantium doloremque.
				</p>

				<button className="btn-dark-outline-1 text-white px-4"data-aos="fade-up"
				  >
				  <a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Book A Day </a>
				</button>
            </div>
          </div>

          {/* MIDDLE CARD */}
          <div className="col-md-4" data-aos="fade-up">
            <img src="unsplash-image (1).webp" className="img-fluid"style={{ height: "220px", width: "100%", objectFit: "cover" }}data-aos="fade-up"/>
			<div className="p-4"style={{backgroundColor:"#F5F5F5"}}data-aos="fade-up">
				<h3 style={{ color: "#ff7a59" }}data-aos="fade-up">Wedding Package</h3>
				<p className="text-muted text-center"data-aos="fade-up">
				  Sed ut perspiciatis unde omnis <br /> iste natus error sit voluptatem <br />accusantium doloremque.
				</p>

				<button className="btn-dark-outline-1 text-white px-4"data-aos="fade-up">
				  <a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Book A Day </a>
				</button>
			 </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-md-4" data-aos="fade-up">
            <img src="Students.webp" className="img-fluid"style={{ height: "220px", width: "100%", objectFit: "cover" }}data-aos="fade-up"/>
			<div className="p-4" style={{backgroundColor:"#F5F5F5"}}data-aos="fade-up">
				<h3 data-aos="fade-up" style={{ color: "#ff7a59" }}>Student Package</h3>
				<p className="text-muted"data-aos="fade-up">
				  Sed ut perspiciatis unde omnis <br /> iste natus error sit voluptatem <br />accusantium doloremque.
				</p>

				<button className="btn-dark-outline-1 text-white px-4"data-aos="fade-up">
				  <a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Book A Day </a>
				</button>
			</div>
          </div>

        </div>
      </div>

    </section>
	<section style={{ background: "#f5f5f5", padding: "60px 0" }}>      
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#d46a4b", letterSpacing: "2px", }}>
          Why Choose Us</h1>

        <h1 className="fw-semibold display-1 text-muted " style={{ fontSize: "15px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br /> accusantium doloremque.
        </h1>    
      </div>
      <div className="container-fluid">
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-12 col-md-4" data-aos="zoom-in-left" data-aos-delay="100">
            <div
              className="p-4 h-100 card-premium"
              style={{
                background: "#fff",
                borderLeft: "5px solid #ff7a59",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="d-flex align-items-start gap-3">
                <img
				  src="download3.svg"
				  alt=""
				  className="img-fluid"style={{width:"80px"}}
				/>
                <div>
                  <h5 className="fw-bold">Premium Service</h5>
                  <p className="text-muted mb-0">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4"data-aos="zoom-in-left" data-aos-delay="300">
            <div
              className="p-4 h-100 card-premium"
              style={{
                background: "#fff",
                borderLeft: "5px solid #ff7a59",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="d-flex align-items-start gap-3">
               <img
				  src="download2.svg"
				  alt=""
				  className="img-fluid"style={{width:"80px"}}
				/>
                <div>
                  <h5 className="fw-bold">Professional Photos</h5>
                  <p className="text-muted mb-0">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4" data-aos="zoom-in-left" data-aos-delay="600">
            <div
              className="p-4 h-100 card-premium"
              style={{
                background: "#fff",
                borderLeft: "5px solid #ff7a59",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="d-flex align-items-start gap-3">
                 <img
				  src="download 1.svg"
				  alt=""
				  className="img-fluid"style={{width:"80px"}}
				/>
                <div>
                  <h5 className="fw-bold">Details Perfection</h5>
                  <p className="text-muted mb-0">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                  </p>
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

export default OurServices
