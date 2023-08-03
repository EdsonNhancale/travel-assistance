// Load HTTP module
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

//Port running
app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});