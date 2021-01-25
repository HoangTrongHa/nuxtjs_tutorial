export const state = () => ({
    isLoading: false
})

export const mutations = {
    setLoading (state) {
        state.isLoading = !state.isLoading
    }
}

export const actions = {
    setLoading ({ commit }) {
        commit('setLoading')
    }
}