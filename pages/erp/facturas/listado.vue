<template>
  <div>
    <h1 class="text-2xl text-black pb-1">Documentos electrónicos DIAN</h1>

    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-1">
			<thead class="text-white">
				<tr class="bg-blue-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Fecha</th>
					<th class="p-3 text-left">Factura</th>
					<th class="p-3 text-left">Cliente</th>
					<th class="p-3 text-left">Dian</th>
					<th class="p-3 text-left" width="50px">Pdf</th>
					<th class="p-3 text-left" width="50px">Xml</th>
					 
				</tr>

			</thead>
			<tbody class="flex-1 sm:flex-none">
 
        <tr v-for="(Factura, index) in Facturas" :key="Factura.id"
          class="flex flex-col flex-no wrap sm:table-row mb-1 sm:mb-0 text-xs" >		
					<td class="border-grey-light border hover:bg-gray-100 p-1">{{ Factura['attributes']['fecha-factura'] }} </td>
					<td class="border-grey-light border hover:bg-gray-100 p-1 truncate">{{ Factura['attributes']['prefijo'] }}-{{ Factura['attributes']['number']}} </td>
					<td class="border-grey-light border hover:bg-gray-100 p-1 truncate">{{ Factura['customer']['name'] }} </td>
					<td class="border-grey-light border hover:bg-gray-100 p-1 truncate">
                <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-0 shadow text-xs">
                     <span v-if="Factura['attributes']['rspnse_dian']"
                        class="inline-flex bg-green-600 text-white rounded-full h-5 px-3 justify-center items-center">Recibida</span>
                     <span v-else
                         class="inline-flex bg-red-600 text-white rounded-full h-5 px-3 justify-center items-center">Pendiente</span>
                </div>
          </td>

					<td  class="border-grey-light border hover:bg-gray-100 p-1  text-center  text-sm" > 
              <button v-if="Factura['attributes']['rspnse_dian'] "   
                @click="downloadFiles($event, Factura, index, 'pdf')"
                class=" text-red-500 py-1 px-2 rounded inline-flex items-center text-sm outline-none">
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>      
              </button>
          </td>

              	<td  class="border-grey-light border hover:bg-gray-100 p-1  text-center  text-sm" > 
                      <button v-if="Factura['attributes']['rspnse_dian'] "   
                          @click="downloadFiles($event, Factura, index, 'xml')"
                          class=" text-black py-1 px-2 rounded inline-flex items-center text-sm outline-none">
                          <i class="fa fa-file-code-o" aria-hidden="true"></i>
                      </button>
            </td>
          
	
				</tr>
        <tr>
            <td colspan="6"  class="text-center m-4"> 
        <div class="inline-flex m-2">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Anterior
              </button>
              <button  
              class= "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Siguiente
              </button>
            </div>    
            </td> 
        </tr>
 

			</tbody>
		</table>

  </div>
</template>


<script>

import Facturas            from "@/models/Facturas";
import {Messages}       from "@/mixins/Messages";
import { address} from '@/config/constants'

export default {
  name: 'UltimasFacturasCreadas',
  layout :'admin-layout',
    data: () => ({
      Facturas: [],
      Links : [],
    }),
    middleware: ['auth'],
 
     created() {
        Facturas.getFacturas ()
        .then (response => {
           this.Facturas = response.data.data;
           this.Links = response.data.links;
        })
        .catch( error => {
/*           if ( error.response.status == 422) {
            this.errors = error.response.data.errors;  
          } */
        })
     },
      mixins: {Messages }, 
     computed : {
           
     },

        methods:  {
              downloadFiles ( e,Factura, index, filetype   ) {
              let idFactura = Factura['attributes']['id'];
              let Url       = address.apiUrl+`invoices/download/${filetype}/${idFactura}`;
              window.open(Url, '_blank');
              }
        },
       
    }  

 
</script>



<style scoped>
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }
  
  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 5px solid rgba(0, 0, 0, .1);
  }
 
</style>
