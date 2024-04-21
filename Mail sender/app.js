const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const app = express();

// Logs the current time in UTC every 10 seconds
setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeString);
    console.log(timeZone);
}, 10000);

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

function sendEmail(subject, text) {
    const mailOptions = {
        from: process.env.EMAIL,
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

// Schedule email sending task using cron (converted to UTC)
// Monday to Friday at 12:30 PM UTC (6 PM IST)
cron.schedule('30 12 * * 1-5', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Example additional schedule for Monday at 7:11 PM UTC
cron.schedule('13 7 * * 1', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Saturday to Sunday every 2 hours from 3:30 AM to 6:30 AM UTC (9 AM to 12 PM IST)
cron.schedule('30 3,5,7 * * 6,7', () => {
    sendEmail('im ctetqck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Sunday at 6:09 PM UTC (11:33 PM IST)
cron.schedule('9 19 * * 0', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Start the express server (optional)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
