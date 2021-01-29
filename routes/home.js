const router = require('express').Router()
const { HomeController } = require('../controllers')

router.get("/", HomeController.showData);

module.exports = router