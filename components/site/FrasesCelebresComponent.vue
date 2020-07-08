<template>
  <div>
    <blockquote > 
      <p class="text-white text-justify"> {{ Frase.nom_frase }}</p>
      <footer class="text-white text-right italic font-medium mr-4">- {{ Frase.autor  }}</footer>
  </blockquote>   
  </div>
</template>

<script>
import { address} from '@/config/constants'
import axios from "axios";

export default {
  name :'FrasesCelebres',
  data: () => ({
      Frase: []
  }),

  mounted() {

      axios.get(address.webUrl+'frase' )
      .then ( response => {
        this.Frase = response.data[0];
      });

  }

}
</script>