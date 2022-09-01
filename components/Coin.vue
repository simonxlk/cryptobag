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
            <div class="coin-data">
              <span v-if="coin.price_change_percentage_24h >= 0" class="green-text">
              +{{ coin.price_change_percentage_24h.toFixed(2) }}
              </span>
              <span v-else class="red-text">
                {{ coin.price_change_percentage_24h.toFixed(2) }}
              </span>
            </div>
            <div class="coin-data sm-hide">
              <span v-if="coin.price_change_percentage_7d_in_currency >= 0" class="green-text">
                +{{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}
              </span>
              <span v-else class="red-text">
              {{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}
              </span>
            </div>
            <div class="more-info">
              <div @click="toggleOpen" class="info-button">
                <div v-if="!isOpen">&#9660;</div>
                <div v-else>&#9650;</div>
              </div>
            </div>
          </div><!-- end row container -->
          <div v-show="isOpen" class="coin-stats">
            <div>
                <div class="data-line">
                    <div class="line-heading">Market Cap</div>
                    <div class="line-data">{{ mcNumber | currency }}</div>
                </div>
                <div class="data-line">
                    <div class="line-heading">All-Time High</div>
                    <div class="line-data">
                      {{ cleanAth | currency }}
                      <span class="ath-date">{{ coin.ath_date | formatDate }}</span>
                    </div>
                </div>
                <div class="data-line">
                    <div class="line-heading">All-Time Low</div>
                    <div class="line-data">
                      {{ cleanAtl | currency }}
                      <span class="ath-date">{{ coin.atl_date | formatDate }}</span>
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
          mcNumber: 0
        }
      },
      methods: {
          toggleOpen() {
            this.isOpen = !this.isOpen
          }
      },
      mounted() {
        //change curreny from string to number
        this.cleanAth = this.coin.ath * 1
        this.cleanAtl = this.coin.atl * 1
        this.priceNumber = this.coin.current_price * 1
        this.mcNumber = this.coin.market_cap * 1
      }
  }
</script>

<style lang="scss">
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
</style>