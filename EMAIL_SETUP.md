# Email Setup Instructions

## Environment Variables

To enable email functionality, you need to create a `.env.local` file in the root of the `gsc-website` directory with the following variables:

```env
# SMTP Configuration for Email Sending
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@gscljubljana.org
```

## Email Service Configuration

### Using Gmail
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated app password as `SMTP_PASSWORD`

### Using Other SMTP Services
You can use any SMTP service provider:
- **SendGrid**: `smtp.sendgrid.net`, port 587
- **Mailgun**: `smtp.mailgun.org`, port 587
- **Custom SMTP**: Configure according to your provider's settings

## Email Recipients

All form submissions send emails to:
- info@gscljubljana.org
- mark@internum.ai

## Forms with Email Functionality

The following forms send emails when submitted:
1. Newsletter form in the Newsletter component
2. Newsletter form in the PastEvents component

