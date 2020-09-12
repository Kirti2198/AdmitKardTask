const express = require('express');
const { PhoneNumberContext } = require('twilio/lib/rest/lookups/v1/phoneNumber');
const app = express();
const port = 5000;
const config = require('./config');
const client = require("twilio")(config.accountSID, config.authToken)

// login
// PhoneNumber
// ChannelMergerNode(sms/call)

// verify
// phonenum
// code

// accessing the static files
app.use(express.static('assets'));

app.get('/login', (req, res) => {
  client
    .verify
    .services(config.serviceID)
    .verifications
    .create({
      to: `+${req.query.phonenumber}`,
      channel: req.query.channel
    })
    .then((data) => {
      res.status(200).send(data)
    })
})

app.get('/verify', (req, res) => {
  client
    .verify
    .services(config.serviceID)
    .verificationChecks
    .create({
      to: `+${req.query.phonenumber}`,
      code: req.query.code
    })
    .then((data) => {
      res.status(200).send(data)
    })

})


app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
