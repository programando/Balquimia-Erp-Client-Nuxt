<template>
   <div>
      
   </div>
</template>

<script>
import User from '@/models/User';
export default {
   data: () => ({

   }),
   mounted() {
         User.logout();
         console.log('saliendo');
         
         this.$router.replace({ path: '/' });
   }
}
</script>