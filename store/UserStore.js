/* import Api  from "@/config/services/Axios";
import Csrf from "@/config/services/Csrf"; */


export const state = ()=>({
   User: null,
   Logueado: false,
})

export const  getters = {
   getUser ( state ) {
      return state.User;
   }
}

export const actions = {
   SetUser ( {commit}, User) {
      commit('SET_USER', null )
   }
}

/* export const actions = {

     async login ({dispatch}, Credentials ) {
         await Csrf.getCookie() ;
         await Api.post('login', Credentials);
         return dispatch('getUser');
     },

     getUser ({commit})  {
        Csrf.getCookie() ;
        Api.get('user')
        .then (res => {             
           commit('SET_USER', res.data )
        })
        .catch ( error => {
           commit('SET_USER', null )
        })
     }     
}
*/
export const mutations = {

      SET_USER(state, UserData){
         state.User     = UserData
         state.Logueado = !!UserData;
      } 
}