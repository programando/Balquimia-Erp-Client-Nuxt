<template>
  <div class="container">
    <h1> Facturas creadas</h1>
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
  }),
  created: async function() {
    let response = await axios.get(`${env.api}facturas`);
    this.Facturas = response.data;
    console.log ( this.Facturas);
  }
}
</script>

<style>

</style>
