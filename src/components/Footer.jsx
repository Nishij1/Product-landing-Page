import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.svg'
import { handleEmergencySupport, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Special Offers", href: "#offers" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Water Softener Installation",
    "Water Quality Testing",
    "System Maintenance",
    "Emergency Repairs",
    "Water Purifier Services",
    "Consultation Services"
  ]

  const serviceAreas = [
    "Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad",
    "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-section">
            <div className="footer-logo">
              <img src={logo} alt="Wonders Solution" />
              <div>
                <h3>Wonders Solution</h3>
                <p>"Say Goodbye to Harsh Water"</p>
              </div>
            </div>
            <p className="company-description">
              India's trusted provider of premium water softening solutions.
              We transform hard water into pure, healthy water for better living
              and extended appliance life. Your family's health is our priority.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul className="service-areas">
              {serviceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <p className="more-areas">And 40+ more cities across India</p>
          </div>

          <div className="footer-section contact-section">
            <h4>Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <p>+91 86985 22195</p>
                  <p>+91 93734 41512</p>
                </div>
              </div>
              <div className="contact-item">
                <MessageCircle size={18} />
                <div>
                  <p>WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</p>
                  <p>24/7 Quick Support Available</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <p>wonderssolution11@gmail.com</p>                </div>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <p>Rokade Bhawan, Ganesh Nagar,</p>
                  <p>Nr. SD Hospital, Azamsha Ley Out, Nagpur</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <div>
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Wonders Solution. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#warranty">Warranty Policy</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Results may vary based on water quality and usage patterns. 
              All prices are subject to change without notice. Installation charges may apply in remote areas.
            </p>
          </div>
        </div>
      </div>

      <div className="emergency-contact">
        <div className="emergency-content">
          <h4>🚨 Emergency Water Service</h4>
          <p>24/7 Emergency Support Available</p>
          <div className="emergency-buttons">
            <a href="tel:+918698522195" className="emergency-btn">
              <Phone size={16} />
              Call Now: +91 86985 22195
            </a>
            <button
              className="emergency-whatsapp-btn"
              onClick={() => handleEmergencySupport("Emergency water system issue - please contact immediately")}
            >
              <MessageCircle size={16} />
              WhatsApp Emergency
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
