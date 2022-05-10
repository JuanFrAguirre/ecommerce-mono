const fs = require('fs')
const path = require('path')

const dataLocation = path.join(process.cwd(), 'data', 'data.json')

const dataJson = {
  read: function () {
    return JSON.parse(fs.readFileSync(dataLocation), 'utf-8')
  },
  write: function (data, section) {
    let newData = this.read()
    newData[section].push(data)
    fs.writeFileSync(dataLocation, JSON.stringify(newData, null, 2))
  },
  getRegisterByField: function (section, value, field, single) {
    let data = this.read()[section]
    let register = data[single ? 'find' : 'filter'](
      (x) => String(x[field ? field : 'id']) === String(value)
    )
    return register
  },
}
console.clear()
console.log(dataJson.getRegisterByField('users', 'Juan', 'firstName', 1))

module.exports = dataJson
