var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permission');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-8768mq4kp1frwbds.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.challanges-api.com',
    issuer: 'https://dev-8768mq4kp1frwbds.eu.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challengs', guard.check(['read:challenges']), function (req, res) {
    res.send({ challenge1 : 'This is then fisrt challeng',
               challeng2: 'This is another challeng'});
});

app.listen(port);