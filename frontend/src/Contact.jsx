import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Toast from "./Toast";
import SEO from "./SEO";

function Contact() {

  // ✅ Toast Fix (name conflict solved)
  const [toastData, setToastData] = useState(null);
  const showToast = (message, type = "success") =>
    setToastData({ message, type });

  // ✅ Loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });
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

    // ✅ Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      showToast("Please fill required fields ❌", "error");
      return;
    }

    setLoading(true);

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

        // ✅ Reset form
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          message: "",
        });

      } else {
        showToast("Error ❌", "error");
      }

    } catch (error) {
      showToast("Server error ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Magic of the moment | Contact Us"
        description="Get in touch with us for wedding, birthday, and family photography bookings."
      />

      {/* ✅ Toast */}
      {toastData && (
        <Toast
          message={toastData.message}
          type={toastData.type}
          onClose={() => setToastData(null)}
        />
      )}

      {/* HERO */}
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
        <div className="container-fluid" data-aos="fade-right">
          <div className="d-flex align-items-center">
            <div style={{ width: "5px", height: "60px", background: "#ff7a59", marginRight: "10px" }} />
            <h2 className="text-white" style={{ fontSize: "30px", fontFamily: "serif" }}>
              Contact Us
            </h2>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <div className="container">
          <div className="row">

            {/* LEFT */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 style={{ color: "#ff7a59", fontWeight: "bold", fontSize: "48px", fontFamily: "serif" }}>
                Let's Get In Touch
              </h2>

              <div className="mt-4" data-aos="fade-right">
                <p className="d-flex align-items-center gap-3 fs-5">
                  <FaMapMarkerAlt color="#ff7a59" />
                  Los Angeles, USA
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

            {/* FORM */}
            <div className="col-md-6 p-5" style={{ background: "#FF8A65" }} data-aos="fade-left">
              <h2 className="text-white text-center mb-3" style={{ fontWeight: "bold", fontFamily: "serif" }}>
                Leave A Message
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-dark px-4"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "SUBMIT"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section>
        <iframe
          src="https://www.google.com/maps?q=Los+Angeles&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>
    </>
  );
}

export default Contact;
