﻿# AdmitKardTask
 
 1. Frontend work the three screen is done in the assets folder 
 a. sign-in.html linked with sign-in.css
 b. otp-page.html linked with otp-page.css
 c. welcome-page.html linked with welcome-page.css
 
 2. I have tried to do the backend in this we can check the sms using postman
  "dependencies": {
    "express": "^4.17.1",
    "twilio": "^3.49.1"
  }
  
  a. when you type localhost:5000/login?phonenumber=917543219674&channel=sms
  (here 91 is the country code after that verified phone number I just wrote the random num here)
  ywe can receive the sms of 4digit here on the given phone number
  
  b. when you verify  localhost:5000/verify?phonenumber=917543219674&code=1234
  (here we need to write the code which we receive on the given number)
  
  For see the screen just go to any code editor and open with browser
  For see the sms sending process you can use the url as specified above on postman
  
  For running the server clone the repository and install all the dependency using 'npm i' then for running write 'node index.js' 
  
