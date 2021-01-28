const router = require('express').Router()
const { StoreController } = require('../controllers')

router.get('/', StoreController.showAllProduct)
router.get('/:id/buy', StoreController.buy)

module.exports = router