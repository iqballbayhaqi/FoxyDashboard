const router = require("express").Router();
const validation = require("./validation");
const product = require("./product");
const category = require("./category");
const admin = require("./admin");
const store = require("./store")

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
    } else if (req.session.role === 'admin') {
      res.redirect("/")
    }
  } else {
    res.redirect("/login");
  }
};

router.get("/", isLoginAdmin, (req, res) => {
  res.render("pages/home");
});

router.use(validation);
router.use("/products", isLoginAdmin, product);
router.use("/categories", isLoginAdmin, category);
router.use("/admins", isLoginAdmin, admin);
router.use("/store", isLoginCustomer, store)

module.exports = router;
