import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    id:"",
  },
  mutations: {
    id(state, payload) {
      state.id = payload;
    },
    
    logout(state, payload) {
      state.id = payload
    },
  },
  actions: {
   async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        }
      );
      commit("id", responseLogin.data.id);
      router.replace("/home");
    },
    logout({ commit }) {
      axios
        .post("http://127.0.0.1:8000/api/logout", {
          auth: this.state.id,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.id);
          router.replace("/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});