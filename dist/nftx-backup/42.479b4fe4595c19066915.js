(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{TOIH:function(e,n,t){"use strict";t.r(n),t("ls82");var r=t("CA1r");function o(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function u(e){o(a,r,i,u,c,"next",e)}function c(e){o(a,r,i,u,c,"throw",e)}u(void 0)}))}}t("kB5k"),t("/TMw"),t("M39V"),n.default=function(e){var n,o=e.networkId,a=e.preferred,u=e.buttonPosition,c=e.modalZIndex,s=e.apiKey,l=e.buildEnv,f=e.enableLogging,w=e.enabledVerifiers,h=e.loginConfig,d=e.showTorusButton,g=e.integrity,p=e.whiteLabel,v=e.loginMethod;return{name:e.label||"Torus",svg:e.svg||'<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>',iconSrc:e.iconSrc,wallet:(n=i(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(16)]).then(t.t.bind(null,"vGOQ",7));case 2:return n=new(0,e.sent.default)({buttonPosition:u,modalZIndex:c,apiKey:s}),e.next=7,n.init({buildEnv:l,enableLogging:f,network:{host:Object(r.f)(o),chainId:o,networkName:"".concat(Object(r.f)(o)," Network")},showTorusButton:d,enabledVerifiers:w,loginConfig:h,integrity:g,whiteLabel:p});case 7:return e.abrupt("return",{provider:n.provider,instance:n,interface:{name:"Torus",connect:function(){var e=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.login({verifier:v});case 2:return e.abrupt("return",{message:e.sent[0]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),disconnect:function(){return n.cleanUp()},address:{get:function(){return Promise.resolve(n.web3.eth.accounts[0])}},network:{get:function(){return Promise.resolve(Number(n.web3.version.network))}},balance:{get:function(){return new Promise(function(){var e=i(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.web3.eth.getBalance(n.web3.eth.accounts[0],(function(e,n){e?r("Error while checking Balance: ".concat(e)):t(n.toString(10))}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}},dashboard:function(){return n.showWallet("home")}}});case 9:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:a}}}}]);