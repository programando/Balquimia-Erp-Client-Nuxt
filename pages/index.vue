<template>
<div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

    <header class="bg-cover bg-center  h-full w-full opacity-100" 
            style="background-image: url('/images/login/background-login.jpg');">
            <h1 class="text-4xl text-center mt-12 font-bold text-white tracking-wide">BALQUIMIA S.A.S.</h1>
      
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
 
                           
                                <InputBasic type= "email"
                                        placeholder="Dirección electrónica (Email)"
                                        v-model="form.email" 
                                        :errors="errors.email"
                                        @keyup="clearErrors"
                                > </InputBasic>

                                <InputBasic type= "password"
                                        class="mt-6"
                                        placeholder="Password o contraseña"
                                        v-model="form.password" 
                                        @keyup="clearErrors"
                                > </InputBasic>


                                <div class="flex items-center justify-between mt-3">
                                  
                                    <nuxt-link to="/erp/users/password-reset" class="text-gray-600"> 
                                            Olvidé mi contraseña ? 
                                    </nuxt-link>

                                    <ButtonLoading 
                                        @click.prevent="login" 
                                        size="small" 
                                        ref="ButtonLoading" 
                                        variant="success"
                                        variant-type="normal">  Ingresar al sistema 
                                    </ButtonLoading>

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
  import InputBasic      from "@/components/controls/inputs/Input-Basic";
  import ButtonLoading   from "@/components/controls/buttons/ButtonLoading";
  import Cookie          from 'js-cookie';
  import {mapState,mapGetters} from 'vuex'; 
 
 
  
  export default {
   
  name: 'IndexPage',

  data: () => ({
      form: {
        email: "jhonjamesmg@hotmail.com",
        password: "123456"
      },
      errors: [ ],
      buttonIsDisabled: false
  }),
  components : { FrasesCelebres, InputBasic, ButtonLoading } ,

   middleware :  [ 'loggedIn'],

   mounted() { 
       User.getCokie()
   },

   methods: {
      login() {
        this.$refs.ButtonLoading.startLoading();
         User.login( this.form)
        .then (response => {
            this.$store.commit('SET_USER', response.data);
            this.$router.replace({ path: '/erp/facturas/listado' });
            this.buttonIsDisabled = true;
            this.$refs.ButtonLoading.stopLoading();
        })
        .catch( error => {
          if ( error.response.status == 422) {
            this.errors = error.response.data.errors;  
            this.$refs.ButtonLoading.stopLoading(); 
          }
        })
       
      },

      clearErrors() {
          this.errors = [];
          this.buttonIsDisabled = false;
      },

  }// Methods

}
</script>
