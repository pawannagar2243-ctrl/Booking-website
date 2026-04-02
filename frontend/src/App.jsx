import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <BrowserRouter>

      {/* ✅ GLOBAL SEO */}
      <Helmet>
        <title>Photographer | Wedding & Event Photography</title>
        <meta
          name="description"
          content="Professional photographer for weddings, birthdays and family events. Book your special day with us."
        />
      </Helmet>

      <Navbar />

      {/* ✅ MAIN TAG (Accessibility Fix) */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App;
