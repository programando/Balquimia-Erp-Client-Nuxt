import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
 

 
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
     User: null,
     Logueado: false,
  },
  plugins: [new VuexPersistence().plugin]
})


/* export const state = ()=>({
   User: null,
   Logueado: false,
})
 */
export const  getters = {
   getUser ( state ) {
      return state.User;
   },   
   isLoggin(state) {
      return state.Logueado;
   }
}

export const actions = {
   SetUser ( {commit}, User) {
      commit('SET_USER', null )
   }
}


export const mutations = {
   SET_USER(state, UserData) {
         state.User     = UserData
         state.Logueado = !!UserData;
      } 
}
