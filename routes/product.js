const router = require('express').Router()
const multer  = require('multer')
const { ProductController } = require('../controllers')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})
const upload = multer({ storage: storage })

router.get('/', ProductController.showAll)
router.get('/add', ProductController.showFormAdd)
router.post('/add', upload.single('image'), ProductController.add)
router.route('/:id/edit').get(ProductController.showFormEdit).post(ProductController.edit)
router.get('/:id/delete', ProductController.delete)
router.get('/:id', ProductController.showDetailProduct)

module.exports = router