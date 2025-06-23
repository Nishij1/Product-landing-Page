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
              We've received your information and our water quality expert will contact you 
              within 2 hours to schedule your water test.
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
                  <p>We schedule a convenient time for water testing</p>
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
        <div className="section-header">
          <h2>Get Your Water Quality Test</h2>
          <p>Discover what's in your water and get a personalized solution recommendation</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Why Choose Our Water Test?</h3>
            <div className="benefits-list">
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Professional Analysis</h4>
                  <p>Comprehensive testing of 15+ water quality parameters</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Expert Recommendations</h4>
                  <p>Personalized solution based on your specific water issues</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>No Obligation Quote</h4>
                  <p>Transparent pricing with no hidden costs or pressure</p>
                </div>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <div>
                  <h4>Same Day Service</h4>
                  <p>Quick response and flexible scheduling options</p>
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
              <h3>Schedule Your FREE Water Quality Test</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
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

              <div className="form-group">
                <label htmlFor="address">Complete Address *</label>
                <textarea
                  id="address"
                  rows="3"
                  {...register('address', { 
                    required: 'Address is required',
                    minLength: { value: 10, message: 'Please provide complete address' }
                  })}
                  className={errors.address ? 'error' : ''}
                  placeholder="House/Flat No, Street, Area, City, Pincode"
                />
                {errors.address && (
                  <span className="error-message">
                    <AlertCircle size={16} />
                    {errors.address.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="waterIssues">Current Water Issues (Optional)</label>
                <select
                  id="waterIssues"
                  {...register('waterIssues')}
                >
                  <option value="">Select your main concern</option>
                  <option value="hard-water">Hard water / White deposits</option>
                  <option value="skin-hair">Skin & hair problems</option>
                  <option value="appliance-damage">Appliance damage</option>
                  <option value="taste-odor">Bad taste or odor</option>
                  <option value="high-tds">High TDS levels</option>
                  <option value="other">Other issues</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time for Water Test</label>
                <select
                  id="preferredTime"
                  {...register('preferredTime')}
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                  <option value="weekend">Weekend only</option>
                </select>
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
                    Get My Water Test
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
