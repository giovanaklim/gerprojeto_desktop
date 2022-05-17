import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    user: {},
    isLogged: null
  }),

  getters: {
    user (state) {
      return state.$state.user
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
