"use strict";(self.webpackChunkwhnhn=self.webpackChunkwhnhn||[]).push([[2096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={tags:["golang","\u538b\u7f29"]},o="Golang \u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab",i={permalink:"/blog/tech/Golang\u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab",source:"@site/tech/Golang\u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab.md",title:"Golang \u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab",description:"\u51cf\u5c11\u7f16\u8bd1\u94fe\u63a5",date:"2023-03-05T06:20:47.000Z",formattedDate:"2023\u5e743\u67085\u65e5",tags:[{label:"golang",permalink:"/blog/tech/tags/golang"},{label:"\u538b\u7f29",permalink:"/blog/tech/tags/\u538b\u7f29"}],readingTime:.925,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["golang","\u538b\u7f29"]},prevItem:{title:"Golang \u7f16\u8bd1\u65f6\u6307\u5b9a\u53c2\u6570",permalink:"/blog/tech/Golang\u7f16\u8bd1\u65f6\u6307\u5b9a\u53c2\u6570"},nextItem:{title:"Nginx SSL A+ \u8bc4\u7ea7\u914d\u7f6e",permalink:"/blog/tech/NginxSSLAPlus\u914d\u7f6e"}},p={authorsImageUrls:[]},u=[{value:"\u51cf\u5c11\u7f16\u8bd1\u94fe\u63a5",id:"\u51cf\u5c11\u7f16\u8bd1\u94fe\u63a5",level:2},{value:"UPX \u538b\u7f29",id:"upx-\u538b\u7f29",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u51cf\u5c11\u7f16\u8bd1\u94fe\u63a5"},"\u51cf\u5c11\u7f16\u8bd1\u94fe\u63a5"),(0,a.kt)("p",null,"\u7f16\u8bd1\u65f6\u901a\u8fc7\u51cf\u5c11\u94fe\u63a5\uff0c\u51cf\u5c11\u4f53\u79ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'go build -ldflags="-s -w" main.go\n')),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s"),": Omit the symbol table and debug information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-w"),": Omit the DWARF symbol table.")),(0,a.kt)("h2",{id:"upx-\u538b\u7f29"},"UPX \u538b\u7f29"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/upx/upx"},"upx")," \u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u538b\u7f29\u5de5\u5177\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5e2e\u52a9\u538b\u7f29\u7f16\u8bd1\u51fa\u6765\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"upx [options] file\n")),(0,a.kt)("p",null,"\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-1[23456789]"),"\uff1a\u4e0d\u540c\u7684\u538b\u7f29\u7ea7\u522b\uff0c\u6570\u503c\u8d8a\u9ad8\u538b\u7f29\u7387\u8d8a\u9ad8\uff0c\u4f46\u8017\u65f6\u66f4\u957f\u3002\u5bf9\u4e8e\u5c0f\u4e8e 512 KiB \u7684\u6587\u4ef6\u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-8"),"\uff0c\u5176\u4ed6\u7684\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"-7")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--best"),"\uff1a\u6700\u9ad8\u538b\u7f29\u7ea7\u522b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--brute"),"\uff1a\u5c1d\u8bd5\u4f7f\u7528\u5404\u79cd\u538b\u7f29\u65b9\u5f0f\u6765\u83b7\u53d6\u6700\u9ad8\u538b\u7f29\u6bd4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--ultra-brute"),"\uff1a\u5c1d\u8bd5\u4f7f\u7528\u66f4\u591a\u7684\u53c2\u6570\u6765\u83b7\u53d6\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-o [file]"),"\uff1a\u5c06\u538b\u7f29\u6587\u4ef6\u4fdd\u5b58\u4e3a ","[file]"))))}s.isMDXComponent=!0}}]);