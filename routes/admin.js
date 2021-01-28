const router = require('express').Router()
const { AdminController } = require('../controllers')

router.get('/', AdminController.showAll)
router.route('/add').get(AdminController.showFormAdd).post(AdminController.add)
router.route('/:id/edit').get(AdminController.showFormEdit).post(AdminController.edit)

module.exports = router