import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  company: string;
  email: string;
  bottleneck: string;
  stack?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { firstName, company, email, bottleneck, stack } = body;

    // Validate required fields
    if (!firstName || !company || !email || !bottleneck) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Use studiolabs0x@gmail.com as the default contact email
    // Can be overridden with CONTACT_EMAIL environment variable if needed
    const contactEmail = process.env.CONTACT_EMAIL || 'studiolabs0x@gmail.com';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'LayerZero Studio <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: [contactEmail],
      replyTo: email,
      subject: `New Book a Call Request from ${firstName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f97316; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; margin-bottom: 5px; display: block; }
              .value { color: #333; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Book a Call Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">First Name:</span>
                  <span class="value">${firstName}</span>
                </div>
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Primary Bottleneck:</span>
                  <span class="value">${bottleneck}</span>
                </div>
                ${stack ? `
                <div class="field">
                  <span class="label">Current Stack:</span>
                  <span class="value">${stack.replace(/\n/g, '<br>')}</span>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This email was sent from the LayerZero Studio contact form.</p>
                <p>You can reply directly to this email to contact ${firstName}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Book a Call Request

First Name: ${firstName}
Company: ${company}
Email: ${email}
Primary Bottleneck: ${bottleneck}
${stack ? `Current Stack: ${stack}` : ''}

---
This email was sent from the LayerZero Studio contact form.
You can reply directly to this email to contact ${firstName}.
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
