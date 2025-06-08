import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero/HeroSection';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import AboutSection from './Components/About us/About';
import ServicesSection from './Components/Services/Services';
import PortfolioSection from './Components/Portfolio/Portfolio';
import ContactSection from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <CustomCursor/>
    <AboutSection/>
    <ServicesSection/>
    <PortfolioSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default App
