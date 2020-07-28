<template>
<div >
  <form >
      <div class="signup-1 flex items-center relative h-screen" >
        <div class="overlay absolute inset-0 z-0 bg-black opacity-50"></div>
            <div class="container px-4 mx-auto relative z-10">
                <div class="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
                    <div class="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600" >
                      <div v-if="alert">
                            <SimpleAlert 
                                title="Proceso finalizado !"
                                content="En breves minutos recibirás un correo electrónico con las instrucciones para cambiar las credenciales de acceso a nuestro sistema. El token de acceso para cambio de contraseña (incluido en el correo) , tendrá una duración de 15 minutos. No olvides revisar tu bandeja de span en caso de que sea la primera vez que realizas este proceso."
                                >
                                 
                            </SimpleAlert>
                           
                      </div>
                     
                       <div v-if="!alert">
                            <h2 class="text-3xl text-gray-800 text-center"> BALQUIMIA S.A.S.</h2>
                            <p class="text-sm text-center mt-4">
                                Enviaremos un correo electrónico a la cuenta registrada en nuestro sistema con las con las instrucciones para que cambie los datos de acceso.
                            </p>
                          <div class="signup-form mt-6 md:mt-6">
                                <div class=" border border-gray-400 rounded flex items-center">
                                  <div class="w-10 h-7 flex justify-center items-center flex-shrink-0 ">
                                    <span class="text-black"> 
                                    <i class="fa fa-envelope fa-2x " aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div class="flex-1 ">
                                  <input  class="h-7 py-1 pr-3 w-full  focus:outline-none px-4" 
                                      id="email" type="email" placeholder="cuenta de correo electrónico o email..." autofocus
                                      v-model="form.email" />                 
                                </div>
                              </div>
                              <ErrorMessage v-if="errors.email"> {{ errors.email[0] }}  </ErrorMessage>
                        </div>
                        <div class="text-center mt-6 md:mt-12">
                            <ButtonLoading 
                                @click.prevent="ResetPassword" 
                                  size="small" 
                                  ref="ButtonLoading" 
                                  variant="danger"
                                  variant-type="normal">  Enviar correo  
                            </ButtonLoading>
                        </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </form>
</div>

<!--          <button class="bg-orange-600 hover:bg-orange-400 text-white text-md py-2 px-4 md:px-6 rounded transition-colors duration-300"
              @click.prevent="ResetPassword">
                Enviar correo 
            </button> 
-->


</template>

<script>
  import User            from "@/models/User";
  import ErrorMessage    from '@/components/controls/app-objects/ErrorMessageComponent';
  import ButtonLoading   from "@/components/controls/buttons/ButtonLoading";
  import SimpleAlert     from "@/components/controls/alerts/simple-alert";
  import { address}     from '@/config/constants'

export default {
  name: "ResetPassword",
  layout: "none",
  transition: 'page',
  data: () => ({
      form : {
          email : '',
      },
      errors : [],
      alert : false,
  }),

  components: { ErrorMessage, ButtonLoading, SimpleAlert  },

  mounted() {
       if ( this.alert==true ) {
          document.getElementById('email').focus();
       }

  },
  methods: {
  
      ResetPassword () {
        this.errors              = [];
        this.$refs.ButtonLoading.startLoading();
        User.resetPassword ( this.form )
        .then (response => {
            this.$refs.ButtonLoading.stopLoading();
            this.alert = true;
            console.log( response.data );
        })   
        .catch( error => {
          if ( error.response.status == 422 || error.response.status == 419) {
            this.errors = error.response.data.errors; 
            this.$refs.ButtonLoading.stopLoading();  
          }
        })             
      }

  }
  
};
</script>