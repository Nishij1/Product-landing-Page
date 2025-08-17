import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoReels from './components/VideoReels'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

import CompanyInfo from './components/CompanyInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoReels />
      <ProductShowcase />
      <Testimonials />
      <WhyChooseUs />
      <CompanyInfo />
      <Footer />
    </div>
  )
}

export default App
