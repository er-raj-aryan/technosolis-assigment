const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const Cookies = require('js-cookie')

app.options( '*' , cors()) 

app.use(cors());

const refreshTokens = [];

app.get("/", (req, res) => {
  const response = {};
  response.status = 200;
  response.data = "Server is running...";
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.send(response);
});

app.post("/login", (req, res, next) => {
  // Authenticate User
  let user = {email:"example@gmail.com"};
  const secKey = "aeraweasdfasdfasdfas";
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, secKey);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  res.json({message:"Successfully login"});
});

function generateAccessToken(user) {
  const secrete_access_key = "shkaradlredjasderinjansd";
  return jwt.sign(user, secrete_access_key, { expiresIn: 60 * 60 });
}

app.post("/register", (req, res, next) => {
  // Register User
  const secKey = "aeraweasdfasdfasdfas";
  let user = {email:"example@gmail.com"};
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, secKey);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.json({ message:"Successfully register" });
});


app.listen(8080);
