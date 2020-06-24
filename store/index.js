import vuex from 'vuex';

var config = {
      state:{},
      getters:{},
      actions:{},
      mutations:{}
}

export default function() {
      return new vuex.Store(config);
}


/* export const state = () => ({ 
      
})
export const getters = {}
export const actions = {}
export const mutations = {}

export const modules = {
   UserStore:{
         namespaced: true,
   }
} */
