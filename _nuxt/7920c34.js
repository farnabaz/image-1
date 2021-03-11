(window.webpackJsonp=window.webpackJsonp||[]).push([[46,22,23,33,36,38,39,40,43],{219:function(t,e,r){"use strict";r.r(e);let n;var o={name:"Dropdown",directives:{"click-away":{bind(t,e,r){n=n=>{n.stopPropagation(),t.contains(n.target)&&!n.target.href||r.context[e.value]()},document.addEventListener("click",n)},unbind(){document.removeEventListener("click",n)}}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open},close:function(){this.open=!1}}},l=r(33),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"click-away",rawName:"v-click-away",value:"close",expression:"'close'"}],staticClass:"relative inline-block text-left",on:{mouseenter:function(e){t.open=!0},mouseleave:function(e){t.open=!1},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.open=!1}}},[t._t("trigger",null,{toggle:t.toggle,open:t.open}),t._v(" "),r("transition",{attrs:{"enter-class":"transform opacity-0 scale-95","enter-active-class":"transition ease-out duration-100","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-to-class":"transform opacity-0 scale-95"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"mt-2 w-auto rounded-md shadow-lg z-50 origin-top-right absolute bottom-0 right-0"},[r("div",{staticClass:"rounded-md bg-white dark:bg-gray-800 shadow-xs"},[t._t("default")],2)])])],2)}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},221:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}})])}),[],!1,null,null,null);e.default=component.exports},222:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}})])}),[],!1,null,null,null);e.default=component.exports},223:function(t,e,r){"use strict";r.r(e);var n={computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=r(33),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableLocales.length?r("Dropdown",{staticClass:"inline-flex",scopedSlots:t._u([{key:"trigger",fn:function(t){var e=t.open,n=t.toggle;return[r("button",{staticClass:"text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none",class:{"text-primary-500 dark:text-primary-400":e},on:{touchstart:function(t){return t.stopPropagation(),t.preventDefault(),n(t)}}},[r("IconTranslate",{staticClass:"w-6 h-6"})],1)]}}],null,!1,897980124)},[t._v(" "),r("ul",{staticClass:"py-2"},t._l(t.availableLocales,(function(e){return r("li",{key:e.code},[t.$i18n.locale!==e.code?r("nuxt-link",{staticClass:"flex px-4 items-center hover:text-primary-500 dark:hover:text-primary-400 leading-7 whitespace-no-wrap",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))]):t._e()],1)})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconTranslate:r(222).default,Dropdown:r(219).default})},224:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"inline-flex"},[r("button",{staticClass:"text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none",attrs:{"aria-label":"Color Mode"},on:{click:function(e){"dark"===t.$colorMode.value?t.$colorMode.preference="light":t.$colorMode.preference="dark"}}},[r("client-only",["light"===t.$colorMode.value?r("IconSun",{staticClass:"w-6 h-6"}):r("IconMoon",{staticClass:"w-6 h-6"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconSun:r(220).default,IconMoon:r(221).default})},225:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 16 16",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])}),[],!1,null,null,null);e.default=component.exports},226:function(t,e,r){"use strict";r.r(e);var n=r(33),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}})])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";var n=r(7),o=r(42),l=r(45),c=r(104),f=r(78),d=r(21),v=r(61).f,h=r(80).f,m=r(19).f,x=r(258).trim,y="Number",w=n.Number,k=w,_=w.prototype,C=l(r(79)(_))==y,O="trim"in String.prototype,I=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=O?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(C?d((function(){_.valueOf.call(r)})):l(r)!=y)?c(new k(I(e)),r,w):I(e)};for(var E,N=r(15)?v(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;N.length>j;j++)o(k,E=N[j])&&!o(w,E)&&m(w,E,h(k,E));w.prototype=_,_.constructor=w,r(22)(n,y,w)}},258:function(t,e,r){var n=r(10),o=r(46),l=r(21),c=r(259),f="["+c+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t,e,r){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?e(m):c[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},259:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},285:function(t,e,r){"use strict";r.r(e);r(23),r(13),r(9),r(5),r(20),r(257),r(34);var n=r(1),o=r(31);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:c(c({},Object(o.b)(["settings","repositoryUrl","lastRelease"])),{},{menu:{get:function(){return this.$store.state.menu.open},set:function(t){this.$store.commit("menu/toggle",t)}},categories:function(){return this.$store.state.categories[this.$i18n.locale]}}),methods:{isCategoryActive:function(t){var e=this;return t.some((function(t){return e.isLinkActive(t)}))},isLinkActive:function(t){return(this.$route.path.replace(/\/+$/,"")||"/")===this.localePath(t.to)},isDocumentNew:function(t){if(t.version&&!(t.version<=0)){var e=localStorage.getItem("document-".concat(t.slug,"-version"));return t.version>Number(e)}}}},d=r(33),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"fixed inset-0 z-40 flex-none w-full h-full bg-black bg-opacity-25 lg:bg-white lg:dark:bg-gray-900 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block",class:{hidden:!t.menu},on:{click:function(e){t.menu=!1}}},[r("div",{staticClass:"h-full mr-24 overflow-hidden overflow-y-auto bg-white lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-18 dark:bg-gray-900 lg:mr-0"},[r("div",{staticClass:"absolute inset-x-0 z-10 hidden h-12 pointer-events-none lg:block bg-gradient-to-b from-white dark:from-gray-900"}),t._v(" "),r("nav",{staticClass:"px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 lg:h-(screen-18)"},[t.settings.algolia||t.lastRelease?r("ul",{staticClass:"mb-8 space-y-8 lg:hidden"},[t.settings.algolia?r("li",[r("AlgoliaSearchBox",{attrs:{options:t.settings.algolia,settings:t.settings}})],1):t._e(),t._v(" "),t.lastRelease?r("li",[r("NuxtLink",{staticClass:"px-3 py-2 font-medium text-gray-400 transition duration-200 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",attrs:{to:"/releases","exact-active-class":"text-primary-500 dark:text-primary-400"}},[t._v(t._s(t.lastRelease.name))])],1):t._e()]):t._e(),t._v(" "),r("ul",{staticClass:"space-y-8"},[t._l(t.categories,(function(e,n){return r("li",{key:n,class:{active:t.isCategoryActive(e)}},[n?r("h5",{staticClass:"px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs dark:text-gray-100"},[t._v(t._s(n))]):t._e(),t._v(" "),r("ul",t._l(e,(function(e){return r("li",{key:e.slug},[r("NuxtLink",{staticClass:"relative block px-3 py-2 transition duration-200 rounded-md hover:text-gray-900 dark:hover:text-gray-100",class:{"text-primary-500 dark:text-primary-400 hover:text-primary-500 bg-primary-50 dark:bg-primary-900 dark:hover:text-primary-400":t.isLinkActive(e)},attrs:{to:t.localePath(e.to)}},[t._v("\n                "+t._s(e.menuTitle||e.title)+"\n\n                "),r("client-only",[t.isDocumentNew(e)?r("span",{staticClass:"w-2 h-2 rounded-full opacity-75 animate-pulse bg-primary-500"}):t._e()])],1)],1)})),0)])})),t._v(" "),r("li",{staticClass:"lg:hidden"},[r("h5",{staticClass:"px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs dark:text-gray-100"},[t._v("More")]),t._v(" "),r("div",{staticClass:"flex items-center px-3 py-2 space-x-4"},[t.settings.twitter?r("a",{staticClass:"text-gray-400 transition duration-200 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",attrs:{href:"https://twitter.com/"+t.settings.twitter,target:"_blank",rel:"noopener noreferrer",title:"Twitter",name:"Twitter"}},[r("IconTwitter",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),t.settings.github.repo?r("a",{staticClass:"text-gray-400 transition duration-200 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",attrs:{href:t.repositoryUrl,target:"_blank",rel:"noopener noreferrer",title:"Github",name:"Github"}},[r("IconGithub",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),r("LangSwitcher"),t._v(" "),r("ColorSwitcher")],1)])],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconTwitter:r(226).default,IconGithub:r(225).default,LangSwitcher:r(223).default,ColorSwitcher:r(224).default})}}]);