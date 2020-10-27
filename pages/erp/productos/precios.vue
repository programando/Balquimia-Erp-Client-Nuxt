<template>
  <div>
       <h2 class="text-2xl"> Listado de Precios </h2>

        <div class="flex">
            <div class="p-4 w-full">
              <div class="h-full  border-2 border-gray-200 rounded-lg overflow-hidden">
                  <vue-good-table
                            :columns      ="columns"
                            :rows         ="rows || []"
                            :fixed-header ="true"
                            max-height    ="800px"
                            styleClass    ="vgt-table bordered condensed striped vgt-left-align"
                            :search-options="{
                                  enabled: true,
                                  placeholder: 'Buscar producto',
                                  skipDiacritics: true,
                              }"
                            :pagination-options="{
                                  allLabel:         'Todos',
                                  enabled:          true,
                                  mode:             'pages',
                                  nextLabel:        'Siguiente',
                                  ofLabel:          'de',
                                  pageLabel:        'página',
                                  prevLabel:        'Anterior',
                                  rowsPerPageLabel: 'Registro por pág.',
                                  perPage: 15,
                          }"
                    >
                  </vue-good-table>
              </div>
            </div>
        </div>

  </div>
</template>
<script>
  import Productos from '@/models/Productos';
  import { VueGoodTable } from 'vue-good-table';
  import '@/node_modules/vue-good-table/dist/vue-good-table.css';


  export default {
    name: 'productos-precios',
    layout: 'admin-layout',
     mounted(){
        this.listaPrecios();
     },
    components :{ VueGoodTable },
    data: () => ({
              columns : [
                {  label: ' Producto',
                   field: 'nom_prdcto',  },
                {  label: ' Presentación',
                   field: 'nom_prsntcion',  },
                {  label: ' $ Precio ( Sin Iva )',
                   field: 'vr_vta',
                   type : 'number',
                   sortable: false,
                   //formatFn: this.numerFormat,
                },

              ],
              rows    : []
      }),
     

      methods: {

            listaPrecios() {
                Productos.listaPrecios()
                .then (response =>{
                  this.rows = response.data ;
                })
            },
           
      }

  }
</script>