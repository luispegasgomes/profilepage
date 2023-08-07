import Vue from "vue";
import Vuex from "vuex";

import appData from "./modules/appData";
import appState from "./modules/appState";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appData,
    appState

  },
});
