import Api from '@/services/Api'
// import Api from './Api'

export default{
  register (credentials){
    return Api().post('register', credentials)
  },

  login (credentials){
    return Api().post('login', credentials)
  }
}


// AuthenticationService.register({
//   email: 'example123@gmail.com',
//   password: 'ziobroprzestanrodzine'
// })
//przykladowe wywoalnie metody register gdzeis w osobnym pliku
