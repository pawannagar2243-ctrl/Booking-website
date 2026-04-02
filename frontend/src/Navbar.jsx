import { useState } from 'react'
import './App.css'
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar bg-white px-4 py-2 shadow-sm">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <div className="d-flex align-items-center">
            <img src="download2.svg" alt="Photographer Logo"style={{ width: "50px" }} />
            <span className="ms-2 fw-bold fs-4">Photographer</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="d-none d-lg-flex align-items-center gap-5 ">

            <Link to="/" className="text-dark text-decoration-none fw-semibold fs-5">Home</Link>
            <Link to="/AboutUs"className="text-dark text-decoration-none fw-semibold fs-5">About Us</Link>
            <Link to="/OurServices" className="text-dark text-decoration-none fw-semibold fs-5">Our Services</Link>
            <Link to="/Gallery"className="text-dark text-decoration-none fw-semibold fs-5">Gallery</Link>
            <Link to="/Contact"className="text-dark text-decoration-none fw-semibold fs-5">Contact</Link>

            {/* SOCIAL */}
            <div className="d-flex gap-3 ms-3">
              <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://m.me/Pawan Nagar">
			  <FaFacebookF className=""style={{width:"30px",fontSize:"20px",color:"#ff7a59"}}/>
			  </a>
			  
              <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://twitter.com/pawannagar2243">
			  <FaTwitter className=""style={{width:"30px",fontSize:"20px",color:"#ff7a59"}} />
			  </a>
			  
              <a className="nav-link text-white fs-4 align-items-center"target="_blank" href="https://www.instagram.com/pawannagar902/direct/inbox/">
			  <FaInstagram className=""style={{width:"30px",fontSize:"20px",color:"#ff7a59"}} />
			  </a>
            </div>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="btn d-lg-none"
            onClick={() => setOpen(true)}
          >
            <FaBars size={25} />
          </button>

        </div>
      </nav>

      {/* MOBILE POPUP MENU */}
      {open && (
        <div
          className="position-fixed rounded top-0 end-0 w-50 h-50 text-black d-flex flex-column"
          style={{ background: "#ffff", zIndex: 999 }}
        >

          {/* CLOSE */}
          <div className="d-flex justify-content-end p-4">
            <FaTimes size={30} onClick={() => setOpen(false)} style={{ cursor: "pointer" }} />
          </div>

          {/* MENU */}
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-4">

            <Link to="/"className="text-black fs-2 text-decoration-none" onClick={()=>setOpen(false)}>Home</Link>
            <Link to="/AboutUs"className="text-black fs-2 text-decoration-none" onClick={()=>setOpen(false)}>About Us</Link>
            <Link to="/OurServices"className="text-black fs-2 text-decoration-none" onClick={()=>setOpen(false)}>Our Services</Link>
            <Link to="/Gallery" className="text-black fs-2 text-decoration-none"onClick={()=>setOpen(false)}>Gallery</Link>
            <Link to="/Contact" className="text-black fs-2 text-decoration-none"onClick={()=>setOpen(false)}>Contact</Link>

          </div>

        </div>
      )}
    </>
  )
}

export default App;
