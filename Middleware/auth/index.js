const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { user } = require("../../models");

exports.google = passport.authenticate("google", {
  scope: ["profile", "email"],
});

passport.serializeUser(function (account, cb) {
  cb(null, account);
});

passport.deserializeUser(function (account, cb) {
  cb(null, account);
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let account = await user.create({
          email: profile._json.email,
          password: accessToken,
          name: profile._json.name,
        });
        return done(null, account, {
          message: "user can be created",
        });
      } catch (err) {
        return done(err.message, false, {
          message: "user can't be created",
        });
      }
    }
  )
);
