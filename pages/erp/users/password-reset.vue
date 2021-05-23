<template>
<div >
  <form >
      <div class="relative flex items-center h-screen signup-1" >
        <div class="absolute inset-0 z-0 bg-black opacity-50 overlay"></div>
            <div class="container relative z-10 px-4 mx-auto">
                <div class="mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                    <div class="p-6 bg-white border-indigo-600 border-solid box md:px-12 md:pt-12 border-t-10" >
                      <div v-if="alert">
                            <SimpleAlert 
                                title="Proceso finalizado !"
                                content="En breves minutos recibirás un correo electrónico con las instrucciones para cambiar las credenciales de acceso a nuestro sistema. El token de acceso para cambio de contraseña (incluido en el correo) , tendrá una duración de 15 minutos. No olvides revisar tu bandeja de span en caso de que sea la primera vez que realizas este proceso."
                                >
                                 
                            </SimpleAlert>
                           
                      </div>
                     
                       <div v-if="!alert">
                            <h2 class="text-3xl text-center text-gray-800"> BALQUIMIA S.A.S.</h2>
                            <p class="mt-4 text-sm text-center">
                                Enviaremos un correo electrónico a la cuenta registrada en nuestro sistema con las con las instrucciones para que cambie los datos de acceso.
                            </p>
                          <div class="mt-6 signup-form md:mt-6">
                                <div class="flex items-center border border-gray-400 rounded ">
                                  <div class="flex items-center justify-center flex-shrink-0 w-10 h-7 ">
                                    <span class="text-black"> 
                                    <i class="fa fa-envelope fa-2x " aria-hidden="true"></i>
                                    </span>
                                 </div>
                                <div class="flex-1 ">
                                  <input  class="w-full px-4 py-1 pr-3 h-7 focus:outline-none" 
                                      id="email" type="email" placeholder="cuenta de correo electrónico o email..." autofocus
                                      v-model="form.email" />                 
                                </div>
                              </div>
                              <ErrorMessage v-if="errors.email"> {{ errors.email[0] }}  </ErrorMessage>
                        </div>
                        <div class="mt-6 text-center md:mt-12">
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

<!--          <button class="px-4 py-2 text-white transition-colors duration-300 bg-orange-600 rounded hover:bg-orange-400 text-md md:px-6"
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