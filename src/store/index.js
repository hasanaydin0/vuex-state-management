import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      counter: 0,
   },
   getters: {
      getCounter(state) {
         return state.counter * 2;
      },
   },
   mutations: {
      INCREASE_COUNTER(state) {
         state.counter++;
         console.log("state.counter", state.counter);
      },
      DECREASE_COUNTER(state) {
         state.counter--;
         console.log("state.counter", state.counter);
      },
   },
   actions: {
      increaseCounter({ commit }) {
         commit("INCREASE_COUNTER");
      },
      decreaseCounter({ commit }) {
         commit("DECREASE_COUNTER");
      },
   },
   modules: {},
});
