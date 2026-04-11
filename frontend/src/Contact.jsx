import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import Toast from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "./SEO";
function Contact() {

  const [toast, setToast] = useState(null);
  const showToast = (message, type = "success") => setToast({ message, type }); 
  
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // 🔥 scroll pe baar-baar chalega
    offset: 120,   // scroll par thoda delay se trigger
  });
  AOS.refresh();
}, []);

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  subject: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submitting:", formData);

  // 🚨 STOP EMPTY SUBMIT
  if (
    !formData.firstName.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    showToast("Please fill required fields ❌", "error");
    return;
  }

  try {
    const res = await fetch("https://booking-website-1-oq4p.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      showToast("Message Sent ✅", "success");

      setFormData({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
      });

    } else {
      showToast(data.msg || "Error ❌", "error");
    }

  } catch (error) {
    console.log("Error:", error);
    showToast("Server error ❌", "error");
  }
};
  return (
    <>
	<SEO 
	  title="Magic of the moment|Contact Us"
	  description="Get in touch with us for wedding, birthday, and family photography bookings. Contact our professional photography team today."
	/>
	
	{toast && (
	  <Toast
		message={toast.message}
		type={toast.type}
		onClose={() => setToast(null)}
	  />
	)}
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
          <h2 
            className="text-white"
            style={{ fontSize: "30px",fontFamily: "serif"}}
          >
            Contact Us
          </h2>

        </div>

      </div>
    </section>
	<section>
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center "
            style={{ background: "#ffff" }}
            
          >
            <h2 style={{ color: "#ff7a59",fontWeight:"bold", fontSize: "48px", fontFamily: "serif" }}>
              Let's Get In Touch
            </h2>

            <div className="mt-4"data-aos="fade-right">

              <p className="d-flex align-items-center gap-3 fs-5">
                <FaMapMarkerAlt color="#ff7a59" />
                Los Angles Block 2A United States
              </p>

              <p className="d-flex align-items-center gap-3 fs-5">
                <FaPhoneAlt color="#ff7a59" />
                (+44) 445 444 49
              </p>

              <p className="d-flex align-items-center gap-3 fs-5">
                <FaEnvelope color="#ff7a59" />
                mail@yourmail.com
              </p>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="col-md-6 p-5"
            style={{ background: "#FF8A65" }}
            data-aos="fade-left"
          >
            <h2 className="text-white text-center mb-3"style={{fontWeight:"bold",fontFamily: "serif"}}>
              Leave A Message
            </h2>

            <p className="text-white text-center mb-4">
               Sed ut perspiciatis unde omnis iste natus <br />error sit voluptatem accusantium<br /> doloremque.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col" data-aos="fade-down">
                 <label className="mb-3">First Name</label>
                  <input name="firstName" onChange={handleChange} value={formData.firstName}  className="form-control"required  />
                </div>

                <div className="col" data-aos="fade-down" data-aos-delay="100">
                  <label className="mb-3">Last Name</label>
                  <input name="lastName" onChange={handleChange}value={formData.lastName} className="form-control"required  />
                </div>
              </div>

              <div className="mb-3" data-aos="fade-down" data-aos-delay="200">
                <label className="mb-3">Subject</label>
                <input name="subject"value={formData.subject} onChange={handleChange} className="form-control"required  />
              </div>

              <div className="mb-3" data-aos="fade-down" data-aos-delay="300">
                <label className="mb-3">Your e-mail:</label>
                <input
				  type="email"
				  name="email"
				  value={formData.email}
				  onChange={handleChange}
				  className="form-control"
				  placeholder="your@email.com"
				  required 
				/>
              </div>

              <div className="mb-3" data-aos="fade-down" data-aos-delay="400">
                <label className="mb-3">Message content:</label>
                <textarea
                  className="form-control"
				  name="message"
                  rows="5"
				  value={formData.message}
				  onChange={handleChange}
                  placeholder="Enter your message here"
				  required 
                ></textarea>
              </div>
			<div className="d-flex justify-content-center">
            <button
			  className="btn-dark-outline-3 px-4"data-aos-anchor-placement="top-bottom"data-aos="fade-down"data-aos-delay="100"
			  type="submit"
			>
			  SUBMIT
			</button>
			</div>
            </form>
          </div>

        </div>
      </div>
    </section>
	<section className="map-section">
	  <div className="container-fluid p-0">
		<iframe
		  src="https://www.google.com/maps?q=24.4339432,75.9863679&output=embed"
		  loading="lazy"
		  width="100%"
		  height="400"
		  style={{ border: 0 }}
		  allowFullScreen=""
		></iframe>
	  </div>
	</section>
	</>
  )
}

export default Contact
