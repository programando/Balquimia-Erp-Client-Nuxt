<template>
  <div class="">
      <nav class="flex flex-wrap justify-between items-center fixed w-full mt-0">
        <nuxt-link to="/">
         <div class="">
          
            <div class="flex flex-col w-64 ml-3">
                <img class="relaive " style="z-index:2" src="/images/site/logo-balquimia.png" alt="" >
                <img class="absolute mt-20 w-1/3" style=" z-index:1"  src="/images/site/logo-balquimia-arrow-down.png" alt="">
            </div>
        
        </div>
          </nuxt-link>
          
         <div>
              <nuxt-link to="/" class="mr-3 p-4" > Inicio</nuxt-link>
              <nuxt-link to="/" class="mr-3 p-4" > Productos</nuxt-link>
              <nuxt-link to="/" class="mr-3 p-4" > Servicios</nuxt-link>
              <nuxt-link to="/" class="mr-3 p-4" > Experiencia</nuxt-link>
              <nuxt-link to="/" class="mr-3 p-4" > Contacto</nuxt-link>
         </div>
         <div>
            <div class="flex ml-2 ">
              <img src="/images/flags/en.png" alt="" class="mr-2 p-3">
              <img src="/images/flags/en.webp" alt="" class="mr-2 p-3">
            </div>
          </div>
      </nav>
        <div class="w-full mt-20">
          <VueSlickCarousel :arrows="true"  v-bind="settings">
            <div class="w-1/2">
                <img src="/images/slides/home-1.webp" alt="">
            </div>
            <div class="w-1/2"><img src="/images/slides/home-2.webp" alt=""></div>
            <div class="w-1/2"><img src="/images/slides/home-3.webp" alt=""></div>
            <div class="w-1/2"><img src="/images/slides/home-4.webp" alt=""></div>
          </VueSlickCarousel>  
      </div>
  </div>
</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data: () =>({
        settings:{},
  }),
  components: { VueSlickCarousel },

  mounted(){
      this.settings = {
          "arrows": true,
          "dots": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "speed": 8000,
          "autoplaySpeed": 1000,
          "cssEase": "linear",
          "adaptiveHeight": true,
          "focusOnSelect":true
        
}
  },


}
</script>