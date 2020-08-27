const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if(!user.changed('password')) {
    return;
  }

  return bcrypt
  .genSaltAsync(SALT_FACTOR)
  .then(salt => bcrypt.hashAsync(user.password, salt, null))
  .then(hash => {
    user.setDataValue('password', hash)
  })

}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING

  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      // beforeSave: hashPassword//przed zapisaniem hashowalo juz raz hashowane haslo, dlatego powodowalo to blad hasla przy logowaniu
    }
  })
  User.prototype.comparePassword = function (password) {
    console.log('plain: ')
    console.log(password)
    console.log('hash: ')
    console.log(this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
