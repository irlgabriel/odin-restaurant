!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){(()=>{const e=document.querySelector(".content"),n=document.createElement("div");e.appendChild(n),n.classList.add("top");const t=document.createElement("nav");n.appendChild(t);let r=document.createElement("p");r.innerHTML="Contact",t.appendChild(r),r.innerHTML="Menu",t.appendChild(r),r.innerHTML="Career",t.appendChild(r),r.innerHTML="Locations",t.appendChild(r),r.innerHTML="Reservations",t.appendChild(r);const o=document.createElement("div");o.classList.add("top-hero"),n.appendChild(o);let d=document.createElement("p");d.innerHTML="Odin Restaurant - Best Meals in Town",o.appendChild(d),d.innerHTML="Come See for Yourself",o.appendChild(d);const i=document.createElement("div");i.classList.add("bottom");for(let e=1;e<=3;e++){const n=document.createElement("div");n.classList.add("flex-box-"+e),n.appendChild(document.createElement("section").classList.add("bottom-hero"))}e.appendChild(i)})()}]);