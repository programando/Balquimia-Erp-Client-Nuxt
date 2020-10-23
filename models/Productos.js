import Api  from "@/config/services/Axios";
 

export default {

      async listaPrecios() {
        return Api.get('productos/precios');
  },
  
  
 
 
}
