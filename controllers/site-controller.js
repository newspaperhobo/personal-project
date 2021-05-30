module.exports = {
    index: (request, response) => {
        response.render('pages/index')
    },
    login_register: (request, response) => {
        response.render('pages/login-or-register')
    },
    login: (request, response) => {
        response.render('pages/login')
    },
    register: (request, response) => {
        response.render('pages/register')
    },
    about: (request, response) => {
        response.render('pages/about')
    },
    dashboard: (request, response) => {
        response.render('pages/dashboard')
    },
    help: (request, response) => {
        response.render('pages/help')
    },
    resources: (request, response) => {
        response.render('pages/resources')
    },
}