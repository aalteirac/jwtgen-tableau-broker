const express = require('express'),
bodyParser = require('body-parser'),
jwt    = require('jsonwebtoken'),
fs = require('fs'),

app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const  authRoutes = express.Router(); 
app.use('/api', authRoutes);


app.listen(3001,()=>{
 console.log('JWT Generator Server is running on port 3001') 
});

app.get('/', function(req, res) {
  res.send('App is running on http://localhost:3001/');
});

app.post('/gimmeJWT',(req,res)=>{
  var privateKey = fs.readFileSync('jwtbroker.key');
  var id=req.body.username;
  if(!id){
    res.json({error: "no valid username key in body request, check content-type is application/x-www-form-urlencoded"});
    return
  }
  const payload = {
      userID:  id
    };
  var token = jwt.sign(payload, privateKey, {
    expiresIn: "365d",
    algorithm:'RS256'
  });
  res.json({
    token: token
  });
})
