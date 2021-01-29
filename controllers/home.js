const { Transaction } = require("../models");
const yyyymmdd = require('../helpers/yyyymmdd')
const sequelize = require('sequelize')

class HomeController {
  static showData(req, res) {
    Transaction.findAll()
      .then((data) => {
        let listDate = {}
        data.forEach( resData => {
          if(listDate[yyyymmdd(resData.createdAt)] !== undefined){
            listDate[yyyymmdd(resData.createdAt)] += 1
          } else {
            listDate[yyyymmdd(resData.createdAt)] = 1
          }
        });
        res.render("pages/home", { listDate: listDate });
      })
      .catch((err) => {
        res.send(err.message);
      });
  }
}

module.exports = HomeController;
