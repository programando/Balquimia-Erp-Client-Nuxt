import { address} from '@/config/constants'

import Vue     from 'vue'
import axios   from 'axios';
Vue.use (axios)

class ApiConnect {

   constructor ( Ruta ){
      this.Url = address.apiUrl + Ruta;
   }

   getQuery() {
      return  axios.get ( this.Url )
   }
}

export default ApiConnect;