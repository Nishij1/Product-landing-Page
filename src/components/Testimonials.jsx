import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "After installing the Water Softener Pro 3000, my skin feels incredibly soft and my hair is silky smooth! The white chalky deposits on taps and fixtures have completely vanished. This has been the best investment for our family's health and home.",
      product: "Water Softener Pro 3000",
      timeAgo: "2 months ago"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Our washing machine and geyser were getting damaged due to hard water. Since installing the Water Softener Compact 1000, all our appliances are running perfectly. The compact design fits perfectly in our small apartment. Highly recommended!",
      product: "Water Softener Compact 1000",
      timeAgo: "1 month ago"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The installation team was professional and the system works perfectly. We're saving so much on soap and detergent now. My children's skin problems have improved significantly!",
      product: "AquaSoft Pro 3000",
      timeAgo: "3 weeks ago"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "As a doctor, I understand the importance of water quality. Wonders Solution provided excellent service and the water quality has improved dramatically. Highly recommended for health-conscious families.",
      product: "AquaSoft Elite 5000",
      timeAgo: "1 month ago"
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "The customer service is outstanding! They provided water testing and helped us choose the right system. Our monthly water bills have reduced and the water tastes so much better now.",
      product: "AquaSoft Pro 3000",
      timeAgo: "2 weeks ago"
    },
    {
      id: 6,
      name: "Amit Gupta",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Initially skeptical about the price, but the results speak for themselves. Our geysers and pipes are no longer getting clogged with mineral deposits. The ROI is incredible!",
      product: "AquaSoft Elite 5000",
      timeAgo: "6 weeks ago"
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? 'star-filled' : 'star-empty'} 
      />
    ))
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Satisfied Customers Say</h2>
          <p>Join thousands of happy families enjoying pure, healthy water every day</p>
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <h3>4.9/5</h3>
            <p>Customer Rating</p>
          </div>
          <div className="stat">
            <h3>2500+</h3>
            <p>Satisfied Families</p>
          </div>
          <div className="stat">
            <h3>99.5%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Expert Support</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-footer">
                <div className="customer-info">
                  <h4>{testimonial.name}</h4>
                  <p className="location">{testimonial.location}</p>
                  <p className="product">Purchased: {testimonial.product}</p>
                </div>
                <div className="testimonial-meta">
                  <span className="time-ago">{testimonial.timeAgo}</span>
                  <span className="verified">✅ Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Ready to Join Our Happy Customers?</h3>
          <p>Experience the difference of pure, soft water in your home</p>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
