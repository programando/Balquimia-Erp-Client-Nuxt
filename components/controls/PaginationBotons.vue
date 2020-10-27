<template>
  <div>
          <button type="button" 
                  class="bg-blue-600 text-gray-200 text-sm rounded hover:bg-blue-500 px-6 py-1 focus:outline-none mr-1 "
                  :class="{'opacity-50 cursor-not-allowed' : !prevPageLink}"
                  @click='getFacturas(prevPageLink) '>
                  Anterior
          </button>
          <button type="button" 
              class="bg-blue-600 text-gray-200 text-sm rounded hover:bg-blue-500 px-6 py-1 focus:outline-none "
               :class="{'opacity-50 cursor-not-allowed' : !nextPageLink}"
               @click="getFacturas (nextPageLink) "
              >
              Siguiente
            </button>

  </div>
</template>

<script>
export default {
  props : ['nextPageLink', 'prevPageLink','firstPageLink','lastPageLink'],
 data: () => ({
   
  }),
  methods : {
        getFacturas ( Url ) {
          this.$emit('getFacturas', Url);
        }
  },

}
</script>
