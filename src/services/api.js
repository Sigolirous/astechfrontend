import axios from 'axios'
export default axios.create({
    baseURL: `https://astechbackend.herokuapp.com/`
  });