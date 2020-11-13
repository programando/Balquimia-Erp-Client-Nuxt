<template>
  <div>
       <h2 class="text-2xl"> Listado de Precios </h2>
        <form id="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <GridSearch
          :data       = "gridData"
          :columns    = "gridColumns"
          :filter-key = "searchQuery" >
        </GridSearch>
  </div>
</template>
<script>
  import Productos from '@/models/Productos';
  import GridSearch from '@/components/controls/grids/search';
 


  export default {
    name: 'productos-precios',
    layout: 'admin-layout',
     mounted(){
        this.listaPrecios();
     },
 
    data: () => ({
          searchQuery: '',
          gridColumns: ['Producto', 'Presentacion','Valor'],
          gridData: [],
      }),
     
     components: { GridSearch },
     
     methods: {
            listaPrecios() {
                Productos.listaPrecios()
                .then (response =>{
                    this.depurarListaPrecios( response.data );
                })
            },

            depurarListaPrecios (Productos){
                  this.gridData =[];
                  const Datos = Productos.map((Producto) =>{
                      return { 
                          Producto    : Producto.nom_prdcto,
                          Presentacion: Producto.nom_prsntcion,
                          Valor       : Producto.vr_vta,
                      }
                  }) ;
                  this.gridData = Datos;
            },
           
      }
  }
</script>
