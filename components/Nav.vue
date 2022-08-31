<template>
  <div>
    <div class="container">
        <div class="menu-container">
            <ul>
                <li><NuxtLink to="/">home</NuxtLink></li>
                <li v-show="myUser"><NuxtLink to="../in/profile">Portfolio</NuxtLink></li>
                <li v-show="!myUser"><NuxtLink to="./login">Login</NuxtLink></li>
                <li v-show="!myUser"><NuxtLink to="./register">Register</NuxtLink></li>
                <li v-show="myUser"><a @click="logout">Logout</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
    data() {
        return {
            myUser: null
        }
    },
    mounted() {
        //update myUser, will determine whether or not to display login buttons
        this.myUser = this.$store.state.users.user
    },
    methods: {
        async logout() {
        //logout current user
        await auth.signOut()
        //remove the cookie from the user's machine
        await Cookie.remove('access_token')
        //redirect the user to the homepage
        location.href = "/"
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-container {
        padding-top:50px;
    }
    .menu-container ul{
        text-align: right;
        margin:0;
        padding:0 5px;
        border-bottom: 1px solid #7f7c9b;
        li {
            list-style: none;
            display: inline-block;
            /*border: 2px solid #54546c;*/
            margin:5px 5px;
            text-transform: uppercase;
        }
        a {
            text-decoration: none;
            color:#fff;
            font-size:16px;
            font-weight:300;
            padding:5px;
            border-radius: 4px;
            transition: background-color 0.5s ease;
            cursor: pointer;
        }
        a:hover {
            background-color:#7f7c9b;
        }
    }
</style>