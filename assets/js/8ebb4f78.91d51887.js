"use strict";(self.webpackChunkwhnhn=self.webpackChunkwhnhn||[]).push([[656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=l.createContext({}),m=function(e){var t=l.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return l.createElement(k.Provider,{value:t},e.children)},o="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,k=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=m(a),c=r,d=o["".concat(k,".").concat(c)]||o[c]||N[c]||n;return a?l.createElement(d,p(p({ref:t},u),{},{components:a})):l.createElement(d,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=c;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[o]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<n;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>N,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(7462),r=(a(7294),a(3905));const n={},p="JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6",i={permalink:"/tech/JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6",source:"@site/tech/JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6.md",title:"JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6",description:"1.\u5185\u5b58\u6a21\u578b",date:"2020-07-08T13:28:05.000Z",formattedDate:"2020\u5e747\u67088\u65e5",tags:[],readingTime:6.125,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"\u73a9\u8f6c Java \u7ebf\u7a0b\u53ca\u7ebf\u7a0b\u6c60",permalink:"/tech/\u73a9\u8f6c Java \u7ebf\u7a0b\u53ca\u7ebf\u7a0b\u6c60"},nextItem:{title:"Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",permalink:"/tech/Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"}},k={authorsImageUrls:[]},m=[{value:"1.\u5185\u5b58\u6a21\u578b",id:"1\u5185\u5b58\u6a21\u578b",level:2},{value:"\u6808",id:"\u6808",level:3},{value:"\u5806",id:"\u5806",level:3},{value:"\u65b9\u6cd5\u533a",id:"\u65b9\u6cd5\u533a",level:3},{value:"\u7a0b\u5e8f\u8ba1\u6570\u5668",id:"\u7a0b\u5e8f\u8ba1\u6570\u5668",level:3},{value:"2. \u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",id:"2-\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",level:2},{value:"3. \u5bf9\u8c61\u5185\u5b58\u5e03\u5c40",id:"3-\u5bf9\u8c61\u5185\u5b58\u5e03\u5c40",level:2},{value:"\u5bf9\u8c61\u5934",id:"\u5bf9\u8c61\u5934",level:3},{value:"\u5b9e\u4f8b\u6570\u636e",id:"\u5b9e\u4f8b\u6570\u636e",level:3},{value:"\u5bf9\u9f50\u586b\u5145",id:"\u5bf9\u9f50\u586b\u5145",level:3},{value:"4. \u5bf9\u8c61\u8bbf\u95ee\u5b9a\u4f4d",id:"4-\u5bf9\u8c61\u8bbf\u95ee\u5b9a\u4f4d",level:2},{value:"5. \u5bf9\u8c61\u5b58\u6d3b\u5224\u65ad\u65b9\u6cd5",id:"5-\u5bf9\u8c61\u5b58\u6d3b\u5224\u65ad\u65b9\u6cd5",level:2},{value:"6. \u53ef\u4f5c\u4e3a GC Root \u7684\u5bf9\u8c61",id:"6-\u53ef\u4f5c\u4e3a-gc-root-\u7684\u5bf9\u8c61",level:2},{value:"7. GC \u7b97\u6cd5",id:"7-gc-\u7b97\u6cd5",level:2},{value:"8. GC\u6536\u96c6\u5668",id:"8-gc\u6536\u96c6\u5668",level:2},{value:"9. \u7c7b\u52a0\u8f7d\u673a\u5236",id:"9-\u7c7b\u52a0\u8f7d\u673a\u5236",level:2},{value:"10.\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",id:"10\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",level:2},{value:"11. \u53cc\u4eb2\u59d4\u6d3e\u673a\u5236",id:"11-\u53cc\u4eb2\u59d4\u6d3e\u673a\u5236",level:2},{value:"12. \u7c7b\u52a0\u8f7d\u5668\u6709\u54ea\u4e9b",id:"12-\u7c7b\u52a0\u8f7d\u5668\u6709\u54ea\u4e9b",level:2}],u={toc:m},o="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u5185\u5b58\u6a21\u578b"},"1.\u5185\u5b58\u6a21\u578b"),(0,r.kt)("p",null,"\u53ef\u5206\u4e3a\u4ee5\u4e0b\u51e0\u90e8\u5206\uff1a"),(0,r.kt)("h3",{id:"\u6808"},"\u6808"),(0,r.kt)("p",null,"\u65b9\u6cd5\u7684\u5185\u5b58\u6a21\u578b\uff0c\u4e00\u4e2a\u65b9\u6cd5\u5bf9\u5e94\u4e00\u4e2a\u6808\u5e27\uff0c\u65b9\u6cd5\u7684\u6267\u884c\u5c31\u662f\u5165\u6808\u5230\u51fa\u6808\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"\u5305\u62ec\uff1a\u865a\u62df\u673a\u6808\uff08Java\u65b9\u6cd5\uff09\u548c\u672c\u5730\u65b9\u6cd5\u6808"),(0,r.kt)("p",null,"\u6808\u5e27\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c40\u90e8\u53d8\u91cf\u8868"),(0,r.kt)("p",{parentName:"li"},"\u7531\u5c40\u90e8\u53d8\u91cf\u69fd\uff08Slot\uff09\u7ec4\u6210\uff0c\u5728\u7f16\u8bd1\u671f\u95f4\u5b8c\u6210\u5206\u914d\uff0c\u65b9\u6cd5\u5728\u8fd0\u884c\u671f\u95f4\u4e0d\u4f1a\u6539\u53d8\u5c40\u90e8\u53d8\u91cf\u8868\u7684\u5927\u5c0f\uff08\u53d8\u91cf\u69fd\u7684\u6570\u91cf\uff09"),(0,r.kt)("p",{parentName:"li"},"\u53d8\u91cf\u69fd\u5b58\u50a8\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",{parentName:"li"},"64\u4f4d\u7684\u7c7b\u578b\u4f1a\u53602\u4e2a\u69fd\uff0c\u5176\u4ed6\u53ea\u5360\u4e00\u4e2a\u69fd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u5f15\u7528\uff08reference\u7c7b\u578b\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returnAddress\u7c7b\u578b\uff08\u6307\u5411\u4e00\u6761\u5b57\u8282\u7801\u6307\u4ee4\u7684\u5730\u5740\uff09")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u6570\u6808"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u65b9\u6cd5\u65f6\uff0c\u5b58\u653e\u64cd\u4f5c\u6570\u7684\u6808")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u52a8\u6001\u8fde\u63a5"),(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u652f\u6301\u5728\u8fd0\u884c\u671f\u95f4\u5c06\u7b26\u53f7\u5f15\u7528\u8f6c\u5316\u4e3a\u76f4\u63a5\u5f15\u7528\u7684\u64cd\u4f5c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u51fa\u53e3"),(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u5730\u5740\u4e3a\u5230\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u6307\u4ee4\u7684\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740"))),(0,r.kt)("h3",{id:"\u5806"},"\u5806"),(0,r.kt)("p",null,"\u5b58\u653e\uff1a\u5bf9\u8c61\u5b9e\u4f8b\u3001\u6570\u7ec4\u3001\u7ebf\u7a0b\u672c\u5730\u7f13\u51b2\u533a\uff08TLAB\uff09"),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u533a"},"\u65b9\u6cd5\u533a"),(0,r.kt)("p",null,"\u4f1a\u5b58\u50a8\uff1a\u7c7b\u578b\u4fe1\u606f\u3001\u5e38\u91cf\u3001\u9759\u6001\u53d8\u91cf\u3001\u5373\u65f6\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u7f13\u5b58"),(0,r.kt)("p",null,"\u6709\u4e2a\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff1aclass\u7684\u5e38\u91cf\u6c60\u8868\u3001\u8fd0\u884c\u65f6\u65b0\u7684\u5e38\u91cf"),(0,r.kt)("p",null,"\u56de\u6536\u76ee\u6807\uff1a\u9488\u5bf9\u5e38\u91cf\u6c60\u7684\u56de\u6536\u548c\u5bf9\u7c7b\u578b\u7684\u5378\u8f7d"),(0,r.kt)("h3",{id:"\u7a0b\u5e8f\u8ba1\u6570\u5668"},"\u7a0b\u5e8f\u8ba1\u6570\u5668"),(0,r.kt)("p",null,"\u5b57\u8282\u7801\u7684\u884c\u53f7\u63d0\u793a\u5668\uff0c\u4f1a\u8bb0\u5f55\u6b63\u5728\u6267\u884c\u7684\u865a\u62df\u673a\u5b57\u8282\u7801\u6307\u4ee4\u5730\u5740\uff0c\u5982\u679c\u6b63\u5728\u6267\u884c\u7684\u662f\u672c\u5730\u65b9\u6cd5\u5219\u4e3a\u7a7a\u3002"),(0,r.kt)("h2",{id:"2-\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b"},"2. \u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u6d4bnew\u6307\u4ee4\u7684\u53c2\u6570\u662f\u5426\u80fd\u5728\u5e38\u91cf\u6c60\u5b9a\u4f4d\u5230\u4e00\u4e2a\u7c7b\u7684\u7b26\u53f7\u5f15\u7528")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u7b26\u53f7\u5f15\u7528\u4ee3\u8868\u7684\u7c7b\u662f\u5426\u5df2\u7ecf\u88ab\u52a0\u8f7d\u3001\u89e3\u6790\u3001\u521d\u59cb\u5316"),(0,r.kt)("p",{parentName:"li"},"\u6ca1\u6709\uff0c\u5c31\u6267\u884c\u76f8\u5e94\u7684\u7c7b\u52a0\u8f7d\u8fc7\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5206\u914d\u5185\u5b58\u7a7a\u95f4\uff08\u5927\u5c0f\u5728\u7c7b\u52a0\u8f7d\u5b8c\u540e\u53ef\u4ee5\u5b8c\u5168\u786e\u5b9a\uff09"),(0,r.kt)("p",{parentName:"li"},"\u5206\u914d\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u9488\u78b0\u649e"),(0,r.kt)("p",{parentName:"li"},"\u7edd\u5bf9\u89c4\u6574\u7684\u5806\u4e0a\u4f7f\u7528\uff0c\u4e00\u4e2a\u6307\u9488\u4f5c\u4e3a\u5206\u754c\u70b9\u6307\u793a\u5668\uff0c\u5206\u914d\u5185\u5b58\u5c31\u662f\u79fb\u52a8\u8be5\u6307\u9488"),(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u65b9\u6848\uff1aCAS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7a7a\u95f2\u5217\u8868"),(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55\u54ea\u4e9b\u5185\u5b58\u5757\u53ef\u7528\uff0c\u5206\u914d\u65f6\u4ece\u4e2d\u67e5\u627e\u8db3\u591f\u5927\u7684\u7a7a\u95f4\u5206\u914d\uff0c\u5e76\u66f4\u65b0\u5217\u8868"),(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u65b9\u6848\uff1aTLAB\uff08\u628a\u5185\u5b58\u5206\u914d\u7684\u52a8\u4f5c\u6309\u7167\u7ebf\u7a0b\u5212\u5206\u5728\u4e0d\u540c\u7684\u7a7a\u95f4\u4e4b\u4e2d\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u5728Java\u5806\u4e2d\u9884\u5148\u5206\u914d\u4e00\u5c0f\u5757\u5185\u5b58\uff09")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u4f4d\u96f6\u503c\uff08\u4e0d\u5305\u62ec\u5bf9\u8c61\u5934\uff09"),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528TLAB\u65f6\uff0c\u4f1a\u63d0\u524d\u81f3TLAB\u5206\u914d\u65f6\u8fdb\u884c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5bf9\u8c61\uff08\u8bbe\u7f6e\u5bf9\u8c61\u5934\uff09"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u822c\u5305\u62ec\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u54ea\u4e2a\u7c7b\u7684\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5411\u5143\u6570\u636e\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"GC\u5206\u4ee3\u5e74\u9f84"),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u542f\u7528\u504f\u5411\u9501"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u6784\u9020\u51fd\u6570"))),(0,r.kt)("h2",{id:"3-\u5bf9\u8c61\u5185\u5b58\u5e03\u5c40"},"3. \u5bf9\u8c61\u5185\u5b58\u5e03\u5c40"),(0,r.kt)("h3",{id:"\u5bf9\u8c61\u5934"},"\u5bf9\u8c61\u5934"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Markword"),(0,r.kt)("p",{parentName:"li"},"8\u5b57\u8282\uff0c\u8bb0\u5f55\uff1a\u9501\u4fe1\u606f\u3001GC\u4fe1\u606f\u3001Hashcode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u6307\u9488"),(0,r.kt)("p",{parentName:"li"},"\u6307\u5411\u7c7b\u578b\u5143\u6570\u636e"))),(0,r.kt)("h3",{id:"\u5b9e\u4f8b\u6570\u636e"},"\u5b9e\u4f8b\u6570\u636e"),(0,r.kt)("p",null,"\u5b58\u50a8\u7c7b\u578b\u7684\u5b57\u6bb5\u5185\u5bb9"),(0,r.kt)("h3",{id:"\u5bf9\u9f50\u586b\u5145"},"\u5bf9\u9f50\u586b\u5145"),(0,r.kt)("p",null,"\u88ab8\u6574\u9664\u8865\u9f50\u7528"),(0,r.kt)("h2",{id:"4-\u5bf9\u8c61\u8bbf\u95ee\u5b9a\u4f4d"},"4. \u5bf9\u8c61\u8bbf\u95ee\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u901a\u8fc7\u6808\u4e0a\u7684reference\u6570\u636e\u64cd\u4f5c\u5806\u4e0a\u7684\u5177\u4f53\u5bf9\u8c61"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53e5\u67c4"),(0,r.kt)("p",{parentName:"li"},"\u5806\u4e0a\u5212\u5206\u7a7a\u95f4\u4f5c\u4e3a\u53e5\u67c4\u6c60\uff0c\u6c60\u4e2d\u5b58\u653e\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u6570\u636e\u6307\u9488")),(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u6808\u4e2d\u5b58\u50a8\u7684\u662f\u53e5\u67c4\u5730\u5740\uff0c\u5728\u5bf9\u8c61\u88ab\u79fb\u52a8\u65f6\u53ea\u4f1a\u4fee\u6539\u53e5\u67c4\u4e2d\u7684\u5b9e\u4f8b\u6570\u636e\u6307\u9488\uff0creference\u5bf9\u8c61\u4e0d\u9700\u8981\u4fee\u6539"),(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u8bbf\u95ee\u5b9e\u4f8b\u6570\u636e\u591a\u4e00\u6b21\u6307\u9488\u5b9a\u4f4d\u5f00\u9500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76f4\u63a5\u6307\u9488"),(0,r.kt)("p",{parentName:"li"},"\u5b58\u50a8\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7c7b\u578b\u6570\u636e\u6307\u9488")),(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u901f\u5ea6\u5feb"),(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u5bf9\u8c61\u88ab\u79fb\u52a8\u65f6\u9700\u8981\u4fee\u6539\u6808\u4e2dreference\u5b58\u50a8\u7684\u503c"))),(0,r.kt)("h2",{id:"5-\u5bf9\u8c61\u5b58\u6d3b\u5224\u65ad\u65b9\u6cd5"},"5. \u5bf9\u8c61\u5b58\u6d3b\u5224\u65ad\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f15\u7528\u8ba1\u6570\u7b97\u6cd5"),(0,r.kt)("p",{parentName:"li"},"\u5f15\u7528\u5bf9\u8c61\u65f6\uff0c\u8ba1\u6570\u5668\u503c\u5c31\u52a0\u4e00\uff1b\u5f53\u5f15\u7528\u5931\u6548\u65f6\uff0c\u8ba1\u6570\u5668\u503c\u5c31\u51cf\u4e00"),(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u65e0\u6cd5\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u95ee\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u8fbe\u6027\u5206\u6790\u7b97\u6cd5"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e00\u7cfb\u5217GC Roots\u7684\u6839\u5bf9\u8c61\u4e3a\u8d77\u70b9\u96c6\uff0c\u6839\u636e\u5f15\u7528\u5173\u7cfb\u5411\u4e0b\u641c\u7d22\uff0c\u5982\u679c\u5bf9\u8c61\u5230GC Roots\u95f4\u4e0d\u53ef\u8fbe\uff0c\u5219\u5bf9\u8c61\u4e0d\u518d\u88ab\u5f15\u7528"),(0,r.kt)("p",{parentName:"li"},"\u5904\u7406\u6d41\u7a0b\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u5bf9\u8c61\u65f6\u5426\u53ef\u8fbe")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u53ef\u8fbe\uff0c\u8fdb\u884c\u6807\u8bb0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b5b\u9009\u6807\u8bb0\u5bf9\u8c61"),(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u6267\u884cfinalized\u65b9\u6cd5\u7684\u52a0\u5165F-Queue\u961f\u5217\uff0c\u6267\u884c\u961f\u5217\u4e2d\u7684finalized\u65b9\u6cd5\uff0c\u5982\u679c\u5bf9\u8c61\u91cd\u65b0\u5173\u8fde\u4e0aGCRoots\u5c31\u8868\u793a\u5b58\u6d3b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9F-Queue\u4e2d\u7684\u5bf9\u8c61\u8fdb\u884c\u7b2c\u4e8c\u6b21\u5c0f\u89c4\u6a21\u6807\u8bb0"),(0,r.kt)("p",{parentName:"li"},"\u79fb\u9664\u91cd\u65b0\u5173\u8054\u4e0a\u7684\u5bf9\u8c61"))))),(0,r.kt)("h2",{id:"6-\u53ef\u4f5c\u4e3a-gc-root-\u7684\u5bf9\u8c61"},"6. \u53ef\u4f5c\u4e3a GC Root \u7684\u5bf9\u8c61"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6808\u5e27\u4e2d\u672c\u5730\u53d8\u91cf\u8868\u4e2d\u5f15\u7528\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u533a\u4e2d\u9759\u6001\u5c5e\u6027\u5f15\u7528\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u533a\u4e2d\u5e38\u91cf\u5f15\u7528\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u65b9\u6cd5\u6808\u4e2dJNI\u5f15\u7528\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u5185\u90e8\u7684\u5f15\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u88ab\u540c\u6b65\u9501\uff08synchronized\u5173\u952e\u5b57\uff09\u6301\u6709\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u53cd\u5e94Java\u865a\u62df\u673a\u5185\u90e8\u60c5\u51b5\u7684JM XBean\u3001JVM TI \u4e2d\u6ce8\u518c\u7684\u56de\u8c03\u3001\u672c\u5730\u4ee3\u7801\u7f13\u5b58\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u5783\u573e\u6536\u96c6\u5668\u7684\u7279\u6027\u800c\u52a0\u5165\u7684\u5bf9\u8c61")),(0,r.kt)("h2",{id:"7-gc-\u7b97\u6cd5"},"7. GC \u7b97\u6cd5"),(0,r.kt)("h2",{id:"8-gc\u6536\u96c6\u5668"},"8. GC\u6536\u96c6\u5668"),(0,r.kt)("h2",{id:"9-\u7c7b\u52a0\u8f7d\u673a\u5236"},"9. \u7c7b\u52a0\u8f7d\u673a\u5236"),(0,r.kt)("h2",{id:"10\u7c7b\u52a0\u8f7d\u8fc7\u7a0b"},"10.\u7c7b\u52a0\u8f7d\u8fc7\u7a0b"),(0,r.kt)("h2",{id:"11-\u53cc\u4eb2\u59d4\u6d3e\u673a\u5236"},"11. \u53cc\u4eb2\u59d4\u6d3e\u673a\u5236"),(0,r.kt)("h2",{id:"12-\u7c7b\u52a0\u8f7d\u5668\u6709\u54ea\u4e9b"},"12. \u7c7b\u52a0\u8f7d\u5668\u6709\u54ea\u4e9b"))}N.isMDXComponent=!0}}]);