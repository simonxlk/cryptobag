<template>
  <div>
    <div class="container-row">
      <div class="coin-name">
        <div class="img-box">
          <img :src="coin.image" :alt="coin.name"/>
        </div>
        <div class="name-box">{{ coin.name }}</div>
      </div>
      <div class="coin-data">{{ priceNumber | currency }}</div>
      <div class="coin-data sm-hide">
        <span v-if="coin.price_change_percentage_24h >= 0" class="green-text">
        +{{ coin.price_change_percentage_24h.toFixed(2) }}
        </span>
        <span v-else class="red-text">
          {{ coin.price_change_percentage_24h.toFixed(2) }}
        </span>
      </div>
      <div class="coin-data">
        <span v-if="coin.price_change_percentage_7d_in_currency >= 0" class="green-text">
          +{{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}
        </span>
        <span v-else class="red-text">
        {{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}
        </span>
      </div>
      <div class="more-info">
        <div @click="toggleOpen" class="info-button">
          <div v-if="!isOpen" class="coin-add-sign">+</div>
          <div v-else>&#9650;</div>
        </div>
      </div>
    </div><!-- end row container -->
    <div v-show="isOpen" class="coin-stats">
      <div>
          
          <div class="input-container">
            <div class="input-heading">Add some {{ coin.id }} to your portfolio</div>
            <div class="input-row">
              <div class="input-col">
                <label>Amount of {{ coin.id }}: </label>
                <input type="number" v-model="collectAmount">
              </div>
              <div class="input-col">
                <label>Unit price in £: </label>
                <input type="number" v-model="collectPrice">
              </div>
            </div>
            <div v-if="confirmBox" class="confirm-buy">
              You added {{ collectAmount }} {{ coin.id }} at a total cost of: <span class="ath-date">£{{ collectCost }}</span>
            </div>
            <p v-if="amountWarning" class="amount-error"><span class="warning-bg">enter an amount and price</span></p>
            <div class="btn-container">
              <!--<button @click="sendCoinInputs">add coin</button>-->
              <button @click="calculateTotal" class="sm-button-light">Add coin</button>
            </div>
          </div>
      </div>
    </div><!-- end coin stats -->
  </div>
</template>

<script>

  export default {
    props: ['coin'],

    data() {
      return {
        isOpen: false,
        cleanAtl: 0,
        cleanAth: 0,
        priceNumber: 0,
        mcNumber: 0,
        collectAmount: 0,
        collectPrice: 0,
        collectCost: 0,
        confirmBox: false,
        amountWarning: false

      }
    },
    methods: {
      toggleOpen() {
      this.isOpen = !this.isOpen
      },
      sendCoinInputs() {
        this.$emit('changeData', {x: this.coin.id, y: this.collectAmount, z: this.collectCost})
      },
      calculateTotal() {
        if(this.collectAmount > 0 && this.collectPrice > 0) {
          this.collectCost = this.collectPrice * this.collectAmount
          //display succes message
          this.confirmBox = true
          //send data to the parent component 
          this.sendCoinInputs()
          setTimeout(() => {
            //remove success message after 5 seconds
            this.confirmBox = false
          }, 5000)
        }else {
          this.amountWarning = true
          setTimeout(() => {
            this.amountWarning = false
          }, 5000)
        }
        
      }
    },
    mounted() {
      //change curreny from string to number
      this.cleanAth = this.coin.ath * 1
      this.cleanAtl = this.coin.atl * 1
      this.priceNumber = this.coin.current_price * 1
      this.mcNumber = this.coin.market_cap * 1
      this.collectPrice = this.priceNumber
    }
  }
</script>

<style lang="scss" scoped>
  .info-button {
    width:30px;
    height:30px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #7f7c9b;
    border-radius:50%;
    background-color: #1b1b3a;
    cursor: pointer;
    font-size:12px;
  }
  .coin-add-sign {
    font-size:20px;
  }
  .coin-stats {
    padding-top: 15px;
    color:#7f7c9b;
  }
  .data-line {
    display: flex;
    justify-content: space-between;
    padding:5px 0;
    border-bottom: 1px dotted #7f7c9b;
  }
  .ath-date {
    font-size:12px;
    color:#1b1b3a;
    background-color: #7f7c9b;
    padding:3px 5px;
    border-radius:4px;
  }
  input {
    width: 120px;
    padding: 2px;
    margin: 5px 0;
    font-size: 14px;
  }
  label {
    display: inline-block;
    width: auto;
    margin: 0 5px 0 0;
    text-align: left;
  }
  .input-row {
    display:flex; 
    align-items: center;
    margin:10px 10%;
  }
  .input-col {
    text-align:center;
    flex:1;
  }
  .input-heading {
    text-align: center;
    padding:10px 0;
    font-size:24px;
    font-weight:300;
  }
  .confirm-buy {
    text-align:center;
    font-size:20px;
    margin-top:20px;
  }
  .btn-container {
    text-align:center; 
    padding:10px;
  }
  .input-container {
    border-top: 1px dotted #7f7c9b;
  }
  .amount-error {
    text-align:center;
  }
  .warning-bg {
    color:#f54336;
    background-color: rgba(255,255,255, 0.7);
    padding:3px 10px;
    border-radius:8px;
    font-size:14px;
  }
</style>