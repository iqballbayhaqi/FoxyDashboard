const { User } = require('../models')
const { compareText, hashText } = require('../helpers/bcrypt')

class LoginController {

  static showFormLogin(req, res) {
    res.render('pages/login', { errors: req.query.errors })
  }

  static login(req, res) {
    User.findOne({
      where: { email: req.body.email }
    })
    .then( data => {
      const check = compareText(req.body.password, data.password)
      if (check){
        req.session.token = hashText(data.email)
        req.session.role = data.role
        req.session.UserId = data.id
        if (data.role === 'admin') {
          res.redirect('/')
        } else {
          res.redirect('/store')
        }
      } else {
        res.redirect('/login?errors=email atau password salah!')
      }
    })
    .catch( err => {
      res.send(err.message)
    })
  }

  static logout(req,res) {
    req.session.destroy()
    res.redirect('/login')
  }

}

module.exports = LoginController