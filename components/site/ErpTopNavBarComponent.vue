<template>
        <header class="w-full flex items-center bg-white py-2 px-6 sm:flex">
            <div class="w-1/2 justify-end">Notificaciones</div>
           
            <div  class="relative w-1/2 flex justify-end">
                <button @click="isOpen = true" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img @click="isOpen = true" src='/images/avatars/face.jpg'>
                </button>
                
                <button v-if="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
               
                <div v-if="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="#" class="block px-4 py-2 account-link hover:text-white">Mi perfil</a>
                    <nuxt-link to="" >
                    <div type="button" class="block px-4 py-2 account-link hover:text-white" @click="logout()">Cerrar sesión </div>
                    </nuxt-link>
                </div>

            </div>
        </header>
</template>
<script>
  import User from "@/models/User";
  import {mapGetters, mapMutations} from 'vuex';
  
 export default {
     data: () => ({
          isOpen: false,
         
  }),
      computed : {
        ...mapGetters ({
            user: 'UserStore/getUser',
        })
    },


    methods:{
         logout(){
                User.logout().then( response => {
                this.$store.commit('UserStore/SET_USER', response.data);
                this.$router.replace({ path: '/' });
            });
        },
    }
 }
</script>

<style scoped>
    .cta-btn { color: #3d68ff; }
    .upgrade-btn { background: #1947ee; }
    .account-link:hover { background: #3d68ff; }
</style>