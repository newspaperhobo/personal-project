const { request, response } = require('express');
const passport = require('passport');
const User = require('../models/user-model');
const Log = require('../models/log-model');
const mapsAPI = process.env.MAPS_URL

module.exports = {
  index: (request, response) => {
    response.render('pages/index', { user: request.user })
  },
  login_register: (request, response) => {
    response.render('pages/login-or-register')
  },
  login: (request, response) => {
    response.render('pages/login')
  },
  login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password
    });

    request.login(user, (error) => {
    //  passport.authenticate('local', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/login',
    //     failureFlash: {
    //       type: 'messageFailure',
    //       message: 'Email already taken.'
    //     },
    //     successFlash: {
    //       type: 'messageSuccess',
    //       message: 'Successfully signed up.'
    //     }
    //   })
      if (error) {
         console.log(error);
         response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/dashboard');
        });
      }
    });
  },
  logout: (request, response) => {
    request.logout();
    response.redirect('/login');
  },
  register: (request, response) => {
    response.render('pages/register')
  },
  register_post: (request, response) => {
    User.register({ username: request.body.username },request.body.password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/library/new');
        });
      }
    });
  },
  about: (request, response) => {
    response.render('pages/about', { user: request.user })
  },
  dashboard: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/dashboard')
    } else {
      response.redirect('../login')
    }
  },
  help: (request, response) => {
    response.render('pages/help')
  },
  resources: (request, response) => {
    response.render('pages/resources')
  },
  library_map_get: (request, response) => {
    if (request.isAuthenticated()) {
<<<<<<< HEAD
      let header = request.headers.referer
      header = header.slice(-6)
      let query;
    if (header === "spring") {
      Log.aggregate().project({
        name: 1,
        coords: 1,
        date: 1,
        img1: 1,
        month: {
          $month: "$date"
        }
      }).match({
        month: { $gte: 3, $lte: 5 }
      }).exec(function (err, result) {
        response.render('pages/map-view', { data: result, query: header, mapsAPI: mapsAPI })
      });
    }  else if (header === "summer") {
      Log.aggregate().project({
        name: 1,
        coords: 1,
        date: 1,
        img1: 1,
        month: {
          $month: "$date"
        }
      }).match({
        month: { $gte: 6, $lte: 8 }
      }).exec(function (err, result) {
        response.render('pages/map-view', { data: result, query: header, mapsAPI: mapsAPI })
      });
    } else if (header === "autumn") {
      Log.aggregate().project({
        name: 1,
        coords: 1,
        date: 1,
        img1: 1,
        month: {
          $month: "$date"
        }
      }).match({
        month: { $gte: 9, $lte: 11 }
      }).exec(function (err, result) {
        response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: header })
      });
    } else if (header === "winter") {
      Log.aggregate().project({
        name: 1,
        coords: 1,
        date: 1,
        img1: 1,
        month: {
          $month: "$date"
        }
      }).match({
        $or: [{ month: 12 }, { month: { $gte: 1, $lte: 2 } }]
      }).exec(function (err, result) {
        response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: header })
      });
    }
    else { Log.find({}, (error, all_Logs) => {
=======
      let query; 
      Log.find({}, (error, all_Logs) => {
>>>>>>> experimentbranchv1
      if (error) {
        return error
      } else {
        response.render('pages/map-view', { data: all_Logs, mapsAPI: mapsAPI, query: query })
      }
    })
<<<<<<< HEAD
  }
=======
>>>>>>> experimentbranchv1
    } else {
        response.redirect('../login')
    }
  }, library_search_get: (request, response) => {
    if (request.isAuthenticated()) {
      const query = request.query;
      const season = query.subSort;
      if (season === "spring") {
        Log.aggregate().project({
          name: 1,
          coords: 1,
          date: 1,
          img1: 1,
          month: {
            $month: "$date"
          }
        }).match({
          month: { $gte: 3, $lte: 5 }
        }).exec(function (err, result) {
          response.render('pages/library', { data: result, mapsAPI: mapsAPI, query: season })
        });
      } else if (season === "summer") {
        Log.aggregate().project({
          name: 1,
          coords: 1,
          date: 1,
          img1: 1,
          month: {
            $month: "$date"
          }
        }).match({
          month: { $gte: 6, $lte: 8 }
        }).exec(function (err, result) {
          response.render('pages/library', { data: result, mapsAPI: mapsAPI, query: season })
        });
      } else if (season === "autumn") {
        Log.aggregate().project({
          name: 1,
          coords: 1,
          date: 1,
          img1: 1,
          month: {
            $month: "$date"
          }
        }).match({
          month: { $gte: 9, $lte: 11 }
        }).exec(function (err, result) {
          response.render('pages/library', { data: result, mapsAPI: mapsAPI, query: season })
        });
      } else if (season === "winter") {
        Log.aggregate().project({
          name: 1,
          coords: 1,
          date: 1,
          img1: 1,
          month: {
            $month: "$date"
          }
        }).match({
          $or: [{ month: 12 }, { month: { $gte: 1, $lte: 2 } }]
        }).exec(function (err, result) {
          response.render('pages/library', { data: result, mapsAPI: mapsAPI, query: season })
        });
      } else if (season === "all") {
        Log.find({}).sort({ date: 1 }).exec(function (error, all_Logs) {
          if (error) {
            return error
          } else {
            response.render('pages/library', { data: all_Logs, mapsAPI: mapsAPI, query: query })
          }
        });
      } else {
        response.redirect('/library');
      }
    } else {
      response.redirect('../login')
    }
  },
}