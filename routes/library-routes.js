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
  router.route("/library_search")
    .get(libraryController.library_search_get);
router.route("/map_search")
  .get(libraryController.map_search_get);
router.route("/:id")
 .get(libraryController.id_details_get)
 .post(libraryController.id_details_post)
 .put(libraryController.id_details_put)
 .delete(libraryController.id_details_delete);
router.route("/edit/:id")
 .get(libraryController.update_log_get);
 
module.exports = router;

