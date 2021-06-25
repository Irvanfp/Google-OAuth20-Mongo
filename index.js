require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const routesAuth = require("./route/authRoutes");
const passport = require("passport");
const cookieSession = require('cookie-session')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(fileUpload());
app.use(express.static("public"));

app.use("/auth", routesAuth);

app.listen(3000, () => {
  console.log("running on 3000");
});
