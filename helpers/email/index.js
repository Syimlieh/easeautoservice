"use strict";
const nodemailer = require("nodemailer");
import { html } from "./emailTemplate";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(email, name, subject, phoneNumber, message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // generated ethereal user
      pass: process.env.EMAIL_SERVER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const mailDetails = {
    from: name, // sender address
    to: process.env.EMAIL, // list of receivers
    subject, // Subject line
    html: html(name, phoneNumber, message), // html body
  };

  return transporter.sendMail(mailDetails);
}
