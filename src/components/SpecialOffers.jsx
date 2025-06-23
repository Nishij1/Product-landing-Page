import React, { useState, useEffect } from 'react'
import { Clock, Gift, Zap, Shield, Star } from 'lucide-react'

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      id: 1,
      title: "Special Launch Offer",
      discount: "33% OFF",
      description: "Get massive savings on all water softener systems",
      features: [
        "Free professional installation service",
        "Extended 3-year comprehensive warranty",
        "Free annual maintenance for 2 years",
        "24/7 priority customer support"
      ],
      validUntil: "Limited time offer - Act now!",
      badge: "MOST POPULAR"
    },
    {
      id: 2,
      title: "Bundle Deal",
      discount: "₹15,000 OFF",
      description: "Buy any system + get free water purifier",
      features: [
        "Free RO water purifier (worth ₹15,000)",
        "Complete home water solution",
        "Single installation service",
        "Comprehensive warranty"
      ],
      validUntil: "This month only",
      badge: "BEST VALUE"
    },
    {
      id: 3,
      title: "Referral Bonus",
      discount: "₹5,000 CASH",
      description: "Refer a friend and earn cash rewards",
      features: [
        "₹5,000 cash for each referral",
        "Your friend gets 10% extra discount",
        "No limit on referrals",
        "Instant payout on installation"
      ],
      validUntil: "Ongoing offer",
      badge: "EARN MONEY"
    }
  ]

  return (
    <section id="offers" className="special-offers">
      <div className="container">
        <div className="section-header">
          <h2>🔥 Exclusive Limited Time Offers</h2>
          <p>Don't miss out on these incredible savings - Transform your water quality today!</p>
        </div>

        <div className="countdown-timer">
          <h3>⏰ Offer Expires In:</h3>
          <div className="timer">
            <div className="time-unit">
              <span className="number">{timeLeft.days}</span>
              <span className="label">Days</span>
            </div>
            <div className="time-unit">
              <span className="number">{timeLeft.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="time-unit">
              <span className="number">{timeLeft.minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-unit">
              <span className="number">{timeLeft.seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>

        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-badge">{offer.badge}</div>
              
              <div className="offer-header">
                <div className="offer-icon">
                  {offer.id === 1 && <Gift size={32} />}
                  {offer.id === 2 && <Zap size={32} />}
                  {offer.id === 3 && <Star size={32} />}
                </div>
                <h3>{offer.title}</h3>
                <div className="discount">{offer.discount}</div>
              </div>

              <p className="offer-description">{offer.description}</p>

              <div className="offer-features">
                <h4>What's Included:</h4>
                <ul>
                  {offer.features.map((feature, index) => (
                    <li key={index}>
                      <span className="checkmark">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer-validity">
                <Clock size={16} />
                <span>{offer.validUntil}</span>
              </div>

              <button 
                className="btn-claim-offer"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Claim This Offer Now
              </button>
            </div>
          ))}
        </div>

        <div className="urgency-section">
          <div className="urgency-content">
            <h3>🚨 Don't Wait - These Offers Won't Last Long!</h3>
            <div className="urgency-points">
              <div className="urgency-point">
                <Shield size={20} />
                <span>Only 50 systems left in stock</span>
              </div>
              <div className="urgency-point">
                <Clock size={20} />
                <span>Prices increase after this month</span>
              </div>
              <div className="urgency-point">
                <Zap size={20} />
                <span>Installation slots filling up fast</span>
              </div>
            </div>
            <p className="urgency-text">
              <strong>WARNING:</strong> Due to high demand, we can only guarantee these prices 
              for the next <span className="highlight">{timeLeft.days} days</span>. 
              After that, regular pricing applies.
            </p>
            <button 
              className="btn-urgent"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              🔥 Secure My Discount Now - Before It's Too Late!
            </button>
          </div>
        </div>

        <div className="guarantee-section">
          <h3>Our Iron-Clad Guarantee</h3>
          <div className="guarantees">
            <div className="guarantee">
              <Shield size={24} />
              <h4>30-Day Money Back</h4>
              <p>Not satisfied? Get 100% refund</p>
            </div>
            <div className="guarantee">
              <Star size={24} />
              <h4>Price Match Promise</h4>
              <p>Find it cheaper? We'll beat it by 10%</p>
            </div>
            <div className="guarantee">
              <Clock size={24} />
              <h4>Same Day Installation</h4>
              <p>Get your system installed within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
