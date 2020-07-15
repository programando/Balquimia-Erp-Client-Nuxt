<template>
<div >
  <form >
      <div class="signup-1 flex items-center relative h-screen" >
        <div class="overlay absolute inset-0 z-0 bg-black opacity-50"></div>
            <div class="container px-4 mx-auto relative z-10">
                <div class="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
                    <div class="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600" >

                            <h2 class="text-3xl text-gray-800 text-center"> BALQUIMIA S.A.S.</h2>
                            <p class="text-sm text-center mt-4">
                                por favor registra los nuevos datos de la contraseña con la que ingresarás a nuestro sistema
                            </p>
                          <div class="signup-form mt-6 md:mt-6">
                                <div class=" border border-gray-400 rounded flex items-center">
                                  <div class="w-10 h-7 flex justify-center items-center flex-shrink-0 ">
                                    <span class="text-black"> <font-awesome-icon :icon="['fas', 'lock']"/> </span>
                                </div>
                                <div class="flex-1 ">
                                  <input  class="h-7 py-1 pr-3 w-full  focus:outline-none px-4" 
                                      id="password" type="password" placeholder="nueva contraseña" autofocus
                                      v-model="form.password" />                 
                                </div>
                              </div>
                              <ErrorMessage v-if="errors.password"> {{ errors.password[0] }}  </ErrorMessage>
                        </div>

                        <div class="signup-form mt-6 md:mt-6">
                              <div class=" border border-gray-400 rounded flex items-center">
                                <div class="w-10 h-7 flex justify-center items-center flex-shrink-0 ">
                                  <span class="text-black"> <font-awesome-icon :icon="['fas', 'lock']"/> </span>
                              </div>
                              <div class="flex-1 ">
                                <input  class="h-7 py-1 pr-3 w-full  focus:outline-none px-4" 
                                     type="password" placeholder="confirme la contraseña" autofocus
                                    v-model="form.password_confirmation" />                 
                              </div>
                            </div>
                      </div>

                        <div class="text-center mt-6 md:mt-12">
                            <ButtonLoading 
                                @click.prevent="passwordUpdate" 
                                  size="small" 
                                  ref="ButtonLoading" 
                                  variant="success"
                                  variant-type="normal">  Actualizar password  
                            </ButtonLoading>
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
  import ButtonLoading   from "@/components/controls/buttons/ButtonLoading";
  import ErrorMessage    from '@/components/controls/app-objects/ErrorMessageComponent';

export default {
  name      : "ResetPassWordToken",
  layout    : "none",
  transition: 'page',

  data: ()=> ({
      form :{
          password:'',
          password_confirmation:'',
          token:'',
      },
      errors : [],
  }),
    mounted() {
      User.getCokie();
      this.form.token = this.$route.params.password_reset_token;
  },
  components : { ButtonLoading, ErrorMessage },

  methods: {
      passwordUpdate() {
          this.$refs.ButtonLoading.startLoading();
          User.updatePassword ( this.form)
          .then ( response =>  {
            this.$refs.ButtonLoading.stopLoading();
            this.$router.replace({ path: '/' });
          })
          .catch ( error => {
              if ( error.response.status == 422 || error.response.status == 419) {
                this.errors = error.response.data.errors;
                this.$refs.ButtonLoading.stopLoading();
              }
          })
      }
  }

}
</script>
