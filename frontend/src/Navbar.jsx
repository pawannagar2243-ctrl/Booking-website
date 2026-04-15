import { useState } from 'react'
import './App.css'
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar bg-white px-4 py-2 shadow-sm" style={{fontFamily: "serif"}}>
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <div className="d-flex align-items-center">
            <img src="download2.svg" alt="Photographer Logo" style={{ width: "50px" }} />
            <span className="ms-2 fw-bold fs-4">Photographer</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="d-none d-md-flex align-items-center gap-5">
            <Link to="/" className="text-dark text-decoration-none fw-semibold fs-5">Home</Link>
            <Link to="/AboutUs" className="text-dark text-decoration-none fw-semibold fs-5">About Us</Link>
            <Link to="/OurServices" className="text-dark text-decoration-none fw-semibold fs-5">Our Services</Link>
            <Link to="/Gallery" className="text-dark text-decoration-none fw-semibold fs-5">Gallery</Link>
            <Link to="/Contact" className="text-dark text-decoration-none fw-semibold fs-5">Contact</Link>
            
            {/* SOCIAL */}
            <div className="d-flex gap-3 ms-3">
              <a className="nav-link" target="_blank" href="https://m.me/Pawan Nagar">
                <FaFacebookF style={{width:"30px", fontSize:"20px", color:"#ff7a59"}}/>
              </a>
              <a className="nav-link" target="_blank" href="https://twitter.com/pawannagar2243">
                <FaTwitter style={{width:"30px", fontSize:"20px", color:"#ff7a59"}} />
              </a>
              <a className="nav-link" target="_blank" href="https://www.instagram.com/pawannagar9023/direct/inbox/">
                <FaInstagram style={{width:"30px", fontSize:"20px", color:"#ff7a59"}} />
              </a>
            </div>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button className="btn d-md-none" onClick={() => setOpen(true)}>
            <FaBars style={{fontSize: "25px", color: "#000"}} />
          </button>

        </div>
      </nav>

      {/* OVERLAY (Dark Background) */}
      {/* Yeh layer menu kholne pe background ko dim karegi */}
      <div 
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent black
          zIndex: 998,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-in-out'
        }}
      />

      {/* MOBILE SIDEBAR MENU (Right Side) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0, // Right side se start
          width: '280px', // Image ki tarah partial width
          height: '100%',
          background: '#fff',
          zIndex: 999,
          transform: open ? 'translateX(0)' : 'translateX(100%)', // Right se slide logic
          transition: 'transform 0.3s ease-in-out',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.1)'
        }}
      >
        {/* CLOSE BUTTON */}
        <div 
          className="d-flex justify-content-between align-items-center p-3 border-bottom"
          style={{ height: '60px' }}
        >
          <span className="fw-bold fs-5">Menu</span>
          <FaTimes 
            style={{fontSize: "24px", cursor: "pointer"}} 
            onClick={() => setOpen(false)} 
          />
        </div>

        {/* MENU LINKS */}
        <div className="d-flex flex-column p-3 gap-2">
          <Link 
            to="/" 
            className="text-dark text-decoration-none p-2 fs-5 border-bottom" 
            onClick={()=>setOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/AboutUs" 
            className="text-dark text-decoration-none p-2 fs-5 border-bottom" 
            onClick={()=>setOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/OurServices" 
            className="text-dark text-decoration-none p-2 fs-5 border-bottom" 
            onClick={()=>setOpen(false)}
          >
            Our Services
          </Link>
          <Link 
            to="/Gallery" 
            className="text-dark text-decoration-none p-2 fs-5 border-bottom" 
            onClick={()=>setOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/Contact" 
            className="text-dark text-decoration-none p-2 fs-5 border-bottom" 
            onClick={()=>setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
