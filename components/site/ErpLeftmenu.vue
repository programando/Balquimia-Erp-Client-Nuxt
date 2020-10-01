<template>
  
        <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li class="mr-4 flex-1">
                  <nuxt-link to="/erp/facturas/listado" 
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500">
                      <i class="fa fa-id-card-o pr-0 md:pr-3"></i>
                          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                              Facturas
                          </span>
                  </nuxt-link>
              </li>
                <li class="mr-4 flex-1">
                  <nuxt-link to="/erp/facturas/listado" 
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500">
                      <i class="fa fa-id-card-o pr-0 md:pr-3"></i>
                          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                              Lista de Precios
                          </span>
                  </nuxt-link>
              </li>

          </ul>
      </div>
    
  
</template>