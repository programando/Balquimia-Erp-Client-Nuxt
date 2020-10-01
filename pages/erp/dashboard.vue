<template>
  <div>
      12

  </div>
</template>

<script>
import User from "@/models/User";
import {mapGetters, mapMutations} from 'vuex';



export default {
  data() {
    return {
    };
  },

  middleware: ['auth'],
  computed : {
       ...mapGetters ({
         user: 'UserStore/isLoggin',
       })
  },

  methods: {
      logout(){
        User.logout().then( response => {
          this.$store.commit('UserStore/SET_USER', response.data);
        });  
      }
    },

};
</script>