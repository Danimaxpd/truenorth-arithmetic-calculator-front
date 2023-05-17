import axios from 'axios'
const moment = require('moment');
const apiUrl = process.env.VUE_APP_CALCULATOR_API_URL;
const apiVersion = process.env.VUE_APP_CALCULATOR_API_VERSION;


const vuexData = localStorage.getItem('vuex');
const vuexObject = JSON.parse(vuexData);
const token = vuexObject.token;
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${token}`
  }
})


export default {
  async getRecords(params) {
    try {
      const response = await api.get(`/api/${apiVersion}/records/filter?${params}`);
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  },
  async deletedRecord(record_id) {
    try {
      const response = await api.delete(`/api/${apiVersion}/records/by_id/${record_id}`);
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  },
  async createOperation(bodyData) {
    try {
      const response = await api.post(`/api/${apiVersion}/calculator/operation`, bodyData);
      return response.data
    } catch (error) {
      if (error.response.status === 400) {
        throw new Error(error.response.data.data.message);
      }

      throw new Error(error);
    }
  },
  async login(username, password) {
    try {
      const currentDate = moment().utc().format("YYYY-MM-DD");
      const uuid = process.env.VUE_APP_CALCULATOR_API_VALID_PASS_ID;
      const passId = `${uuid}-${currentDate}`;

      const response = await api.post('/auth/getToken', {
        passId,
        username,
        password,
      })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}
