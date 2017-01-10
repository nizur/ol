import { http } from 'vue'

const initialState = {
  businesses: [],
  pages: []
}

const logError = (error) => {
  console.error(error)
}

const actions = {
  fetch ({ commit }, payload) {
    return http.get(payload.url)
      .then(
        (response) => commit(payload.action, JSON.parse(response.body)),
        logError
      )
  }
}

const mutations = {
  'FETCH' (state, data) {
    state.businesses = data.businesses
    state.pages = data.pages
  }
}

const getters = {
  getBusinesses: state => state.businesses,
  getPages: state => state.pages
}

export default {
  state: {...initialState},
  actions,
  getters,
  mutations
}
