<template>
  
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
    
  
</template>
<style scoped>
        .bg-sidebar { background:#F20732; }
        .active-nav-link { background:#F25C05; }
        .nav-item:hover { background: #F25C05; } 
</style>