import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom"; 
import Officiallogo from "./Assets/Officiallogo.jpg";
import BMWF90M5 from "./Assets/BMWF90M5.jpg"; // Fixed import
import McLaren720 from "./Assets/McLaren720.jpg";
import Porsche718 from "./Assets/Porsche718.jpg";
import Header from "./Components/Header";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles for carousel


function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={Officiallogo} alt="Official Logo" className="Official-logo" />
        <div className="Name">Budget Education and Consultancy</div>
        <div className=" Contact"> +44(0)7377139885 </div>
        <div className=" Contact2"> +44(0)7932337375 </div>

             {/* Social Media and Contact Icons */}
             <div className="social-icons">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:your-email@example.com">
            <MdEmail size={24} />
          </a>
          <a href="tel:+447377139885">
            <MdPhone size={24} />
          </a>
        </div>

      </header>


      {/* Main Navigation */}
      <Header />
      <nav className="App-nav">
        <Link className="nav-link" to="/"></Link>
        <Link className="nav-link" to="/About"></Link>
        <Link className="nav-link" to="/Abroad"></Link>
        <Link className="nav-link" to="/StudyAbroad"></Link>
        <Link className="nav-link" to="/Portal"></Link>
        <Link className="nav-link" to="/Search"></Link>
        <Link className="nav-link" to="/Services"></Link>
        <Link className="nav-link" to="/Updates"></Link>
        <Link className="nav-link" to="/Terms"></Link>
      </nav>


      {/* Main Content */}
      <main className="App-main">
        <Outlet /> {/* Outlet will render the child routes */}
      </main>
    
      {/* Body of the app */}
      <div className="App-body">
        {/* Slideshow Section */}
        <div className="slideshow-container">
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false}
            dynamicHeight={true}
            className="carousel"
          >
            {/* Add your images inside Carousel */}
            <div>
            <img src={BMWF90M5} alt="BMWF90 M5" />
			<div className="carousel-message">The Powerful BMW F90 M5</div>
            </div>

            <div>
              <img src={McLaren720} alt="McLaren 720" />
			  <div className="carousel-message">Experience the Speed of McLaren 720</div>
            </div>



            <div>
              <img src={Porsche718} alt="Porsche 718" />
			  <div className="carousel-message">Feel the Elegance of Porsche 718</div>
            </div>
            {/* Add more images as needed */}
          </Carousel>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="App-bottom-nav">
        <Link className="nav-link" to="/privacy">Privacy Policy</Link>
        <Link className="nav-link" to="/terms">Terms of Use</Link>
        <Link className="nav-link" to="/faq">FAQ</Link>
      </div>
    </div>
  );
}

export default App;
