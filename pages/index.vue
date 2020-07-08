<template>
<div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

    <header class="bg-cover bg-center  h-full w-full opacity-100" 
            style="background-image: url('/images/login/backgound-login.jpg');">
            <h1 class="text-4xl text-center mt-12 font-bold text-white tracking-wide">BALQUIMIA S.A.S.</h1>
<!-- https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg -->
        <div class="content px-40 py-2">
            <div class="body mt-20 mx-8">
                <div class="md:flex items-center justify-between">
                   
                    <div class="w-full md:w-1/2 mr-auto" style="text-shadow: 0 20px 50px hsla(0,0%,0%,8);">                     
                            <Frases-Celebres></Frases-Celebres>
                    </div>

                    <div class="w-full md:max-w-md mt-6">
                        <div class="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                            <form >
                                <div class="flex items-center justify-center">
                                    <h2 class="text-2xl font-bold tracking-wide">
                                        Bienvenid@
                                    </h2> 
                                </div>
                                <h5 class="text-sm text-center font-semibold text-gray-800 mb-2">
                                   Registre sus credenciales para ingreso al sistema
                                </h5>
                                <input 
                                        type="email" 
                                        class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" 
                                        placeholder="Email Address"
                                        v-model="form.email" 
                                        @keyup="clearErrors"/>
                                        <span class="text-red-500 text-xs ml-2" v-if="errors.email">
                                             <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/>  {{ errors.email[0] }} 
                                        </span>
                               
                                <input type="password" 
                                        class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mt-6 mb-2 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" 
                                        placeholder="Password"
                                        v-model="form.password" 
                                        @keyup="clearErrors"/>
                                        <span class="text-red-500" v-if="errors.password">
                                            <font-awesome-icon :icon="['fab', 'facebook']"/>    {{ errors.password[0] }}
                                        </span>

                                <div class="flex items-center justify-between mt-3">
                                    <a href="#" class="text-gray-600">Olvidé mi contraseña?</a>
                                    <button class="bg-gray-800 text-gray-200  px-2 py-1 rounded hover:bg-red-600"
                                        @click.prevent="login" :disabled="buttonIsDisabled" > Ingresar al sistema </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </header>
</div>
</template>

<script>
 
 import User            from "@/models/User";
 import FrasesCelebres  from "@/components/site/FrasesCelebresComponent";

export default {

  layout :'app-admin',
  name: 'IndexPage',
  data: () => ({
      form: {
        email: "jhonjamesmg@hotmail.com",
        password: "123256"
      },
      errors: [],
      buttonIsDisabled: false
  }),
  components : { FrasesCelebres} ,

   methods: {
      login() {
         User.login( this.form)
        .then (response => {
            this.$store.commit('UserStore/SET_USER', response.data);
            this.$router.replace({ path: 'erp/dashboard' });
            this.buttonIsDisabled = true;
        })
        .catch( error => {
          if ( error.response.status == 422) {
            this.errors = error.response.data.errors;   
          }
        })
      },

      clearErrors() {
          this.errors = [];
          this.buttonIsDisabled = false;
      }
      
  }// Methods

}
</script>
