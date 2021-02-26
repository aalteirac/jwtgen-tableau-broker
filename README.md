  

# JWTGEN-tableau-broker

  

A little sample that works in addition of [jwt-tableau-broker](https://github.com/aalteirac/jwt-tableau-broker).

This service generates the JWT expected by the [jwt-tableau-broker](https://github.com/aalteirac/jwt-tableau-broker) in order to deliver a Tableau valid ticket.

In real life it has to be secured properly, **do not use directly this piece in production** :-)

JWT is signed with private key, JWT is decode by the broker using only the public key.

Learn about the concept here: [Tableau Broker](https://anthony-alteirac.medium.com/tableau-trusted-authentication-the-ticket-broker-cloud-friendly-709789942aa3)  

## USAGE

  

Generate a JWT for a username (here valid for 1 year for test purpose but you can tweak)

  

POST http://localhost:3001/gimmeJWT

  

Body must be encoded application/x-www-form-urlencoded and contains "username" key with the user name as value

  

ex: username:alteirac

  

![ScreenShot](https://raw.githubusercontent.com/aalteirac/jwtgen-tableau-broker/master/one.png)

  

### INSTALL

Run the nodejs server:

- Install nodejs runtime

- Download the entire repo in zip or git clone

  

In the project folder, run the following:

- npm install

  

Run it with:

- node index.js

  

The server is running on port 3001 by default