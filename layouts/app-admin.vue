<template>
 <div class="bg-gray-100  flex">
       <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div class="p-6">
                <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">WEBTRON</a>
    
            </div>
        <nav class="text-white text-base font-semibold pt-3">
            <a href="index.html" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="blank.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fa fa-sticky-note mr-3"></i>
                Listado de precios
            </a>

        </nav>

    </aside>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full flex items-center bg-white py-2 px-6 sm:flex">
            <div class="w-1/2 justify-end">Notificaciones</div>
           
            <div  class="relative w-1/2 flex justify-end">
                <button @click="isOpen = true" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src='/images/avatars/face.jpg'>
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

        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <nuxt/>
            </main>
        </div>
  



    </div>
 </div>
</template>


<script>
import ErpTopNav    from '@/components/site/ErpTopNavBar'
import ErpLeftMenu  from '@/components/site/ErpLeftmenu'
import User         from "@/models/User";


 export default {
     data: () => ({
        isOpen: false,
         
  }),
    components : { ErpTopNav, ErpLeftMenu },
    methods: {
        logout(){
             User.logout().then( response => {
             this.$store.commit('UserStore/SET_USER', response.data);
            this.$router.replace({ path: '/' });
            });  
        }
        },
 }
</script>

<style scoped>
        .bg-sidebar { background:#F20732; }
        .cta-btn { color: #3d68ff; }
        .upgrade-btn { background: #1947ee; }
        .upgrade-btn:hover { background: #F25C05; }
        .active-nav-link { background:#F25C05; }
        .nav-item:hover { background: #F25C05; }
        .account-link:hover { background: #3d68ff; }
</style>