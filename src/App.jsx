import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import SpecialOffers from './components/SpecialOffers'
import ContactForm from './components/ContactForm'
import CompanyInfo from './components/CompanyInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <SpecialOffers />
      <ContactForm />
      <CompanyInfo />
      <Footer />
    </div>
  )
}

export default App
