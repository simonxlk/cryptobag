(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,5],{314:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("0ae0e50a",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";n(314)},316:function(t,e,n){var r=n(93)(!1);r.push([t.i,".menu-container[data-v-357d4805]{padding-top:50px}.menu-container ul[data-v-357d4805]{text-align:right;margin:0;padding:0 5px;border-bottom:1px solid #7f7c9b}.menu-container ul li[data-v-357d4805]{list-style:none;display:inline-block;margin:5px;text-transform:uppercase}.menu-container ul a[data-v-357d4805]{text-decoration:none;color:#fff;font-size:16px;font-weight:300;padding:5px;border-radius:4px;transition:background-color .5s ease;cursor:pointer}.menu-container ul a[data-v-357d4805]:hover{background-color:#7f7c9b}",""]),t.exports=r},317:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(61),n(95)),c=n(154),l=n.n(c),d={data:function(){return{myUser:null}},mounted:function(){this.myUser=this.$store.state.users.user},methods:{logout:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.signOut();case 2:return t.next=4,l.a.remove("access_token");case 4:location.href="/";case 5:case"end":return t.stop()}}),t)})))()}}},v=(n(315),n(60)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"menu-container"},[e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.myUser,expression:"myUser"}]},[e("NuxtLink",{attrs:{to:"../in/profile"}},[t._v("Portfolio")])],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!t.myUser,expression:"!myUser"}]},[e("NuxtLink",{attrs:{to:"./login"}},[t._v("Login")])],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!t.myUser,expression:"!myUser"}]},[e("NuxtLink",{attrs:{to:"./register"}},[t._v("Register")])],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.myUser,expression:"myUser"}]},[e("a",{on:{click:t.logout}},[t._v("Logout")])])])])])])}),[],!1,null,"357d4805",null);e.default=component.exports},318:function(t,e,n){"use strict";var r=n(7),o=n(8),c=n(62),l=n(319),d=n(219),v=n(9),f=RangeError,_=String,h=Math.floor,m=o(d),x=o("".slice),C=o(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},N=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=_(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),v=c(t),data=[0,0,0,0,0,0],h="",C="0";if(v<0||v>20)throw f("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return _(d);if(d<0&&(h="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),r=v;r>=7;)y(data,1e7,0),r-=7;for(y(data,w(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),y(data,1,1),k(data,2),C=N(data)}else y(data,0,n),y(data,1<<-e,0),C=N(data)+m("0",v);return C=v>0?h+((o=C.length)<=v?"0."+m("0",v-o)+C:x(C,0,o-v)+"."+x(C,o-v)):h+C}})},319:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},323:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("1e4c1e30",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n(323)},356:function(t,e,n){var r=n(93)(!1);r.push([t.i,".info-button{width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:#7f7c9b;border-radius:50%;background-color:#1b1b3a;cursor:pointer;font-size:12px}.coin-stats{padding-top:15px;color:#7f7c9b}.data-line{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px dotted #7f7c9b}.ath-date{font-size:12px;color:#1b1b3a;background-color:#7f7c9b;padding:3px 5px;border-radius:4px}",""]),t.exports=r},360:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("28250e82",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n.r(e);n(35),n(318);var r={props:["coin"],data:function(){return{isOpen:!1,cleanAtl:0,cleanAth:0,priceNumber:0,mcNumber:0}},methods:{toggleOpen:function(){this.isOpen=!this.isOpen}},mounted:function(){this.cleanAth=1*this.coin.ath,this.cleanAtl=1*this.coin.atl,this.priceNumber=1*this.coin.current_price,this.mcNumber=1*this.coin.market_cap}},o=(n(355),n(60)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container-row"},[e("div",{staticClass:"coin-name"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:t.coin.image,alt:t.coin.name}})]),t._v(" "),e("div",{staticClass:"name-box"},[t._v(t._s(t.coin.name))])]),t._v(" "),e("div",{staticClass:"coin-data"},[t._v(t._s(t._f("currency")(t.priceNumber)))]),t._v(" "),e("div",{staticClass:"coin-data"},[t.coin.price_change_percentage_24h>=0?e("span",{staticClass:"green-text"},[t._v("\n            +"+t._s(t.coin.price_change_percentage_24h.toFixed(2))+"\n            ")]):e("span",{staticClass:"red-text"},[t._v("\n              "+t._s(t.coin.price_change_percentage_24h.toFixed(2))+"\n            ")])]),t._v(" "),e("div",{staticClass:"coin-data"},[t.coin.price_change_percentage_7d_in_currency>=0?e("span",{staticClass:"green-text"},[t._v("\n              +"+t._s(t.coin.price_change_percentage_7d_in_currency.toFixed(2))+"\n            ")]):e("span",{staticClass:"red-text"},[t._v("\n            "+t._s(t.coin.price_change_percentage_7d_in_currency.toFixed(2))+"\n            ")])]),t._v(" "),e("div",{staticClass:"more-info"},[e("div",{staticClass:"info-button",on:{click:t.toggleOpen}},[t.isOpen?e("div",[t._v("▲")]):e("div",[t._v("▼")])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"coin-stats"},[e("div",[e("div",{staticClass:"data-line"},[e("div",{staticClass:"line-heading"},[t._v("Market Cap")]),t._v(" "),e("div",{staticClass:"line-data"},[t._v(t._s(t._f("currency")(t.mcNumber)))])]),t._v(" "),e("div",{staticClass:"data-line"},[e("div",{staticClass:"line-heading"},[t._v("All-Time High")]),t._v(" "),e("div",{staticClass:"line-data"},[t._v("\n                    "+t._s(t._f("currency")(t.cleanAth))+"\n                    "),e("span",{staticClass:"ath-date"},[t._v(t._s(t._f("formatDate")(t.coin.ath_date)))])])]),t._v(" "),e("div",{staticClass:"data-line"},[e("div",{staticClass:"line-heading"},[t._v("All-Time Low")]),t._v(" "),e("div",{staticClass:"line-data"},[t._v("\n                    "+t._s(t._f("currency")(t.cleanAtl))+"\n                    "),e("span",{staticClass:"ath-date"},[t._v(t._s(t._f("formatDate")(t.coin.atl_date)))])])])])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n(360)},372:function(t,e,n){var r=n(93)(!1);r.push([t.i,".page-header{text-align:center;padding:60px 20px;font-size:46px;font-weight:300}@media(max-width:600px){.page-header{font-size:40px}}.message{text-align:center;font-size:18px;padding:0 20px}.auth-section{display:flex;justify-content:center;align-items:center;padding:0 20px 120px}@media(max-width:600px){.auth-section{flex-direction:row}}.coin-parent{background-color:#2d2c50;margin:0 20px 5px;border-radius:8px;padding:15px}.container-row{display:flex;align-items:center}.box{flex:1}.coin-headings{display:flex;color:#7f7c9b}.coin-name{width:35%;display:flex;justify-content:flex-start;align-items:center}.coin-data{width:20%}.coin-data,.info-icons{text-align:center}.green-text{color:#09ad19}.red-text{color:#cf0303}.img-box{width:40px;height:40px}.name-box{margin-left:20px}",""]),t.exports=r},376:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(61),n(17),n(97),{name:"IndexPage",data:function(){return{title:"Start your crypto portfolio",coinList:[],myUser:null}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24%2C7d").then((function(t){return t.json()}));case 2:t.coinList=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),mounted:function(){this.myUser=this.$store.state.users.user},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Keep track of your favourite coins, see how they perform against the market. all in one place"}]}}}),c=o,l=(n(371),n(60)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("div",{staticClass:"container"},[e("Nav"),t._v(" "),e("h1",{staticClass:"page-header"},[t._v(" "+t._s(t.title))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.myUser,expression:"!myUser"}]},[e("div",{staticClass:"auth-section"},[e("NuxtLink",{staticClass:"button",attrs:{to:"login"}},[t._v("LOGIN")]),t._v(" "),e("NuxtLink",{staticClass:"button-light",attrs:{to:"register"}},[t._v("REGISTER")])],1)]),t._v(" "),t._m(0),t._v(" "),t._l(t.coinList,(function(t){return e("div",{key:t.id,staticClass:"coin-parent"},[e("Coin",{attrs:{coin:t}})],1)}))],2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-coins"},[e("div",{staticClass:"coin-headings"},[e("div",{staticClass:"coin-name"},[t._v("\n             \n          ")]),t._v(" "),e("div",{staticClass:"coin-data"},[t._v("\n            Price\n          ")]),t._v(" "),e("div",{staticClass:"coin-data"},[t._v("\n            24h change\n          ")]),t._v(" "),e("div",{staticClass:"coin-data"},[t._v("\n            7d change\n          ")]),t._v(" "),e("div",{staticClass:"info-icons"},[t._v("\n             \n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(317).default,Coin:n(363).default})}}]);