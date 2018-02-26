import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import * as types from "~/store/types"
Vue.use(Vuex)
//CLASSIC MODE
/**
We don't need to install vuex since it's shipped with Nuxt.js.

We can now use this.$store inside our components:

<template>
  <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
</template>
*/
const createStore = () => {
  return new Vuex.Store({
	namespaced: true,
     state: {
    ...state

  },
  getters,
  mutations: {
    ...mutations,
  },
  actions,
	types
})
}

export default createStore
