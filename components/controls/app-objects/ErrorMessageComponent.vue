<template>
  <div>
    <span class="text-red-500 text-xs ml-2 mt-0"> 
         <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>  
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
 
</script>