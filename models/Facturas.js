import Api  from "@/config/services/Axios";
 

export default {

      async getFacturas() {
        return Api.get('/facturas-electronicas?sort=-fcha_dcmnto');
  },
  
       async sendFiles( IdFactura) {
          return Api.get(`/invoices/pdf/${IdFactura}`);
  },
       
  
 
}