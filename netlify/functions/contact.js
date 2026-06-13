const nodemailer = require('nodemailer'); // Fixed back to require!

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: 'All fields are required.' }) };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Invalid email format.' }) };
    }

    // ==========================================
    // PROFESSIONAL HTML EMAIL TEMPLATE
    // ==========================================
    const htmlTemplate = `
      <div style="background-color: #f4f4f4; padding: 40px 20px; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #2e7d32; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Portfolio Message</h1>
          </div>
          
          <!-- Body -->
          <div style="padding: 30px;">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">You have received a new message from your portfolio contact form.</p>
            
            <!-- Sender Info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 80px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #2e7d32; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px; color: #333;">${subject}</td>
              </tr>
            </table>
            
            <!-- Message Box -->
            <div style="background-color: #f9f9f9; border-left: 4px solid #4caf50; padding: 15px; border-radius: 4px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #444;">${String(message).replace(/\n/g, '<br>')}</p>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin: 0; font-size: 12px; color: #888;">This email was sent from your portfolio website.</p>
          </div>
          
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`, 
      html: htmlTemplate, 
    };

    await transporter.sendMail(mailOptions);

    return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Email sent successfully!' }) };

  } catch (error) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: JSON.stringify({ success: false, message: 'Internal server error.' }) };
  }
};

module.exports = { handler }; // Fixed back to module.exports!