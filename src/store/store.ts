import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

import { DataTask } from './DataTask';
import { DataActivity } from './DataActivity';
import createPersistedState from "vuex-persistedstate";

export const store = new Vuex.Store({
  modules: {
    tasks: DataTask.ExtractVuexModule(DataTask),
    actions: DataActivity.ExtractVuexModule(DataActivity)
  },
  plugins: [createPersistedState()]
})

export const vxm = {
  tasks: DataTask.CreateProxy(store, DataTask),
  actions: DataActivity.CreateProxy(store, DataActivity)
}