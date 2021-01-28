const { Product, Transaction } = require('../models')
const { Sequelize } = require("../models")
const {gt, in: opIn} = Sequelize.Op;

class StoreController {

  static showAllProduct(req, res) {
    Product.findAll({
      where: { stock: { [gt]: 0 } }
    })
    .then( data => {
      res.render('pages/client/home', { data: data })
    })
    .catch( err => {
      res.send(err.message)
    })
  }

  static buy(req, res) {
    let currentStock;
    Product.findByPk(+req.params.id)
    .then( data => {
      currentStock = data.stock
      return Product.update(
        { stock: currentStock - 1 },
        { where: { id: +req.params.id } }
      )
    })
    .then( data => {
      console.log(req.session);
      return Transaction.create({
        ProductId: +req.params.id,
        UserId: req.session.UserId
      })
    })
    .then( data => {
      res.redirect('/store')
    })
    .catch( err => {
      res.send(err.message)
    })
  }

}

module.exports = StoreController