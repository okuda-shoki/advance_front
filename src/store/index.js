import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    id: "",
    user:""
  },
  mutations: {
    id(state, payload) {
      state.id = payload;
    },
    user(state, payload) {
      state.user=payload
    },
    logout(state, payload) {
      state.auth = payload
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
      const responseUser=await axios.get("http://127.0.0.1:8000/api/user/:user_id")
      commit("id", responseLogin.data.id);
      commit("user",responseUser.data.data)
      router.replace("/home");
    },
    logout({ commit }) {
      axios
        .post("http://127.0.0.1:8000/api/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});