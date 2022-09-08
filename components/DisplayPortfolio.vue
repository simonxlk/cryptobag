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
      coinValue: 0
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
</style>