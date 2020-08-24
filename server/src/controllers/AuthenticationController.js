const {User} = require('../models')

module.exports = {
 async register(req, res) {
   try{
    const user = await User.create(req.body)
    res.send(user.toJSON())
   } catch (err) {
     res.status(400).send({
       error: 'This email is already in use'
     })
   }
  },

  async login(req,res){
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(403).send({
          error: 'Incorrect login'
        })
      }

      const isPasswordValid = password ===user.password
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'Incorrect password'
        })
      }
      const userJson=user.toJSON()
      res.send({
        user: user.toJSON()
      })
    }
    catch(err) {
      res.status(500).send({
        error: 'Error while trying to login'
      })
    }
  }
}
