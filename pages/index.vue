<template>
  <div class="app">
      <div class="container">
        <Nav />
        <h1 class="page-header"> {{ title }}</h1>
        <!-- Sign in section-->
        <div v-show="!myUser">
          <div  class="auth-section">
            <NuxtLink to="login" class="button">LOGIN</NuxtLink>
            <NuxtLink to="register" class="button-light">REGISTER</NuxtLink>
          </div>
        </div>
        <!-- top coins -->
        <div class="top-coins">
          <div class="coin-headings">
            <div class="coin-name">
              &nbsp;
            </div>
            <div class="coin-data">
              Price
            </div>
            <div class="coin-data">
              24h change
            </div>
            <div class="coin-data">
              7d change
            </div>
            <div class="info-icons">
              &nbsp;
            </div>
          </div>
        </div>
        <div v-for="coin in coinList" :key="coin.id" class="coin-parent">
          <Coin :coin="coin" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Start your crypto portfolio',
      coinList: [],
      myUser: null
    }
  },
  async fetch () {
        this.coinList = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24%2C7d'
        ).then(res => res.json())
    },
  mounted() {
    //update myUser, will determine whether or not to display login buttons
    this.myUser = this.$store.state.users.user
    // Store the coinlist in the store so it can be used elsewhere
    // setTimeout(() =>{
    //   this.$store.dispatch("users/storeList", this.coinList)
    // }, 2000)
    
  },
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Keep track of your favourite coins, see how they perform against the market. all in one place'
          }
        ]
      }
    }
}
</script>

<style lang="scss">
  .page-header{
    text-align: center;
    padding:60px 20px;
    font-size:46px;
    font-weight:300;
    @media (max-width: 600px) {
      font-size:40px;
    }
  }
  .message {
    text-align:center;
    font-size:18px;
    padding: 0 20px;
  }
  .auth-section {
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0 20px 120px;
    @media (max-width: 600px) {
      flex-direction: row;
    }
  }
  .coin-parent {
    background-color: #2d2c50;
    margin:0 20px 5px;
    border-radius: 8px;
    padding:15px 15px;
  }
  .container-row {
    display:flex;
    align-items: center;
  }
  .box {
    flex:1;
  }
  .coin-headings {
    display:flex;
    color:#7f7c9b;
  }
  .coin-name {
    width:35%;
    display:flex;
    justify-content:flex-start;
    align-items: center;
  }
  .coin-data {
    width:20%;
    text-align: center;
  }
  .info-icons {
    text-align: center;
  }
  .green-text {
    color: #09ad19;
  }
  .red-text {
    color: #cf0303;
  }
  .img-box {
    width:40px;
    height:40px;
  }
  .name-box {
    margin-left:20px;
  }
</style>
