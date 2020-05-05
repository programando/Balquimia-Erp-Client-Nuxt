import ApiService from './axios.js'

class FacturaElectronica extends ApiService {

   constructor ( endPoint ) {
      super ( endPoint );
   }

   UltimasCreadas (){
      return this.getQuery()
   }

}

export default FacturaElectronica;