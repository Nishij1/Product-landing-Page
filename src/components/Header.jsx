import React, { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, Droplets, Home, Package, Star, Gift, Users } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { handleGeneralInquiry, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp'
import { IntegratedTubelightNav } from './ui/IntegratedTubelightNav'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  // Navigation items for the integrated tubelight navbar
  const navItems = [
    { name: 'Home', section: 'home', icon: Home },
    { name: 'Products', section: 'products', icon: Package },
    { name: 'Reviews', section: 'testimonials', icon: Star },
    { name: 'Why Us', section: 'why-choose-us', icon: Gift },
    { name: 'About', section: 'company-info', icon: Users }
  ]

  const handleNavItemClick = (item) => {
    scrollToSection(item.section)
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'testimonials', 'why-choose-us', 'company-info']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

          {/* Integrated Tubelight Navigation */}
          <IntegratedTubelightNav
            items={navItems}
            activeSection={activeSection}
            onItemClick={handleNavItemClick}
            className="header-nav"
          />

          {/* Mobile Menu (fallback for smaller screens) */}
          <nav className={`nav mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}><Home size={16} />Home</a></li>
              <li><a href="#products" onClick={() => scrollToSection('products')}><Package size={16} />Products</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}><Star size={16} />Reviews</a></li>
              <li><a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}><Gift size={16} />Why Choose Us</a></li>
              <li><a href="#company-info" onClick={() => scrollToSection('company-info')}><Users size={16} />About</a></li>
            </ul>
          </nav>

          <div className="header-contact">
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
