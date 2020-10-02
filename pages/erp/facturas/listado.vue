 
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
        <tr v-for="Factura in Facturas" :key="Factura.id"
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
					<td class="border-grey-light border hover:bg-gray-100 p-1  text-center text-red-600 text-sm" > 
            <nuxt-link to="/">
              <i v-if="Factura['attributes']['rspnse_dian']" 
                  class="fa fa-file-pdf-o" aria-hidden="true">
              </i> 
            </nuxt-link>
          </td>
					<td class="border-grey-light border hover:bg-gray-100 p-1 text-center text-blue-600 text-sm "> 
            <nuxt-link to="/">
              <i v-if="Factura['attributes']['rspnse_dian']" 
                  class="fa fa-file-code-o" aria-hidden="true">
              </i> 
            </nuxt-link>		
            </td>			
				</tr>

			</tbody>
		</table>
  <!--  <div class="flex flex-col text-center w-full mb-5">
 
<td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
   
      </table> -->
     
      
  </div>
</template>


<script>



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
           console.log (this.Facturas );
        })
        .catch( error => {
          if ( error.response.status == 422) {
            this.errors = error.response.data.errors;  
          }
        });
       
    }  
  
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
