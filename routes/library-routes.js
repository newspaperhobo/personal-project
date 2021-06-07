const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library-controller');

router.route("/")
 .get(libraryController.library_get);
router.route("/new")
 .get(libraryController.create_pin_get);
router.route("/new-form")
 .get(libraryController.create_log_get);
 router.route("/map_view")
  .get(libraryController.library_map_get);
router.route("/:id")
 .get(libraryController.id_details_get)
 .post(libraryController.id_details_post);
router.route("/:id/update")
 .get(libraryController.update_log_get);
 
module.exports = router;

