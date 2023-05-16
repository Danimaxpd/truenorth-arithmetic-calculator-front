import { createStore } from 'vuex'
import calculatorApi from '@/services/api-calculator'
import VuexPersistance from 'vuex-persist';


export default createStore({
  state: {
    isAuthenticated: false,
    token: null
  },
  getters: {
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setToken(state, token) {
      state.token = token;
    },
    resetStore(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
        // Make an API request to authenticate the user
        const response = await calculatorApi.login(username, password);
        const data = response.data;
        // Retrieve the JWT token from the response
        const token = data.token;

        // Store the token in the state
        commit('setToken', token);

        // Set the authentication status to true
        commit('setIsAuthenticated', true);
    },
    logout({ commit }) {
      commit('resetStore');
    },
  },
  modules: {
  },
  plugins: [new VuexPersistance({
    storage: window.localStorage
  }).plugin] 
})
