const express = require('express')
const NewsController = require('../controllers/NewsController')

const router = express.Router()

router.route("/news")
    .get(NewsController.index)
    .post(NewsController.store)

router.route("/news/:id")
    .get(NewsController.show)
    .post(NewsController.update)
    .delete(NewsController.destroy)

router.get("/news/search/:title", NewsController.search);
router.get('/news/category/sport', NewsController.sport);
router.get('/news/category/finance', NewsController.finance);
router.get('/news/category/automotive', NewsController.automotive);

module.exports = router
