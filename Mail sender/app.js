// app.js

const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

const app = express();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'sangasdthoshcukddgsaoldveriyan@outlook.com',
        pass: 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt'
    }
});

// Schedule email sending task using cron
// Monday to Friday every 1 hour after 6 PM
cron.schedule('0 */1 18-23 * * 1-5', () => {
    sendEmail('im cahh1ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Saturday to Sunday every 2 hours after 9 PM
cron.schedule('0 */2 21-23 * * 6-7', () => {
    sendEmail('im cahh1ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Sunday at 10:39 PM
cron.schedule('10 23 * * 0', () => {
    sendEmail('im cahh1ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

function sendEmail(subject, text) {
    const mailOptions = {
        from: 'sangasdthoshcukddgsaoldveriyan@outlook.com',
        to: 'santhosh2002ugv2.0@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Start the express server (optional)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
