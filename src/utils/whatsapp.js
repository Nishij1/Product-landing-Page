// WhatsApp utility functions for Wonders Solution

const WHATSAPP_NUMBER = "918698522195" // +91 86985 22195 in international format

/**
 * Generate WhatsApp URL with pre-filled message
 * @param {string} message - The message to pre-fill
 * @returns {string} - WhatsApp URL
 */
export const generateWhatsAppURL = (message) => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Generate WhatsApp message for product inquiry
 * @param {string} productName - Name of the product
 * @param {string} price - Price of the product
 * @param {string} customerName - Customer name (optional)
 * @returns {string} - Formatted message
 */
export const generateProductInquiryMessage = (productName, price, customerName = "") => {
  const greeting = customerName ? `Hi, I'm ${customerName}.` : "Hi,"
  
  return `${greeting}

I'm interested in the ${productName} (${price}) from your website.

I would like to schedule a consultation at my convenience.

Thank you!`
}

/**
 * Generate WhatsApp message for general inquiry
 * @param {string} inquiryType - Type of inquiry
 * @param {string} customerName - Customer name (optional)
 * @returns {string} - Formatted message
 */
export const generateGeneralInquiryMessage = (inquiryType = "general", customerName = "") => {
  const greeting = customerName ? `Hi, I'm ${customerName}.` : "Hi,"
  
  const messages = {
    general: `${greeting}

I found your website and I'm interested in water softener solutions for my home.

Could you please help me with:
✅ Free water quality test
✅ Product recommendations based on my needs
✅ Pricing and installation details
✅ Current offers and discounts

I would appreciate a consultation at my convenience.

Thank you!`,

    waterTest: `${greeting}

I would like to schedule a FREE water quality test for my home.

Please let me know:
✅ Available time slots
✅ What the test includes
✅ How long it takes
✅ Next steps after the test

Looking forward to hearing from you!

Thank you!`,

    support: `${greeting}

I need technical support for my water softener system.

Issue details:
- Product: [Please specify your product]
- Problem: [Describe the issue]
- Purchase date: [When did you buy it]

Please assist me with this matter.

Thank you!`,

    quote: `${greeting}

I would like to get a quote for water softener installation.

My requirements:
✅ Family size: [Please specify]
✅ Home type: [Apartment/House]
✅ Current water issues: [Hard water/scaling/etc.]
✅ Preferred installation date: [Your preference]

Please provide a detailed quote with all costs included.

Thank you!`
  }

  return messages[inquiryType] || messages.general
}

/**
 * Generate WhatsApp message for emergency support
 * @param {string} issue - Description of the emergency issue
 * @param {string} customerName - Customer name (optional)
 * @returns {string} - Formatted message
 */
export const generateEmergencyMessage = (issue = "", customerName = "") => {
  const greeting = customerName ? `Hi, I'm ${customerName}.` : "Hi,"
  
  return `${greeting}

🚨 URGENT: I need emergency support for my water softener system.

Issue: ${issue || "Please describe your emergency issue"}

This is affecting my water supply and needs immediate attention.

Please contact me as soon as possible.

Thank you!`
}

/**
 * Open WhatsApp with pre-filled message
 * @param {string} message - The message to send
 * @param {boolean} newWindow - Whether to open in new window (default: true)
 */
export const openWhatsApp = (message, newWindow = true) => {
  const url = generateWhatsAppURL(message)
  
  if (newWindow) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}

/**
 * Handle product buy now click
 * @param {Object} product - Product object with name and price
 * @param {string} customerName - Customer name (optional)
 */
export const handleProductBuyNow = (product, customerName = "") => {
  const message = generateProductInquiryMessage(product.name, product.salePrice, customerName)
  openWhatsApp(message)
}

/**
 * Handle general inquiry click
 * @param {string} inquiryType - Type of inquiry
 * @param {string} customerName - Customer name (optional)
 */
export const handleGeneralInquiry = (inquiryType = "general", customerName = "") => {
  const message = generateGeneralInquiryMessage(inquiryType, customerName)
  openWhatsApp(message)
}

/**
 * Handle emergency support click
 * @param {string} issue - Description of the issue
 * @param {string} customerName - Customer name (optional)
 */
export const handleEmergencySupport = (issue = "", customerName = "") => {
  const message = generateEmergencyMessage(issue, customerName)
  openWhatsApp(message)
}

// Export the WhatsApp number for display purposes
export const DISPLAY_WHATSAPP_NUMBER = "+91 86985 22195"
