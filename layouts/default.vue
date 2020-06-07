<template>
  <div>
  <nav  >
    <div class="container">
         <ul >
         <li> <nuxt-link to="/erp/users/login"> Login Usuarios </nuxt-link></li>
         <li> <nuxt-link to="/erp/users/register"> Registro </nuxt-link> </li>
         <li> <nuxt-link to="/erp/users/dashboard"> Dashboard </nuxt-link></li>
         <li> <nuxt-link to="/erp/users/logout"> logout </nuxt-link>  </li>
 
         </ul>
    </div>
  </nav>
    <nuxt />
  </div>
</template>

<script>
 
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

   nav {
      margin: 40px;;
   }

ul li {
 display: inline;
 }

 ul li a {
 font-family: Arial;
 font-size: 11px;
 text-decoration: none;
 float: left;
 padding: 10px;
 background-color: #2175bc;
 color: #fff;
 }

</style>
