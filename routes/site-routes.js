const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller')

router.route('/')
    .get(siteController.index);
router.route('/login_register')
    .get(siteController.login_register);
router.route('/login')
    .get(siteController.login)
    .post(siteController.login_post);
router.route('/logout')
    .get(siteController.logout)
router.route('/register')
    .get(siteController.register)
    .post(siteController.register_post);
router.route('/about')
    .get(siteController.about);
router.route('/dashboard')
    .get(siteController.dashboard);
router.route('/help')
    .get(siteController.help);
router.route('/resources')
    .get(siteController.resources);
router.route('/settings')
    .get(siteController.settings);

module.exports = router;