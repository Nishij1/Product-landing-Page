import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react'
import { sendContactForm, sendAutoReply, isEmailConfigured } from '../utils/emailService'

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      console.log('Form submitted:', data)

      // Check if email service is configured
      if (!isEmailConfigured()) {
        console.warn('EmailJS not configured. Form data logged to console.')
        // Simulate success for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitted(true)
        reset()
        return
      }

      // Send email to business
      await sendContactForm(data)

      // Send auto-reply to customer (optional, won't fail if it doesn't work)
      await sendAutoReply(data)

      setIsSubmitted(true)
      reset()

      // Reset success message after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 8000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Failed to send your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="contact-form">
        <div className="container">
          <div className="success-message">
            <CheckCircle size={64} className="success-icon" />
            <h2>Thank You for Your Interest!</h2>
            <p>
              We've received your information and our water softener expert will contact you
              within 2 hours to discuss your requirements and provide a quote.
            </p>
            <div className="next-steps">
              <h3>What happens next?</h3>
              <div className="steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <p>Our expert calls you within 2 hours</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <p>We provide personalized product recommendations</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <p>Get personalized recommendations & quote</p>
                </div>
              </div>
            </div>
            <button 
              className="btn-secondary"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact-form">
      <div className="container">


        <div className="contact-content">
          <div className="contact-info">
            <h3>Why Choose Wonders Solution?</h3>
            <div className="benefits-list">
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Premium Quality Systems</h4>
                  <p>ISI certified water softeners with proven performance</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Expert Installation</h4>
                  <p>Professional installation by certified technicians</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Transparent Pricing</h4>
                  <p>Clear pricing with no hidden costs or surprises</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Reliable Support</h4>
                  <p>Ongoing customer support and maintenance services</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <h4>Call Us Now</h4>
                  <p>+91 86985 22195</p>
                  <p>+91 93734 41512</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <h4>Email Us</h4>
                  <p>wonderssolution11@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <h4>Service Coverage</h4>
                  <p>Mumbai, Delhi, Bangalore, Pune, Hyderabad</p>
                  <p>And 50+ cities across India</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={20} />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form-fields">
              <h3>Request Your Water Solution Consultation</h3>
              <p className="form-subtitle">Help us understand your needs to provide the best recommendations</p>
              
              {/* Personal Information Section */}
              <div className="form-section">
                <h4 className="section-title">Personal Information</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your mobile number"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Please enter a valid 10-digit mobile number'
                        }
                      })}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={16} />
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">
                    <AlertCircle size={16} />
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Please enter a valid 10-digit mobile number'
                    }
                  })}
                  className={errors.phone ? 'error' : ''}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && (
                  <span className="error-message">
                    <AlertCircle size={16} />
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Property Information Section */}
              <div className="form-section">
                <h4 className="section-title">Property Information</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="propertyType">Property Type *</label>
                    <select
                      id="propertyType"
                      {...register('propertyType', { required: 'Property type is required' })}
                      className={errors.propertyType ? 'error' : ''}
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment/Flat</option>
                      <option value="independent-house">Independent House</option>
                      <option value="villa">Villa</option>
                      <option value="commercial">Commercial Property</option>
                    </select>
                    {errors.propertyType && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.propertyType.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="familySize">Family Size *</label>
                    <select
                      id="familySize"
                      {...register('familySize', { required: 'Family size is required' })}
                      className={errors.familySize ? 'error' : ''}
                    >
                      <option value="">Select family size</option>
                      <option value="1-2">1-2 members</option>
                      <option value="3-4">3-4 members</option>
                      <option value="5-6">5-6 members</option>
                      <option value="7+">7+ members</option>
                    </select>
                    {errors.familySize && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.familySize.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                      {...register('city', { required: 'City is required' })}
                      className={errors.city ? 'error' : ''}
                    />
                    {errors.city && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.city.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      placeholder="Enter pincode"
                      {...register('pincode', {
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: 'Please enter a valid 6-digit pincode'
                        }
                      })}
                      className={errors.pincode ? 'error' : ''}
                    />
                    {errors.pincode && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.pincode.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Complete Address</label>
                  <textarea
                    id="address"
                    rows="2"
                    {...register('address')}
                    placeholder="House/Flat No, Street, Area (optional)"
                  ></textarea>
                </div>
              </div>

              {/* Water Requirements Section */}
              <div className="form-section">
                <h4 className="section-title">Water Requirements & Issues</h4>

                <div className="form-group">
                  <label htmlFor="waterIssues">Current Water Issues *</label>
                  <select
                    id="waterIssues"
                    {...register('waterIssues', { required: 'Please select your main water concern' })}
                    className={errors.waterIssues ? 'error' : ''}
                  >
                    <option value="">Select your main concern</option>
                    <option value="hard-water">Hard water / White deposits on taps & fixtures</option>
                    <option value="skin-hair">Skin & hair problems due to hard water</option>
                    <option value="appliance-damage">Appliance damage (geyser, washing machine)</option>
                    <option value="soap-wastage">Excessive soap/detergent usage</option>
                    <option value="taste-odor">Bad taste or odor in water</option>
                    <option value="high-tds">High TDS levels</option>
                    <option value="multiple">Multiple issues</option>
                    <option value="prevention">Prevention (no current issues)</option>
                  </select>
                  {errors.waterIssues && (
                    <span className="error-message">
                      <AlertCircle size={16} />
                      {errors.waterIssues.message}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="waterSource">Water Source</label>
                    <select
                      id="waterSource"
                      {...register('waterSource')}
                    >
                      <option value="">Select water source</option>
                      <option value="municipal">Municipal/Corporation Water</option>
                      <option value="borewell">Borewell/Tube well</option>
                      <option value="tanker">Water Tanker</option>
                      <option value="mixed">Mixed Sources</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      {...register('budget')}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-15k">Under ₹15,000</option>
                      <option value="15k-25k">₹15,000 - ₹25,000</option>
                      <option value="25k-40k">₹25,000 - ₹40,000</option>
                      <option value="40k-60k">₹40,000 - ₹60,000</option>
                      <option value="above-60k">Above ₹60,000</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">How urgent is your requirement?</label>
                  <select
                    id="urgency"
                    {...register('urgency')}
                  >
                    <option value="">Select urgency</option>
                    <option value="immediate">Immediate (within 1 week)</option>
                    <option value="soon">Soon (within 2-4 weeks)</option>
                    <option value="planning">Planning (within 1-3 months)</option>
                    <option value="research">Just researching options</option>
                  </select>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="form-section">
                <h4 className="section-title">Additional Information</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Contact Time *</label>
                    <select
                      id="preferredTime"
                      {...register('preferredTime', { required: 'Please select preferred contact time' })}
                      className={errors.preferredTime ? 'error' : ''}
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                      <option value="weekend">Weekend only</option>
                    </select>
                    {errors.preferredTime && (
                      <span className="error-message">
                        <AlertCircle size={16} />
                        {errors.preferredTime.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactMethod">Preferred Contact Method</label>
                    <select
                      id="contactMethod"
                      {...register('contactMethod')}
                    >
                      <option value="">Select contact method</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message or Questions</label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message')}
                    placeholder="Tell us more about your specific requirements, questions, or any other details that would help us serve you better..."
                  ></textarea>
                </div>
              </div>

              {submitError && (
                <div className="error-message form-error">
                  <AlertCircle size={16} />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Get Quote Now
                  </>
                )}
              </button>

              <p className="form-disclaimer">
                * By submitting this form, you agree to receive calls/SMS from Wonders Solution 
                regarding your water quality needs. We respect your privacy and never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
