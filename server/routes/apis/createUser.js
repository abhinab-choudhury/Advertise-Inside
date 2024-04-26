import nodemailer from 'nodemailer';
import MailGen from 'mailgen';

export default async function createUser(req, res) {
  try {
    const { email, first_name, last_name } = req.body;

    if (!process.env.EMAIL || !process.env.PASSWORD) {
      return res.status(500).json({ message: 'Missing email or password credentials' });
    }

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });


    const mailGenerator = new MailGen({
      theme: 'salted',
      product: {
        name: 'Advertise Insight',
        link: 'https://advertise-insides.vercel.app/',
        logo: 'https://advertise-insides.vercel.app/assets/Advertise_Insides-BxdMLZJc.svg'
      }
    });

    // Prepare email content using MailGen (optional for customization)
    const emailContent = {
      body: {
        name: `${first_name} ${last_name}`,
        intro: "Welcome to Advertise Insight", // Replace with your app name
        outro: 'Looking forward for business.'
      }
    };

    // Generate HTML email using MailGen (if used)
    const emailBody = mailGenerator.generate(emailContent);

    // Create email message structure
    const message = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Welcome to Advertise Insight',
      html: emailBody || 'Welcome !!'
    };

    await transport.sendMail(message);

    return res.status(201).json({
      message: 'User created and welcome email sent successfully!'
    });
  } catch (error) {
    console.error('Error creating user or sending email:', error);
    return res.status(500).json({
      message: 'Error: User creation or email sending failed'
    });
  }
}
