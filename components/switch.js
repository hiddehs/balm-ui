!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="b1ia")}({"29s/":function(t,e,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),u=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),u=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?o((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function r(t,e,r){return t.concat(e).map(function(t){return n(t,r)})}function o(e,i,u){(u=u||{}).arrayMerge=u.arrayMerge||r,u.isMergeableObject=u.isMergeableObject||t;var c=Array.isArray(i),a=Array.isArray(e),f=c===a;return f?c?u.arrayMerge(e,i,u):function(t,e,r){var i={};return r.isMergeableObject(t)&&Object.keys(t).forEach(function(e){i[e]=n(t[e],r)}),Object.keys(e).forEach(function(u){r.isMergeableObject(e[u])&&t[u]?i[u]=o(t[u],e[u],r):i[u]=n(e[u],r)}),i}(e,i,u):n(i,u)}return o.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return o(t,n,e)},{})},o}()},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D8kY:function(t,e,n){var r=n("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},GQeE:function(t,e,n){t.exports={default:n("iq4v"),__esModule:!0}},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,c){var a,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,e){return a.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mqbl:function(t,e,n){var r=n("JB68"),o=n("w6GO");n("zn7N")("keys",function(){return function(t){return o(r(t))}})},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),o=n("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},VVlx:function(t,e,n){var r=n("29s/")("keys"),o=n("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,e,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},XCkH:function(t,e,n){"use strict";var r=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(r,"$1").toLowerCase()}},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),u=n("NegM"),c=n("B+OT"),a=function(t,e,n){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,b=t&a.B,g=t&a.W,h=d?o:o[e]||(o[e]={}),m=h.prototype,_=d?r:v?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(s=!p&&_&&void 0!==_[f])&&c(h,f)||(l=s?_[f]:n[f],h[f]=d&&"function"!=typeof _[f]?n[f]:b&&s?i(l,r):g&&_[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((h.virtual||(h.virtual={}))[f]=l,t&a.R&&m&&!m[f]&&u(m,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},b1ia:function(t,e,n){"use strict";n.r(e);var r=n("iri3"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-form-field",{attrs:{block:t.block,alignEnd:t.alignEnd}},[t._t("before"),t._v(" "),n("div",{staticClass:"mdc-switch"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.toggleValue,expression:"toggleValue"}],staticClass:"mdc-switch__native-control",attrs:{id:t.id,type:"checkbox",role:"switch",name:t.name,"true-value":t.trueValue,"false-value":t.falseValue,disabled:t.disabled},domProps:{checked:Array.isArray(t.toggleValue)?t._i(t.toggleValue,null)>-1:t._q(t.toggleValue,t.trueValue)},on:{change:[function(e){var n=t.toggleValue,r=e.target,o=r.checked?t.trueValue:t.falseValue;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.toggleValue=n.concat([null])):i>-1&&(t.toggleValue=n.slice(0,i).concat(n.slice(i+1)))}else t.toggleValue=o},t.handleChange]}},"input",t.attrs,!1)),t._v(" "),n("div",{staticClass:"mdc-switch__background"},[n("div",{staticClass:"mdc-switch__knob"})])]),t._v(" "),n("label",{attrs:{for:t.id}},[t._t("default",[t._v(t._s(t.label))])],2),t._v(" "),t._t("after")],2)};o._withStripped=!0;var i=n("ttWf"),u=n("y/Mp"),c=n("kX8e"),a={CHANGE:"change"},f={name:"ui-switch",components:{UiFormField:i.a},mixins:[u.a,c.a],model:{prop:"model",event:a.CHANGE},props:{model:{type:[Boolean,Number,String],default:!1},disabled:{type:Boolean,default:!1},id:String,name:String,trueValue:{type:[Boolean,Number,String],default:!0},falseValue:{type:[Boolean,Number,String],default:!1},label:String},data:function(){return{toggleValue:this.model}},watch:{model:function(t){this.toggleValue=t}},methods:{handleChange:function(){this.$emit(a.CHANGE,this.toggleValue)}}},s=n("KHd+"),l=Object(s.a)(f,o,[],!1,null,null,null);l.options.__file="src/scripts/components/input-controls/switch.vue";var p=l.exports;Object(r.a)(p);e.default=p},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},gVot:function(t,e,n){"use strict";var r=n("GQeE"),o=n.n(r),i=n("Aqzh"),u=n.n(i),c=n("XCkH");e.a=function(t,e){o()(e).forEach(function(n){if(void 0!==t.props[n]){var r=t.props[n].default;"object"!==Object(c.a)(r)?t.props[n].default=e[n]:t.props[n].default=u()(r,e[n])}})}},iq4v:function(t,e,n){n("Mqbl"),t.exports=n("WEpk").Object.keys},iri3:function(t,e,n){"use strict";var r=n("gVot");e.a=function(t){Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(t,e)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(t.name,t)}},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kX8e:function(t,e,n){"use strict";e.a={props:{attrs:Object}}},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},tEej:function(t,e,n){var r=n("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},ttWf:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[this._t("default")],2)};r._withStripped=!0;var o={name:"ui-form-field",mixins:[n("y/Mp").a],computed:{className:function(){return{"mdc-form-field":!this.noWrap,"mdc-form-field--block":this.block,"mdc-form-field--align-end":this.alignEnd}}}},i=n("KHd+"),u=Object(i.a)(o,r,[],!1,null,null,null);u.options.__file="src/scripts/components/input-controls/form-field.vue";e.a=u.exports},uOPS:function(t,e){t.exports=!0},w6GO:function(t,e,n){var r=n("5vMV"),o=n("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},"y/Mp":function(t,e,n){"use strict";e.a={props:{noWrap:{type:Boolean,default:!1},block:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1}}}},zn7N:function(t,e,n){var r=n("Y7ZC"),o=n("WEpk"),i=n("KUxP");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}}})});