const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const saltRounds = 13;
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

var result;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Sara');
var datab = mongoose.connection;
datab.on('error', console.log.bind(console, "connection error"));
datab.once('open', function (_callback) {
  console.log("Connection Establised");

}) 

//SCHEMA

const sch = {
  name: String,
  email: String,
  password: String
}

const monmodel = mongoose.model("users_sara", sch);
const uri = 'mongodb://127.0.0.1:27017/Sara';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//creating the user API
app.post('/user/create', async (req, res) => {
  console.log("Calling Create API")

  var username = req.body.name;
  var useremail = req.body.email;
  var userpass = req.body.password;

  let usernameregExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let useremailRegExp = /[a-zA-Z0-9]+@northeastern.edu+$/;
  let userpassRegExp = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!username.match(usernameregExp)) return res.send("Invalid Name!");
  if (!useremail.match(useremailRegExp)) return res.send("Invalid Email!");
  if (!userpass.match(userpassRegExp)) return res.send("Enter a stronger Password");

  const hash = await bcrypt.hash(userpass, saltRounds)


  var input = {
    "name": username,
    "email": useremail,
    "password": hash
  }

  datab.collection('users_sara').insertOne(input, function (err) {
    if (err) throw err;
    console.log("Record added!");
  });
  return res.send("User has been added to Database!")

});
//editing the user API
app.put("/user/edit", async (req, res) => {
  console.log("Calling the edit API...");

  var filteremail = req.body.email;
  var newusername = req.body.name;
  var newuserpass = req.body.password;

  const hash = await bcrypt.hash(newuserpass, saltRounds)

  const filter = { email: filteremail };
  const options = { upsert: true };
  const updateData = {
    $set: {
      name: newusername, password: hash
    }
  }
  datab.collection('users_sara').updateOne(filter, updateData, options, function (err) {
    if (err) throw err;
    console.log("Database edited successfully");
  });
  return res.send("Details has been edited!");
});

//deleting the user API


app.delete('/user/delete', function (req, res) {
  console.log("Calling the delete API..")
  var useremail = req.body.email;
  var input = {
    "email": useremail
  }
  datab.collection('users_sara').deleteOne(input, function (err) {
    if (err) console.log(err);
    console.log("The user record has been deleted!")
  });
  return res.send("User has been deleted");
});

// get all users API

//get all user details using get api

// get all users API
app.get('/user/getAll', async (req, res) => {
  console.log("Calling the get all Api");

  const result = await datab.collection('users_sara').find().toArray();

  res.json(result);
});

// get one user API
app.get('/user/get', async (req, res) => {

  var useremail = req.body.email;
  var input = {
    "email": useremail
  }

  const result = await datab.collection('users_sara').find(input).toArray();

  res.json(result);
});


//login handler

app.post('/user/login', function (req, res) {
  console.log("Calling Login API");

  var useremail = req.body.email;
  var userpass = req.body.password;

  datab.collection('users_sara').findOne({ email: useremail }, function (err, user) {
    if (err) {
      return res.send('Error occurred');
    }

    if (!user) {
      return res.send('User does not exist');
    }

    bcrypt.compare(userpass, user.password, function (err, result) {
      if (err) {
        return res.send('Error occurred');
      }

      if (result === true) {
        return res.send('Login successful');
      } else {
        return res.send('Invalid credentials');
      }
    });
  });
});

app.post('/jobs/createJob', function (req, res) {
  console.log(req.body);
  var jobId = parseInt(req.body.job_id, 10);
  var jobName = req.body.job_name;
  console.log(typeof jobId);
  console.log(typeof jobName);

  datab.collection('jobs').findOne({ job_id: jobId }, function (err, job) {
    if (err) throw err;
    if (job) {
      // Job already exists in the database, return an error
      return res.status(400).send('Job already exists');
    } else {
      // Job doesn't exist in the database, insert a new job record
      datab.collection('jobs').insertOne({ job_id: jobId, job_name: jobName }, function (err) {
        if (err) throw err;
        return res.send('Job added successfully');
      });
    }
  });
});



app.get('/', function (req, res) {
  res.set({
    'Access-control-Allow-origin': '*'
  });
}).listen(3000)
console.log("listening at 3000");