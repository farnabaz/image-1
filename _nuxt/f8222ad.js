(window.webpackJsonp=window.webpackJsonp||[]).push([[43,23,39],{219:function(e,t,n){"use strict";n.r(t);let o;var r={name:"Dropdown",directives:{"click-away":{bind(e,t,n){o=o=>{o.stopPropagation(),e.contains(o.target)&&!o.target.href||n.context[t.value]()},document.addEventListener("click",o)},unbind(){document.removeEventListener("click",o)}}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open},close:function(){this.open=!1}}},l=n(33),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-away",rawName:"v-click-away",value:"close",expression:"'close'"}],staticClass:"relative inline-block text-left",on:{mouseenter:function(t){e.open=!0},mouseleave:function(t){e.open=!1},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.open=!1}}},[e._t("trigger",null,{toggle:e.toggle,open:e.open}),e._v(" "),n("transition",{attrs:{"enter-class":"transform opacity-0 scale-95","enter-active-class":"transition ease-out duration-100","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-to-class":"transform opacity-0 scale-95"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"mt-2 w-auto rounded-md shadow-lg z-50 origin-top-right absolute bottom-0 right-0"},[n("div",{staticClass:"rounded-md bg-white dark:bg-gray-800 shadow-xs"},[e._t("default")],2)])])],2)}),[],!1,null,null,null);t.default=component.exports},222:function(e,t,n){"use strict";n.r(t);var o=n(33),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}})])}),[],!1,null,null,null);t.default=component.exports},223:function(e,t,n){"use strict";n.r(t);var o={computed:{availableLocales:function(){var e=this;return this.$i18n.locales.filter((function(i){return i.code!==e.$i18n.locale}))}}},r=n(33),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.availableLocales.length?n("Dropdown",{staticClass:"inline-flex",scopedSlots:e._u([{key:"trigger",fn:function(e){var t=e.open,o=e.toggle;return[n("button",{staticClass:"text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none",class:{"text-primary-500 dark:text-primary-400":t},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),o(e)}}},[n("IconTranslate",{staticClass:"w-6 h-6"})],1)]}}],null,!1,897980124)},[e._v(" "),n("ul",{staticClass:"py-2"},e._l(e.availableLocales,(function(t){return n("li",{key:t.code},[e.$i18n.locale!==t.code?n("nuxt-link",{staticClass:"flex px-4 items-center hover:text-primary-500 dark:hover:text-primary-400 leading-7 whitespace-no-wrap",attrs:{to:e.switchLocalePath(t.code)}},[e._v(e._s(t.name))]):e._e()],1)})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconTranslate:n(222).default,Dropdown:n(219).default})}}]);