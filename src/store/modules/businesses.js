import { http } from 'vue'

const initialState = {
  businesses: [],
  business: {},
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
  },
  'FETCH_BUSINESS' (state, data) {
    state.business = data
  }
}

const getters = {
  getBusinesses: state => state.businesses,
  getPages: state => state.pages,
  getBusiness: state => state.business
}

export default {
  state: {...initialState},
  actions,
  getters,
  mutations
}
