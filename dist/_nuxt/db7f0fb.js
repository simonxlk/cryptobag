(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{321:function(t,n,o){var content=o(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(94).default)("177a5776",content,!0,{sourceMap:!1})},351:function(t,n,o){"use strict";o(321)},352:function(t,n,o){var c=o(93)(!1);c.push([t.i,".icoin-container[data-v-2acce291]{padding:10px 0;border-bottom:1px dotted #7f7c9b}",""]),t.exports=c},361:function(t,n,o){"use strict";o.r(n);var c={props:["pcoin"],data:function(){return{coinAmount:0,coinCost:0,averageCost:0}},mounted:function(){this.coinAmount=1*this.pcoin.amount,this.coinCost=1*this.pcoin.cost,this.calcAverage()},methods:{calcAverage:function(){var t=this.coinCost,n=this.coinAmount;this.averageCost=t/n}}},e=(o(351),o(60)),component=Object(e.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"icoin-container"},[n("div",{staticClass:"coin-row"},[n("div",{staticClass:"pcoin-name"},[t._v("\n      "+t._s(t.pcoin.id)+"\n    ")]),t._v(" "),n("div",{staticClass:"holidings"},[t._v("\n      "+t._s(t.pcoin.amount)+"\n    ")]),t._v(" "),n("div",{staticClass:"average-cost"},[t._v("\n      "+t._s(t._f("currency")(t.averageCost))+"\n    ")])])])}),[],!1,null,"2acce291",null);n.default=component.exports}}]);