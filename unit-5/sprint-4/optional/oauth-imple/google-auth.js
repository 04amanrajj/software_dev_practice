const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5300/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null,profile)
    }
  )
);

module.exports = passport;
