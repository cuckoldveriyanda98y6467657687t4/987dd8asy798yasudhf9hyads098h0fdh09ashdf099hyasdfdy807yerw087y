const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeString);
    console.log(timeZone);
    // Get the weekday
    const dayOfWeekNumber = now.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    console.log("Today is:", dayOfWeekName);
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

// Schedule email sending task using cron (in UTC for IST timings)
// Monday to Friday at 12:30 PM UTC (6 PM IST)
cron.schedule('30 12 * * 1-5', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Saturday to Sunday every 3 hours from 3:30 AM UTC to 6:30 AM UTC
cron.schedule('30 3,6 * * 6,7', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

cron.schedule('36 7 * * 0', () => {
    sendEmail('im c42ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});
// Start the express server (optional)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
