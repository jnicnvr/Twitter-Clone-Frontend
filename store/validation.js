export const state = () => ({
    errors: {}
})

export const getters = {
    errors: state => state.errors
}

export const mutations = {

    SET_ERRORS(state, errors){
        return state.errors = errors
    }
}
export const actions = {
    setErrors({ commit }, errors) {
        commit('SET_ERRORS', errors)
        console.log(errors)
    },
    clearErrors({ commit }) {
        commit('SET_ERRORS', {})
    }
}