import { address} from '@/config/constants'
import axios   from 'axios';
 

class ApiConnect {

   constructor ( Ruta ){
      this.Url = address.apiUrl + Ruta;
   }

   getQuery() {
      return  axios.get ( this.Url )
   }
}

export default ApiConnect;