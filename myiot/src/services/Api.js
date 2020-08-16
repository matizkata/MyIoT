import axios from 'axios'

export default () => {
  return axios.create({
    baaseURL:`http://localhost:8081/`
  })
}
