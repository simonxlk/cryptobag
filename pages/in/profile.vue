<template>
  <div class="app">
    <div class="container">
      <Nav />
      
      <div v-if="gotData">
        <div class="port-container">
          <div class="collection-hd">
            {{ netWorth | currency }}
          </div>
          <div class="coin-row row-heading">
            <div class="pcoin-name">Coin</div>
            <div class="holdings">Holdings</div>
            <!--<div class="current-price">Current Price</div>-->
            <div class="average-cost av-heading">avg Cost</div>
          </div>
          <div v-for="icoin in gotData.coinlist" :key="icoin.id">
            <DisplayPortfolio :pcoin="icoin" v-on:changeData="removeCoin($event)" />
          </div>
        </div>
        <div class="add-more">Add some more coins</div>
      </div>
      <div v-if="noData">
        <div class="new-portfolio">
          <div class="new-port-heading">You don't have a portfolio yet</div>
          <p>Add some coins below</p>
        </div>
      </div>
      <!-- list of top 50 coins -->
      <div>
        <div v-if="defaultList">
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
              <div class="coin-data sm-hide">
                7d change
              </div>
              <div class="info-icons">
                &nbsp;
              </div>
            </div>
          </div>
          <div v-for="coin in defaultList" :key="coin.id" class="coin-parent">
            <CoinAdd :coin="coin" v-on:changeData="updateNewCoin($event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/services/firebase'
import { db } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  data() {
    return {
      myUser: {
        email: "",
        id: ""
      },
      coinToAdd: {
        id: '',
        amount: 0,
        cost: 0,
        img: ''
      },
      new_coin: [],
      gotData: null,
      noData: false,
      defaultList: null,
      resetValue: 0,
      coinToRemove: ''
    }
  },
  async fetch () {
    this.defaultList = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24%2C7d'
    ).then(res => res.json())
  },
  methods: {
    async logout() {
      //logout current user
      await auth.signOut()
      //remove the cookie from the user's machine
      await Cookie.remove('access_token')
      //redirect the user to the homepage
      location.href = "/"
    },
    addUser() {
      //check if the user has coins already
      const tempStore = this.gotData.coinlist
      const id = this.coinToAdd.id
      const amount = this.coinToAdd.amount
      const cost = this.coinToAdd.cost
      const img = this.coinToAdd.img
      // Check if there's already an entry for this `id` and do nothing in that case
      const matchFinder = tempStore.find(a => a.id === id)
      if (matchFinder) {
        const oldAmount = matchFinder.amount * 1
        const oldCost = matchFinder.cost * 1
        const numCost = cost * 1
        const numAmount = amount * 1
        const combinedAmount = oldAmount + numAmount
        const combinedCost = oldCost + numCost
        //remove the old one from temporary store
        const newStore = tempStore.filter(coin => coin.id != matchFinder.id) 
        //add the repopulated object
        newStore.push({ id, amount: combinedAmount, cost: combinedCost, img })
        db.collection("users").doc(this.myUser.id).set({  
          coinlist: newStore 
        })
        .then(() => {
            //update the list
            this.getUser()
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
      } 
      else {  //if the coin doesn't exist
        // Here we are not reusing a single object, but creating a new one on each iteration:
        tempStore.push({ id, amount, cost, img });
        // Add a new document in collection "users"
        db.collection("users").doc(this.myUser.id).set({  
          coinlist: tempStore 
        })
        .then(() => {
            //update the list
            this.getUser()
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
      }
    },
    removeCoin(removeId) {
      //this.coinToRemove = removeId
      const tempStore = this.gotData.coinlist
      //return all the coins that don't match the sent id
      const newStore = tempStore.filter(coin => coin.id != removeId)
      db.collection("users").doc(this.myUser.id).set({  
        coinlist: newStore 
      })
      .then(() => {
        //update the list
        this.getUser()
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    //retrieve User's coin data from the users collection
    getUser() {
      const docRef = db.collection("users").doc(this.myUser.id);
      docRef.get().then((doc) => {
          if (doc.exists) {
              //if the user has coins retrieve the coins
              this.gotData = doc.data()
              this.noData = false
          } else {
              // prompt the user to start a new collection
              this.noData = true
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    },
    updateNewCoin(collected) {
      this.coinToAdd.id = collected.x
      this.coinToAdd.amount = collected.y
      this.coinToAdd.cost = collected.z
      this.coinToAdd.img = collected.i
      //invoke adding the coin to the database
      this.addUser()
    }
  },
  mounted() {
    this.myUser.email = this.$store.state.users.user.email
    this.myUser.id = this.$store.state.users.user.uid
    //invoke getUser
    this.getUser()
  },
  beforeDestroy() {
    //reset the networth to avoid double counting
    this.$store.commit("users/RESET_WORTH", this.resetValue)
  },
  computed: {
    netWorth() {
      return this.$store.state.users.userWorth
    }
  }
}
</script>

<style lang="scss">
  .new-portfolio {
    margin: 30px 0;
    text-align: center;
  }
  .new-port-heading {
    font-size:36px; 
    font-weight:300;
    margin-bottom:10px;
  }
  .new-portfolio p{
    font-size: 24px;
    font-weight:300;
  }
  .collection-hd {
    font-size:36px; 
    font-weight:300;
    padding:0 20px 30px;
    text-align: center;
  }
  .port-container {
    margin:30px 20px 200px;
    padding:0 20px;
    background-color: #2d2c50;
    border-radius: 10px;
    padding: 30px;
  }
  .add-more {
    font-size:26px; 
    font-weight:300;
    padding:30px 20px;
    text-align: center;
  }
  .coin-row {
    display:flex;
    align-items: center;
  }
  .row-heading {
    font-weight:500;
    font-size:16px;
    border-bottom: 1px solid #7f7c9b;
    padding-bottom:10px;
  }
  .pcoin-name{flex:1;}
  .holdings{flex:1; text-align:center;}
  .average-cost{flex:1; text-align:right;}
  .av-heading{margin-right:20px;}
</style>