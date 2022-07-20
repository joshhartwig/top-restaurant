(()=>{"use strict";var e={24:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=r},426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([e.id,"/* ------ GENERAL -------- */\n:root {\n    font-size: 16px;\n    --cardbg: red;\n}\n\n#content {\n  display: flex;\n  margin-top: 2em;\n  height: 100vh;\n  width: 100vw;\n}\n\n/* ------ SIDEBAR -------- */\n\n.rs-sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 10%;\n    background-color: aliceblue;\n    margin-left: 1em;\n}\n\n.rs-sidebar-button {\n  margin-bottom: 1em;\n}\n\n\n\n/* ------ MAIN -------- */\n\n.rs-main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 90%;\n    background-color: wheat;\n    padding: 0em 2em 0em 2em;\n}\n\n/* ------ MAIN HOME -------- */\n\n.rs-main-home {\n  display: flex;\n  flex-direction: column;\n  margin-left: 1em;\n  justify-content: center;\n}\n\n.home-title {\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.home-sales-info {\n  margin-bottom: 2em;\n}\n\n.home-sales {\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  grid-gap: 1em;\n}\n\n.sales-card {\n  border-radius: 25px;\n  padding: 1em 1em 1em 1em;\n  background-color: var(--cardbg)\n}",""]);const s=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=i(p,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var s=t(o[r]);n[s].references--}for(var d=a(e,i),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),o=t(569),r=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var v=t(24),b={};function h(e){document.querySelector("#main").innerHTML="","home"===e&&(document.querySelector("#main").innerHTML='\n        <div class="rs-main-home">\n      <div class="home-title">\n        <p class="home-title-para">\n          laoreet id donec\n        </p>\n      </div>\n      <div class="home-sales-info">\n        <p class="home-sales-para">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa sed elementum. Aliquet lectus proin nibh nisl condimentum. Mauris a diam maecenas sed enim ut.\n        </p>\n      </div>\n      <div class="home-sales">\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non.\n        </div>\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.\n        </div>\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.\n        </div>\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.\n        </div>\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.\n        </div>\n        <div class="sales-card">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.\n        </div>\n      </div>\n    </div>'),"about"===e&&(document.querySelector("#main").innerHTML="\n        <div>Hello from About</div>  \n        "),"contact"===e&&(document.querySelector("#main").innerHTML="\n        <div>Hello from Contact</div>  \n        ")}b.styleTagTransform=m(),b.setAttributes=d(),b.insert=r().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),n()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("rs-sidebar");const t=document.createElement("div");t.classList.add("rs-sidebar-button"),t.onclick=function(){h("home")},t.innerText="Home";const a=document.createElement("div");a.classList.add("rs-sidebar-button"),a.onclick=function(){h("about")},a.innerText="About";const i=document.createElement("div");i.classList.add("rs-sidebar-button"),i.onclick=function(){h("contact")},i.innerText="Contact",n.appendChild(t),n.appendChild(a),n.appendChild(i);let o=document.createElement("div");o.classList.add("rs-main"),o.id="main",e.append(n),e.append(o)}(),h("home")})()})();