<template>
  <div class="icoin-container">
    <!--<p>{{ pcoin.amount }} {{ pcoin.id }} at an average cost of </p>-->
    <div class="coin-row">
      <div class="pcoin-name">
        {{ pcoin.id }}
      </div>
      <div class="holidings">
        {{ pcoin.amount }}
      </div>
      <!--<div class="current-price">Current Price</div>-->
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
      averageCost: 0
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
    }
  }

}
</script>

<style lang="scss" scoped>
  .icoin-container {
    padding:10px 0;
    border-bottom: 1px dotted #7f7c9b;
  }
</style>