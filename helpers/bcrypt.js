const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashText = (text) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(text, salt);
}

const compareText = (currentText, hashText) => {
  return bcrypt.compareSync(currentText, hashText);
}

module.exports = {
  hashText,
  compareText
}