import Api  from "@/config/services/Axios";
 

export default {

  async getFacturas(url) {
    if ( url == undefined) {
      return Api.get('facturas-electronicas?sort=-fcha_dcmnto');
    } else {
      return Api.get(url);
    }
  },
  
       async sendFiles( IdFactura) {
          return Api.get(`invoices/pdf/${IdFactura}`);
  },

       async downloadFiles( IdFactura, filetype) {
          return Api.get(`invoices/download/${filetype}/${IdFactura}`);
  },  
 
 
}
