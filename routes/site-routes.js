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
router.route("/map_view")
    .get(siteController.library_map_get);
router.route("/library_search")
    .get(siteController.library_search_get);

module.exports = router;