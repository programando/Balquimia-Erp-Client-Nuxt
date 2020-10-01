 
<template>
  <div>
   <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-4xl text-3xl font-medium title-font   text-gray-900">Facturas y notas crédito</h1>

    </div>

  
 <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Fecha</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Factura</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Cliente</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Dian</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"> Pdf</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"> Xml</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="Factura in Facturas" :key="Factura.id">
          
            <td >{{ Factura['attributes']['fecha-factura'] }}  </td>
            <td >{{ Factura['attributes']['prefijo'] }}-{{ Factura['attributes']['id'] }} </td>
            <td >{{ Factura['customer']['name'] }}  </td>
            <td >{{ Factura['customer']['name'] }}  </td>
             
          </tr>



        </tbody>
      </table>
     
      
  </div>
</template>


<script>

/*
             <tr v-for="Factura in Facturas" :key="Factura.id_fact_elctrnca">
                  <td>{{Factura._07_fcha_fctra}}</td>
                  <td>{{Factura._06_emprsa}}</td>
                  <td>{{Factura.prefijo}}-{{Factura.folio}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button>Enviar</button></td>
             </tr>
  */


/*  import { FacturaElectronica } from '@/config/services';
 const Factura = new  FacturaElectronica('facturas');  */

import Facturas            from "@/models/Facturas";

export default {
  name: 'UltimasFacturasCreadas',
  layout :'app-admin',
    data: () => ({
      Facturas: [],
      Mensaje:'Últimos documentos generados generados',
    }),
 
     created() {
        Facturas.getFacturas ()
        .then (response => {
           this.Facturas = response.data.data;
           console.log ( this.Facturas.data);
        })
        .catch( error => {
          if ( error.response.status == 422) {
            this.errors = error.response.data.errors;  
          }
        });
       
    }  
  
}
</script>


<style>

 
</style>
