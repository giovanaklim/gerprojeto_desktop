import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    user: {},
    isLogged: null
  }),

  getters: {
    user (state) {
      return state.main.user
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
