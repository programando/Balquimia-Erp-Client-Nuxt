import ApiAxios from '@/config/services/axios.js'
import { address} from '@/config/constants'
import axios   from 'axios';

class FacturaElectronica extends ApiAxios {

   constructor ( endPoint ) {
      super ( endPoint );
   }

   UltimasCreadas (){
      return this.getQuery()
   }

   async Facturas () {
         await 
            axios
            .get(address.apiUrl+'facturas')
   }

  

}

export default FacturaElectronica;