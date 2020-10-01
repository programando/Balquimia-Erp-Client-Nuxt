import Api  from "@/config/services/Axios";
 

export default {

      async getFacturas() {
        return Api.get('/facturas-electronicas');
      },
 
}
