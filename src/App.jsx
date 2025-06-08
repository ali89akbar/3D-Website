import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero/HeroSection';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import AboutSection from './Components/About us/About';
import ServicesSection from './Components/Services/Services';

function App() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <CustomCursor/>
    <AboutSection/>
    <ServicesSection/>
    </>
  )
}

export default App
