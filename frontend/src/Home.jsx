import './App.css'
import React, {useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const [play, setPlay] = useState(false);
	 useEffect(() => {
	  AOS.init({
		duration: 1000,
		once: false,   // 🔥 scroll pe baar-baar chalega
		offset: 120,   // scroll par thoda delay se trigger
	  });
	}, []);
  return (
    <>
	 <section className="d-flex align-items-center justify-content-center text-center text-white"
      style={{height:"600px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('professional-camera-close-up-photographer-s-desktop-blurred-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container px-3" style={{marginTop:"-100px",fontFamily: "serif"}}>
        <h1 className="fw-bold  display-1">
          Capture Your Precious Moments With Us
        </h1>
        
       <div className="d-flex justify-content-center gap-5">
		  <button className="btn-dark-outline-1">
			<a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Book A Day </a>
		  </button>
		  <button
			className=" px-4 py-2 border btn-outline w-"
			style={{ }}
		  >
			<a className="nav-link fs-4 " href="/Gallery"> See Gallery </a>
		  </button>
       </div>
	</div>
    </section>
	<section style={{ background: "#f5f5f5", padding: "60px 0" }}>
	  <div className="container-fluid px-3 px-md-0">
		<div className="row g-3">

		  {/* Card 1 */}
		  <div className="col-12 col-md-4">
			<div className="event-card"style={{ backgroundImage: 'url("1024_nylwfn_img_25b030765020c48ecf6598d7d654a507 (1).jpg")' }}>
			  <div className="overlay"></div>
			  <div
				className="content text-center"
				data-aos="fade-down"
				data-aos-delay="100"
			  >
				<h2>Wedding Event</h2>
				<button className="btn-outline">
				  <a href="/Contact" className="text-white text-decoration-none">
					Book A Day
				  </a>
				</button>
			  </div>
			</div>
		  </div>

		  {/* Card 2 */}
		  <div className="col-12 col-md-4">
			<div className="event-card family"style={{ backgroundImage: 'url("1000_nylwfn_img_1e1f85de9cad09b8a499730f8f1c9312.jpg")' }}>
			  <div className="overlay light"></div>
			  <div className="content dark text-center" data-aos="fade-down">
				<h2>Family Event</h2>
				<button className="btn-dark-outline">
				  <a href="/Contact" className="text-black text-decoration-none">
					Book A Day
				  </a>
				</button>
			  </div>
			</div>
		  </div>

		  {/* Card 3 */}
		  <div className="col-12 col-md-4">
			<div className="event-card"style={{ backgroundImage: 'url("640_nylwfn_img_fc338f8a9f5c1cd944b724fad9155320.jpg")'}}>
			  <div className="overlay"></div>
			  <div className="content text-center" data-aos="fade-down">
				<h2>Birthday Party</h2>
				<button className="btn-outline">
				  <a href="/Contact" className="text-white text-decoration-none">
					Book A Day
				  </a>
				</button>
			  </div>
			</div>
		  </div>

		</div>
	  </div>
	</section>
  <section className="py-5"style={{ background: "#f5f5f5"}}>
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h1
              className="fw-bold"
              style={{
                color: "#ff7a59",
                fontSize: "40px",
              }}
            >
              Best Indoor Photo Studio
            </h1>

            <p
              className="text-muted mt-3 fw-semibold"
              style={{ lineHeight: "1.6" }}
            >
             Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis sed. Praesent nec feugiat velit, sit amet tempor justo. Suspendisse ac imperdiet urna, sed faucibus felis. Praesent fringilla sem non ligula venenatis laoreet. In sed iaculis eros. Aliquam laoreet erat volutpat eleifend varius. Nulla ultrices, urna interdum tincidunt ullamcorper.
            </p>

            <button
              className="btn-dark-outline-1 mt-4 text-white">
             <a className="nav-link fs-4 " href="/Gallery"> See Gallery </a>
            </button>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-6"data-aos="fade-left">
            <img
              src="photography-studio.webp"
              alt="studio"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </section>
	<section className="d-flex align-items-center justify-content-center text-center text-white" data-aos="zoom-in"
      style={{height:"400px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('1920_nylwfn_img_8bc5b1aff40e9fe245f87baab3141be2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container px-3" data-aos="fade-down">
        <h1 className="fw-bold">
          Pro Wedding Photo & Video Package
        </h1>
        <p className="lead mx-auto justify-content-center text-center" style={{ maxWidth: "790px" }}>
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau.dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br />architecto beatae vitae dicta sunt explicabo.
        </p>
       <div className="d-flex justify-content-center">
		  <button className="btn-dark-outline-1">
			<a className="nav-link text-white fs-4 align-items-center" href="/Contact"> Contact Us</a>
		  </button>
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
          <div className="col-12 col-md-4"data-aos="fade-right" data-aos-delay="200">
            <div
              className="p-4 h-100"
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
          <div className="col-12 col-md-4"data-aos="fade-right" data-aos-delay="400">
            <div
              className="p-4 h-100"
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
          <div className="col-12 col-md-4" data-aos="fade-right" data-aos-delay="600">
            <div
              className="p-4 h-100"
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
	<section style={{ background: "#f5f5f5"}} className="align-items-center justify-content-center text-center " data-aos="zoom-in">
      <div className="container">

        {!play ? (
          /* 🔥 IMAGE PREVIEW */
          <div
            className="position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => setPlay(true)}
          >
            <img
              src="Video.webp"
              alt="video"
              className="rounded"style={{height:"500px",width:"100%"}}
            />

            {/* ▶ Play Button */}
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
              style={{
                width: "100px",
                height: "70px",
                background: "rgba(255,255,255,0.8)",
                borderRadius: "20%",
              }}
            >
              <FaPlay size={30} color="#333" />
            </div>
          </div>
        ) : (
          /* 🔥 VIDEO */
          <div className="ratio ratio-16x9">
		    <iframe
			  className="w-100"
			  height="400"
			  src="https://www.youtube.com/embed/qfX_OUVogtY?autoplay=1"
			  title="video"
			  allow="autoplay; encrypted-media"
			  allowFullScreen
			></iframe>
		</div>
        )}

      </div>
    </section>
	<section style={{ background: "#f5f5f5", padding: "80px 0" }}>
      
      {/* Heading */}
      <div className="text-center mb-5">
        <h1
          className="fw-bold"
          style={{ color: "#ff7a59", fontSize: "48px" }}
        >
          What Customers Say
        </h1>
      </div>

      {/* Card */}
      <div className="container">
        <div
          className="mx-auto text-center p-5"data-aos="fade-up"
          style={{
            background: "#fff",
            maxWidth: "900px",
            borderRadius: "5px",
			fontStyle:"italic",
          }}
        >
          <p
            className="text-black fst-italic display-1"
            style={{ fontSize: "27px", lineHeight: "1.3" }}
          >
            Duis congue lectus vel rutrum facilisis. In hac habitasse platea
            dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis
            sed. Praesent nec feugiat velit, sit amet tempor justo.
          </p>
        </div>

        {/* Profile */}
        <div className="text-center"data-aos="zoom-in" style={{marginTop:"-35px"}}>
          <img
            src="example13.webp"
            alt="user"
            className="rounded-circle"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />

          <h6 className=" mb-0 text-muted">Ann Smith</h6>
          <p style={{ color: "#ff7a59" }}>Client</p>
        </div>
      </div>

    </section>
	</>
  )
}

export default Home
