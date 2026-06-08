import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, childAge, services, description } = body;

    // Validate request
    if (!fullName || !phone || !childAge || !services || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in the environment variables.');
      return NextResponse.json(
        { error: 'Mail server configuration error' },
        { status: 500 }
      );
    }

    // Format the email content
    const clientEmail = email && email.trim() !== '' ? email : 'Not provided';
    const servicesList = Array.isArray(services) ? services : [services];

    // Build styled badges for services
    const servicesHTML = servicesList
      .map(
        (s) =>
          `<span style="display: inline-block; background-color: rgba(0, 170, 204, 0.08); color: #00AACC; font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 9999px; margin-right: 6px; margin-bottom: 6px; border: 1px solid rgba(0, 170, 204, 0.15);">${s}</span>`
      )
      .join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Evaluation Request</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAFAF8; margin: 0; padding: 0; color: #1A1A2E; -webkit-font-smoothing: antialiased;">
        <div style="background-color: #FAFAF8; padding: 30px 15px; width: 100%;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(27, 42, 138, 0.06); border: 1px solid #e2e8f0;">
            
            <!-- Header section matching website brand colors -->
            <div style="background-color: #0D1B4B; color: #ffffff; padding: 35px 25px; text-align: center; border-bottom: 4px solid #F5A800;">
              <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0; font-family: inherit;">
                Siragugal<span style="color: #F5A800;">.</span>
              </h1>
              <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #00AACC; font-weight: 700; margin: 6px 0 0 0;">
                Child Development & Physiotherapy Center
              </p>
            </div>
            
            <!-- Body content -->
            <div style="padding: 30px 25px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1B2A8A; margin-top: 0; margin-bottom: 24px; padding-bottom: 10px; border-bottom: 2px solid #FAFAF8;">
                New Evaluation Request Form
              </h2>
              
              <!-- Parent/Client Name -->
              <div style="margin-bottom: 18px; padding: 14px; background-color: #FAFAF8; border-radius: 8px; border-left: 4px solid #1B2A8A;">
                <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; line-height: 1;">
                  Parent / Client Name
                </div>
                <div style="font-size: 15px; color: #1A1A2E; font-weight: 700; margin-top: 6px;">
                  ${fullName}
                </div>
              </div>

              <!-- Contact Grid -->
              <div style="margin-bottom: 18px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="width: 50%; padding-right: 8px; padding-bottom: 8px;">
                      <div style="padding: 14px; background-color: #FAFAF8; border-radius: 8px; border-left: 4px solid #1B2A8A;">
                        <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; line-height: 1;">
                          Phone Number
                        </div>
                        <div style="font-size: 14px; color: #1A1A2E; font-weight: 700; margin-top: 6px;">
                          <a href="tel:${phone}" style="color: #1B2A8A; text-decoration: none;">${phone}</a>
                        </div>
                      </div>
                    </td>
                    <td style="width: 50%; padding-left: 8px; padding-bottom: 8px;">
                      <div style="padding: 14px; background-color: #FAFAF8; border-radius: 8px; border-left: 4px solid #1B2A8A;">
                        <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; line-height: 1;">
                          Email Address
                        </div>
                        <div style="font-size: 14px; color: #1A1A2E; font-weight: 700; margin-top: 6px;">
                          ${
                            clientEmail !== 'Not provided'
                              ? `<a href="mailto:${clientEmail}" style="color: #1B2A8A; text-decoration: none; word-break: break-all;">${clientEmail}</a>`
                              : `<span style="color: #4A4A6A; font-style: italic;">Not provided</span>`
                          }
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Child's Age Group -->
              <div style="margin-bottom: 18px; padding: 14px; background-color: #FAFAF8; border-radius: 8px; border-left: 4px solid #F5A800;">
                <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; line-height: 1; margin-bottom: 6px;">
                  Child's Age Group
                </div>
                <span style="display: inline-block; background-color: rgba(245, 168, 0, 0.08); color: #F5A800; font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 9999px; border: 1px solid rgba(245, 168, 0, 0.15);">
                  ${childAge}
                </span>
              </div>

              <!-- Requested Services -->
              <div style="margin-bottom: 24px; padding: 14px; background-color: #FAFAF8; border-radius: 8px; border-left: 4px solid #00AACC;">
                <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; line-height: 1; margin-bottom: 8px;">
                  Requested Services
                </div>
                <div style="margin-top: 4px;">
                  ${servicesHTML}
                </div>
              </div>

              <!-- Concerns & Description -->
              <div style="margin-bottom: 10px;">
                <div style="font-size: 10px; text-transform: uppercase; color: #4A4A6A; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px;">
                  Concerns & Clinical Description
                </div>
                <div style="background-color: #FAFAF8; border-radius: 8px; padding: 18px; border-left: 4px solid #F5A800; font-style: italic; color: #1A1A2E; font-size: 14px; line-height: 1.6; box-sizing: border-box;">
                  "${description}"
                </div>
              </div>

            </div>

            <!-- Footer matching website footer -->
            <div style="background-color: #0D1B4B; color: #ffffff; padding: 25px; text-align: center; font-size: 11px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
              <p style="margin: 0 0 6px 0; opacity: 0.8; font-weight: 600;">
                Sent automatically from the Siragugal Therapy Center Website.
              </p>
              <p style="margin: 0; opacity: 0.5;">
                &copy; ${new Date().getFullYear()} Siragugal Clinic. All rights reserved.
              </p>
              <p style="margin: 10px 0 0 0; color: #F5A800; font-weight: 700; font-style: italic; letter-spacing: 0.5px; text-transform: uppercase;">
                "Caring Hands, Healing Tots"
              </p>
            </div>
            
          </div>
        </div>
      </body>
      </html>
    `;

    // Make request to Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Siragugal Website <onboarding@resend.dev>',
        to: ['siragugalrehab@gmail.com'],
        subject: `New Enquiry: ${fullName} - Siragugal Center`,
        html: htmlContent,
        reply_to: clientEmail !== 'Not provided' ? clientEmail : undefined,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error Response:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to send email via Resend' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    console.error('Error in API contact handler:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
