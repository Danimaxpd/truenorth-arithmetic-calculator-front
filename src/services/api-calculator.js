import axios from 'axios'
const moment = require('moment');

const apiUrl = process.env.VUE_APP_CALCULATOR_API_URL
const apiVersion = process.env.VUE_APP_CALCULATOR_API_VERSION
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

export default {
    async getRecords() {
        try {
          const response = await api.get(`/api/${apiVersion}/records/filter`)
          return response.data
        } catch (error) {
          throw new Error(error.message)
        }
    },
    async login(username, password) {
      try {
        const currentDate = moment().utc().format("YYYY-MM-DD");
        const uuid = '05ccc18b-aef0-4087-ba12-02c977d4988c';
        const passId = `${uuid}-${currentDate}`;

        const response = await api.post('/auth/getToken', {
          passId,
          username,
          password,
        })
        return response.data.data
      } catch (error) {
        throw new Error(error.message)
      }
    },
}
