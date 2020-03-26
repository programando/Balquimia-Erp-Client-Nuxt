<template>
  <div class="container">
   
    <h1> Facturas creadas</h1>
       <h2>{{ Mensaje }} </h2>
       <div v-for="Factura in Facturas" :key="Factura.id_fact_elctrnca">
          <h2> {{ Factura.fcha_rgstro }}</h2>
      </div>  
      
  </div>
</template>

<script>
 
 import axios from 'axios';
 import env    from '@/config/env';

export default {
  name: 'IndexPage',
  data: () => ({
    Facturas: [],
    Mensaje:'He cargado con las facturas creadas. 10 primeras facturas.',
  }),
  created: async function() {
    let response = await axios.get(`${env.api}facturas`);
    this.Facturas = response.data;
    
  }
}
</script>

<style>

</style>
