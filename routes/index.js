const router = require("express").Router();
const validation = require("./validation");
const product = require("./product");
const category = require("./category");
const admin = require("./admin");
const store = require("./store");
const home = require("./home");
const { route } = require("./validation");

const isLoginAdmin = (req, res, next) => {
  if (req.session.token) {
    if (req.session.role === 'admin') {
      next();
    } else if (req.session.role === 'customer') {
      res.redirect("/store")
    }
  } else {
    res.redirect("/login");
  }
};

const isLoginCustomer = (req, res, next) => {
  if (req.session.token) {
    if (req.session.role === 'customer') {
      next();
    } 
  } else {
    res.redirect("/login");
  }
};

router.use(validation);
router.use("/store", isLoginCustomer, store)
router.use('/', isLoginAdmin, home)
router.use("/products", isLoginAdmin, product);
router.use("/categories", isLoginAdmin, category);
router.use("/admins", isLoginAdmin, admin);

module.exports = router;
