<template>
    <aside class="sidebar">
        <div class="usuario">
          <img src="/images/avatars/face.jpg" alt="">
          <p> Bienvenido <span> @Usuario</span> </p> 
        </div>


        <nav class="sidebar-menu">
            <h2 class="text-2xl text-center mt-1 webtron" >WebTron</h2>
            <ul>

              <li><a href="#"> Ventas
                <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
              </a>
                <ul>
                  <li>
                    <nuxt-link to="/erp/facturas/listado">Facturas</nuxt-link>

                  </li>
                  <li> <nuxt-link to="/erp/productos/precios"> Lista precios</nuxt-link> </li>
                </ul>
              </li>

              <li><a href="#"> Comercial
                <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
              </a>
                
                <ul>
                  <li><a href="">Registro pedidos</a></li>
                  <li><a href="">Autorización</a></li>
                  <li><a href="">Consulta</a></li>
                </ul>
              </li>
<!--               <li><a href="">Porfgolio</a></li>
              <li><a href="">Overview</a></li>
              <li><a href="">Shorcuts</a></li> -->

            </ul>
        </nav>
    </aside> 
    
</template>
