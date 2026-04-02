import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from "./SEO";
function Gallery() {

  
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
	  title="Magic of the moment |Gallery "
	  description="Explore our photography gallery including weddings, family and studio shoots."
	/>
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
            Gallery
          </h1>

        </div>

      </div>
    </section>
	<section style={{ background: "#ffff", padding: "60px 0" }}>      
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#d46a4b", letterSpacing: "2px", }}>
          Cinematic Wedding</h1>

        <h1 className="fw-semibold display-1 text-muted " style={{ fontSize: "15px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br /> accusantium doloremque.
        </h1>    
      </div>
	  <div className="container">
		<div className="row g-4">

		  {/* IMAGE 1 */}
		  <div className="col-12 col-md-4" data-aos="zoom-in-right">
			<img
			  src="unsplash-image (4).webp"
			   alt="wedding photoshoot couple" loading="lazy"
			  className="img-fluid w-100"
			  style={{ height: "250px", objectFit: "cover" }}
			/>
		  </div>

		  {/* IMAGE 2 */}
		  <div className="col-12 col-md-4" data-aos="zoom-in-up">
			<img
			  src="unsplash-image (5).webp"
			  alt="wedding photoshoot couple" loading="lazy"
			  className="img-fluid w-100"
			  style={{ height: "250px", objectFit: "cover" }}
			/>
		  </div>

		  {/* IMAGE 3 */}
		  <div className="col-12 col-md-4" data-aos="zoom-in-left">
			<img
			  src="unsplash-image (3).webp"
			  alt="wedding photoshoot couple" loading="lazy"
			  className="img-fluid w-100"
			  style={{ height: "250px", objectFit: "cover" }}
			/>
		  </div>

		</div>
	  </div>
  </section>
	<section style={{ background: "#f5f5f5", padding: "60px 0" }}>      
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#d46a4b", letterSpacing: "2px", }}>
          Child Photoshoot With Parents</h1>

        <h1 className="fw-semibold display-1 text-muted " style={{ fontSize: "15px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br /> accusantium doloremque.
        </h1>    
      </div>
	  <div className="container-fluid">
		 <div className="row g-4">

			{/* IMAGE 1 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image (2).webp"
				  alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 2 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7j2pd.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 3 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7iabi.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 4 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7hy0i.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>
			{/* IMAGE 5 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7h6ll.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 6 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7gtcl.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 7 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7ghe4.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 8 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i7g6s6.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>
			<div className="d-flex justify-content-center" >
		  <button className="btn-dark-outline-2"data-aos="zoom-in">
			<a href="/Contact" className="nav-link text-white" aria-label="Go to contact page">Contact</a>
		  </button>
       </div>
		  </div>
		</div>
	</section>
	<section style={{ background: "#ffff", padding: "60px 0" }}>      
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#d46a4b", letterSpacing: "2px", }}>
          Studio Photoshoot</h1>

        <h1 className="fw-semibold display-1 text-muted " style={{ fontSize: "15px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br /> accusantium doloremque.
        </h1>    
      </div>
	  <div className="container-fluid">
		 <div className="row g-4">

			{/* IMAGE 1 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i83goh.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 2 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i837nx.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 3 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i82mcm.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 4 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i81pl8.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>
			{/* IMAGE 5 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i81jbo.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 6 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i80v4h.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 7 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i80pp3.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>

			{/* IMAGE 8 */}
			<div className="col-12 col-md-3">
			  <div className="img-box">
				<img
				  src="unsplash-image-l7i80ggk.jpg"
				   alt="wedding photoshoot couple" loading="lazy"
				  className="img-fluid w-100"
				/>
			  </div>
			</div>
		  </div>
		</div>
	</section>
	</>
  )
}

export default Gallery
