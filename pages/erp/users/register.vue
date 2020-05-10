<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Register</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            v-model="form.name"
            id="name"
          />
          <span class="text-danger" v-if="errors.name">
            {{ errors.name[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            v-model="form.email"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="form.password"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            v-model="form.password_confirmation"
            id="password_confirmation"
          />
          <span class="text-danger" v-if="errors.password_confirmation">
            {{ errors.password_confirmation[0] }}
          </span>
        </div>
        <button
          type="submit"
          @click.prevent="register"
          class="btn btn-primary btn-block"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/models/User";
 

export default {
  name: "Register",
  data() {
    return {
      form: {
        name                 : "",
        email                : "",
        password             : "",
        password_confirmation: ""
      },
      errors: []
    };
  },

  methods: {
    register() {     
         User.register ( this.form )
         .then( ()=>{
            this.$router.replace({ path: 'login' })
         })
         .catch ( error =>{
           if ( error.response.status == 422 ) {
              this.errors = error.response.data.errors;
           }
         })
    }

  }
  
};
</script>