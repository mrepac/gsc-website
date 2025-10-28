# Mailgun Setup Guide

## Step 1: Get Your Mailgun Credentials

1. **Log in to your Mailgun account** at https://app.mailgun.com

2. **Find your domain**:
   - Go to "Sending" → "Domains" in the Mailgun dashboard
   - You'll see your domain (e.g., `sandbox1234abcd.mailgun.org` or your custom domain)
   - Copy this domain name

3. **Get your API Key**:
   - Go to "Settings" → "API Keys" 
   - Copy your "Private API key" (it starts with `key-...`)

## Step 2: Configure Environment Variables

Create or update your `.env.local` file in the `gsc-website` directory:

```env
# Mailgun Configuration
MAILGUN_DOMAIN=your-domain.mailgun.org
MAILGUN_API_KEY=your-api-key-here
MAILGUN_FROM_EMAIL=noreply@your-domain.mailgun.org
```

### For Testing (Sandbox Domain)
If you're using Mailgun's sandbox domain (for testing), it looks like:
```env
MAILGUN_DOMAIN=sandbox1234abcd.mailgun.org
MAILGUN_API_KEY=key-abc123def456...
MAILGUN_FROM_EMAIL=noreply@sandbox1234abcd.mailgun.org
```

### For Production (Custom Domain)
If you've set up a custom domain (e.g., `gscljubljana.org`):
```env
MAILGUN_DOMAIN=mg.gscljubljana.org
MAILGUN_API_KEY=key-production-key...
MAILGUN_FROM_EMAIL=noreply@gscljubljana.org
```

## Step 3: Add Authorized Recipients (Sandbox Only)

⚠️ **IMPORTANT**: If you're using Mailgun's sandbox domain, you MUST add authorized recipients first!

1. Go to "Sending" → "Authorized Recipients"
2. Click "Add Recipient"
3. Add these addresses:
   - `info@gscljubljana.org`
   - `mark@internum.ai`
4. Confirm each email by clicking the link in the verification email

## Step 4: Configure Vercel Environment Variables

When deploying to Vercel, add these environment variables:

1. Go to your Vercel project settings
2. Navigate to "Settings" → "Environment Variables"
3. Add each variable:
   - `MAILGUN_DOMAIN` = your domain
   - `MAILGUN_API_KEY` = your API key
   - `MAILGUN_FROM_EMAIL` = your from email

## Step 5: Test the Newsletter

1. Start your development server: `npm run dev`
2. Navigate to your website
3. Fill out the newsletter form with your email
4. Submit the form
5. Check your email inboxes for both `info@gscljubljana.org` and `mark@internum.ai`

## Troubleshooting

### "Email service not configured" error
- Check that your `.env.local` file exists and has all three variables
- Restart your development server after adding environment variables

### "Forbidden" error from Mailgun
- Check that your API key is correct
- Make sure you're using the Private API key, not the Public key
- If using sandbox, ensure recipients are added to authorized recipients

### Emails not arriving
- Check Mailgun's "Logs" section to see if emails were sent
- Check spam folders
- If using sandbox, verify emails are authorized recipients

## Mailgun Free Tier Limits

- **Sandbox domain**: 5,000 emails/month free
- **Custom domain**: 5,000 emails/month free
- **Authorized recipients**: Only needed for sandbox domain

## Production Checklist

Before going live:
- [ ] Set up custom domain in Mailgun
- [ ] Verify DNS records (SPF, DKIM, MX)
- [ ] Update environment variables in Vercel
- [ ] Test newsletter submission
- [ ] Check email deliverability in Mailgun logs

