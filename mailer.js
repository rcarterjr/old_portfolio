const express = require('express')
;('use strict')
const nodemailer = require('nodemailer')

const app = express()

const name = '',
  email = '',
  message = ''

// when form is submitted, a post request will redirect user to contact.js
app.post('/contact', (req, res) => {
  console.log(req.body)
  name = req.body.username
  email = req.body.email
  message = req.body.message
  res.end()
})

// when below is uncommented and we run node mailer.js we get the template emails on load
// this is the same issue I had with my desktop project
//app.listen(8000, () => console.log('listening on server'))

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    name: name,
    from: email, // sender address
    to: 'bar@example.com', // list of receivers
    subject: 'mail from gatsby', // Subject line
    text: message, // plain text body
    html: `<h3>${message}</h3>`, // html body
  }

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log('Message sent: %s', info.messageId)
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error)
