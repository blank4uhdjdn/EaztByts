const express = require('express');
const nodemailer = require('nodemailer');


const handleContact=async (req , res )=>
    {
        const { name, email, message } = req.body;
      
        if (!name || !email || !message) {
          return res.status(400).json({ error: 'All fields are required' });
        }
      
      
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_PASS, 
          },
        });
      
        const mailOptions = {
          from: email, 
          to: process.env.GMAIL_USER, 
          subject: `New Contact Form Submission from ${name}`,
          text: message,
          // Optionally, include additional information:
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong><br/>${message}</p>`,
        };
      
        try {
          await transporter.sendMail(mailOptions);
          res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
          console.error('Error sending message:', error);
          res.status(500).json({ error: 'Failed to send message' });
        }
}

module.exports = handleContact;