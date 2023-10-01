

export const increment = ({ commit }) =>  commit('increment')
export const decrement = ({ commit }) => commit('decrement')
export const incrementBy = ({ commit }, payload) => commit('incrementBy', payload)