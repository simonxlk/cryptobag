(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,r,e){"use strict";e(42),e(17);var n=e(4);r.a=function(){n.a.filter("currency",(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat("en-GB",{style:"currency",currency:r}).format(t)}))}},151:function(t,r,e){"use strict";e(42),e(17);e(4).a.filter("formatDate",(function(t){return Intl.DateTimeFormat("en-GB").format(new Date(t))}))},152:function(t,r,e){"use strict";var n=e(4),o=e(216),c=e.n(o);n.a.use(c.a)},221:function(t,r,e){e(222),t.exports=e(223)},263:function(t,r,e){"use strict";e.r(r);e(34),e(192);r.default=function(t){var r=t.store,e=t.route,n=t.redirect;!r.state.users.user&&e.path.match(/\/in\/*/g)&&n("/login")}},287:function(t,r,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(94).default)("0acfe7c0",content,!0,{sourceMap:!1})},288:function(t,r,e){var n=e(93)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,700;1,800&display=swap);"]),n.push([t.i,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;scroll-behavior:smooth}img{max-width:100%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.app{background-color:#1b1b3a;min-height:100vh;color:#fff}.button{display:inline-block;text-decoration:none;color:inherit;padding:10px 30px;background-color:#36bc07;border:none;color:#fff;border-radius:6px;cursor:pointer;transition:all .3s ease;font-size:24px}.button:hover{background-color:#226d07}.button-light{background-color:transparent;border:1px solid #fff;text-decoration:none;color:#fff;font-size:24px;padding:10px 30px;border-radius:6px;margin:10px 20px;cursor:pointer;transition:all .3s ease}.button-light:hover{background-color:#226d07}.sm-button-light{background-color:transparent;border:1px solid #7f7c9b;text-decoration:none;color:#fff;font-size:18px;padding:5px 10px;border-radius:6px;margin:10px 20px;cursor:pointer;transition:all .3s ease}.sm-button-light:hover{background-color:#7f7c9b;color:#1b1b3a}.container{max-width:900px;margin:0 auto}.sm-hide{display:block}@media(max-width:600px){.sm-hide{display:none}}',""]),t.exports=n},289:function(t,r,e){"use strict";e.r(r),e.d(r,"actions",(function(){return d}));var n=e(214),o=e(215),c=e.n(o),d={nuxtServerInit:function(t,r){var e=t.commit,o=r.req;if(o.headers.cookie){var d=c.a.parse(o.headers.cookie).access_token;if(d){var l=Object(n.a)(d);l&&e("users/SET_USER",{uid:l.user_id,email:l.email})}}}}},290:function(t,r,e){"use strict";e.r(r),e.d(r,"state",(function(){return l})),e.d(r,"mutations",(function(){return f})),e.d(r,"actions",(function(){return m}));var n=e(14),o=(e(61),e(95)),c=e(154),d=e.n(c),l=function(){return{user:null,userWorth:0}},f={SET_USER:function(t,r){t.user=r},SET_WORTH:function(t,r){t.userWorth+=r},RESET_WORTH:function(t,r){t.userWorth=r}},m={login:function(t,r){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,l,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,o.a.signInWithEmailAndPassword(r.email,r.password);case 4:return e.next=6,o.a.currentUser.getIdToken();case 6:c=e.sent,l=o.a.currentUser,f=l.email,m=l.uid,d.a.set("access_token",c),n("SET_USER",{email:f,uid:m}),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()}}},95:function(t,r,e){"use strict";e.d(r,"a",(function(){return o})),e.d(r,"b",(function(){return c}));var n=e(91);e(291),e(312);!n.a.apps.length&&n.a.initializeApp({apiKey:"AIzaSyA6I5_SDEPwLySRQEyEw9zMDmih0EepWeA",authDomain:"nuxt-crypto.firebaseapp.com",projectId:"nuxt-crypto",storageBucket:"nuxt-crypto.appspot.com",messagingSenderId:"897200824699",appId:"1:897200824699:web:15cd2252a9392cd0c41dde"});var o=n.a.auth(),c=n.a.firestore()}},[[221,10,1,11]]]);