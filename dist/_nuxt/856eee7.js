(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,e,r){"use strict";r(42),r(17);var n=r(4);e.a=function(){n.a.filter("currency",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat("en-GB",{style:"currency",currency:e}).format(t)}))}},151:function(t,e,r){"use strict";r(42),r(17);r(4).a.filter("formatDate",(function(t){return Intl.DateTimeFormat("en-GB").format(new Date(t))}))},152:function(t,e,r){"use strict";var n=r(4),o=r(216),c=r.n(o);n.a.use(c.a)},221:function(t,e,r){r(222),t.exports=r(223)},263:function(t,e,r){"use strict";r.r(e);r(34),r(192);e.default=function(t){var e=t.store,r=t.route,n=t.redirect;!e.state.users.user&&r.path.match(/\/in\/*/g)&&n("/login")}},287:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(94).default)("0acfe7c0",content,!0,{sourceMap:!1})},288:function(t,e,r){var n=r(93)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,700;1,800&display=swap);"]),n.push([t.i,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;scroll-behavior:smooth}img{max-width:100%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.app{background-color:#1b1b3a;min-height:100vh;color:#fff}.button{display:inline-block;text-decoration:none;color:inherit;padding:10px 30px;background-color:#36bc07;border:none;color:#fff;border-radius:6px;cursor:pointer;transition:all .3s ease;font-size:24px}.button:hover{background-color:#226d07}.button-light{background-color:transparent;border:1px solid #fff;text-decoration:none;color:#fff;font-size:24px;padding:10px 30px;border-radius:6px;margin:10px 20px;cursor:pointer;transition:all .3s ease}.button-light:hover{background-color:#226d07}.sm-button-light{background-color:transparent;border:1px solid #7f7c9b;text-decoration:none;color:#fff;font-size:18px;padding:5px 10px;border-radius:6px;margin:10px 20px;cursor:pointer;transition:all .3s ease}.sm-button-light:hover{background-color:#7f7c9b;color:#1b1b3a}.container{max-width:900px;margin:0 auto}.sm-hide{display:block}@media(max-width:600px){.sm-hide{display:none}}',""]),t.exports=n},289:function(t,e,r){"use strict";r.r(e),r.d(e,"actions",(function(){return d}));var n=r(214),o=r(215),c=r.n(o),d={nuxtServerInit:function(t,e){var r=t.commit,o=e.req;if(o.headers.cookie){var d=c.a.parse(o.headers.cookie).access_token;if(d){var l=Object(n.a)(d);l&&r("users/SET_USER",{uid:l.user_id,email:l.email})}}}}},290:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return f}));var n=r(14),o=(r(61),r(95)),c=r(154),d=r.n(c),l={SET_USER:function(t,e){t.user=e}},f={login:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,f,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,o.a.signInWithEmailAndPassword(e.email,e.password);case 4:return r.next=6,o.a.currentUser.getIdToken();case 6:c=r.sent,l=o.a.currentUser,f=l.email,m=l.uid,d.a.set("access_token",c),n("SET_USER",{email:f,uid:m}),r.next=15;break;case 12:throw r.prev=12,r.t0=r.catch(1),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},95:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));var n=r(91);r(291),r(312);!n.a.apps.length&&n.a.initializeApp({apiKey:"AIzaSyA6I5_SDEPwLySRQEyEw9zMDmih0EepWeA",authDomain:"nuxt-crypto.firebaseapp.com",projectId:"nuxt-crypto",storageBucket:"nuxt-crypto.appspot.com",messagingSenderId:"897200824699",appId:"1:897200824699:web:15cd2252a9392cd0c41dde"});var o=n.a.auth(),c=n.a.firestore()}},[[221,10,1,11]]]);