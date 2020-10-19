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
import HeaderBrand      from '@/components/site/ErpAdminHeaderBrandComponent';
import HeaderRightMenu  from '@/components/site/ErpAdminHeaderRightMenuComponent';
import SideBarLeft      from '@/components/site/ErpAdminSideBarLeftComponent';
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
