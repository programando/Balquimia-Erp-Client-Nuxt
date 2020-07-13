<template>
  <div>
    <span class="text-red-500 text-xs ml-2 mt-0"> 
         <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/>   
         <slot></slot>  
     </span>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  data: () => ({
          
  }),


}
/*
<!--   
 <span class="text-red-500 text-xs ml-2" v-if="errors.email">
    <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/>  {{ errors.email[0] }} 
 </span> -->
*/
</script>