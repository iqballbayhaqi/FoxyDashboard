const numberSeparator = require('./numberSeparator')

const rupiah = (number) => {
  return `Rp. ${numberSeparator(number)}`
}

module.exports = rupiah