// ==UserScript==
// @name        Udacity Student Notes
// @version     1.0.7
// @author      Candy Tsai <candy02058912@gmail.com>
// @description Keep notes about your students
// @match       *://hub.udacity.com/*
// @namespace   https://hub.udacity.com/
// ==/UserScript==


!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let a=!1;var r=()=>{null!==document.querySelector("#candy-notes")||(()=>{var e=["Volvo","Saab","Mercades","Audi"],t=document.createElement("select");t.id="mySelect",(a=document.createElement("option")).value="",a.text="Mentor useful links",a.disabled=!0,a.setAttribute("selected","selected"),t.appendChild(a);for(var n=0;n<e.length;n++){var a;(a=document.createElement("option")).value=e[n],a.text=e[n],t.appendChild(a)}const r=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("textarea"),l=document.createElement("button"),d=document.createElement("span"),s=document.querySelector(".participant-details_bodySegment__v46XI");d.append("Save"),d.classList.add("vds-button__content"),d.setAttribute("id","candy-save-text"),l.classList.add("vds-button","vds-button--primary"),l.setAttribute("style","margin-top: 1rem;"),l.setAttribute("id","candy-save"),l.append(d),c.setAttribute("id","candy-notes"),o.append("Notes"),r.append(o,c,l),s.prepend(t,r)})();const e=document.getElementById("candy-save"),t=document.getElementById("candy-save-text"),n=document.getElementById("candy-notes"),r=`candy:${window.location.pathname.split("/")[2]}`,o=localStorage.getItem(r);n.value=o,e.addEventListener("click",o=>{localStorage.setItem(r,n.value),e.classList.add("vds-button--secondary"),t.innerHTML="Saved",a=!0}),n.addEventListener("keyup",n=>{a&&(t.innerHTML="Save",e.classList.remove("vds-button--secondary"),a=!1)})};var o=()=>{const e=setInterval((function(){document.querySelector(".nanodegree-list-accordion_nanodegreeList__2z2nn")&&(clearInterval(e),r())}),1e3)};setInterval((function(){this.lastPathStr===location.pathname&&this.lastQueryStr===location.search&&this.lastHashStr===location.hash||(this.lastPathStr=location.pathname,this.lastQueryStr=location.search,this.lastHashStr=location.hash,o())}),100)}]);
