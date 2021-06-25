const express = require("express");
const passport = require("passport");

const authMid = require("../Middleware/auth");

const router = express.Router();

router.get("/google", authMid.google);

router.get("/success", (req, res) => {
  res.send("signup success");
});

router.get("/failed", (req, res) => {
  res.send("failed to login");
});

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failed" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/auth/success");
  }
);

module.exports = router;