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
    const servicesList = Array.isArray(services) ? services.join(', ') : services;
    const clientEmail = email && email.trim() !== '' ? email : 'Not provided';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Enquiry</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f6f9fc;
            margin: 0;
            padding: 0;
            color: #333333;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
          }
          .header {
            background-color: #0b2545; /* Dark navy brand color */
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .logo-text {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin: 0;
          }
          .logo-accent {
            color: #ffd166; /* Yellow/Gold brand accent */
          }
          .subtitle {
            font-size: 14px;
            opacity: 0.85;
            margin: 5px 0 0 0;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 600;
          }
          .content {
            padding: 30px 25px;
          }
          .greeting {
            font-size: 18px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 20px;
            color: #0b2545;
          }
          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
          }
          .info-table th {
            width: 30%;
            text-align: left;
            padding: 12px 10px;
            border-bottom: 1px solid #edf2f7;
            font-size: 14px;
            color: #4a5568;
            font-weight: 600;
          }
          .info-table td {
            width: 70%;
            text-align: left;
            padding: 12px 10px;
            border-bottom: 1px solid #edf2f7;
            font-size: 14px;
            color: #1a202c;
            font-weight: 500;
          }
          .description-box {
            background-color: #f7fafc;
            border-left: 4px solid #ffd166;
            padding: 15px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 25px;
            font-style: italic;
            color: #2d3748;
            font-size: 14px;
            line-height: 1.6;
          }
          .footer {
            background-color: #f8fafc;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #718096;
            border-top: 1px solid #e2e8f0;
          }
          .footer a {
            color: #0b2545;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1 className="logo-text">Siragugal<span className="logo-accent">.</span></h1>
            <p className="subtitle">New Evaluation Request</p>
          </div>
          <div className="content">
            <h2 className="greeting">Enquiry Details</h2>
            <p>A new child development evaluation or consultation request has been submitted through the website.</p>
            
            <table className="info-table">
              <tr>
                <th>Parent/Client Name</th>
                <td>${fullName}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td><a href="tel:${phone}" style="color: #0b2545; font-weight: 700; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td>${clientEmail !== 'Not provided' ? `<a href="mailto:${clientEmail}" style="color: #0b2545; text-decoration: none;">${clientEmail}</a>` : clientEmail}</td>
              </tr>
              <tr>
                <th>Child's Age Group</th>
                <td>${childAge}</td>
              </tr>
              <tr>
                <th>Requested Services</th>
                <td><strong style="color: #0b2545;">${servicesList}</strong></td>
              </tr>
            </table>

            <h3 style="color: #0b2545; font-size: 15px; margin-bottom: 10px; font-weight: 700;">Concerns & Description</h3>
            <div className="description-box">
              "${description}"
            </div>
          </div>
          <div className="footer">
            <p>Sent automatically from the Siragugal Therapy Center Website.</p>
            <p>&copy; ${new Date().getFullYear()} <a href="https://siragugalrehab.com">Siragugal Clinic</a>. All rights reserved.</p>
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
        subject: `New Enquiry from ${fullName} - Siragugal Center`,
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
