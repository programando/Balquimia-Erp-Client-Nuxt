<template>
  <div class="home col-8 mx-auto py-5 mt-5">
     <br>
     <br>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
         <hr>
         Logueado : <pre>{{  user  }}</pre>
      </div>
    </div>

   <button @click='logout' v-if="user"> Cerrar </button>

  </div>
</template>

<script>
import User from "@/models/User";
import {mapGetters, mapMutations} from 'vuex';


export default {
  data() {
    return {
      //user: null
    };
  },

/*    mounted() {
     if (this.$store.state.UserStore.Logueado ) {
        this.user = this.$store.state.UserStore.User
       return 
     }
    User.auth()
      .then(response => {
        this.user = response.data;
        
    });
  },  */

  computed : {
       ...mapGetters ({
         user: 'UserStore/getUser',
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