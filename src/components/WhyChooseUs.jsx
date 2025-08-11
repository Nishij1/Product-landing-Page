import React from 'react'
import { Shield, Award, Users, Wrench, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { handleGeneralInquiry } from '../utils/whatsapp'

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Premium Quality Guarantee",
      description: "ISI certified water softeners with proven performance and reliability",
      features: [
        "International quality standards",
        "Rigorous testing and certification",
        "Long-lasting durability"
      ]
    },
    {
      icon: Award,
      title: "Expert Product Support",
      description: "Comprehensive guidance and support for optimal system performance",
      features: [
        "Detailed setup instructions",
        "Technical support hotline",
        "Performance optimization tips"
      ]
    },
    {
      icon: Users,
      title: "Comprehensive Support",
      description: "Dedicated customer support and maintenance services for peace of mind",
      features: [
        "24/7 customer support",
        "Regular maintenance services",
        "Technical assistance available"
      ]
    }
  ]

  const valuePropositions = [
    {
      title: "Save Money Long-Term",
      description: "Protect your appliances and reduce soap usage",
      icon: "💰",
      details: "Extend appliance life by up to 50% and reduce detergent costs"
    },
    {
      title: "Health & Comfort",
      description: "Enjoy softer skin, silky hair, and cleaner clothes",
      icon: "✨",
      details: "Experience the luxury of soft water every day"
    },
    {
      title: "Proven Results",
      description: "Join thousands of satisfied customers across India",
      icon: "🏆",
      details: "Over 10,000 happy families trust our solutions"
    }
  ]

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
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Wonders Solution?</h2>
          <p>Experience the difference with India's trusted water softener experts</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <benefit.icon size={40} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <ul className="benefit-features">
                {benefit.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="value-propositions">
          <h3>Transform Your Home Water Experience</h3>
          <div className="value-grid">
            {valuePropositions.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
                <span className="value-details">{value.details}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Transform Your Water Quality?</h3>
            <p>Join thousands of satisfied customers who have made the smart choice</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={scrollToProducts}>
                <Star size={20} />
                View Our Products
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={handleQuoteRequest}>
                Get Your Quote Today
              </button>
            </div>
          </div>
        </div>

        <div className="trust-indicators">
          <div className="trust-stats">
            <div className="stat">
              <h4>10,000+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h4>50+</h4>
              <p>Cities Served</p>
            </div>
            <div className="stat">
              <h4>3 Years</h4>
              <p>Industry Experience</p>
            </div>
            <div className="stat">
              <h4>24/7</h4>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
