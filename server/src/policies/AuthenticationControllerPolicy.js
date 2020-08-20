const Joi =require('joi')
module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string() .email(),
      password: Joi.string() .regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    })
    const validation = schema.validate(req.body)
    const {error, value} = validation //validation przechowuje wynik walidacji czyli blad i wartosc

    if(error){
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
         break
        case 'password':
          res.status(400).send({
            error: 'Password must consist only the following: lowercase, uppercase, numerics and be 8-32 length '
          })
         break
        default:
          res.status(400).send({
            error: 'invalid credentials'
          })
      }
    }
    else{
    next()//wchodzi do nastepnej linii pliku wywolującego te funkje (bo AuthContPolicy to middleware)
    }
  }
}
