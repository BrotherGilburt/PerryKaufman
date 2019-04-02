!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var o={on:function(n,e){this._handlers||(this._handlers={}),this._handlers[n]||(this._handlers[n]=[]),this._handlers[n].push(e)},off:function(n,e){var t=this._handlers&&this._handlers[n];t&&t.forEach(function(n,o){n===e&&t.splice(o,1)})},_dispatch:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];var i=this._handlers&&this._handlers[n];i&&i.forEach(function(n){n.call.apply(n,[null].concat(t))})}};function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var s={countdown:function(n){return n<1?"go":String(n)},spawn:function(n){return"throw ".concat(n)},warn:function(n){return"".concat(n," soon")}},a=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._caller=e,this._config={},this._state={interval:null,mode:null,seconds:0}}var e,t,o;return e=n,(t=[{key:"start",value:function(n){var e=this;this._state.interval||(this._configure(n),this._dispatch("start"),this._state.mode="start",this._tick(),this._state.interval=setInterval(function(){return e._tick()},1e3))}},{key:"reset",value:function(){this._state.interval&&(clearInterval(this._state.interval),this._state.interval=null,this._caller.cancel(),this._dispatch("reset"))}},{key:"_configure",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.countdown,o=e.canons;this._config.countdown="boolean"!=typeof t?n.DEFAULT_CONFIG.countdown:t,this._config.canons=o in n.CANONS[0]||o instanceof Array&&o.every(function(n){return"string"==typeof n})&&4===o.length?o:n.DEFAULT_CONFIG.canons}},{key:"_tick",value:function(){"start"===this._state.mode&&(this._state.seconds=this._config.countdown?n.TIMES.countdown+1:n.TIMES.fightStart+1,this._state.mode=this._config.countdown?"countdown":"canons"),this._state.seconds-=1;var e=this._state.seconds;this._dispatch("update",{minutes:Math.floor(e/60),seconds:e%60});var t=this._getCallout();t&&(this._caller.call(t),this._dispatch("call",t)),"countdown"===this._state.mode&&e<=0&&(this._state.mode="canons",this._state.seconds=n.TIMES.fightStart+1),"canons"===this._state.mode&&this._state.seconds<=n.TIMES.fightEnd&&(clearInterval(this._state.interval),this._state.interval=null,this._dispatch("finish"))}},{key:"_getCallout",value:function(){var e=this._state,t=e.mode,o=e.seconds,i=null;if("countdown"===t&&(i=n.CALLOUTS.countdown(o)),!i&&"canons"===t){var s=this._isCanonWarning(o);i=s?n.CALLOUTS.warn(s):null}if(!i&&"canons"===t){var a=this._isCanonSpawn(o);i=a?n.CALLOUTS.spawn(a):null}return i}},{key:"_getCanonName",value:function(e){var t=this._config.canons,o=n.ORDER[e];return t instanceof Array?t[o]:n.CANONS[o][t]}},{key:"_isCanonSpawn",value:function(e){var t=n.TIMES.firstCanon,o=n.ORDER.length;return e<=t&&(e+5)%30==0?this._getCanonName((t-e-10)/30%o):null}},{key:"_isCanonWarning",value:function(e){var t=n.TIMES.firstCanon,o=n.ORDER.length;return e<=t&&(e-5)%30==0?this._getCanonName((t-e)/30%o):null}}])&&i(e.prototype,t),o&&i(e,o),n}();a.CANONS=[{direction:"South",symbol:"Arrow"},{direction:"West",symbol:"Circle"},{direction:"North",symbol:"Heart"},{direction:"East",symbol:"Square"}],a.ORDER=[0,1,2,3,0,2,1,3],a.DEFAULT_CONFIG={countdown:!0,canons:"direction"},a.TIMES={countdown:5,fightEnd:0,fightStart:542,firstCanon:515},a.CALLOUTS=s,Object.assign(a.prototype,o);var r=a;function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var l,u,f=/^en-/i,h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.synth=window.speechSynthesis,this._voice=null}var e,t,o;return e=n,o=[{key:"getVoices",value:function(){return window.speechSynthesis.getVoices().filter(function(n){var e=n.lang;return f.test(e)}).map(function(n,e){return{name:n.name,index:e}})}}],(t=[{key:"call",value:function(n){var e=new SpeechSynthesisUtterance(n);this._voice&&(e.voice=this._voice),e.rate=1.25,window.speechSynthesis.speak(e)}},{key:"cancel",value:function(){window.speechSynthesis.cancel()}},{key:"setVoice",value:function(n){this._voice=window.speechSynthesis.getVoices().find(function(e){return e.name===n})}}])&&c(e.prototype,t),o&&c(e,o),n}(),d=(t(0),t(1),document.querySelector(".sabtimer")),v=d.querySelector(".sabtimer-display>.time"),_=d.querySelector(".sabtimer-controls"),m=_.elements.main.elements.start,p=_.elements.main.elements.reset,y=_.elements.config.elements.voice,g=_.elements.config.elements.countdown,w=_.elements.config.elements.canons,S=[_.elements.config.elements.canon1,_.elements.config.elements.canon2,_.elements.config.elements.canon3,_.elements.config.elements.canon4];function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.minutes,t=void 0===e?0:e,o=n.seconds,i=void 0===o?0:o,s=(t<10?"0":"")+String(t),a=(i<10?"0":"")+String(i);v.innerText="".concat(s,":").concat(a)}function C(){m.disabled=!0,p.disabled=!1}function E(){b({minutes:0,seconds:0}),m.disabled=!1,p.disabled=!0}function O(){for(;y.hasChildNodes();)y.removeChild(y.firstChild);h.getVoices().forEach(function(n){var e=document.createElement("option");e.value=n.name,e.innerText=n.name,y.appendChild(e)})}function k(n){var e=n?n.target.value:"direction";n||(w[0].selected=!0);var t=!(e in r.CANONS[0]),o=t?Array(4).fill(""):r.CANONS.map(function(n){return n[e]});S.forEach(function(n,e){n.disabled=!t,n.value=o[e]}),t&&S[0].focus()}l=new h,u=new r(l),window.speechSynthesis&&(document.body.classList.remove("unsupported"),E(),k(),O(),speechSynthesis.onvoiceschanged=O,p.addEventListener("click",function(){u.reset()}),m.addEventListener("click",function(n){n.preventDefault();var e={voice:y.value,countdown:"countdown"===g.value,canons:w.value in r.CANONS[0]?w.value:S.map(function(n){return n.value})},t=e.voice,o=e.countdown,i=e.canons;l.setVoice(t),u.start({countdown:o,canons:i})}),w.addEventListener("change",k),u.on("start",C),u.on("reset",E),u.on("finish",E),u.on("update",b))}]);