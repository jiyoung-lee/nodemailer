var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
        user: '',   //user email
        pass: ''    //user email pw
});

var mailOption = {
    from: '', // email
    to: '', // email
    subject: 'nodemailer test',
    text: 'Hello'
};

transporter.sendMail(mailOption, function (err, info) {
    if (err) {
        console.error('Send Mail error : ', err);
    }
    else {
        console.log('Message sent : ', info);
    }
});