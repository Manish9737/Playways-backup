const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Host = require('../model/hostSchema'); // Adjust this path based on your file structure

const setupGoogleStrategy = (passport) => {
  passport.use('google-login', new GoogleStrategy({
    response_type: 'code',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: '/hosts/auth/google/callback',
    callbackURL: 'http://localhost:1000/hosts/auth/google/callback',
    passReqToCallback: true,
    scope: ['profile', 'email'] // Define the required scope here
  },
  async (req, accessToken, refreshToken, profile, done) => {
    // console.log(`Profile: ${JSON.stringify(profile)}`);
    try {
      const existingHost = await Host.findOne({ googleId: profile.id });

      if (existingHost) {
        return done(null, existingHost);
      } else {
        let phone = null; // Initialize phone as null

        // Check if profile has phone numbers
        if (profile.phoneNumbers && profile.phoneNumbers.length > 0) {
          phone = profile.phoneNumbers[0].value; // Assign the first phone number if available
        }


        const newHost = new Host({
          _id: profile.id,
          email: profile.emails[0].value,
          phone: phone,

          // Add other relevant profile data here
        });

        await newHost.save();
        return done(null, newHost);
      }
    } catch (error) {
      return done(error);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Host.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

module.exports = setupGoogleStrategy;
