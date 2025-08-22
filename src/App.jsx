


import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Carousel from "./Components/Carousel";
import AnnouncementBar from "./Components/Announcement";
import Achievements from "./Components/Achievements";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Accessories from "./Components/Accessories";
import Officeequp from "./Components/Officeequp";
import Brands from "./Components/Brands";

import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Servicecctv from "./Pages/Servicecctv";
import Network from "./Pages/Network"
import Door_bio from "./Pages/Door_bio"
import Gates from "./Pages/Gates";
import Computers from "./Pages/Computers";
import Porches from "./Pages/Porches";

// import Product from "./Pages/Product"


function AppContent() {
  const location = useLocation();

  // Routes that show only Navbar + Footer
  const minimalLayoutRoutes = [
    "/about","/contact","/products","/servicecctv","/network","/door-bio",
    "/gates","/porches", "/computers"
    
  ];

  if (minimalLayoutRoutes.includes(location.pathname)) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route  path="/products" element={<Product/>} />
          <Route path="/servicecctv" element={<Servicecctv/>}/>
          <Route path="/network" element={<Network/>}/>
          <Route path="/door-bio" element={<Door_bio/>}/>
          <Route path="/gates" element={<Gates/>}/>/
          <Route path="/porches" element={<Porches/>}/>/
          <Route path="/computers" element={<Computers/>}/>/

        </Routes>
        <Footer />
      </>
    );
  }

  // Default full layout (Home Page)
  return (
    <>
      <NavBar />
      <Carousel />
      <AnnouncementBar />
      <Achievements />
      <About />
      <Services />
      <Products />
      <Accessories />
      <Officeequp />
      <Brands />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
