import { useState } from 'react'
import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    </>
  )
}

export default App
