const router = require('express').Router()
const { CategoryController } = require('../controllers')

router.get('/', CategoryController.showAll)
router.route('/add').get(CategoryController.showFormAdd).post(CategoryController.add)
router.route('/:id/edit').get(CategoryController.showFormEdit).post(CategoryController.edit)
router.get('/:id/delete', CategoryController.delete)

module.exports = router