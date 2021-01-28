const { User } = require("../models");

class AdminController {
  static showAll(req, res) {
    User.findAll({
      where: {
        role: "admin",
      },
    })
      .then((data) => {
        res.render("pages/admins", { data: data });
      })
      .catch((err) => {
        res.send(err.message);
      });
  }

  static showFormAdd(req, res) {
    res.render("pages/add_admin");
  }

  static add(req, res) {
    const { name, user_name, email, password } = req.body;
    User.create({
      name: name,
      user_name: user_name,
      email: email,
      password: password,
      role: "admin",
    })
      .then((data) => {
        res.redirect("/admins");
      })
      .catch((err) => {
        res.send(err.message);
      });
  }

  static showFormEdit(req, res) {
    User.findByPk(+req.params.id)
      .then((data) => {
        res.render("pages/edit_admin", { data: data });
      })
      .catch((err) => {
        res.send(err.message);
      });
  }

  static edit(req, res) {
    const { name, user_name, email, password } = req.body;
    User.update(
      {
        name: name,
        user_name: user_name,
        password: password,
        email: email,
        role: "admin",
      },
      { where: { id: +req.params.id } }
    )
      .then((data) => {
        res.redirect("/admins");
      })
      .catch((err) => {
        res.send(err.message);
      });
  }
}

module.exports = AdminController;
