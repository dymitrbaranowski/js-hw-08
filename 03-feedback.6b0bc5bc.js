!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function S(){var e=p();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(S,t),y(c)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var h,O=document.querySelector(".feedback-form"),S=document.querySelector('input[name="email"]'),T=document.querySelector('textarea[name="message"]'),w="feedback-form-state",x={};O.addEventListener("submit",e(t)((function(e){e.preventDefault(),console.log({email:S.value,message:T.value}),e.currentTarget.reset()}),200)),O.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(x))}),200)),(h=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(w))&&(S.value=h.email,T.value=h.message)}();
//# sourceMappingURL=03-feedback.6b0bc5bc.js.map