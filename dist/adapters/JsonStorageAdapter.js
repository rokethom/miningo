!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},,function(e,t){e.exports=require("path")},,,,,,,,,function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return h});var n=r(0),i=r.n(n),a=r(1),o=r.n(a),u=r(3),c=r.n(u),s=r(4),f=r.n(s),l=r(2),p=r(6),h=function(){function e(t){c()(this,e),this.dataPath=t,this.collections={},l.existsSync(this.dataPath)||l.mkdirSync(this.dataPath)}return f()(e,[{key:"getOrCreateCollectionPath",value:function(e){if(!this.collections[e]){var t=p.resolve(this.dataPath,e+".json");this.collections[e]=t,l.existsSync(t)||l.writeFileSync(t,"[]")}return this.collections[e]}},{key:"remove",value:function(){var e=o()(i.a.mark(function e(t,r){var n,a,o,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollectionPath(t),a=l.readFileSync(n,"utf8"),o=JSON.parse(a),u=o.filter(function(e){return!r(e)}),l.writeFileSync(n,JSON.stringify(u));case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=o()(i.a.mark(function e(t,r){var n,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollectionPath(t),a=l.readFileSync(n,"utf8"),(o=JSON.parse(a)).forEach(function(e,t){var n=r(e);n&&(o[t]=n)}),l.writeFileSync(n,JSON.stringify(o));case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"append",value:function(){var e=o()(i.a.mark(function e(t,r){var n,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollectionPath(t),a=l.readFileSync(n,"utf8"),o=JSON.parse(a),r.forEach(function(e){o.push(e)}),l.writeFileSync(n,JSON.stringify(o));case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=o()(i.a.mark(function e(t,r){var n,a,o,u,c,s,f,p,h,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getOrCreateCollectionPath(t),a=l.readFileSync(n,"utf8"),o=JSON.parse(a),u=!0,c=!0,s=!1,f=void 0,e.prev=7,p=o[Symbol.iterator]();case 9:if(c=(h=p.next()).done){e.next=17;break}if(d=h.value,u){e.next=13;break}return e.abrupt("break",17);case 13:u=r(d);case 14:c=!0,e.next=9;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),s=!0,f=e.t0;case 23:e.prev=23,e.prev=24,c||null==p.return||p.return();case 26:if(e.prev=26,!s){e.next=29;break}throw f;case 29:return e.finish(26);case 30:return e.finish(23);case 31:case"end":return e.stop()}},e,this,[[7,19,23,31],[24,,26,30]])}));return function(t,r){return e.apply(this,arguments)}}()},{key:"dropCollection",value:function(){var e=o()(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=this.getOrCreateCollectionPath(t),l.unlinkSync(r),delete this.collections[t];case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()}])});