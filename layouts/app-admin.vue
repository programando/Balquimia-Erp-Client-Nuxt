<template>
  <div class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
         <!--Nav - Menu Superior - Logo-Empresa y usuario - Notificaciones-->
        <ErpTopNav></ErpTopNav> 
            <div class="flex flex-col md:flex-row">
                <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">         
                    <!-- Menu Lateral Izquierdo -->
                    <ErpLeftMenu></ErpLeftMenu>  
                </div>
                
                <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5 ">
                    <div class="flex flex-wrap  justify-center">
                            <div class="w-full md:w-1/2   p-3 ">
                                <!-- Contenido -->
                                <nuxt />
                            </div>
                    </div>       
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
         
  }),

    components : { ErpTopNav, ErpLeftMenu },


    methods:{
    
    }
 }
</script>
