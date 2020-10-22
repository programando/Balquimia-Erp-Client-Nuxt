  <template>
    <div class="pagina">
          <header class="header">
              <HeaderBrand></HeaderBrand>
              <HeaderRightMenu></HeaderRightMenu>
          </header>

          <main class="container-principal">
               
                  <SideBarLeft></SideBarLeft>
                  <div class="contenido">
                      <nuxt/>
                  </div>
               
          </main>
    </div>
</template>

<script>
import HeaderBrand      from '@/components/site/ErpAdminHeaderBrand';
import HeaderRightMenu  from '@/components/site/ErpAdminHeaderRightMenu';
import SideBarLeft      from '@/components/site/ErpAdminSideBarLeft';
export default {
   
  data() {
    return {
     
    }
  },
  components: { HeaderBrand, HeaderRightMenu, SideBarLeft }, 
  methods: {
      
    }
  }

</script>
