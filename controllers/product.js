const { Product, Category, ProductCategory } = require('../models')

class ProductController {

  static showAll(req, res) {
    Product.findAll()
    .then( data => {
      res.render('pages/products', { data: data })
    })
    .catch( err => {
      res.send(err)
    })
  }

  static showFormAdd(req, res) {
    Category.findAll()
    .then( data => {
      res.render('pages/add_product', { categories: data })
    })
    .catch( err => {
      res.send(err)
    })
  }

  static add(req, res) {
    const { name, price, stock, description, category } = req.body
    Product.create({
      name: name,
      description: description,
      images: req.file.path,
      stock: +stock,
      price: +price
    })
    .then( data => {
      return ProductCategory.create({
        ProductId: data.id,
        CategoryId: +category
      })
    })
    .then( data => {
      res.redirect('/products')
    })
    .catch( err => {
      res.send(err.message)
    })
  }

  static showFormEdit(req, res) {
    let ProductData;
    Product.findByPk(+req.params.id, {
      include: Category
    })
    .then( data => {
      ProductData = data
      console.log(JSON.stringify(data, null, 2));
      return Category.findAll()
    })
    .then( data => {
      res.render('pages/edit_product', { categories: data, data: ProductData })
    })
    .catch( err => {
      res.send(err)
    })
  }

  static edit(req, res) {
    const { name, price, stock, description, category } = req.body
    Product.update({
      name: name,
      description: description,
      stock: +stock,
      price: +price
    }, { where: { id: +req.params.id } })
    .then( data => {
      res.redirect('/products')
    })
    .catch( err => {
      res.send(err.message)
    })
  }

  static delete(req, res) {
    Product.destroy({
      where: { id: +req.params.id }
    })
    .then( data => {
      res.redirect('/products')
    })
    .catch( err => {
      res.send(err)
    })
  }

  static showDetailProduct(req, res) {
    Product.findByPk(+req.params.id)
    .then( data => {
      res.render('pages/detail_product', { data: data })
    })
    .catch( err => {
      res.send(err)
    })
  }

}

module.exports = ProductController