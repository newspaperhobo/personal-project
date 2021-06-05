const mongoose = require('mongoose');
const {Schema} = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
  username: {
    type: String,
    // required: [true, 'Please enter a username.'],
    // minLength: [5, 'Your username must be at least 5 characters long.']
  },
  password: {
    type: String,
    // required: [true, 'Please enter a password.'],
    // minLength: [6, 'Your password must be at least 6 characters long.']
  }, 
//   googleId: {
//     type: String,
//   }
});

userSchema.plugin(passportLocalMongoose);
// added to use findOrCreate on line 39
// userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser(User.serializeUser());
    
//     function(user, done) {
//   done(null, user.id);
// });

passport.deserializeUser(User.deserializeUser());
    
//     function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// passport.use(new GoogleStrategy({
//   // updated to process.env.CLIENT_ID
//   clientID: process.env.CLIENT_ID,
//   // updated to process.env.CLIENT_ID
//   clientSecret: process.env.CLIENT_SECRET,
//   // updated to Authorized redirect URI from Dev Dashboard
//   callbackURL: "https://carols-bookstore-kira.herokuapp.com/auth/google/books"
// },
// //updated "profile" to "email" in line 37, 39
// function(accessToken, refreshToken, email, cb) {
//   // to use findOrCreate, need to install mongoose-findorcreate
//   console.log(email);
//   User.findOrCreate({ googleId: email.id, username: email.displayName }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));

module.exports = User;
