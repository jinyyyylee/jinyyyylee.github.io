(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57826,(e,t,r)=>{},98101,(e,t,r)=>{var a=e.i(7490);e.r(57826);var n=e.r(74101),s=n&&"object"==typeof n&&"default"in n?n:{default:n},i=void 0!==a.default&&a.default.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,a=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,s=void 0===n?i:n;d(l(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",d("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(d(l(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var r="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(a){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];d(a,"old rule at index `"+e+"` not found"),a.textContent=t}return e},r.deleteRule=function(e){if("undefined"==typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&d(l(t),"makeStyleTag accepts only strings as second parameter");var a=document.createElement("style");this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+e,""),t&&a.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(a,r):n.appendChild(a),a},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},c={};function f(e,t){if(!t)return"jsx-"+e;var r=String(t),a=e+r;return c[a]||(c[a]="jsx-"+u(e+"-"+r)),c[a]}function h(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return c[r]||(c[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),c[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,a=void 0===r?null:r,n=t.optimizeForSpeed,s=void 0!==n&&n;this._sheet=a||new o({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),a&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),a=r.styleId,n=r.rules;if(a in this._instancesCounts){this._instancesCounts[a]+=1;return}var s=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[a]=s,this._instancesCounts[a]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var a=this._fromServer&&this._fromServer[r];a?(a.parentNode.removeChild(a),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],a=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:a}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,a=e.id;if(r){var n=f(a,r);return{styleId:n,rules:Array.isArray(t)?t.map(function(e){return h(n,e)}):[h(n,t)]}}return{styleId:f(a),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=n.createContext(null);function x(){return new m}function g(){return n.useContext(p)}p.displayName="StyleSheetContext";var b=s.default.useInsertionEffect||s.default.useLayoutEffect,v="undefined"!=typeof window?x():void 0;function y(e){var t=v||g();return t&&("undefined"==typeof window?t.add(e):b(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}y.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},r.StyleRegistry=function(e){var t=e.registry,r=e.children,a=n.useContext(p),i=n.useState(function(){return a||t||x()})[0];return s.default.createElement(p.Provider,{value:i},r)},r.createStyleRegistry=x,r.style=y,r.useStyleRegistry=g},3884,(e,t,r)=>{t.exports=e.r(98101).style},97879,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:n,objectFit:s}){let i=r?40*r:e,l=a?40*a:t,o=i&&l?`viewBox='0 0 ${i} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},50540,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return s},imageConfigDefault:function(){return i}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},16496,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return o}}),e.r(62148);let a=e.r(97879),n=e.r(50540),s=["-moz-initial","fill","none","scale-down",void 0];function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o({src:e,sizes:t,unoptimized:r=!1,priority:o=!1,preload:d=!1,loading:u,className:c,quality:f,width:h,height:m,fill:p=!1,style:x,overrideSrc:g,onLoad:b,onLoadingComplete:v,placeholder:y="empty",blurDataURL:j,fetchPriority:w,decoding:k="async",layout:_,objectFit:S,objectPosition:N,lazyBoundary:C,lazyRoot:R,...O},P){var E;let M,z,F,{imgConf:I,showAltText:T,blurComplete:A,defaultLoader:B}=P,$=I||n.imageConfigDefault;if("allSizes"in $)M=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),r=$.qualities?.sort((e,t)=>e-t);M={...$,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=O.loader||B;delete O.loader,delete O.srcSet;let D="__next_img_default"in L;if(D){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...a}=t;return e(a)}}if(_){"fill"===_&&(p=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[_];r&&!t&&(t=r)}let U="",V=l(h),J=l(m);if((E=e)&&"object"==typeof E&&(i(E)||void 0!==E.src)){let t=i(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(z=t.blurWidth,F=t.blurHeight,j=j||t.blurDataURL,U=t.src,!p)if(V||J){if(V&&!J){let e=V/t.width;J=Math.round(t.height*e)}else if(!V&&J){let e=J/t.height;V=Math.round(t.width*e)}}else V=t.width,J=t.height}let W=!o&&!d&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:U)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,W=!1),M.unoptimized&&(r=!0),D&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let q=l(f),G=Object.assign(p?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:N}:{},T?{}:{color:"transparent"},x),H=A||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:V,heightInt:J,blurWidth:z,blurHeight:F,blurDataURL:j||"",objectFit:G.objectFit})}")`:`url("${y}")`,K=s.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Q=H?{backgroundSize:K,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},X=function({config:e,src:t,unoptimized:r,width:a,quality:n,sizes:s,loader:i}){if(r)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:o}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(a);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,s),d=l.length-1;return{sizes:s||"w"!==o?s:"100vw",srcSet:l.map((r,a)=>`${i({config:e,src:t,quality:n,width:r})} ${"w"===o?r:a+1}${o}`).join(", "),src:i({config:e,src:t,quality:n,width:l[d]})}}({config:M,src:e,unoptimized:r,width:V,quality:q,sizes:t,loader:L}),Y=W?"lazy":u;return{props:{...O,loading:Y,fetchPriority:w,width:V,height:J,decoding:k,className:c,style:{...G,...Q},sizes:X.sizes,srcSet:X.srcSet,src:g||X.src},meta:{unoptimized:r,preload:d||o,placeholder:y,fill:p}}}},48128,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let a=e.r(74101),n="undefined"==typeof window,s=n?()=>{}:a.useLayoutEffect,i=n?()=>{}:a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),l()),s(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),s(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},37605,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return p},defaultHead:function(){return c}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=e.r(47030),i=e.r(70950),l=e.r(37562),o=i._(e.r(74101)),d=s._(e.r(48128)),u=e.r(28108);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(62148);let h=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,a,n;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,a=new Set,n={},e=>{let s=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?s=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?s=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?s=!1:a.add(r);else{let t=e.props[r],a=n[r]||new Set;("name"!==r||!i)&&a.has(t)?s=!1:(a.add(t),n[r]=a)}}}return s})).reverse().map((e,t)=>{let r=e.key||t;return o.default.cloneElement(e,{key:r})})}let p=function({children:e}){let t=(0,o.useContext)(u.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},83275,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let a=e.r(47030)._(e.r(74101)),n=e.r(50540),s=a.default.createContext(n.imageConfigDefault)},59841,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(47030)._(e.r(74101)).default.createContext(null)},89179,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},78988,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(89179);function n({config:e,src:t,width:r,quality:n}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,a.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/_next/static/media/"),""}`}n.__next_img_default=!0;let s=n},85030,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(74101);function n(e,t){let r=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=s(e,a)),t&&(n.current=s(t,a))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},13046,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(47030),n=e.r(70950),s=e.r(37562),i=n._(e.r(74101)),l=a._(e.r(6075)),o=a._(e.r(37605)),d=e.r(16496),u=e.r(50540),c=e.r(83275);e.r(62148);let f=e.r(59841),h=a._(e.r(78988)),m=e.r(85030),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function x(e,t,r,a,n,s,i){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function g(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:n,decoding:l,className:o,style:d,fetchPriority:u,placeholder:c,loading:f,unoptimized:h,fill:p,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:j,sizesInput:w,onLoad:k,onError:_,...S},N)=>{let C=(0,i.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&x(e,c,b,v,y,h,w))},[e,c,b,v,y,_,h,w]),R=(0,m.useMergedRef)(N,C);return(0,s.jsx)("img",{...S,...g(u),loading:f,width:n,height:a,decoding:l,"data-nimg":p?"fill":"1",className:o,style:d,sizes:r,srcSet:t,src:e,ref:R,onLoad:e=>{x(e.currentTarget,c,b,v,y,h,w)},onError:e=>{j(!0),"empty"!==c&&y(!0),_&&_(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...g(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,s.jsx)(o.default,{children:(0,s.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),a=(0,i.useContext)(c.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=p||a||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"undefined"==typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:l,onLoadingComplete:o}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let x=(0,i.useRef)(o);(0,i.useEffect)(()=>{x.current=o},[o]);let[g,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),{props:k,meta:_}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:n,blurComplete:g,showAltText:j});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{...k,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.preload?(0,s.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63649,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return u},getImageProps:function(){return d}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=e.r(47030),i=e.r(16496),l=e.r(13046),o=s._(e.r(78988));function d(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=l.Image},11750,(e,t,r)=>{t.exports=e.r(63649)},76879,e=>{"use strict";var t=e.i(37562),r=e.i(3884),a=e.i(11750),n=e.i(74101);let s=["Next.js · Vue 3 · Nuxt 기반으로 안정적인 Web App을 설계하고 개발합니다.","Flutter · Android · iOS 전반에서 실서비스 Mobile App을 개발·배포합니다.","Java · MyBatis · MySQL · Redis를 활용해 확장성과 안정성을 갖춘 백엔드를 구현합니다."],i=[{label:"Mobile Development",targetValue:5,suffix:"년+",description:"Flutter · Android · iOS",languages:["Swift","Kotlin","Dart","Objective-C","Java"],icon:"mobile",accentClass:"text-sky-500",gradientClass:"from-sky-500/70 via-cyan-400/20 to-transparent"},{label:"Frontend Development",targetValue:3,suffix:"년+",description:"Vue · Nuxt · Next.js",languages:["JavaScript","TypeScript","SCSS","Tailwind"],icon:"frontend",accentClass:"text-emerald-500",gradientClass:"from-emerald-500/70 via-lime-400/20 to-transparent"},{label:"Backend Development",targetValue:3,suffix:"년+",description:"Java · MyBatis · MySQL",languages:["Java","Spring Boot","MySQL","MyBatis","Redis"],icon:"backend",accentClass:"text-purple-500",gradientClass:"from-purple-500/70 via-fuchsia-400/20 to-transparent"}];function l(){let[e,r]=(0,n.useState)(0),[a,l]=(0,n.useState)(0),[o,d]=(0,n.useState)(!1),[u,c]=(0,n.useState)(()=>i.map(()=>0)),f=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(a<s[e].length){let e=setTimeout(()=>l(e=>e+1),45);return()=>clearTimeout(e)}let t=setTimeout(()=>{l(0),r(e=>(e+1)%s.length)},2200);return()=>clearTimeout(t)},[a,e]);let h=(0,n.useMemo)(()=>s[e].slice(0,a),[e,a]);return(0,n.useEffect)(()=>{if(!f.current)return;let e=new IntersectionObserver(t=>{let[r]=t;r.isIntersecting&&(d(!0),e.disconnect())},{threshold:.25});return e.observe(f.current),()=>e.disconnect()},[]),(0,n.useEffect)(()=>{if(!o)return;let e=window.setInterval(()=>{c(t=>{let r=!0,a=t.map((e,t)=>e<i[t].targetValue?(r=!1,e+1):e);return r&&window.clearInterval(e),a})},400);return()=>window.clearInterval(e)},[o]),(0,t.jsxs)("section",{id:"hero",ref:f,className:`
        scroll-mt-32 space-y-10 rounded-4xl border border-neutral-200
        bg-white/80 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)]
        backdrop-blur-xl transition-all duration-700
        dark:border-neutral-800 dark:bg-neutral-900/60
        ${o?"translate-y-0 opacity-100":"translate-y-6 opacity-0"}
      `,children:[(0,t.jsxs)("div",{className:`
        space-y-6 text-center
        lg:text-left
      `,children:[(0,t.jsxs)("div",{className:`
          inline-flex items-center gap-3 rounded-full border
          border-neutral-200/60 bg-gradient-to-r px-4 py-2 text-xs font-semibold
          tracking-[0.3em] text-neutral-600
          dark:border-neutral-700 dark:from-neutral-900/50
          dark:via-neutral-800/50 dark:text-neutral-200
        `,children:[(0,t.jsx)("span",{className:`
            h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-green-500
            motion-safe:animate-pulse
          `}),"ABOUT ME"]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("p",{className:`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `,children:"다양한 플랫폼에서 가치를 창출하는 풀스택 개발자"}),(0,t.jsx)("p",{className:`
            text-xl leading-tight font-bold tracking-tight text-transparent
            sm:text-xl
          `,children:(0,t.jsx)("span",{className:`
              bg-gradient-to-r from-neutral-900 via-slate-700 to-sky-600
              bg-clip-text
              dark:from-white dark:via-slate-200 dark:to-sky-400
            `,children:"경험 기반의 문제 해결과 제품 임팩트에 집중합니다."})})]}),(0,t.jsxs)("div",{"aria-live":"polite",className:`
            mx-auto max-w-4xl rounded-3xl border border-neutral-200/70
            bg-gradient-to-r from-neutral-50/70 via-white to-neutral-50/70 px-5
            py-4 text-base text-neutral-700 shadow-lg shadow-slate-200/10
            dark:border-neutral-700/60 dark:from-neutral-900/60
            dark:via-neutral-900/40 dark:to-neutral-900/60 dark:text-neutral-200
          `,children:[(0,t.jsx)("span",{className:`
            pr-2 font-semibold text-neutral-900
            dark:text-white
          `,children:">"}),h,(0,t.jsx)("span",{className:`
            ml-1 inline-block h-4 w-[2px] animate-pulse bg-neutral-400
            align-middle
            dark:bg-neutral-200
          `})]})]}),(0,t.jsx)("div",{className:`
        grid gap-6
        md:grid-cols-3
      `,children:i.map((e,r)=>(0,t.jsx)("div",{className:`
            rounded-[26px] bg-gradient-to-br
            ${e.gradientClass}
            overflow-hidden p-px
          `,children:(0,t.jsxs)("div",{className:`
              flex h-full flex-col items-center justify-center gap-2
              rounded-[23px] bg-white/80 p-6 text-center shadow-xl
              shadow-sky-900/5 transition-all duration-500
              hover:scale-105
              dark:bg-neutral-950/70
            `,children:[(0,t.jsx)("div",{className:`
                  mx-auto mb-4 flex h-14 w-14 items-center justify-center
                  rounded-2xl bg-white/80 text-2xl
                  ${e.accentClass}
                `,children:function(e){let r={className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"mobile":return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("rect",{x:"7",y:"2",width:"10",height:"20",rx:"2"}),(0,t.jsx)("circle",{cx:"12",cy:"18",r:"0.75"})]});case"frontend":return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{d:"M3 5h18M5 9h14v11H5z"}),(0,t.jsx)("path",{d:"m9 14-2 2 2 2m6-4 2 2-2 2"})]});case"backend":return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("ellipse",{cx:"12",cy:"6",rx:"7",ry:"3"}),(0,t.jsx)("path",{d:"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6m-14 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"})]});case"bolt":return(0,t.jsx)("svg",{viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{d:"M13 2 4 14h7l-1 8 9-12h-7z"})});case"handshake":return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{d:"M4 12 2 9l4-4 5 5"}),(0,t.jsx)("path",{d:"m20 12 2-3-4-4-5 5M8 17l-3-3"}),(0,t.jsx)("path",{d:"m12 13 3 3 3-3"})]});case"puzzle":return(0,t.jsx)("svg",{viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{d:"M7 14v-4a2 2 0 0 1 2-2h2V6a2 2 0 1 1 2 2h2a2 2 0 0 1 2 2v2h2a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2h-2a2 2 0 1 1-2-2H9a2 2 0 0 1-2-2z"})});default:return null}}(e.icon)}),(0,t.jsx)("p",{className:`
                text-sm font-semibold tracking-[0.25em] text-neutral-500
                uppercase
                dark:text-neutral-400
              `,children:e.label}),(0,t.jsxs)("p",{className:`
                text-xl font-bold tracking-tight text-neutral-900
                dark:text-white
              `,children:[u[r],e.suffix]}),(0,t.jsx)("p",{className:`
                text-sm text-neutral-500
                dark:text-neutral-400
              `,children:e.description}),(0,t.jsx)("div",{className:"mt-3 flex flex-wrap justify-center gap-2",children:e.languages.map(e=>(0,t.jsx)("span",{className:`
                      rounded-full border border-neutral-300/50
                      bg-neutral-100/80 px-2.5 py-1 text-xs font-medium
                      text-neutral-700
                      dark:border-white/20 dark:bg-white/10
                      dark:text-neutral-200
                    `,children:e},e))})]})},e.label))}),(0,t.jsxs)("div",{className:`
          rounded-3xl border border-neutral-200/70 bg-neutral-50/70 p-6 text-sm
          leading-relaxed text-neutral-700
          dark:border-white/10 dark:bg-white/5 dark:text-neutral-300
        `,children:[(0,t.jsxs)("div",{className:"mb-6 space-y-2",children:[(0,t.jsx)("p",{className:`
              text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase
              dark:text-neutral-400
            `,children:"Professional Profile"}),(0,t.jsx)("p",{className:`
              text-base font-semibold text-neutral-900
              dark:text-white
            `,children:"👋 Full-Stack Developer 이진영입니다."}),(0,t.jsx)("p",{children:"모바일, 프론트엔드, 백엔드까지 다양한 기술 스택을 활용해 서비스의 전 과정을 주도적으로 설계하고 구현해온 풀스택 개발자입니다."}),(0,t.jsx)("p",{children:"사용자 경험을 높이고 안정적인 서비스 운영을 목표로 기술적 완성도에 끝까지 집중합니다."})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,t.jsxs)("section",{className:`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              dark:border-white/10 dark:bg-neutral-900/60
            `,children:[(0,t.jsx)("h3",{className:`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `,children:"📌 Frontend Development"}),(0,t.jsxs)("p",{className:"mb-1 break-keep",children:["Vue.js, Nuxt.js, Next.js를 기반으로 웹 서비스의 전면적인 개발과 구조 설계를 주도해 왔습니다.",(0,t.jsx)("br",{}),"프로젝트 공통 컴포넌트 시스템을 직접 구축해 개발 생산성을 극대화했으며, 렌더링 구조 최적화를 통해 UX·퍼포먼스 개선에 집중해왔습니다.",(0,t.jsx)("br",{}),"프론트엔드 팀장으로서 정기 코드 리뷰와 멘토링을 통해 팀의 코드 품질과 기술 성장을 함께 이끌었습니다."]})]}),(0,t.jsxs)("section",{className:`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              dark:border-white/10 dark:bg-neutral-900/60
            `,children:[(0,t.jsx)("h3",{className:`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `,children:"📌 Mobile App Development (Android · iOS · Flutter)"}),(0,t.jsxs)("p",{className:"mb-1 break-keep",children:["Native(Android/iOS)와 Flutter, WebView 기반의 하이브리드 앱까지 폭넓은 모바일 개발 경험을 보유하고 있습니다.",(0,t.jsx)("br",{}),"푸시 알림, 소셜 로그인, 보안 솔루션, 스토어 심사 대응 등 라이브 서비스 운영에 필요한 기능을 안정적으로 구현하고 유지해왔습니다.",(0,t.jsx)("br",{}),"특히 까다로운 앱 스토어 배포 및 버전 관리 전담 경험을 바탕으로, 서비스가 중단 없이 안정적으로 릴리즈될 수 있도록 관리해 왔습니다."]})]}),(0,t.jsxs)("section",{className:`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              md:col-span-2
              dark:border-white/10 dark:bg-neutral-900/60
            `,children:[(0,t.jsx)("h3",{className:`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `,children:"📌 Backend Development"}),(0,t.jsxs)("p",{className:"mb-1",children:["Java, Spring Boot, MySQL 기반의 RESTful API 설계·구현을 통해 Web/App 서비스와의 안정적인 데이터 통신을 담당했습니다.",(0,t.jsx)("br",{}),"비즈니스 로직 구현뿐 아니라 PG(결제), SMS/알림톡, 실시간 처리 등 필수적인 3rd Party 서비스 연동까지 직접 구축하며 서비스의 완성도를 높였습니다."]}),(0,t.jsx)("p",{className:"mb-1"})]})]})]})]})}let o=[{id:"hyundai-mobis",categories:["Mobile"],title:"현대모비스 모바일 앱",summary:"내부 직원용 교육 서비스",description:"Flutter 기반 하이브리드 앱으로 보안 솔루션을 적용하고 배포 & 운영을 관리했습니다.",stacks:["iOS","Android","Swift","Kotlin"],imageUrl:"/mobischool.png"},{id:"hanati",categories:["Mobile"],title:"하나금융TI 모바일 앱",summary:"내부 직원용 교육 서비스",description:"Android/iOS 네이티브 기반 앱으로 LMS 기능을 개발하고 배포·운영을 관리했습니다.",stacks:["iOS","Android","Swift","Kotlin"],imageUrl:"/hanati.png"},{id:"hanam",categories:["Frontend","Backend"],title:"하남교육재단 플랫폼",summary:"교육 관리 · 반응형 설계",description:"Nuxt3 기반 진로·교육 플랫폼으로 인증, 설문, 검사지 등 주요 서비스 로직을 중심으로 프론트엔드와 백엔드를 개발했습니다.",stacks:["Nuxt3","JavaScript","Java","MySQL","MyBatis"],imageUrl:"/hanam.png"},{id:"moongkle",categories:["Frontend","Mobile"],title:"뭉클",summary:"감사일기 커뮤니티 웹/앱",description:"Vue3·Swift·Kotlin 기반 커뮤니티 서비스로, 감사일기·피드·알림 등 핵심 기능을 구현하며 웹과 앱 개발 전반을 담당했습니다.",stacks:["Vue","Swift","Kotlin","Firebase"],imageUrl:"/moongkle.jpg"},{id:"tip",categories:["Frontend","Backend","Mobile"],title:"TIP",summary:"보험 설계사 교육 서비스",description:"웹뷰 기반 하이브리드 구조 설계부터 구현까지 담당했으며, Spring Boot 백엔드 및 Vue3 프론트 개발을 함께 지원했습니다.",stacks:["Java","Spring Boot","MySQL","Vue3","Swift","Kotlin"],imageUrl:"/tip.png"},{id:"hanadigi",categories:["Mobile"],title:"하나디지털캠퍼스",summary:"하나은행 직원 교육용 서비스",description:"Objective-C·Java 기반 LMS 기능을 개선·확장하며 모바일 앱 유지보수 및 신규 기능 개발을 수행했습니다.",stacks:["Object-C","Java"],imageUrl:"/hanadigital.jpg"},{id:"polzzak",categories:["Frontend","Backend"],title:"폴짝",summary:"국회의원 후원 웹 서비스",description:"Spring Boot와 Nuxt3 기반으로 후원·결제·회원 기능 등 핵심 서비스를 개발하며 전체 구조 설계와 구현에 참여했습니다.",stacks:["Java","Spring Boot","Nuxt3"],imageUrl:"/polzzak.jpg"}];function d(){let e=(0,n.useRef)(null),[r,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current)return;let t=new IntersectionObserver(e=>{let[r]=e;r.isIntersecting&&(s(!0),t.disconnect())},{threshold:.25});return t.observe(e.current),()=>t.disconnect()},[]),(0,t.jsxs)("section",{id:"projects",ref:e,className:`
        scroll-mt-32 rounded-[32px] border border-neutral-200 bg-white/80 p-8
        shadow-[0_40px_120px_-60px_rgba(15,23,42,1)] backdrop-blur-2xl
        dark:border-white/10 dark:bg-neutral-950/70 dark:text-white
      `,children:[(0,t.jsxs)("div",{className:`
        space-y-6 text-center
        lg:text-left
      `,children:[(0,t.jsxs)("div",{className:`
           inline-flex items-center gap-3 rounded-full border
           border-neutral-200/60 bg-gradient-to-r px-4 py-2 text-xs
           font-semibold tracking-[0.3em] text-neutral-600
           dark:border-neutral-700 dark:from-neutral-900/50
           dark:via-neutral-800/50 dark:text-neutral-200
         `,children:[(0,t.jsx)("span",{className:`
            h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-green-500
            motion-safe:animate-pulse
          `}),"MAIN PROJECTS"]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("p",{className:`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `,children:"주요 프로젝트"}),(0,t.jsx)("p",{className:`
            text-xl leading-tight font-bold tracking-tight text-transparent
            sm:text-xl
          `,children:(0,t.jsx)("span",{className:`
              bg-gradient-to-r from-neutral-900 via-slate-700 to-sky-600
              bg-clip-text
              dark:from-white dark:via-slate-200 dark:to-sky-400
            `,children:"모바일·프론트엔드·백엔드를 넘나들며 설계와 구현을 주도한 대표 프로젝트들입니다."})})]})]}),(0,t.jsx)("div",{className:`
        mt-10 grid gap-6
        md:grid-cols-2
        lg:grid-cols-3
      `,children:o.map((e,n)=>(0,t.jsxs)("article",{style:{transitionDelay:`${90*n}ms`},className:`
              group flex transform-gpu flex-col gap-4 rounded-[20px] border
              border-neutral-200 bg-white text-left shadow-lg
              shadow-neutral-200/50 transition-all duration-500
              hover:-translate-y-2 hover:border-neutral-300 hover:shadow-xl
              dark:border-white/10 dark:bg-white/5 dark:shadow-black/40
              dark:hover:border-white/25
              ${r?"scale-100 opacity-100":"scale-95 opacity-0"}
            `,children:[(0,t.jsxs)("div",{className:"relative overflow-hidden rounded-t-[20px]",children:[(0,t.jsx)(a.default,{src:e.imageUrl,alt:e.title,width:480,height:320,className:`
                  h-40 w-full object-cover transition duration-700
                  group-hover:scale-105
                `,unoptimized:!0}),(0,t.jsx)("div",{className:`
                absolute top-3 right-3 flex flex-wrap justify-end gap-2
              `,children:e.categories.slice(0,3).map(r=>(0,t.jsx)("span",{className:`
                      rounded-full px-2 py-1 text-xs font-semibold
                      ${function(e){let t="text-xs font-semibold text-white";switch(e){case"Mobile":return`${t} bg-sky-500 dark:bg-sky-500/90`;case"Frontend":return`${t} bg-emerald-500 dark:bg-emerald-500/90`;case"Backend":return`${t} bg-purple-500 dark:bg-purple-500/90`;default:return`${t} bg-neutral-500 dark:bg-neutral-500/90`}}(r)}
                    `,children:r},`${e.id}-${r}`))})]}),(0,t.jsxs)("div",{className:"space-y-3 p-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:`
                  text-sm tracking-[0.2em] text-neutral-500 uppercase
                  dark:text-neutral-400
                `,children:e.summary}),(0,t.jsx)("h3",{className:`
                  mt-1 text-xl text-neutral-900
                  dark:text-white
                `,children:e.title})]}),(0,t.jsx)("p",{className:`
                text-sm text-neutral-600
                dark:text-white/50
              `,children:e.description}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:e.stacks.map(e=>(0,t.jsx)("span",{className:`
                      rounded-md border border-neutral-200 bg-neutral-50 px-3
                      py-1 text-xs font-medium text-neutral-700
                      dark:border-white/10 dark:bg-white/5 dark:text-white/90
                    `,children:e},e))})]})]},e.id))})]})}let u=["Heic 확장자 파일 업로드 및 미리보기","Heic 확장자 파일 변환 가능 (JPEG, PNG 등)","Heic 확장자 파일 다운로드 가능"],c=["Tauri","Rust","JavaScript","Tailwind"];function f(){let e=(0,n.useRef)(null);return(0,t.jsxs)("section",{id:"platform-extension",ref:e,className:`
        scroll-mt-32 space-y-10 rounded-4xl border border-neutral-200
        bg-white/80 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)]
        backdrop-blur-xl transition-all duration-700
        dark:border-neutral-800 dark:bg-neutral-900/60
      `,children:[(0,t.jsxs)("div",{className:`
        mb-10 space-y-6 text-center
        lg:text-left
      `,children:[(0,t.jsxs)("div",{className:`
          inline-flex items-center gap-3 rounded-full border
          border-neutral-200/60 bg-gradient-to-r px-4 py-2 text-xs font-semibold
          tracking-[0.3em] text-neutral-600
          dark:border-neutral-700 dark:from-neutral-900/50
          dark:via-neutral-800/50 dark:text-neutral-200
        `,children:[(0,t.jsx)("span",{className:`
            h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-green-500
            motion-safe:animate-pulse
          `}),"PLATFORM EXTENSION PROJECTS"]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("p",{className:`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `,children:"토이 프로젝트"}),(0,t.jsx)("p",{className:`
            text-xl leading-tight font-bold tracking-tight text-transparent
            sm:text-xl
          `,children:(0,t.jsx)("span",{className:`
              bg-gradient-to-r from-neutral-900 via-slate-700 to-sky-600
              bg-clip-text
              dark:from-white dark:via-slate-200 dark:to-sky-400
            `,children:"경계없는 기술의 확장성을 추구하는 토이 프로젝트입니다."})})]})]}),(0,t.jsxs)("div",{className:`
        grid gap-8
        lg:grid-cols-2 lg:gap-12
      `,children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:`
            relative aspect-4/3 overflow-hidden rounded-2xl bg-black/30
            dark:bg-neutral-900/50
          `,children:(0,t.jsx)(a.default,{src:"/heicconvert.png",alt:"윈도우 데스크톱 애플리케이션",fill:!0,className:"object-cover",unoptimized:!0})})}),(0,t.jsxs)("div",{className:"flex flex-col justify-center space-y-4",children:[(0,t.jsx)("h2",{className:`
            text-3xl leading-tight font-bold text-neutral-900
            lg:text-xl
            dark:text-white
          `,children:"윈도우 데스크톱 애플리케이션"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:`
              text-base font-semibold text-neutral-900
              dark:text-neutral-200
            `,children:"주요 기능"}),(0,t.jsx)("ul",{className:"space-y-1",children:u.map((e,r)=>(0,t.jsxs)("li",{className:"flex items-center gap-3",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 shrink-0 text-orange-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),(0,t.jsx)("span",{className:`
                    text-sm text-neutral-700
                    dark:text-white/70
                  `,children:e})]},r))})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:`
              text-base font-semibold text-neutral-900
              dark:text-neutral-200
            `,children:"기술 스택"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:c.map(e=>(0,t.jsx)("span",{className:`
                    rounded-full border border-orange-500/50 bg-white px-3 py-1
                    text-xs font-medium text-orange-400
                    dark:border-orange-500/50 dark:bg-black dark:text-orange-400
                  `,children:e},e))})]}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("a",{href:"ms-windows-store://pdp/?productid=9N67720G0VWM",target:"_blank",rel:"noopener noreferrer",className:`
              w-full rounded-[20px] bg-orange-500 py-3 text-center text-sm
              font-medium text-white transition-colors duration-300 ease-in-out
              hover:bg-orange-600
              dark:bg-orange-500/50 dark:hover:bg-orange-500/70
            `,children:"다운로드 받기"})})]})]})]})}let h=[{id:"hero",label:"홈",icon:"🏠"},{id:"projects",label:"주요 프로젝트",icon:"🗂️"},{id:"platform-extension",label:"플랫폼 확장 프로젝트",icon:"🗂️"}];function m(){let[e,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{function e(){s(window.scrollY>300)}return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("div",{className:`
      relative min-h-screen bg-white font-sans text-neutral-900
      dark:bg-neutral-950 dark:text-neutral-100
    `,children:[(0,t.jsxs)("div",{className:`
        mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12
        lg:grid lg:grid-cols-[240px_1fr] lg:gap-12
      `,children:[(0,t.jsxs)("aside",{style:{scrollbarWidth:"none",msOverflowStyle:"none"},className:`jsx-f96b36c339a20fa1 
            flex w-full flex-col gap-6 overflow-y-auto rounded-3xl border
            border-neutral-200 bg-neutral-50/70 p-6
            max-lg:hidden
            lg:sticky lg:top-12 lg:max-h-[calc(100vh-6rem)]
            dark:border-neutral-800 dark:bg-neutral-900/60
          `,children:[(0,t.jsx)(r.default,{id:"f96b36c339a20fa1",children:"aside.jsx-f96b36c339a20fa1::-webkit-scrollbar{display:none!important}"}),(0,t.jsx)("div",{style:{width:"100%"},className:"jsx-f96b36c339a20fa1",children:(0,t.jsx)(a.default,{src:"/profile.jpg",alt:"이진영 프로필 사진",width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto",objectFit:"contain",borderRadius:"9999px"},unoptimized:!0})}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1 mt-5 flex flex-col gap-4",children:[(0,t.jsx)("h1",{className:`jsx-f96b36c339a20fa1 
              text-2xl font-bold text-neutral-900
              dark:text-neutral-100
            `,children:"이진영"}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1",children:[(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                mb-1 text-sm text-neutral-500
                dark:text-neutral-400
              `,children:"직무"}),(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                text-sm text-neutral-700
                dark:text-neutral-300
              `,children:"Mobile · Frontend · Backend"})]}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1 flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:`jsx-f96b36c339a20fa1 
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `,children:[(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `,children:"경력사항"}),(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                  text-sm font-semibold text-neutral-900
                  dark:text-neutral-100
                `,children:"WillbeSoft"}),(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                  mt-1 text-xs text-neutral-600
                  dark:text-neutral-400
                `,children:"2021 ~ 2025 (4년 4개월)"})]}),(0,t.jsxs)("div",{className:`jsx-f96b36c339a20fa1 
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `,children:[(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `,children:"자격증"}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1 space-y-1.5",children:[(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                    text-sm text-neutral-700
                    dark:text-neutral-300
                  `,children:"정보처리기사 취득"}),(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                    text-sm text-neutral-700
                    dark:text-neutral-300
                  `,children:"토익스피킹 Lv.6"})]})]}),(0,t.jsxs)("div",{className:`jsx-f96b36c339a20fa1 
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `,children:[(0,t.jsx)("p",{className:`jsx-f96b36c339a20fa1 
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `,children:"연락처"}),(0,t.jsx)("a",{href:"mailto:jinyyyy.lee@gmail.com",className:`jsx-f96b36c339a20fa1 
                    text-sm break-all text-blue-600 underline underline-offset-4
                    transition-colors
                    hover:text-blue-700
                    dark:text-blue-400 dark:hover:text-blue-300
                  `,children:"jinyyyy.lee@gmail.com"})]})]})]}),(0,t.jsx)("hr",{"aria-hidden":"true",className:`jsx-f96b36c339a20fa1 
            border-t border-neutral-200
            dark:border-neutral-700
          `}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1 flex flex-col gap-3",children:[(0,t.jsx)("h2",{className:`jsx-f96b36c339a20fa1 
              text-xs font-semibold tracking-wider text-neutral-500 uppercase
              dark:text-neutral-400
            `,children:"MENU"}),(0,t.jsx)("nav",{className:`jsx-f96b36c339a20fa1 
              space-y-1 text-sm font-medium text-neutral-500
              dark:text-neutral-400
            `,children:h.map(e=>(0,t.jsxs)("a",{href:`#${e.id}`,"aria-label":`${e.label} 섹션으로 이동`,onClick:t=>{t.preventDefault();let r=document.getElementById(e.id);r&&(r.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{r.setAttribute("tabindex","-1"),r.focus()},500)),history.pushState&&history.pushState(null,"",`#${e.id}`)},className:`jsx-f96b36c339a20fa1 
                    flex items-center gap-3 rounded-2xl px-4 py-3 transition
                    hover:bg-white hover:text-neutral-900
                    focus-visible:ring-2 focus-visible:ring-neutral-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-transparent
                    dark:hover:bg-neutral-800 dark:hover:text-white
                  `,children:[(0,t.jsx)("span",{"aria-hidden":!0,className:"jsx-f96b36c339a20fa1",children:e.icon}),e.label]},e.id))})]}),(0,t.jsx)("hr",{"aria-hidden":"true",className:`jsx-f96b36c339a20fa1 
            border-t border-neutral-200
            dark:border-neutral-700
          `}),(0,t.jsxs)("div",{className:"jsx-f96b36c339a20fa1 flex flex-col gap-3",children:[(0,t.jsxs)("a",{"aria-label":"개발 블로그 바로가기",target:"_blank",rel:"noopener noreferrer",className:`jsx-f96b36c339a20fa1 
              flex w-full items-center justify-center gap-2 rounded-2xl border
              border-neutral-200 px-4 py-3 text-center text-sm font-semibold
              transition
              hover:bg-white
              focus-visible:ring-2 focus-visible:ring-neutral-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              dark:border-neutral-700 dark:hover:bg-neutral-800
            `,children:[(0,t.jsx)(a.default,{src:"/tistory.png",alt:"Tistory",width:24,height:24}),"개발 블로그 바로가기"]}),(0,t.jsxs)("a",{href:"/career.pdf",download:!0,"aria-label":"경력기술서 다운로드",className:`jsx-f96b36c339a20fa1 
                flex items-center justify-center gap-2 rounded-2xl border
                border-neutral-200 px-4 py-3 text-center text-sm font-semibold
                transition
                hover:bg-white
                focus-visible:ring-2 focus-visible:ring-neutral-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
                dark:border-neutral-700 dark:hover:bg-neutral-800
              `,children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",className:`jsx-f96b36c339a20fa1 
                  h-5 w-5 text-neutral-500
                  dark:text-neutral-300
                `,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 3v10m0 0l-3-3m3 3l3-3M4 17h12",className:"jsx-f96b36c339a20fa1"})}),"경력기술서 다운로드"]})]})]}),(0,t.jsxs)("main",{className:"flex flex-1 flex-col gap-12",children:[(0,t.jsx)(l,{}),(0,t.jsx)(d,{}),(0,t.jsx)(f,{})]})]}),(0,t.jsx)("div",{className:"fixed right-6 bottom-6 z-10",children:(0,t.jsx)("p",{className:`
          rounded-full border border-neutral-200/50 bg-white/80 px-4 py-2
          text-xs text-neutral-400 shadow-sm backdrop-blur-sm
          dark:border-neutral-800/50 dark:bg-neutral-900/80
          dark:text-neutral-500
        `,children:"현재 프로젝트는 Next.js 기반으로 개발되었습니다."})}),(0,t.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"페이지 맨 위로 이동",className:`
          fixed right-6 bottom-24 z-20 flex h-12 w-12 items-center
          justify-center rounded-full bg-neutral-900 text-white shadow-lg
          shadow-neutral-900/30 transition-all duration-300 ease-in-out
          hover:scale-110 hover:bg-neutral-800
          focus-visible:ring-2 focus-visible:ring-neutral-400
          focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200
          ${e?"pointer-events-auto translate-y-0 opacity-100":"pointer-events-none translate-y-4 opacity-0"}
        `,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5","aria-hidden":"true",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})]})}e.s(["default",()=>m],76879)}]);