import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const counterStore = {

    //TODO: importante
    namespaced: true,
    state: state,

    mutations: mutations,
    //metodos asincronos, usados para  api
    actions: actions,

    //geters se actualizan con los mutations o cuando el state cambia se dispara el getter
    getters: getters
}

export default counterStore;