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
          if (error) {
            return error;
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
    register_post:(request, response) => {
        User.register({username: request.body.username}, request.body.password, (error, user) => {
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
      // if (request.isAuthenticated()) {
          let query;
          Log.find({}, (error, all_Logs) => {
              if (error) {
                  return error
              } else {
                  response.render('pages/map-view', { data: all_Logs , mapsAPI: mapsAPI, query: query})
              }
          })

      // } else {
      //     response.redirect('../login')
      // }
  },
}