import React from 'react'
import { Award, Users, Shield, Wrench, Droplets, Heart } from 'lucide-react'

const CompanyInfo = () => {
  const stats = [
    { icon: Users, number: "2000+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Shield, number: "99%", label: "Satisfaction Rate" },
    { icon: Wrench, number: "24/7", label: "Support Available" }
  ]

  const educationalContent = [
    {
      title: "What is Hard Water?",
      content: "Hard water contains high levels of dissolved minerals, primarily calcium and magnesium. These minerals cause various problems in your home including scale buildup, soap scum, and damage to appliances.",
      icon: Droplets
    },
    {
      title: "Health Impact of Hard Water",
      content: "While hard water isn't harmful to drink, it can cause dry skin, brittle hair, and eczema flare-ups. Soft water helps maintain your skin's natural moisture and keeps hair silky smooth.",
      icon: Heart
    },
    {
      title: "Economic Benefits of Soft Water",
      content: "Soft water can save you thousands of rupees annually by reducing soap usage by 50%, extending appliance life by 3x, and eliminating costly repairs due to mineral buildup.",
      icon: Award
    }
  ]

  return (
    <section className="company-info">
      <div className="container">
        <div className="section-header">
          <h2>About Wonders Solution</h2>
          <p>Your trusted partner for pure, soft water solutions</p>
        </div>

        <div className="company-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon size={32} className="stat-icon" />
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="company-content">
          <div className="company-story">
            <h3>Our Mission</h3>
            <p>
              At Wonders Solution, we believe every family deserves access to pure, soft water. 
              Founded with the vision to transform India's water quality landscape, we've been 
              dedicated to providing cutting-edge water softening solutions that improve health, 
              save money, and enhance quality of life.
            </p>
            
            <h3>Why Choose Wonders Solution?</h3>
            <div className="why-choose-us">
              <div className="reason">
                <Shield size={24} />
                <div>
                  <h4>Certified Quality</h4>
                  <p>All our systems are ISI certified and meet international quality standards for superior performance</p>
                </div>
              </div>
              <div className="reason">
                <Wrench size={24} />
                <div>
                  <h4>Expert Installation</h4>
                  <p>Professional installation by certified technicians with 5+ years of hands-on experience</p>
                </div>
              </div>
              <div className="reason">
                <Award size={24} />
                <div>
                  <h4>Extended Warranty</h4>
                  <p>Industry-leading warranty coverage with complimentary annual maintenance service</p>
                </div>
              </div>
              <div className="reason">
                <Users size={24} />
                <div>
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock customer support for any queries or issues</p>
                </div>
              </div>
            </div>
          </div>

          <div className="educational-section">
            <h3>Understanding Water Quality</h3>
            <div className="educational-cards">
              {educationalContent.map((item, index) => (
                <div key={index} className="educational-card">
                  <item.icon size={32} className="educational-icon" />
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hard-vs-soft">
            <h3>Hard Water vs Soft Water: The Complete Comparison</h3>
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-col">Aspect</div>
                <div className="comparison-col hard-water">Hard Water</div>
                <div className="comparison-col soft-water">Soft Water</div>
              </div>
              
              <div className="comparison-row">
                <div className="comparison-col">Skin & Hair</div>
                <div className="comparison-col hard-water">
                  ❌ Dry, itchy skin<br/>
                  ❌ Dull, brittle hair<br/>
                  ❌ Eczema flare-ups
                </div>
                <div className="comparison-col soft-water">
                  ✅ Smooth, moisturized skin<br/>
                  ✅ Silky, shiny hair<br/>
                  ✅ Reduced skin irritation
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-col">Appliances</div>
                <div className="comparison-col hard-water">
                  ❌ Scale buildup<br/>
                  ❌ Reduced efficiency<br/>
                  ❌ Frequent repairs
                </div>
                <div className="comparison-col soft-water">
                  ✅ No mineral deposits<br/>
                  ✅ Optimal performance<br/>
                  ✅ Extended lifespan
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-col">Cleaning</div>
                <div className="comparison-col hard-water">
                  ❌ More soap needed<br/>
                  ❌ Soap scum formation<br/>
                  ❌ Spotted dishes
                </div>
                <div className="comparison-col soft-water">
                  ✅ 50% less soap usage<br/>
                  ✅ Better lather<br/>
                  ✅ Spotless cleaning
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-col">Cost Impact</div>
                <div className="comparison-col hard-water">
                  ❌ Higher utility bills<br/>
                  ❌ Expensive repairs<br/>
                  ❌ More detergent costs
                </div>
                <div className="comparison-col soft-water">
                  ✅ Lower energy bills<br/>
                  ✅ Reduced maintenance<br/>
                  ✅ Savings on cleaning products
                </div>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3>Our Certifications & Partnerships</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <Award size={32} />
                <h4>ISI Certified</h4>
                <p>Bureau of Indian Standards approved</p>
              </div>
              <div className="cert-item">
                <Shield size={32} />
                <h4>ISO 9001:2015</h4>
                <p>Quality management certified</p>
              </div>
              <div className="cert-item">
                <Users size={32} />
                <h4>Authorized Dealer</h4>
                <p>Official partner of leading brands</p>
              </div>
              <div className="cert-item">
                <Wrench size={32} />
                <h4>Service Excellence</h4>
                <p>Award for customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
