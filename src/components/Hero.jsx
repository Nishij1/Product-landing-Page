import React from 'react'
import { ArrowRight, CheckCircle, Droplets } from 'lucide-react'

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
            
            <div className="hero-benefits">
              <div className="benefit">
                <CheckCircle className="benefit-icon" />
                <span>Softer skin & silky hair</span>
              </div>
              <div className="benefit">
                <CheckCircle className="benefit-icon" />
                <span>Longer appliance lifespan</span>
              </div>
              <div className="benefit">
                <CheckCircle className="benefit-icon" />
                <span>Reduced soap & detergent usage</span>
              </div>
              <div className="benefit">
                <CheckCircle className="benefit-icon" />
                <span>No more white chalky deposits</span>
              </div>
            </div>

            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToProducts}>
                <Droplets size={20} />
                Shop Water Softeners
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={scrollToContact}>
                Get Free Water Test
              </button>
            </div>

            <div className="hero-urgency">
              <p className="urgency-text">
                🔥 <strong>SPECIAL OFFER:</strong> Free installation + Extended warranty on all systems - Limited time only!
              </p>
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
