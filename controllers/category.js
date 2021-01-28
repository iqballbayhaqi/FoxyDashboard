const { Category } = require('../models')

class CategoryController {

  static showAll(req, res) {

    Category.findAll()
    .then( data => {
      res.render('pages/categories', { data: data })
    })
    .catch( err => {
      res.send(err)
    })
  }

  static showFormAdd(req, res) {
    res.render('pages/add_category')
  }

  static add(req, res) {
    const { name } = req.body
    Category.create({
      name: name
    })
    .then( data => {
      res.redirect('/categories')
    })
    .catch( err => {
      res.send(err)
    })
  }

  static showFormEdit(req, res) {
    Category.findByPk(+req.params.id)
    .then( data => {
      res.render('pages/edit_category', { data: data })
    })
    .catch( err => {
      res.send(err)
    })
  }

  static edit(req, res) {
    const { name } = req.body
    Category.update({
      name: name
    }, { where: { id: +req.params.id } })
    .then( data => {
      res.redirect('/categories')
    })
    .catch( err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    Category.destroy({
      where: { id: +req.params.id }
    })
    .then( data => {
      res.redirect('/categories')
    })
    .catch( err => {
      res.send(err.message)
    })
  }

}

module.exports = CategoryController