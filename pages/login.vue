<template>
  <div class="app">
    <div class="container">
      <Nav />
    </div>
    <div class="form-container">
      <h1>Login to access your portfolio</h1>
      
      <form @submit.prevent="checkForm">
        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model.trim="$v.tempEmail.$model">
          <span v-if="(!$v.tempEmail.required || !$v.tempEmail.email) && $v.tempEmail.$dirty" class="form-warning">Valid Email is required</span>
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" v-model.trim="$v.tempPassword.$model">
          <span v-if="!$v.tempPassword.required && $v.tempPassword.$dirty" class="form-warning">Password is required</span>
          <span v-if="!$v.tempPassword.minLength && $v.tempPassword.$dirty" class="form-warning">Password must be at least 6 characters</span>
        </div>
        <button type="submit" class="button">Login</button>
      </form>
      <div v-if="isError" class="error">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { minLength, email, required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
      isError: false,
      errorMessage: '',
      tempEmail: '',
      tempPassword: '',
    };
  },
  validations: {
    tempEmail: {
      required,
      email
    },
    tempPassword: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    checkForm () {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        //pass the validated data
        this.account.email = this.tempEmail
        this.account.password = this.tempPassword
        // call the login method
        this.login()
      }
    },
    login() {
      // on click send username and password to the store login action
      return this.$store.dispatch("users/login", this.account).then(() =>{
        //If login is successful, redirect the user to the profile page 
        this.$router.push("/in/profile");
      })
      .catch((error) => {
        //If there is an error with the email or password, display the error message on screen
        this.isError = true;
        this.errorMessage = error.code;

        //remove error message after 5 seconds
        setTimeout(() => {
          this.isError = false
        }, 5000)
      });
      
    },
  }
}
</script>

<style lang="scss" scoped>
  .form-container{
    width:600px;
    margin:0 auto;
    padding:80px 30px 30px;
    text-align: center;
    @media (max-width: 800px) {
      width:100%;
    }
  }
  h1{
    margin-bottom:40px;
  }
  input {
    width: 400px;
    padding: 10px;
    margin: 0 10px;
    font-size: 16px;
    @media (max-width: 600px) {
      width:300px;
    }
  }
  .form-group {
    padding-bottom:25px;
    position:relative;
  }
  .form-warning {
    position:absolute;
    display:block;
    bottom:0;
    width:100%;
    text-align:center;
    color:#f54336;
    font-size: 14px;
  }
  label {
    display: block;
    width: 400px;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 600px) {
      width:300px;
    }
  }
</style>
