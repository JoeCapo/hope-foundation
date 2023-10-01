const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const nodemailer = require('nodemailer');

const app = express();

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// Middleware to parse JSON data
app.use(bodyParser.json());

// Configure nodemailer with your email provider's SMTP settings - using forwardmail
const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
        pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
});
// Create a nodemailer transporter without SMTP authentication
// const transporter = nodemailer.createTransport({
//     sendmail: true, // Use the sendmail transport
//     newline: 'unix',
//     path: '/usr/sbin/sendmail', // Path to the sendmail binary
// });

// Define a route to handle form submissions
app.post('/api/contact', (req, res) => {
    // Access form data from req.body
    const { name, email, message } = req.body;

    // Log the form data to the console
    console.log('Form Data:', { name, email, message });

    // Create an email message
    const mailOptions = {
        from: 'no_reply@test.com',
        to: 'jrcaporiccio@gmail.com', // Change to the recipient's email address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Thank you for contacting us!' });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
