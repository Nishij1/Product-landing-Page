import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_wonders_solution'
const EMAILJS_TEMPLATE_ID = 'template_contact_form'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

/**
 * Send contact form data to Gmail using EmailJS
 * @param {Object} formData - The form data to send
 * @returns {Promise} - EmailJS send promise
 */
export const sendContactForm = async (formData) => {
  try {
    // Prepare email template parameters
    const templateParams = {
      to_email: 'wonderssolution11@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      water_issues: formData.waterIssues || 'Not specified',
      preferred_time: formData.preferredTime || 'Not specified',
      message: `
        New Water Test Request from ${formData.name}
        
        Contact Details:
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        - Address: ${formData.address}
        
        Water Issues: ${formData.waterIssues || 'Not specified'}
        Preferred Time: ${formData.preferredTime || 'Not specified'}
        
        Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
      reply_to: formData.email,
      subject: `Water Test Request - ${formData.name}`,
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return response

  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}

/**
 * Send auto-reply email to the customer
 * @param {Object} formData - The form data
 * @returns {Promise} - EmailJS send promise
 */
export const sendAutoReply = async (formData) => {
  try {
    const autoReplyParams = {
      to_email: formData.email,
      to_name: formData.name,
      from_name: 'Wonders Solution Team',
      subject: 'Thank you for your Water Test Request!',
      message: `
        Dear ${formData.name},

        Thank you for requesting a water quality test from Wonders Solution!

        We have received your request and our expert will contact you within 2 hours to schedule your FREE water test.

        Your Request Details:
        - Name: ${formData.name}
        - Phone: ${formData.phone}
        - Address: ${formData.address}
        - Main Concern: ${formData.waterIssues || 'General water quality check'}
        - Preferred Time: ${formData.preferredTime || 'To be discussed'}

        What happens next?
        1. Our water quality expert will call you within 2 hours
        2. We'll schedule a convenient time for your FREE water test
        3. Get personalized recommendations and transparent pricing

        For immediate assistance, you can also reach us at:
        📞 +91 86985 22195
        📧 wonderssolution11@gmail.com

        Best regards,
        Wonders Solution Team
        "Say Goodbye to Harsh Water"
      `,
      reply_to: 'wonderssolution11@gmail.com'
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_auto_reply',
      autoReplyParams
    )

    console.log('Auto-reply sent successfully:', response)
    return response

  } catch (error) {
    console.error('Auto-reply sending failed:', error)
    // Don't throw error for auto-reply failure
    return null
  }
}

/**
 * Validate EmailJS configuration
 * @returns {boolean} - Whether EmailJS is properly configured
 */
export const isEmailConfigured = () => {
  return EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' && 
         EMAILJS_SERVICE_ID && 
         EMAILJS_TEMPLATE_ID
}

// Export configuration for setup instructions
export const EMAIL_CONFIG = {
  SERVICE_ID: EMAILJS_SERVICE_ID,
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY
}
