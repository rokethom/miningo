!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},,function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},,,function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return l});var n=r(0),o=r.n(n),i=r(1),u=r.n(i),a=r(3),c=r.n(a),s=r(4),f=r.n(s),l=function(){function e(){c()(this,e),this.collections={}}return f()(e,[{key:"getOrCreateCollection",value:function(e){return this.collections[e]||(this.collections[e]=[]),this.collections[e]}},{key:"remove",value:function(){var e=u()(o.a.mark(function e(t,r){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollection(t),this.collections[t]=n.filter(function(e){return!r(e)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=u()(o.a.mark(function e(t,r){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=this.getOrCreateCollection(t)).forEach(function(e,t){var o=r(e);o&&(n[t]=o)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"append",value:function(){var e=u()(o.a.mark(function e(t,r){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollection(t),r.forEach(function(e){n.push(e)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=u()(o.a.mark(function e(t,r){var n,i,u,a,c,s,f,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollection(t),i=!0,u=!0,a=!1,c=void 0,e.prev=5,s=n[Symbol.iterator]();case 7:if(u=(f=s.next()).done){e.next=15;break}if(l=f.value,i){e.next=11;break}return e.abrupt("break",15);case 11:i=r(l);case 12:u=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),a=!0,c=e.t0;case 21:e.prev=21,e.prev=22,u||null==s.return||s.return();case 24:if(e.prev=24,!a){e.next=27;break}throw c;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,this,[[5,17,21,29],[22,,24,28]])}));return function(t,r){return e.apply(this,arguments)}}()},{key:"dropCollection",value:function(){var e=u()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:delete this.collections[t];case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()}])});