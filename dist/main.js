(()=>{"use strict";var n={705:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},742:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},738:n=>{n.exports=function(n){return n[1]}},239:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(738),r=t.n(a),i=t(705),o=t.n(i),s=t(742),c=t.n(s),d=new URL(t(287),t.b),p=o()(r()),l=c()(d);p.push([n.id,`.attack {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.marker {\n  min-height: 40px;\n  overflow: hidden;\n  grid-row: 1;\n  grid-column: 1 span 1;\n  position: relative;\n  /* opacity: 50%; */\n}\n.marker::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${l});\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0) scale(0.6);\n}\n`,""]);const u=p},423:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(738),r=t.n(a),i=t(705),o=t.n(i),s=t(742),c=t.n(s),d=new URL(t(732),t.b),p=o()(r()),l=c()(d);p.push([n.id,`* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: content-box;\n  border: 0;\n}\n\n.bg-image {\n  position: absolute;\n  background: url(${l}) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  height: 100vh;\n  width: 100vw;\n  z-index: -1;\n}\n`,""]);const u=p},774:(n,e,t)=>{t.d(e,{Z:()=>S});var a=t(738),r=t.n(a),i=t(705),o=t.n(i),s=t(742),c=t.n(s),d=new URL(t(251),t.b),p=new URL(t(453),t.b),l=new URL(t(292),t.b),u=new URL(t(965),t.b),h=new URL(t(244),t.b),g=new URL(t(602),t.b),v=new URL(t(753),t.b),f=o()(r());f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Saira&display=swap);"]);var m=c()(d),b=c()(p),w=c()(l),y=c()(u),k=c()(h),x=c()(g),L=c()(v);f.push([n.id,`* {\n  --square-width: 60px;\n  --container-width: calc(60px * 10);\n}\n\n.grid-container {\n  position: relative;\n  width: var(--container-width);\n  height: var(--container-width);\n  /* border: 10px solid hsla(212, 50%, 25%, 1) ; */\n  /* border-radius: 15px; */\n}\n\nbutton {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  background-image: url(${m});\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  width: min-content;\n  margin: auto;\n}\n.label {\n  color: white;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-family: "Saira", sans-serif;\n  user-select: none;\n  text-shadow: white 1px 0 10px;\n}\n\n.top.label {\n  grid-column: 2;\n  position: relative;\n  display: grid;\n  width: var(--container-width);\n  grid-template-columns: repeat(10, 1fr);\n  justify-items: center;\n  padding: 0;\n}\n.left.label {\n  position: relative;\n  display: grid;\n  height: var(--container-width);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  padding: 0 5px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  column-gap: 0;\n  row-gap: 0;\n}\n\n.deployment {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.grid.top {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n\n.square {\n  position: relative;\n  background-image: url(${b});\n  background-size: cover;\n  height: var(--square-width);\n  width: var(--square-width);\n  display: grid;\n  z-index: 0;\n  opacity: 90%;\n}\n\n/* .ship{\n    min-height: 40px;\n    overflow: hidden;\n    grid-column: 4 / span 2;\n    grid-row: 8;\n    position: relative;\n}\n.ship::before{\n    content:"";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-image: url(ship2.svg);\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotate(0) scale(1);\n} */\n\n/*vertical ship deployment require before element*/\n\n/* .ship2 {\n  min-height: 40px;\n  overflow: hidden;\n  grid-column: 3;\n  grid-row: 3 / span 2;\n  position: relative;\n}\n.ship2::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(ship2.svg);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(90deg) scale(2);\n} */\n/* \n.carrier {\n  min-height: 40px;\n  overflow: hidden;\n  grid-column: 8;\n  grid-row: 3 / span 5;\n  position: relative;\n}\n */\n\n.grid-container .ship {\n  visibility: hidden;\n}\n\n.grid-container:hover .ship.active:not(.deployed) {\n  min-height: 40px;\n  overflow: hidden;\n  /* grid-column: 6 / span 2;\n  grid-row: 8; */\n  position: relative;\n  visibility: visible;\n  background-color: palegreen;\n  opacity: 50%;\n}\n\n.grid-container .ship.deployed {\n  visibility: visible;\n  opacity: 100%;\n  background-color: hsla(212, 50%, 10%, 0.3);\n}\n\n.patrol.ship {\n  min-height: 40px;\n  overflow: hidden;\n  grid-column: span 2;\n  position: relative;\n  /* opacity: 50%; */\n}\n.patrol.ship:not(.invalid)::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${w});\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0) scale(1);\n}\n\n.vertical.patrol.ship {\n  grid-column: unset;\n  grid-row: span 2;\n}\n.vertical.patrol.ship:not(.invalid)::before {\n  transform: rotate(90deg) scale(2);\n}\n\n.carrier.ship {\n  min-height: 40px;\n  overflow: hidden;\n  position: relative;\n  opacity: 50%;\n  grid-column: span 5;\n}\n\n.carrier.ship:not(.invalid)::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${y});\n  background-size: contain; /*if rotated vertical seems like it need be contain*/\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0deg) scale(1.05); /*scale is just whatever squares it's supposed to occupy*/\n}\n.vertical.carrier.ship:not(.invalid)::before {\n  transform: rotate(90deg) scale(4.8);\n}\n\n.submarine.ship {\n  min-height: 40px;\n  overflow: hidden;\n  position: relative;\n  grid-column: span 3;\n}\n\n.submarine.ship:not(.invalid)::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${k});\n  background-size: contain; /*if rotated vertical seems like it need be contain*/\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0deg) scale(0.9); /*scale is just whatever squares it's supposed to occupy*/\n}\n\n.vertical.submarine.ship:not(.invalid)::before {\n  transform: rotate(90deg) scale(2.8);\n}\n\n.battle.ship {\n  min-height: 40px;\n  overflow: hidden;\n  position: relative;\n  grid-column: span 4;\n}\n\n.battle.ship:not(.invalid)::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${x});\n  background-size: contain; /*if rotated vertical seems like it need be contain*/\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0deg) scale(0.95); /*scale is just whatever squares it's supposed to occupy*/\n}\n\n.vertical.battle.ship:not(.invalid)::before {\n  transform: rotate(90deg) scale(3.8);\n}\n\n.destroyer.ship {\n  min-height: 40px;\n  overflow: hidden;\n  position: relative;\n  grid-column: span 4;\n}\n\n.destroyer.ship:not(.invalid)::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: url(${L});\n  background-size: contain; /*if rotated vertical seems like it need be contain*/\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(0deg) scale(0.9); /*scale is just whatever squares it's supposed to occupy*/\n}\n\n.vertical.destroyer.ship:not(.invalid)::before {\n  transform: rotate(90deg) scale(2.8);\n}\n\n.grid-container:hover .ship.active.invalid {\n  background-color: red;\n  background-image: none;\n  cursor: not-allowed;\n}\n`,""]);const S=f},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var g=r(h,a);a.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var c=a(n,r),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},287:(n,e,t)=>{n.exports=t.p+"d264323845125e8d0053.svg"},453:(n,e,t)=>{n.exports=t.p+"ac9bfcfd501392a89d02.png"},732:(n,e,t)=>{n.exports=t.p+"f407acb17a83eb648171.jpeg"},251:(n,e,t)=>{n.exports=t.p+"fc65d9c0ad71f6248dea.svg"},965:(n,e,t)=>{n.exports=t.p+"aa6b9719a60bf1376120.svg"},292:(n,e,t)=>{n.exports=t.p+"e4d9d92d7b4024114fbf.svg"},753:(n,e,t)=>{n.exports=t.p+"1d06b002689da0c025bf.svg"},602:(n,e,t)=>{n.exports=t.p+"f96e7d2eb7c883e1d88b.svg"},244:(n,e,t)=>{n.exports=t.p+"3d463abb461fa9689fe5.svg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=function(){var n=[],e=new Map,t=new Map;return{placeShip:function(t){var a,r,i,o=(a=t.length,r=a,i=a,{isSunk:function(){return!(i>0)},hit:function(){i--},getLength:function(){return r}});n.push(o),t.forEach((function(n){e.set(n,o)}))},receiveAttack:function(n){return t.set(n,!0),!!e.has(n)&&(e.get(n).hit(),!0)},isEnemyWinner:function(){return n.reduce((function(n,e){return n&&e.isSunk()}),!0)},isHit:function(n){return t.has(n)?!!e.has(n):null},isShipPlacementValid:function(n){return!e.has(n)}}};!function(){var e=1,t=n(),a=n();a.placeShip(["a1","a2","a3","a4","a5"]),a.placeShip(["d3","e3","f3","g3"]),a.placeShip(["e6","e7","e8"]),a.placeShip(["j5","j6","j7"]),a.placeShip(["j8","j9"]);var r=function(){return"".concat(1==e?"playerOne":"playerTwo")}}();const e=function(){document.querySelector(".content").innerHTML=""};var a=t(379),r=t.n(a),i=t(795),o=t.n(i),s=t(569),c=t.n(s),d=t(565),p=t.n(d),l=t(216),u=t.n(l),h=t(589),g=t.n(h),v=t(774),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),r()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var m=t(239),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),r()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;const w=function(){var n=document.createElement("div");n.classList.add("bg-image"),document.body.appendChild(n);var e=document.createElement("div");e.classList.add("header"),document.body.appendChild(e),e.textContent="Battleship";var t=document.createElement("div");t.classList.add("content"),document.body.appendChild(t);var a=document.createElement("button");a.textContent="Start",a.addEventListener("click",(function(){return console.log("tell gameController to starts")})),t.appendChild(a)},y=function(){e();var n=document.querySelector("div.content");n.innerHTML='\n  <div class="top label">\n  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span\n  ><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>\n  </div>\n  <div class="left label">\n  <span>A</span>\n  <span>B</span>\n  <span>C</span>\n  <span>D</span>\n  <span>E</span>\n  <span>F</span>\n  <span>G</span>\n  <span>H</span>\n  <span>I</span>\n  <span>J</span>\n  </div>';var t=document.createElement("div");t.classList.add("grid-container"),n.appendChild(t);var a=document.createElement("div");a.classList.add("top"),a.classList.add("grid");var r=document.createElement("div");r.classList.add("deployment"),r.classList.add("grid"),r.innerHTML='\n  <div class="carrier ship" data-size="5"></div>\n  <div class="battle ship" data-size="4"></div>\n  <div class="submarine ship" data-size="3"></div>\n  <div class="destroyer ship" data-size="3"></div>\n  <div class="patrol ship" data-size="2"></div>\n  ';var i=document.createElement("div");i.classList.add("lower"),i.classList.add("grid"),t.appendChild(i),t.appendChild(r);var o=document.createElement("div");o.classList.add("attack"),o.classList.add("grid"),t.appendChild(o),t.appendChild(a);for(var s=1;s<11;s++)for(var c=1;c<11;c++){var d=document.createElement("div");d.classList.add("square"),d.setAttribute("data-col",c),d.setAttribute("data-row",s),a.appendChild(d),i.appendChild(d.cloneNode())}var p=document.createElement("div");p.classList.add("marker"),p.classList.add("active"),o.appendChild(p);var l=document.querySelectorAll(".top .square");l.forEach((function(n){return n.addEventListener("mouseover",(function(){if(null!=p){var e=n.getAttribute("data-col"),t=n.getAttribute("data-row");p.style.gridColumn="".concat(e),p.style.gridRow="".concat(t)}}))})),l.forEach((function(n){return n.addEventListener("click",(function(){if(null!=p&&!p.classList.contains("invalid")&&p.classList.contains("active")){var n=p.cloneNode(!1);p.classList.remove("active"),o.appendChild(n),p=n}}))}))};var k=t(423),x={};x.styleTagTransform=g(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=u(),r()(k.Z,x),k.Z&&k.Z.locals&&k.Z.locals,w(),y()})()})();