/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import qs from 'qs';

import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    loggedIn: false,
    jwt: null,
    pets: null,
  },
  getters: {
    error(state) { return state.error; },
    loggedIn(state) { return state.loggedIn; },
    jwt(state) { return state.jwt; },
    pets(state) { return state.pets; },
  },
  mutations: {
    SET_ERROR(state, error) { state.error = error; },
    SET_LOGGED_IN(state, loggedIn) { state.loggedIn = loggedIn; },
    SET_JWT(state, jwt) { state.jwt = jwt; },
    SET_PETS(state, pets) { state.pets = pets; },
  },
  actions: {
    async logIn({ commit }, { username, password }) {
      commit('SET_ERROR', null);

      try {
        const res = await axios.post('http://localhost:3000/auth', qs.stringify({
          username,
          password,
        }));

        commit('SET_LOGGED_IN', true);
        commit('SET_JWT', await res.data);
        router.push('/');
      } catch (err) {
        commit('SET_ERROR', err.response.data);
      }
    },
    async getPets({ commit, getters }) {
      try {
        const res = await axios.get('http://localhost:3000/my-pets', {
          headers: {
            Authorization: `Bearer ${getters.jwt}`,
          },
        });

        commit('SET_PETS', res.data);
      } catch (err) {
        commit('SET_ERROR', err.response.data);
      }
    },
  },
});
