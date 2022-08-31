import Vue from 'vue'

export default () => {
    Vue.filter('currency', function (value, currency = 'GBP') {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency,
        }).format(value)
    });
  }
