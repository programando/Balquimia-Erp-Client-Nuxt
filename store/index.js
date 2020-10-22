import Cookie from "js-cookie";
export const state = () => ({
   User: null,
   Logueado: false,
})

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
      state.Logueado = true;
      Cookie.set('logueado', true);
      Cookie.set('user', UserData);
   },
   
   USER_LOGOUT(state) {
      state.User     = null
      state.Logueado = false;
      Cookie.remove('logueado');     
      Cookie.remove('user');     
   }
}
