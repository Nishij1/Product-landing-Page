import React from 'react'
import { Star, ShoppingCart, Award, Shield, Zap, MessageCircle } from 'lucide-react'
import { handleProductBuyNow, handleGeneralInquiry } from '../utils/whatsapp'
import aquasoftPro3000 from '/src/assets/p1.png'
import aquasoftElite5000 from '/src/assets/p2.png'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Water Softener Pro 3000",
      image: aquasoftPro3000,
      originalPrice: "₹5,999",
      salePrice: "₹3,999",
      rating: 4.9,
      reviews: 247,
      features: [
        "Capacity: 2000-3000 liters/day",
        "Automatic regeneration system",
        "Digital control panel with LED display",
        "3-year comprehensive warranty",
        "Free professional installation included"
      ],
      benefits: [
        "Ideal for 4-8 member families",
        "Reduces soap & detergent usage by 60%",
        "Extends appliance lifespan by 5x",
        "99.5% mineral removal efficiency",
        "Saves ₹15,000+ annually on maintenance"
      ],
      badge: "BEST SELLER"
    },
    {
      id: 2,
      name: "Water Softener Compact 1000",
      image: aquasoftElite5000,
      originalPrice: "₹4,999",
      salePrice: "₹3,499",
      rating: 4.8,
      reviews: 156,
      features: [
        "Capacity: 500-1000 liters/day",
        "Compact space-saving design",
        "Manual regeneration control",
        "2-year warranty with service",
        "Easy DIY installation guide included"
      ],
      benefits: [
        "Perfect for 2-4 member families",
        "Fits in small spaces & apartments",
        "Reduces soap usage by 50%",
        "99% mineral removal efficiency",
        "Saves ₹8,000+ annually on repairs"
      ],
      badge: "COMPACT"
    }
  ]

  const handleBuyNow = (product) => {
    // Open WhatsApp with product inquiry
    handleProductBuyNow(product)

    // You can also add analytics tracking here
    console.log(`Buy Now clicked for: ${product.name}`)
  }

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Premium Water Softener Systems</h2>
          <p>Choose the perfect solution for your family's water needs - Affordable, reliable, and effective</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.badge}</div>
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <div className="quick-features">
                    <div className="feature-icon">
                      <Award size={20} />
                      <span>Certified Quality</span>
                    </div>
                    <div className="feature-icon">
                      <Shield size={20} />
                      <span>Extended Warranty</span>
                    </div>
                    <div className="feature-icon">
                      <Zap size={20} />
                      <span>Energy Efficient</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="product-pricing">
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="sale-price">{product.salePrice}</span>
                  <span className="savings">
                    Save ₹{parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.salePrice.replace(/[₹,]/g, ''))}
                  </span>
                </div>

                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-actions">
                  <button
                    className="btn-buy-now"
                    onClick={() => handleBuyNow(product)}
                  >
                    <MessageCircle size={20} />
                    Buy Now - {product.salePrice}
                  </button>

                  <button
                    className="btn-whatsapp-inquiry"
                    onClick={() => handleProductBuyNow(product)}
                    title="Quick WhatsApp Inquiry"
                  >
                    <MessageCircle size={16} />
                    Quick Inquiry
                  </button>
                </div>

                <div className="product-guarantee">
                  <p>✅ 30-day satisfaction guarantee</p>
                  <p>✅ Free professional installation</p>
                  <p>✅ 24/7 expert customer support</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <div className="cta-content">
            <h3>Not sure which system is perfect for your home?</h3>
            <p>Get a FREE water quality test and personalized recommendation from our experts</p>
            <div className="cta-buttons">
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Water Test
              </button>

              <button
                className="btn-whatsapp-cta"
                onClick={() => handleGeneralInquiry('waterTest')}
              >
                <MessageCircle size={20} />
                WhatsApp for Water Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
