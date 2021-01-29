
const yyyymmdd = (date) => {
const yyyy = new Date(date).getFullYear();
const mm = (new Date(date).getMonth() + 1).length === 1 ? '0' : '' + (new Date(date).getMonth() + 1);
const dd = new Date(date).getDate().length === 1 ? '0' : '' + new Date(date).getDate();

return `${yyyy}-${mm}-${dd}`
}

module.exports = yyyymmdd