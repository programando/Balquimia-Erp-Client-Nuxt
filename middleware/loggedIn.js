 
export default function (  contex ) {
  if (contex.$cookies.get('logueado')) {
    contex.redirect('/erp/facturas/listado');
  }

}