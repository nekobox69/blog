"use strict";(self.webpackChunkwhnhn=self.webpackChunkwhnhn||[]).push([[9763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>S});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,S=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(S,c(c({ref:t},p),{},{components:r})):n.createElement(S,c({ref:t},p))}));function S(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c="Nginx SSL A+ \u8bc4\u7ea7\u914d\u7f6e",l={permalink:"/blog/tech/NginxSSLAPlus\u914d\u7f6e",source:"@site/tech/NginxSSLAPlus\u914d\u7f6e.md",title:"Nginx SSL A+ \u8bc4\u7ea7\u914d\u7f6e",description:"",date:"2023-03-05T06:20:47.000Z",formattedDate:"2023\u5e743\u67085\u65e5",tags:[],readingTime:.355,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Golang \u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab",permalink:"/blog/tech/Golang\u8fd0\u884c\u7a0b\u5e8f\u7626\u8eab"},nextItem:{title:"\u81ea\u5b9a\u4e49SpringBoot Starter",permalink:"/blog/tech/\u81ea\u5b9a\u4e49SpringBootStarter"}},i={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'server {\n        listen       443 ssl http2;\n        listen       [::]:443 ssl http2;\n        server_name  _;\n        root         /usr/share/nginx/html;\n        add_header Strict-Transport-Security "max-age=36000000; includeSubdomain                                                                                                                                                                                               s; preload";\n        ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;\n        ssl_certificate /etc/nginx/certs/server.crt;\n        ssl_certificate_key /etc/nginx/certs/server.key;\n        ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:EC                                                                                                                                                                                               DHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-S                                                                                                                                                                                               HA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA                                                                                                                                                                                               384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256;\n\n        # Load configuration files for the default server block.\n        # include /etc/nginx/default.d/*.conf;\n\n        location / {\n        }\n\n        error_page 404 /404.html;\n            location = /40x.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n')))}f.isMDXComponent=!0}}]);