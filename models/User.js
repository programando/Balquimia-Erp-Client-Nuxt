import Api  from "@/config/services/Axios";
import Csrf from "@/config/services/Csrf";

export default {

    async register( formData ) {
          await Csrf.getCookie();
          return Api.post("register", formData ) ;
      },

      async login ( formData ) {
          await Csrf.getCookie() ;        
          return Api.post('login', formData);
      },

      async logout() {
        await Csrf.getCookie() ;
        return Api.post('logout');
      },

      async auth(){
         return Api.get('user');
      }
}
