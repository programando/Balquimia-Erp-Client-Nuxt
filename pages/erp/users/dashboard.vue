<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Dashboard</h1>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>

    <nuxt-link to="/" class="menu" @click="logout"> Salir </nuxt-link>

  </div>
</template>

<script>
import User from "@/models/User";

export default {
  data() {
    return {
      user: null
    };
  },

   mounted() {
    User.auth().then(response => {
      this.user = response.data;
    });
  }, 

      methods: {
      logout(){
        User.logout();  
      }
    },

};
</script>