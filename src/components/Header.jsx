import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MessageCircle, Droplets, Home, Package, Star, Gift, Users } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { handleGeneralInquiry, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Wonders Solution" className="logo" />
            <div className="logo-text">
              <h1>
                <Droplets size={20} className="logo-droplet" />
                Wonders Solution
              </h1>
              <p>"Say Goodbye to Harsh Water"</p>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}><Home size={16} />Home</a></li>
              <li><a href="#products" onClick={() => scrollToSection('products')}><Package size={16} />Products</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}><Star size={16} />Reviews</a></li>
              <li><a href="#offers" onClick={() => scrollToSection('offers')}><Gift size={16} />Special Offers</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}><Users size={16} />Contact</a></li>
            </ul>
          </nav>

          <div className="header-contact">
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 86985 22195</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>wonderssolution11@gmail.com</span>
              </div>
            </div>

            <div className="header-actions">
              <button
                className="whatsapp-btn"
                onClick={() => handleGeneralInquiry('general')}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={20} />
                <Droplets size={16} />
                <span className="whatsapp-text">WhatsApp</span>
              </button>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
