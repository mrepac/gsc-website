import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Mailgun configuration
    const domain = process.env.MAILGUN_DOMAIN;
    const apiKey = process.env.MAILGUN_API_KEY;
    const fromEmail = process.env.MAILGUN_FROM_EMAIL || `noreply@${domain}`;

    if (!domain || !apiKey) {
      console.error('Mailgun credentials not configured');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Email content
    const subject = 'New Newsletter Subscription';
    const text = `New newsletter subscription from: ${email}`;
    const html = `
      <h2>New Newsletter Subscription</h2>
      <p>A new person has subscribed to the Global Shapers Ljubljana newsletter.</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString('sl-SI')}</p>
    `;

    // Send email to both addresses using Mailgun API
    const recipients = ['info@gscljubljana.org', 'mark@internum.ai'];
    
    const mailPromises = recipients.map(to => {
      const formData = new URLSearchParams();
      formData.append('from', fromEmail);
      formData.append('to', to);
      formData.append('subject', subject);
      formData.append('text', text);
      formData.append('html', html);

      return fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        },
        body: formData,
      });
    });

    await Promise.all(mailPromises);

    console.log('Newsletter subscription email sent:', email);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    return NextResponse.json(
      { success: false, message: 'Error subscribing' },
      { status: 500 }
    );
  }
}
