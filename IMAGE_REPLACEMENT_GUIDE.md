# Image Replacement Guide for Wonders Solution Landing Page

## Overview
This guide explains how to replace the placeholder images with your actual company logo and product images.

## Files to Replace

### 1. Company Logo
**Current file:** `src/assets/logo.svg`
**Recommended formats:** PNG, JPG, SVG
**Recommended size:** 200x200px or higher (square format preferred)
**Usage:** Header navigation, footer, and branding

**Steps to replace:**
1. Save your logo file as `src/assets/logo.png` (or appropriate extension)
2. Update the import in `src/components/Header.jsx`:
   ```javascript
   // Change this line:
   import logo from '../assets/logo.svg'
   // To:
   import logo from '../assets/logo.png'
   ```
3. Update the import in `src/components/Footer.jsx` similarly

### 2. Product Images

#### AquaSoft Pro 3000
**Current file:** `src/assets/products/aquasoft-pro-3000.svg`
**Recommended formats:** PNG, JPG
**Recommended size:** 400x300px or higher
**Aspect ratio:** 4:3 (width:height)

**Steps to replace:**
1. Save your product image as `src/assets/products/aquasoft-pro-3000.jpg`
2. Update the import in `src/components/ProductShowcase.jsx`:
   ```javascript
   // Change this line:
   import aquasoftPro3000 from '../assets/products/aquasoft-pro-3000.svg'
   // To:
   import aquasoftPro3000 from '../assets/products/aquasoft-pro-3000.jpg'
   ```

#### AquaSoft Elite 5000
**Current file:** `src/assets/products/aquasoft-elite-5000.svg`
**Recommended formats:** PNG, JPG
**Recommended size:** 400x300px or higher
**Aspect ratio:** 4:3 (width:height)

**Steps to replace:**
1. Save your product image as `src/assets/products/aquasoft-elite-5000.jpg`
2. Update the import in `src/components/ProductShowcase.jsx`:
   ```javascript
   // Change this line:
   import aquasoftElite5000 from '../assets/products/aquasoft-elite-5000.svg'
   // To:
   import aquasoftElite5000 from '../assets/products/aquasoft-elite-5000.jpg'
   ```

## WhatsApp Integration Features

### Current Implementation
✅ **Header Navigation:** WhatsApp button for general inquiries
✅ **Product Cards:** Individual "Buy Now" buttons redirect to WhatsApp with product-specific messages
✅ **Product Cards:** Quick inquiry buttons for each product
✅ **Product Section:** WhatsApp button for water test scheduling
✅ **Footer:** Emergency WhatsApp support button
✅ **Mobile Responsive:** All WhatsApp buttons work on mobile and desktop

### WhatsApp Number
**Current number:** +91 96905 22195
**Format:** International format (919690522195) for WhatsApp URLs

### Pre-filled Messages
The system automatically generates contextual messages including:
- Product name and price
- Customer inquiry type
- Relevant product information
- Call-to-action for consultation

### Message Types
1. **Product Inquiry:** When clicking "Buy Now" or product-specific buttons
2. **Water Test:** When requesting free water quality test
3. **General Inquiry:** For general questions and consultations
4. **Emergency Support:** For urgent technical issues

## Testing WhatsApp Integration

### Desktop Testing
1. Click any WhatsApp button
2. Should open WhatsApp Web in a new tab
3. Message should be pre-filled with relevant content
4. Verify the phone number is correct

### Mobile Testing
1. Click any WhatsApp button
2. Should open WhatsApp app directly
3. Message should be pre-filled
4. Ready to send to the business number

## Image Optimization Tips

### For Best Performance
- **Logo:** Use SVG for scalability, or PNG with transparent background
- **Products:** Use WebP format if supported, fallback to JPG
- **Size:** Optimize images to be under 500KB each
- **Dimensions:** Use consistent aspect ratios for product images

### File Naming Convention
- Use lowercase letters
- Use hyphens instead of spaces
- Include product model in filename
- Example: `aquasoft-pro-3000-main.jpg`

## After Replacing Images

1. **Test the build:**
   ```bash
   npm run build
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Verify all images load correctly**
4. **Test responsive design on mobile devices**
5. **Test WhatsApp functionality on both mobile and desktop**

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure file extensions match imports
- Verify files are in the correct directories
- Clear browser cache and rebuild

### WhatsApp Not Working
- Verify phone number format (international)
- Test on different devices
- Check if WhatsApp is installed on mobile
- Ensure messages are properly encoded

## Contact for Support
If you need assistance with image replacement or WhatsApp integration, please refer to the component files or contact the development team.
