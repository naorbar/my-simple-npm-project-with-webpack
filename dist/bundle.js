!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var n,o="";e.exports=function(e,r){if("string"!=typeof e)throw new TypeError("expected a string");if(1===r)return e;if(2===r)return e+e;var t=e.length*r;if(n!==e||void 0===n)n=e,o="";else if(o.length>=t)return o.substr(0,t);for(;t>o.length&&r>1;)1&r&&(o+=e),r>>=1,e+=e;return o=(o+=e).substr(0,t)}},function(e,r,t){var n=t(0);console.log(n("hey",100)),document.write(n("hey",10))}]);