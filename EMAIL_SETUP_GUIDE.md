# Email Integration Setup Guide for Wonders Solution

## Overview
The contact form is now integrated with EmailJS to send form submissions directly to your Gmail inbox. This guide will help you set up the email service to receive customer inquiries.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Click **Connect Account** and authorize with your Gmail account (`wonderssolution11@gmail.com`)
5. Copy the **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Templates

#### Template 1: Contact Form Submissions
1. Go to **Email Templates** → **Create New Template**
2. Set **Template Name**: `Contact Form Submission`
3. Use this template content:

```
Subject: Water Test Request - {{from_name}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Address: {{address}}

Water Issues: {{water_issues}}
Preferred Time: {{preferred_time}}

Message:
{{message}}

---
Submitted via Wonders Solution website
Reply to: {{reply_to}}
```

4. Copy the **Template ID** (e.g., `template_abc456`)

#### Template 2: Auto-Reply to Customers
1. Create another template named `Auto Reply`
2. Use this template content:

```
Subject: Thank you for your Water Test Request!

Dear {{to_name}},

Thank you for requesting a water quality test from Wonders Solution!

We have received your request and our expert will contact you within 2 hours to schedule your FREE water test.

Your Request Details:
- Name: {{to_name}}
- Phone: (from your submission)
- Main Concern: (from your submission)

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
```

3. Copy this **Template ID** as well

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_xyz789`)

### Step 5: Update Configuration
1. Open `src/utils/emailService.js`
2. Replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here'
const EMAILJS_TEMPLATE_ID = 'your_contact_template_id_here'
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'
```

## 📧 How It Works

### For You (Business Owner):
1. Customer fills out the contact form
2. You receive an email at `wonderssolution11@gmail.com` with:
   - Customer's name, email, phone
   - Complete address
   - Water issues they're facing
   - Preferred time for water test
   - Timestamp of submission

### For Customers:
1. They get an immediate auto-reply confirmation
2. Email includes next steps and your contact information
3. Professional branded response builds trust

## 📱 Gmail Setup Tips

### Create Email Filters (Recommended):
1. In Gmail, go to **Settings** → **Filters and Blocked Addresses**
2. Create a filter for emails from EmailJS:
   - **From**: contains `emailjs`
   - **Subject**: contains `Water Test Request`
3. Apply label: `🚰 Water Test Requests`
4. Mark as important
5. Forward to your phone (optional)

### Mobile Notifications:
1. Install Gmail app on your phone
2. Enable notifications for the `Water Test Requests` label
3. Get instant alerts for new customer inquiries

## 🔧 Testing the Setup

### Test the Form:
1. Go to your website's contact form
2. Fill out with test data (use your own email)
3. Submit the form
4. Check if you receive:
   - Business notification email
   - Customer auto-reply email

### Troubleshooting:
- Check EmailJS dashboard for delivery status
- Verify all IDs are correctly copied
- Ensure Gmail account is properly connected
- Check spam folder for test emails

## 📊 Managing Form Submissions

### Daily Workflow:
1. **Morning**: Check Gmail for new water test requests
2. **Response**: Call customers within 2 hours as promised
3. **Follow-up**: Schedule water tests and send confirmations
4. **Evening**: Review day's inquiries and plan next day

### Email Organization:
- Use Gmail labels to categorize inquiries
- Star urgent requests
- Archive completed requests
- Set up auto-responses for holidays

## 💰 Cost & Limits

### EmailJS Free Plan:
- **200 emails/month** (usually sufficient for small business)
- **2 email services**
- **3 email templates**
- **Basic support**

### Upgrade Options:
- **Personal Plan**: $15/month (1,000 emails)
- **Professional Plan**: $35/month (5,000 emails)
- Upgrade when you exceed 200 emails/month

## 🔒 Security & Privacy

### Data Protection:
- EmailJS uses HTTPS encryption
- No customer data stored on their servers
- Complies with GDPR requirements
- Your Gmail credentials remain secure

### Best Practices:
- Never share your EmailJS keys publicly
- Regularly review connected services in Gmail
- Monitor for unusual email activity
- Keep EmailJS account password secure

## 📞 Support

### If You Need Help:
1. **EmailJS Support**: [EmailJS Documentation](https://www.emailjs.com/docs/)
2. **Technical Issues**: Contact your web developer
3. **Gmail Issues**: [Gmail Help Center](https://support.google.com/gmail/)

### Common Issues:
- **Emails not received**: Check spam folder, verify service connection
- **Auto-reply not working**: Check template ID and configuration
- **Form errors**: Verify all required fields are filled

---

## ✅ Setup Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created contact form template
- [ ] Created auto-reply template
- [ ] Updated configuration in code
- [ ] Tested form submission
- [ ] Set up Gmail filters
- [ ] Configured mobile notifications
- [ ] Documented login credentials securely

**Estimated Setup Time**: 15-20 minutes
**Monthly Cost**: Free (up to 200 emails)
**Customer Response Time**: Within 2 hours (as promised)

Your contact form is now ready to capture and deliver customer inquiries directly to your Gmail inbox! 🎉
