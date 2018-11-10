!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s});var n=r(5),a=r.n(n);function i(e){var t=e;if(e&&"object"===a()(e))for(var r in t="[object Array]"===Object.prototype.toString.call(e)?[]:{},e)t[r]=i(e[r]);return t}function s(e){var t=(new Date).getTime();return"".concat(e).concat(t.toString(36)).concat(Math.random().toString(36))}},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/typeof")},,function(e,t,r){"use strict";var n=r(9),a=t.ValidationError=function(e,t,r,n,a,i){n&&(this.property=n),e&&(this.message=e),r&&(r.id?this.schema=r.id:this.schema=r),t&&(this.instance=t),this.name=a,this.argument=i,this.stack=this.toString()};a.prototype.toString=function(){return this.property+" "+this.message};var i=t.ValidatorResult=function(e,t,r,n){this.instance=e,this.schema=t,this.propertyPath=n.propertyPath,this.errors=[],this.throwError=r&&r.throwError,this.disableFormat=r&&!0===r.disableFormat};function s(e,t){return t+": "+e.toString()+"\n"}i.prototype.addError=function(e){var t;if("string"==typeof e)t=new a(e,this.instance,this.schema,this.propertyPath);else{if(!e)throw new Error("Missing error detail");if(!e.message)throw new Error("Missing error message");if(!e.name)throw new Error("Missing validator type");t=new a(e.message,this.instance,this.schema,this.propertyPath,e.name,e.argument)}if(this.throwError)throw t;return this.errors.push(t),t},i.prototype.importErrors=function(e){"string"==typeof e||e&&e.validatorType?this.addError(e):e&&e.errors&&Array.prototype.push.apply(this.errors,e.errors)},i.prototype.toString=function(e){return this.errors.map(s).join("")},Object.defineProperty(i.prototype,"valid",{get:function(){return!this.errors.length}});var o=t.SchemaError=function e(t,r){this.message=t,this.schema=r,Error.call(this,t),Error.captureStackTrace(this,e)};o.prototype=Object.create(Error.prototype,{constructor:{value:o,enumerable:!1},name:{value:"SchemaError",enumerable:!1}});var u=t.SchemaContext=function(e,t,r,n,a){this.schema=e,this.options=t,this.propertyPath=r,this.base=n,this.schemas=a};u.prototype.resolve=function(e){return n.resolve(this.base,e)},u.prototype.makeChild=function(e,t){var r=void 0===t?this.propertyPath:this.propertyPath+f(t),a=n.resolve(this.base,e.id||""),i=new u(e,this.options,r,a,Object.create(this.schemas));return e.id&&!i.schemas[a]&&(i.schemas[a]=e),i};var c=t.FORMAT_REGEXPS={"date-time":/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,date:/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,time:/^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,email:/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,"ip-address":/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,ipv6:/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,uri:/^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,color:/^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,hostname:/^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,"host-name":/^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"utc-millisec":function(e){return"string"==typeof e&&parseFloat(e)===parseInt(e,10)&&!isNaN(e)},regex:function(e){var t=!0;try{new RegExp(e)}catch(e){t=!1}return t},style:/\s*(.+?):\s*([^;]+);?/g,phone:/^\+(?:[0-9] ?){6,14}[0-9]$/};c.regexp=c.regex,c.pattern=c.regex,c.ipv4=c["ip-address"],t.isFormat=function(e,t,r){if("string"==typeof e&&void 0!==c[t]){if(c[t]instanceof RegExp)return c[t].test(e);if("function"==typeof c[t])return c[t](e)}else if(r&&r.customFormats&&"function"==typeof r.customFormats[t])return r.customFormats[t](e);return!0};var f=t.makeSuffix=function(e){return(e=e.toString()).match(/[.\s\[\]]/)||e.match(/^[\d]/)?e.match(/^\d+$/)?"["+e+"]":"["+JSON.stringify(e)+"]":"."+e};function p(e,t){var r=Array.isArray(t),n=r&&[]||{};return r?(e=e||[],n=n.concat(e),t.forEach(function(e,t,r,n){"object"==typeof r?t[n]=p(e[n],r):-1===e.indexOf(r)&&t.push(r)}.bind(null,e,n))):(e&&"object"==typeof e&&Object.keys(e).forEach(function(e,t,r){t[r]=e[r]}.bind(null,e,n)),Object.keys(t).forEach(function(e,t,r,n){"object"==typeof t[n]&&t[n]&&e[n]?r[n]=p(e[n],t[n]):r[n]=t[n]}.bind(null,e,t,n))),n}function m(e){return"/"+encodeURIComponent(e).replace(/~/g,"%7E")}t.deepCompareStrict=function e(t,r){if(typeof t!=typeof r)return!1;if(t instanceof Array)return r instanceof Array&&(t.length===r.length&&t.every(function(n,a){return e(t[a],r[a])}));if("object"==typeof t){if(!t||!r)return t===r;var n=Object.keys(t),a=Object.keys(r);return n.length===a.length&&n.every(function(n){return e(t[n],r[n])})}return t===r},e.exports.deepMerge=p,t.objectGetPath=function(e,t){for(var r,n=t.split("/").slice(1);"string"==typeof(r=n.shift());){var a=decodeURIComponent(r.replace(/~0/,"~").replace(/~1/g,"/"));if(!(a in e))return;e=e[a]}return e},t.encodePath=function(e){return e.map(m).join("")},t.getDecimalPlaces=function(e){var t=0;if(isNaN(e))return t;"number"!=typeof e&&(e=Number(e));var r=e.toString().split("e");if(2===r.length){if("-"!==r[1][0])return t;t=Number(r[1].slice(1))}var n=r[0].split(".");return 2===n.length&&(t+=n[1].length),t}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return m});var n=r(0),a=r.n(n),i=r(1),s=r.n(i),o=r(3),u=r.n(o),c=r(4),f=r.n(c),p=r(2),m=function(){function e(){u()(this,e),this.collections={}}return f()(e,[{key:"getOrCreateCollection",value:function(e){return this.collections[e]||(this.collections[e]={}),this.collections[e]}},{key:"getJson",value:function(){var e=s()(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getOrCreateCollection(t),e.abrupt("return",Object(p.a)(r));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setItems",value:function(){var e=s()(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getOrCreateCollection(t),r.forEach(function(e){n[e._id]=e}),e.abrupt("return",Object(p.a)(r));case 3:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"removeItems",value:function(){var e=s()(a.a.mark(function e(t,r){var n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getOrCreateCollection(t),i=[],r.forEach(function(e){var t=n[e];t&&i.push(Object(p.a)(t)),delete n[e]}),e.abrupt("return",i);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"dropCollection",value:function(){var e=s()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:delete this.collections[t];case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()},function(e,t){e.exports=require("url")},function(e,t,r){var n=r(9),a=r(7);function i(e,t){this.id=e,this.ref=t}e.exports.SchemaScanResult=i,e.exports.scan=function(e,t){function r(e,t){if(t&&"object"==typeof t)if(t.$ref){var i=n.resolve(e,t.$ref);c[i]=c[i]?c[i]+1:0}else{var f=t.id?n.resolve(e,t.id):e;if(f){if(f.indexOf("#")<0&&(f+="#"),u[f]){if(!a.deepCompareStrict(u[f],t))throw new Error("Schema <"+t+"> already exists with different definition");return u[f]}u[f]=t,"#"==f[f.length-1]&&(u[f.substring(0,f.length-1)]=t)}s(f+"/items",t.items instanceof Array?t.items:[t.items]),s(f+"/extends",t.extends instanceof Array?t.extends:[t.extends]),r(f+"/additionalItems",t.additionalItems),o(f+"/properties",t.properties),r(f+"/additionalProperties",t.additionalProperties),o(f+"/definitions",t.definitions),o(f+"/patternProperties",t.patternProperties),o(f+"/dependencies",t.dependencies),s(f+"/disallow",t.disallow),s(f+"/allOf",t.allOf),s(f+"/anyOf",t.anyOf),s(f+"/oneOf",t.oneOf),r(f+"/not",t.not)}}function s(e,t){if(t instanceof Array)for(var n=0;n<t.length;n++)r(e+"/"+n,t[n])}function o(e,t){if(t&&"object"==typeof t)for(var n in t)r(e+"/"+n,t[n])}var u={},c={};return r(e,t),new i(u,c)}},function(e,t,r){"use strict";var n=e.exports.Validator=r(13);e.exports.ValidatorResult=r(7).ValidatorResult,e.exports.ValidationError=r(7).ValidationError,e.exports.SchemaError=r(7).SchemaError,e.exports.SchemaScanResult=r(10).SchemaScanResult,e.exports.scan=r(10).scan,e.exports.validate=function(e,t,r){return(new n).validate(e,t,r)}},,function(e,t,r){"use strict";var n=r(9),a=r(14),i=r(7),s=r(10).scan,o=i.ValidatorResult,u=i.SchemaError,c=i.SchemaContext,f=function e(){this.customFormats=Object.create(e.prototype.customFormats),this.schemas={},this.unresolvedRefs=[],this.types=Object.create(m),this.attributes=Object.create(a.validators)};function p(e){var t="string"==typeof e?e:e.$ref;return"string"==typeof t&&t}f.prototype.customFormats={},f.prototype.schemas=null,f.prototype.types=null,f.prototype.attributes=null,f.prototype.unresolvedRefs=null,f.prototype.addSchema=function(e,t){var r=this;if(!e)return null;var n=s(t||"/",e),a=t||e.id;for(var i in n.id)this.schemas[i]=n.id[i];for(var i in n.ref)this.unresolvedRefs.push(i);return this.unresolvedRefs=this.unresolvedRefs.filter(function(e){return void 0===r.schemas[e]}),this.schemas[a]},f.prototype.addSubSchemaArray=function(e,t){if(t instanceof Array)for(var r=0;r<t.length;r++)this.addSubSchema(e,t[r])},f.prototype.addSubSchemaObject=function(e,t){if(t&&"object"==typeof t)for(var r in t)this.addSubSchema(e,t[r])},f.prototype.setSchemas=function(e){this.schemas=e},f.prototype.getSchema=function(e){return this.schemas[e]},f.prototype.validate=function(e,t,r,a){r||(r={});var i=r.propertyName||"instance",o=n.resolve(r.base||"/",t.id||"");if(!a){(a=new c(t,r,i,o,Object.create(this.schemas))).schemas[o]||(a.schemas[o]=t);var f=s(o,t);for(var p in f.id){var m=f.id[p];a.schemas[p]=m}}if(t){var d=this.validateSchema(e,t,r,a);if(!d)throw new Error("Result undefined");return d}throw new u("no schema specified",t)},f.prototype.validateSchema=function(e,t,r,n){var s,f=new o(e,t,r,n);if("boolean"==typeof t)!0===t?t={}:!1===t&&(t={type:[]});else if(!t)throw new Error("schema is undefined");if(t.extends)if(t.extends instanceof Array){var m={schema:t,ctx:n};t.extends.forEach(this.schemaTraverser.bind(this,m)),t=m.schema,m.schema=null,m.ctx=null,m=null}else t=i.deepMerge(t,this.superResolve(t.extends,n));if(s=p(t)){var d=this.resolve(t,s,n),h=new c(d.subschema,r,n.propertyPath,d.switchSchema,n.schemas);return this.validateSchema(e,d.subschema,r,h)}var l=r&&r.skipAttributes||[];for(var v in t)if(!a.ignoreProperties[v]&&l.indexOf(v)<0){var y=null,g=this.attributes[v];if(g)y=g.call(this,e,t,r,n);else if(!1===r.allowUnknownAttributes)throw new u("Unsupported attribute: "+v,t);y&&f.importErrors(y)}if("function"==typeof r.rewrite){var b=r.rewrite.call(this,e,t,r,n);f.instance=b}return f},f.prototype.schemaTraverser=function(e,t){e.schema=i.deepMerge(e.schema,this.superResolve(t,e.ctx))},f.prototype.superResolve=function(e,t){var r;return(r=p(e))?this.resolve(e,r,t).subschema:e},f.prototype.resolve=function(e,t,r){if(t=r.resolve(t),r.schemas[t])return{subschema:r.schemas[t],switchSchema:t};var a=n.parse(t),s=a&&a.hash,o=s&&s.length&&t.substr(0,t.length-s.length);if(!o||!r.schemas[o])throw new u("no such schema <"+t+">",e);var c=i.objectGetPath(r.schemas[o],s.substr(1));if(void 0===c)throw new u("no such schema "+s+" located in <"+o+">",e);return{subschema:c,switchSchema:t}},f.prototype.testType=function(e,t,r,n,a){if("function"==typeof this.types[a])return this.types[a].call(this,e);if(a&&"object"==typeof a){var i=this.validateSchema(e,a,r,n);return void 0===i||!(i&&i.errors.length)}return!0};var m=f.prototype.types={};m.string=function(e){return"string"==typeof e},m.number=function(e){return"number"==typeof e&&isFinite(e)},m.integer=function(e){return"number"==typeof e&&e%1==0},m.boolean=function(e){return"boolean"==typeof e},m.array=function(e){return Array.isArray(e)},m.null=function(e){return null===e},m.date=function(e){return e instanceof Date},m.any=function(e){return!0},m.object=function(e){return e&&"object"==typeof e&&!(e instanceof Array)&&!(e instanceof Date)},e.exports=f},function(e,t,r){"use strict";var n=r(7),a=n.ValidatorResult,i=n.SchemaError,s={ignoreProperties:{id:!0,default:!0,description:!0,title:!0,exclusiveMinimum:!0,exclusiveMaximum:!0,additionalItems:!0,$schema:!0,$ref:!0,extends:!0}},o=s.validators={};function u(e,t,r,n,a){var i=t.throwError;t.throwError=!1;var s=this.validateSchema(e,a,t,r);return t.throwError=i,!s.valid&&n instanceof Function&&n(s),s.valid}function c(e,t,r,n,a,i){if(this.types.object(e)&&(!t.properties||void 0===t.properties[a]))if(!1===t.additionalProperties)i.addError({name:"additionalProperties",argument:a,message:"additionalProperty "+JSON.stringify(a)+" exists in instance when not allowed"});else{var s=t.additionalProperties||{};"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,a,s,r,n);var o=this.validateSchema(e[a],s,r,n.makeChild(s,a));o.instance!==i.instance[a]&&(i.instance[a]=o.instance),i.importErrors(o)}}o.type=function(e,t,r,n){if(void 0===e)return null;var i=new a(e,t,r,n),s=Array.isArray(t.type)?t.type:[t.type];if(!s.some(this.testType.bind(this,e,t,r,n))){var o=s.map(function(e){return e.id&&"<"+e.id+">"||e+""});i.addError({name:"type",argument:o,message:"is not of a type(s) "+o})}return i},o.anyOf=function(e,t,r,n){if(void 0===e)return null;var s=new a(e,t,r,n),o=new a(e,t,r,n);if(!Array.isArray(t.anyOf))throw new i("anyOf must be an array");if(!t.anyOf.some(u.bind(this,e,r,n,function(e){o.importErrors(e)}))){var c=t.anyOf.map(function(e,t){return e.id&&"<"+e.id+">"||e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+t+"]"});r.nestedErrors&&s.importErrors(o),s.addError({name:"anyOf",argument:c,message:"is not any of "+c.join(",")})}return s},o.allOf=function(e,t,r,n){if(void 0===e)return null;if(!Array.isArray(t.allOf))throw new i("allOf must be an array");var s=new a(e,t,r,n),o=this;return t.allOf.forEach(function(t,a){var i=o.validateSchema(e,t,r,n);if(!i.valid){var u=t.id&&"<"+t.id+">"||t.title&&JSON.stringify(t.title)||t.$ref&&"<"+t.$ref+">"||"[subschema "+a+"]";s.addError({name:"allOf",argument:{id:u,length:i.errors.length,valid:i},message:"does not match allOf schema "+u+" with "+i.errors.length+" error[s]:"}),s.importErrors(i)}}),s},o.oneOf=function(e,t,r,n){if(void 0===e)return null;if(!Array.isArray(t.oneOf))throw new i("oneOf must be an array");var s=new a(e,t,r,n),o=new a(e,t,r,n),c=t.oneOf.filter(u.bind(this,e,r,n,function(e){o.importErrors(e)})).length,f=t.oneOf.map(function(e,t){return e.id&&"<"+e.id+">"||e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+t+"]"});return 1!==c&&(r.nestedErrors&&s.importErrors(o),s.addError({name:"oneOf",argument:f,message:"is not exactly one from "+f.join(",")})),s},o.properties=function(e,t,r,n){if(this.types.object(e)){var i=new a(e,t,r,n),s=t.properties||{};for(var o in s){"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,o,s[o],r,n);var u=Object.hasOwnProperty.call(e,o)?e[o]:void 0,c=this.validateSchema(u,s[o],r,n.makeChild(s[o],o));c.instance!==i.instance[o]&&(i.instance[o]=c.instance),i.importErrors(c)}return i}},o.patternProperties=function(e,t,r,n){if(this.types.object(e)){var i=new a(e,t,r,n),s=t.patternProperties||{};for(var o in e){var u=!0;for(var f in s){if(new RegExp(f).test(o)){u=!1,"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,o,s[f],r,n);var p=this.validateSchema(e[o],s[f],r,n.makeChild(s[f],o));p.instance!==i.instance[o]&&(i.instance[o]=p.instance),i.importErrors(p)}}u&&c.call(this,e,t,r,n,o,i)}return i}},o.additionalProperties=function(e,t,r,n){if(this.types.object(e)){if(t.patternProperties)return null;var i=new a(e,t,r,n);for(var s in e)c.call(this,e,t,r,n,s,i);return i}},o.minProperties=function(e,t,r,n){if(this.types.object(e)){var i=new a(e,t,r,n);return Object.keys(e).length>=t.minProperties||i.addError({name:"minProperties",argument:t.minProperties,message:"does not meet minimum property length of "+t.minProperties}),i}},o.maxProperties=function(e,t,r,n){if(this.types.object(e)){var i=new a(e,t,r,n);return Object.keys(e).length<=t.maxProperties||i.addError({name:"maxProperties",argument:t.maxProperties,message:"does not meet maximum property length of "+t.maxProperties}),i}},o.items=function(e,t,r,n){var i=this;if(this.types.array(e)&&t.items){var s=new a(e,t,r,n);return e.every(function(e,a){var o=Array.isArray(t.items)?t.items[a]||t.additionalItems:t.items;if(void 0===o)return!0;if(!1===o)return s.addError({name:"items",message:"additionalItems not permitted"}),!1;var u=i.validateSchema(e,o,r,n.makeChild(o,a));return u.instance!==s.instance[a]&&(s.instance[a]=u.instance),s.importErrors(u),!0}),s}},o.minimum=function(e,t,r,n){if(this.types.number(e)){var i=new a(e,t,r,n);return(t.exclusiveMinimum&&!0===t.exclusiveMinimum?e>t.minimum:e>=t.minimum)||i.addError({name:"minimum",argument:t.minimum,message:"must have a minimum value of "+t.minimum}),i}},o.maximum=function(e,t,r,n){if(this.types.number(e)){var i=new a(e,t,r,n);return(t.exclusiveMaximum&&!0===t.exclusiveMaximum?e<t.maximum:e<=t.maximum)||i.addError({name:"maximum",argument:t.maximum,message:"must have a maximum value of "+t.maximum}),i}};var f=function(e,t,r,s,o,u){if(this.types.number(e)){var c=t[o];if(0==c)throw new i(o+" cannot be zero");var f=new a(e,t,r,s),p=n.getDecimalPlaces(e),m=n.getDecimalPlaces(c),d=Math.max(p,m),h=Math.pow(10,d);return Math.round(e*h)%Math.round(c*h)!=0&&f.addError({name:o,argument:c,message:u+JSON.stringify(c)}),f}};function p(e,t,r){var a,i=r.length;for(a=t+1;a<i;a++)if(n.deepCompareStrict(e,r[a]))return!1;return!0}o.multipleOf=function(e,t,r,n){return f.call(this,e,t,r,n,"multipleOf","is not a multiple of (divisible by) ")},o.divisibleBy=function(e,t,r,n){return f.call(this,e,t,r,n,"divisibleBy","is not divisible by (multiple of) ")},o.required=function(e,t,r,n){var i=new a(e,t,r,n);return void 0===e&&!0===t.required?i.addError({name:"required",message:"is required"}):this.types.object(e)&&Array.isArray(t.required)&&t.required.forEach(function(t){void 0===e[t]&&i.addError({name:"required",argument:t,message:"requires property "+JSON.stringify(t)})}),i},o.pattern=function(e,t,r,n){if(this.types.string(e)){var i=new a(e,t,r,n);return e.match(t.pattern)||i.addError({name:"pattern",argument:t.pattern,message:"does not match pattern "+JSON.stringify(t.pattern)}),i}},o.format=function(e,t,r,i){if(void 0!==e){var s=new a(e,t,r,i);return s.disableFormat||n.isFormat(e,t.format,this)||s.addError({name:"format",argument:t.format,message:"does not conform to the "+JSON.stringify(t.format)+" format"}),s}},o.minLength=function(e,t,r,n){if(this.types.string(e)){var i=new a(e,t,r,n),s=e.match(/[\uDC00-\uDFFF]/g);return e.length-(s?s.length:0)>=t.minLength||i.addError({name:"minLength",argument:t.minLength,message:"does not meet minimum length of "+t.minLength}),i}},o.maxLength=function(e,t,r,n){if(this.types.string(e)){var i=new a(e,t,r,n),s=e.match(/[\uDC00-\uDFFF]/g);return e.length-(s?s.length:0)<=t.maxLength||i.addError({name:"maxLength",argument:t.maxLength,message:"does not meet maximum length of "+t.maxLength}),i}},o.minItems=function(e,t,r,n){if(this.types.array(e)){var i=new a(e,t,r,n);return e.length>=t.minItems||i.addError({name:"minItems",argument:t.minItems,message:"does not meet minimum length of "+t.minItems}),i}},o.maxItems=function(e,t,r,n){if(this.types.array(e)){var i=new a(e,t,r,n);return e.length<=t.maxItems||i.addError({name:"maxItems",argument:t.maxItems,message:"does not meet maximum length of "+t.maxItems}),i}},o.uniqueItems=function(e,t,r,i){if(this.types.array(e)){var s=new a(e,t,r,i);return e.every(function(e,t,r){for(var a=t+1;a<r.length;a++)if(n.deepCompareStrict(e,r[a]))return!1;return!0})||s.addError({name:"uniqueItems",message:"contains duplicate item"}),s}},o.uniqueItems=function(e,t,r,n){if(this.types.array(e)){var i=new a(e,t,r,n);return e.every(p)||i.addError({name:"uniqueItems",message:"contains duplicate item"}),i}},o.dependencies=function(e,t,r,n){if(this.types.object(e)){var i=new a(e,t,r,n);for(var s in t.dependencies)if(void 0!==e[s]){var o=t.dependencies[s],u=n.makeChild(o,s);if("string"==typeof o&&(o=[o]),Array.isArray(o))o.forEach(function(t){void 0===e[t]&&i.addError({name:"dependencies",argument:u.propertyPath,message:"property "+t+" not found, required by "+u.propertyPath})});else{var c=this.validateSchema(e,o,r,u);i.instance!==c.instance&&(i.instance=c.instance),c&&c.errors.length&&(i.addError({name:"dependencies",argument:u.propertyPath,message:"does not meet dependency required by "+u.propertyPath}),i.importErrors(c))}}return i}},o.enum=function(e,t,r,s){if(void 0===e)return null;if(!Array.isArray(t.enum))throw new i("enum expects an array",t);var o=new a(e,t,r,s);return t.enum.some(n.deepCompareStrict.bind(null,e))||o.addError({name:"enum",argument:t.enum,message:"is not one of enum values: "+t.enum.map(String).join(",")}),o},o.const=function(e,t,r,i){if(void 0===e)return null;var s=new a(e,t,r,i);return n.deepCompareStrict(t.const,e)||s.addError({name:"const",argument:t.const,message:"does not exactly match expected constant: "+t.const}),s},o.not=o.disallow=function(e,t,r,n){var i=this;if(void 0===e)return null;var s=new a(e,t,r,n),o=t.not||t.disallow;return o?(Array.isArray(o)||(o=[o]),o.forEach(function(a){if(i.testType(e,t,r,n,a)){var o=a&&a.id&&"<"+a.id+">"||a;s.addError({name:"not",argument:o,message:"is of prohibited type "+o})}}),s):null},e.exports=s},,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(1),s=r.n(i),o=r(3),u=r.n(o),c=r(4),f=r.n(c),p=r(2),m=r(11),d=function(){function e(t,r,n){u()(this,e),this.name=t,this.adapter=r,this.schema=n,this.validator=new m.Validator}return f()(e,[{key:"validate",value:function(e){this.schema&&this.validator.validate(e,this.schema,{throwError:!0})}},{key:"insert",value:function(){var e=s()(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.validate(t),r=Object(p.b)(this.name),n=Object.assign(Object(p.a)(t),{_id:r}),e.next=5,this.adapter.setItems(this.name,[n]);case 5:return e.abrupt("return",e.sent[0]);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"insertMany",value:function(){var e=s()(a.a.mark(function e(t){var r,n,i,s,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n in r=[],t)i=t[n],this.validate(i),s=Object(p.b)(this.name),o=Object.assign(Object(p.a)(i),{_id:s}),r.push(o);return e.next=4,this.adapter.setItems(this.name,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"find",value:function(){var e=s()(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.getJson(this.name);case 2:return r=e.sent,e.abrupt("return",r[t]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findMany",value:function(){var e=s()(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.getJson(this.name);case 2:return r=e.sent,n=[],t.forEach(function(e){var t=r[e];t&&n.push(t)}),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findAll",value:function(){var e=s()(a.a.mark(function e(){var t,r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.getJson(this.name);case 2:for(n in t=e.sent,r=[],t)r.push(t[n]);return e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"findBy",value:function(){var e=s()(a.a.mark(function e(t){var r,n,i,s,o,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.getJson(this.name);case 2:r=e.sent,n=[],e.t0=a.a.keys(r);case 5:if((e.t1=e.t0()).done){e.next=20;break}i=e.t1.value,s=r[i],o=!0,e.t2=a.a.keys(t);case 10:if((e.t3=e.t2()).done){e.next=17;break}if(u=e.t3.value,s[u]===t[u]){e.next=15;break}return o=!1,e.abrupt("break",17);case 15:e.next=10;break;case 17:o&&n.push(s),e.next=5;break;case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=s()(a.a.mark(function e(t,r){var n,i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.validate(r),e.next=3,this.find(t);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",void 0);case 6:return i=Object.assign(Object(p.a)(r),{_id:n._id}),e.next=9,this.adapter.setItems(this.name,[i]);case 9:return s=e.sent,e.abrupt("return",s.length>0?s[0]:void 0);case 11:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=s()(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.removeItems(this.name,[t]);case 2:return r=e.sent,e.abrupt("return",r.length>0?r[0]:void 0);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"removeMany",value:function(){var e=s()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.removeItems(this.name,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"size",value:function(){var e=s()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.getJson(this.name);case 2:return t=e.sent,e.abrupt("return",Object.keys(t).length);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),h=function(){function e(t){u()(this,e),this.adapter=t}return f()(e,[{key:"collection",value:function(e,t){var r=t?{type:"object",properties:t}:void 0;return new d(e,this.adapter,r)}},{key:"drop",value:function(){var e=s()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.adapter.dropCollection(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),l=r(8);function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.default;return new h(e)}r.d(t,"default",function(){return v})}])});