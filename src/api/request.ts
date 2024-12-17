import axios from 'axios'

const request = axios.create({ baseURL: 'http://192.168.1.128:9050' })

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      console.log("request error: ", res.message);
    } else {
      return res;
    }
  },
  error => {
    console.log("request error: ", error.message);
  }
)

export default request