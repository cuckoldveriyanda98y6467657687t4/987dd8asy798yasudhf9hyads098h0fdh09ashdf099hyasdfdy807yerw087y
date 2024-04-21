const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const app = express();





setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeString);
    console.log(timeZone);
  }, 10000);
// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user:process.env.email,
        pass:process.env.pass
    }
});

// Schedule email sending task using cron
// Monday to Friday after 6 PM IST (Corresponding to 9:30 AM PT)
cron.schedule('0 */1 6-10 * * 1-5', () => {
    sendEmail('im cahh1ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Saturday to Sunday every 2 hours after 9 AM IST (Corresponding to 11:30 PM PT)
cron.schedule('0 */2 1-10 * * 0,6', () => {
    sendEmail('im cahh1ck', 'hadgha&%(&*%9%(75dgsih8760poghdaspoiho439ui5wer-t98ewyrt');
});

// Sunday at 11:33 PM IST (Corresponding to 1:03 PM PT)
cron.schedule('10 0 * * 0', () => {
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
