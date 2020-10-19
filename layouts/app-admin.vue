<template>
 <div class="bg-gray-100  flex">
        <ErpLeftMenu></ErpLeftMenu>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
            <ErpTopNav></ErpTopNav>
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <nuxt/>
            </main>
        </div>
    </div>
 </div>
</template>


<script>
import ErpTopNav    from '@/components/site/ErpTopNavBarComponent'
import ErpLeftMenu  from '@/components/site/ErpLeftmenuComponent'
 
 export default {
     data: () => ({
       
  }),
    components : { ErpTopNav, ErpLeftMenu },
    methods: {
 
        },
 }
</script>
