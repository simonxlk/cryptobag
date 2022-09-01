<template>
  <div class="app">
    <div class="container">
      <Nav />
    </div>
    <div class="form-container">
        <h1>Start your crypto portfolio</h1>
        
        <div v-if="thankYou" class="thank-you">
          <div class="thank-heading">Sign up complete</div>
          <p>You will now be redirected to your portfolio</p>
        </div>
        <div v-else>
          <h2>Create a new account</h2>
          
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
            <div class="form-group">
              <label>Repeat Password:</label>
              <input type="password" v-model.trim="$v.repeatPassword.$model">
              <span v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty" class="form-warning">Passwords must match</span>
            </div>
            <button type="submit" class="button-light">Submit</button>
          </form>
          <div v-if="isError" class="error">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { sameAs, minLength, email, required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
      isError: false,
      errorMessage: '',
      thankYou: false,
      tempEmail: '',
      tempPassword: '',
      repeatPassword: ''
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
    },
    repeatPassword: {
      sameAsPassword: sameAs('tempPassword')
    }
  },
  methods: {
    //validate the password and email
    checkForm () {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        //pass the validated data
        this.account.email = this.tempEmail
        this.account.password = this.tempPassword
        // call the register method
        this.register()
      }
    },
    async register () {
      const auth = getAuth();
      try {
          //register user
          await createUserWithEmailAndPassword(auth, this.account.email, this.account.password);

          //Then update the state with the users credentials
          return this.$store.dispatch("users/login", this.account).then(() =>{
              this.thankYou = true;
              setTimeout(() => {
                  //If sign up is successful, wait 3 seconds then redirect to the profile page 
                  this.$router.push("/in/profile")
              }, 3000)
          }).catch((error) => {
              //If there is an error with the email or password, display the error message on screen
              this.isError = true;
              this.errorMessage = error.code;
              //remove error message after 5 seconds
              setTimeout(() => {
              this.isError = false
              }, 5000)
          });
      

      } catch(error) {
          throw error;
      }
    }
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
  h2 {
    margin-bottom:20px;
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