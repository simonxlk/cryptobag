<template>
  <div class="icoin-container">
    <div class="coin-row">
      <div class="pcoin-name">
        <div class="pcoin-logo"><img :src="pcoin.img"></div>
        <div class="pcoin-name-name">{{ pcoin.id }}</div>
      </div>
      <div class="holdings">
        <div class="holding-amount">{{ pcoin.amount }}</div>
        <div class="pcoin-value">{{ coinValue | currency }}</div>
      </div>
      <!-- <div class="current-price">Current Price</div> -->
      <div class="average-cost">
        {{ averageCost | currency }}
      </div>
      <div class="remove red-text" @click="showMe = !showMe">
        X
      </div>
    </div>
    <div v-show="showMe" class="remove-details">
      <p>Remove this coin from your portfolio?</p>
      <div class="remove-row">
        <div @click="sendCoinRemove()" class="remove-yes">Remove</div>
        <div @click="showMe = false" class="remove-no">Cancel</div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['pcoin'],

  data() {
    return {
      coinAmount: 0,
      coinCost: 0,
      averageCost: 0,
      coinValue: 0,
      showMe: false
    }
  },
  mounted() {
    //convert string to numbers
    this.coinAmount = this.pcoin.amount * 1
    this.coinCost = this.pcoin.cost * 1
    //call average calculator
    this.calcAverage()  
  },
  methods: {
    calcAverage() {
      //calculate average
      const cost = this.coinCost
      const amount = this.coinAmount
      this.averageCost = cost / amount
      this.coinValue = this.averageCost * amount
      //call function to send the coin value
      this.commitValue()
    },
    commitValue() {
      this.$store.commit("users/SET_WORTH", this.coinValue)
    },
    sendCoinRemove() {
        this.$emit('changeData', this.pcoin.id)
      }
  }

}
</script>

<style lang="scss" scoped>
  .icoin-container {
    padding:10px 0;
    border-bottom: 1px dotted #7f7c9b;
  }
  .pcoin-name {
    display:flex;
    align-items: center;
  }
  .pcoin-logo {
    width:40px;
    height:40px;
    margin-right:10px;
  }
  .holdings {
    text-align:center;
  }
  .holding-amount {
    font-size: 18px;
  }
  .pcoin-value {
    color:#7f7c9b;
    font-size: 14px;
  }
  .remove {
    padding:4px 12px;
    background-color:#1b1b3a;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .remove-details {
    text-align: center;
    padding: 10px;
    p {
      color:#ff9933;
    }
  }
  .remove-row {
    display:flex;
    justify-content: center;
  }
  .remove-yes {
    margin: 5px 20px; 
    display: inline-block;
    background-color:#ff3300;
    padding:3px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size:14px;
  }
  .remove-no {
    margin: 5px 20px; 
    display: inline-block;
    border:1px solid #39ac39;
    padding:3px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size:14px;
  }
</style>
