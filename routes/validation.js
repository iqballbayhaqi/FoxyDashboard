const router = require('express').Router()
const { LoginController } = require('../controllers')

router.route('/login')
  .get(LoginController.showFormLogin)
  .post(LoginController.login)

  router.get('/logout', LoginController.logout)

module.exports = router