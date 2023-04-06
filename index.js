const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config()


let html = fs.readFileSync('teste.html', 'utf8').toString();


let mailTransporter = nodemailer.createTransport({
  service: 'Hotmail',
    auth: {
      user: 'digite seu e-mail',
      pass: process.env.PASS
    }
});


let mailOptions = {
  from: 'remetente',
  to: 'emaildequemvaireceber',
  subject: 'test',
  html: html
};


mailTransporter.sendMail(mailOptions, function(err, data) {
  if(err) {
      console.log('Error Occurs');
  } else {
      console.log('Email sent successfully');
  }
});