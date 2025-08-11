import React from 'react'
import { ArrowRight, Droplets } from 'lucide-react'
import { handleGeneralInquiry } from '../utils/whatsapp'

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleQuoteRequest = () => {
    handleGeneralInquiry('quote')
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your <span className="highlight">Hard Water</span> Into
              <span className="highlight"> Pure, Healthy Water</span> Today!
            </h1>
            <p className="hero-subtitle">
              Experience the difference with our premium water softeners! Say goodbye to
              dry skin, brittle hair, and expensive appliance repairs. Get crystal-clear,
              mineral-free water that protects your family's health and saves thousands
              in maintenance costs.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToProducts}>
                <Droplets size={20} />
                Shop Water Softeners
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={handleQuoteRequest}>
                Get Quote Now
              </button>
            </div>

            <div className="hero-urgency">
              <p className="urgency-text">
                🔥 <strong>PREMIUM QUALITY:</strong> MSME certified systems with extended warranty and expert support!</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="water-comparison">
              <div className="water-sample hard-water">
                <h3>Hard Water</h3>
                <div className="water-effects">
                  <p>❌ Dry, itchy skin</p>
                  <p>❌ Dull, brittle hair</p>
                  <p>❌ White chalky deposits</p>
                  <p>❌ Damaged appliances</p>
                </div>
              </div>
              <div className="vs-divider">VS</div>
              <div className="water-sample soft-water">
                <h3>Soft Water</h3>
                <div className="water-effects">
                  <p>✅ Smooth, healthy skin</p>
                  <p>✅ Silky, shiny hair</p>
                  <p>✅ Spotless surfaces</p>
                  <p>✅ Protected appliances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
