<template>
     <!--Nav-->
    <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
       
        <div class="flex flex-wrap items-center md:justify-between">
            <!-- Brand - Logo y Empresas -->
                <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                    <a href="#">
                        <span class="text-xl pl-2"><i class="fa fa-bars"></i> Computron</span>
                    </a>
                </div>
            <!-- Brand - Logo y Empresas -->
    
            <!--  Datos y Menu Usuario -->
                <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li class="flex-1 md:flex-none md:mr-3">
                             
                             <button class="inline-block py-2 px-4 text-white no-underline"  @click='logout' > Cerrar </button>
                        </li>

                    </ul>
                </div>
            <!--  Datos y Menu Usuario -->

        </div>

    </nav><!--Nav-->
</template>
<script>
  import User from "@/models/User";
  import {mapGetters, mapMutations} from 'vuex';
  
 export default {
     data: () => ({
         
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