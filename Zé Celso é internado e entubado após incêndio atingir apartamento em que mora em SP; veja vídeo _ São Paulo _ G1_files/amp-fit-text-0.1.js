;
(self.AMP=self.AMP||[]).push({m:0,v:"2404021934000",n:"amp-fit-text",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var o,f=Object.prototype;function u(t){var n,i=parseFloat(t);return"number"==typeof(n=i)&&isFinite(n)?i:void 0}f.hasOwnProperty,f.toString;var c=["Webkit","webkit","Moz","moz","ms","O","o"];function l(t){var n=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return c.some((function(t){return n.startsWith(t+"-")}))?"-".concat(n):n}function a(t,n,i){if(n.startsWith("--"))return n;o||(o=Object.create(null));var r=o[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),f=function(t,n){for(var i=0;i<c.length;i++){var r=c[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[f]&&(r=f)}i||(o[n]=r)}return r}function s(t,n,i,r,e){var o=a(t.style,n,e);if(o){var f=r?i+r:i;t.style.setProperty(l(o),f)}}function m(t){return"".concat(t,"px")}var h=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function p(t,n,i,r,e){return e||(n?"�":r?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function v(t){return String(t).replace(h,p)}var d="i-amphtml-fit-text-measurer",x="i-amphtml-fit-text-content",b="i-amphtml-fit-text-content-wrapper";function y(t,n){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(n),function(t,n){for(var i=n.ownerDocument.createDocumentFragment(),r=t.firstChild;r;r=r.nextSibling)i.appendChild(r.cloneNode(!0));n.appendChild(i)}(t,n)}var w=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(c,t);var r,o,f=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(r);if(o){var f=i(this).constructor;t=Reflect.construct(n,arguments,f)}else t=n.apply(this,arguments);return e(this,t)});function c(t){var n;return(n=f.call(this,t)).d2=null,n.Het=null,n.Jd=null,n.$et=-1,n.Get=-1,n.Jet=null,n.Ket="",n}c.prerenderAllowed=function(){return!0};var h=c.prototype;return h.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},h.buildCallback=function(){var t=this,n=this.element,i=function(t){if(function(t){return t.hasAttribute("i-amphtml-ssr")}(t))return function(t){var n=t.querySelector(".".concat(v(x))),i=t.querySelector(".".concat(v(b))),r=t.querySelector(".".concat(v(d)));if(!n||!i||!r)throw new Error("Invalid server render");return{content:n,contentWrapper:i,measurer:r}}(t);var n=t.ownerDocument,i=n.createElement("div");!function(t,n){t.classList.add("i-amphtml-fill-content")}(i),i.classList.add(x);var r=n.createElement("div");r.classList.add(b),i.appendChild(r);var e=n.createElement("div");return e.classList.add(d),function(t){return function(t,n){for(var i=[],r=t.firstChild;r;r=r.nextSibling)f=void 0,u=void 0,"string"==typeof(o=e=r)?f=o:1==(null==(u=o)?void 0:u.nodeType)&&(f=o.tagName),!(f&&f.toLowerCase().startsWith("i-")||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&i.push(r);var e,o,f,u;return i}(t)}(t).forEach((function(t){return r.appendChild(t)})),y(r,e),t.appendChild(i),t.appendChild(e),{content:i,contentWrapper:r,measurer:e}}(n),r=i.content,e=i.contentWrapper,o=i.measurer;this.d2=r,this.Het=e,this.Jd=o,this.$et=u(n.getAttribute("min-font-size"))||6,this.Get=u(n.getAttribute("max-font-size"))||72,Object.defineProperty(this.element,"textContent",{set:function(n){t.Ket=n,t.mutateElement((function(){t.Het.textContent=n,t.Qet(),t.Zd()}))},get:function(){return t.Ket||t.Het.textContent}})},h.isRelayoutNeeded=function(){return!0},h.layoutCallback=function(){var t=this;if(this.win.ResizeObserver&&null===this.Jet){var n=new this.win.ResizeObserver(function(t,n,i){var r=0,e=null;function o(i){e=null,r=t.setTimeout(f,100),n.apply(null,i)}function f(){r=0,e&&o(e)}return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];r?e=n:o(n)}}(this.win,(function(){return t.mutateElement((function(){t.Qet(),t.Zd()}))})));n.observe(this.d2),n.observe(this.Jd),this.Jet=function(){n.disconnect()}}return this.mutateElement((function(){t.Zd(),function(t,n){var i=t.style;for(var r in n)i.setProperty(l(a(i,r)),String(n[r]),"important")}(t.d2,{visibility:"visible"})}))},h.unlayoutCallback=function(){null!==this.Jet&&(this.Jet(),this.Jet=null)},h.Qet=function(){y(this.Het,this.Jd)},h.Zd=function(){var t=this.d2.offsetHeight,n=this.d2.offsetWidth,i=function(t,n,i,r,e){for(e++;e-r>1;){var o=Math.floor((r+e)/2);s(t,"fontSize",m(o));var f=t.offsetHeight,u=t.offsetWidth;f>n||u>i?e=o:r=o}return r}(this.Jd,t,n,this.$et,this.Get);s(this.Het,"fontSize",m(i)),function(t,n,i,r){s(n,"fontSize",m(r));var e=n.offsetHeight>i,o=1.15*r,f=Math.floor(i/o);t.classList.toggle("i-amphtml-fit-text-content-overflown",e),function(t,n){for(var i in n)s(t,i,n[i])}(t,{lineClamp:e?f:"",maxHeight:e?m(o*f):""})}(this.Het,this.Jd,t,i)},c}(t.BaseElement);t.registerElement("amp-fit-text",w,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content{z-index:2!important;visibility:hidden!important}.i-amphtml-fit-text-content-wrapper{line-height:1.15em!important}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.i-amphtml-fit-text-measurer{position:absolute!important;top:0!important;left:0!important;z-index:1!important;visibility:hidden!important;line-height:1.15em!important}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-fit-text-0.1.js.map