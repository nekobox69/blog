"use strict";(self.webpackChunkwhnhn=self.webpackChunkwhnhn||[]).push([[4452],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),o=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=o(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(t),m=a,d=c["".concat(s,".").concat(m)]||c[m]||k[m]||i;return t?l.createElement(d,r(r({ref:n},u),{},{components:t})):l.createElement(d,r({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,r[1]=p;for(var o=2;o<i;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var l=t(7462),a=(t(7294),t(3905));const i={},r="Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",p={permalink:"/tech/Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",source:"@site/tech/Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f.md",title:"Redis \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",description:"Redis \u662f\u4e00\u4e2a key-value \u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u901a\u5e38\u7528\u6765\u505a\u7f13\u5b58\uff0c\u4e5f\u6709\u4eba\u7528\u6765\u505a\u6570\u636e\u5e93\u3002\u7136\u800c\u5b83\u8fd8\u63d0\u4f9b\u4e86\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u901a\u8fc7\u8fd9\u79cd\u6a21\u5f0f\u5c31\u53ef\u4ee5\u628a\u5b83\u5f53\u4f5c MQ \u6765\u7528\u3002",date:"2020-07-03T14:23:45.000Z",formattedDate:"2020\u5e747\u67083\u65e5",tags:[],readingTime:5.52,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6",permalink:"/tech/JVM \u5fc5\u4f1a\u7684\u77e5\u8bc6"},nextItem:{title:"NSQ \u4ecb\u7ecd",permalink:"/tech/NSQ \u57fa\u7840\u77e5\u8bc6"}},s={authorsImageUrls:[]},o=[{value:"\u5de5\u4f5c\u6a21\u5f0f",id:"\u5de5\u4f5c\u6a21\u5f0f",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",level:3},{value:"PSUBSCRIBE",id:"psubscribe",level:4},{value:"SUBSCRIBE",id:"subscribe",level:4},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:3},{value:"PUBLISH",id:"publish",level:4},{value:"\u9000\u8ba2",id:"\u9000\u8ba2",level:3},{value:"PUNSUBSCRIBE",id:"punsubscribe",level:4},{value:"UNSUBSCRIBE",id:"unsubscribe",level:4},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:3},{value:"PUBSUB",id:"pubsub",level:4},{value:"\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5",id:"\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5",level:2},{value:"\u5b9e\u6218",id:"\u5b9e\u6218",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2}],u={toc:o},c="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Redis \u662f\u4e00\u4e2a key-value \u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u901a\u5e38\u7528\u6765\u505a\u7f13\u5b58\uff0c\u4e5f\u6709\u4eba\u7528\u6765\u505a\u6570\u636e\u5e93\u3002\u7136\u800c\u5b83\u8fd8\u63d0\u4f9b\u4e86\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u901a\u8fc7\u8fd9\u79cd\u6a21\u5f0f\u5c31\u53ef\u4ee5\u628a\u5b83\u5f53\u4f5c MQ \u6765\u7528\u3002"),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u6a21\u5f0f"},"\u5de5\u4f5c\u6a21\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53d1\u9001\u8005"),"\uff1a\u53ea\u8d1f\u8d23\u5411\u8ba2\u9605\u9891\u9053\u53d1\u5e03\u6d88\u606f\uff0c\u4e0d\u9700\u8981\u5173\u5fc3\u88ab\u8c01\u8ba2\u9605\u3001\u6709\u591a\u5c11\u8ba2\u9605\u8005"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8ba2\u9605\u8005"),"\uff1a\u53ea\u8d1f\u8d23\u8ba2\u9605\u611f\u5174\u8da3\u7684\u9891\u9053\uff08\u53ef\u4ee5 1 \u4e2a\u6216\u591a\u4e2a\uff09\uff0c\u5e76\u4e0d\u9700\u8981\u77e5\u9053\u53d1\u5e03\u8005\u662f\u8c01"),(0,a.kt)("p",null,"\u53d1\u9001\u8005\u4e0e\u8ba2\u9605\u8005\u5b8c\u5168\u89e3\u8026\uff0c\u5177\u6709\u66f4\u5927\u7684\u53ef\u4f38\u7f29\u6027\u548c\u52a8\u6001\u6027\u3002\uff08\u4e0e NSQ \u539f\u7406\u5f88\u7c7b\u4f3c\uff09"),(0,a.kt)("p",null,"\u5f53\u7136\uff0cRedis \u4e0d\u662f\u4e13\u95e8\u7684 MQ\uff0c\u5177\u6709\u5c40\u9650\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u8ba2\u9605\u540e\u624d\u80fd\u6d88\u8d39\uff0c\u6ca1\u8ba2\u9605\u524d\u7684\u6d88\u606f\u65e0\u6cd5\u6536\u5230"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u786e\u4fdd\u6d88\u606f\u7684\u9001\u8fbe"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591a\u6b21\u6d88\u8d39")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u6d88\u606f\u4f20\u9012\u6709\u8981\u6c42\u7684\u573a\u666f\u8fd8\u662f\u8001\u8001\u5b9e\u5b9e\u53bb\u7528\u4f20\u7edf\u7684 MQ \u5427\u3002")),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u63d0\u4f9b\u4e86 6 \u79cd\u64cd\u4f5c\u547d\u4ee4\u3002"),(0,a.kt)("h3",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,a.kt)("h4",{id:"psubscribe"},"PSUBSCRIBE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PSUBSCRIBE pattern [pattern ...]")),(0,a.kt)("p",null,"\u8ba2\u9605\u4e00\u4e2a\u6216\u591a\u4e2a\u7b26\u5408\u7ed9\u5b9a\u6a21\u5f0f\uff08\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\u7684\u9891\u9053\u3002"),(0,a.kt)("h4",{id:"subscribe"},"SUBSCRIBE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SUBSCRIBE channel [channel ...]")),(0,a.kt)("p",null,"\u8ba2\u9605\u7ed9\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u9891\u9053\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u53d1\u5e03"},"\u53d1\u5e03"),(0,a.kt)("h4",{id:"publish"},"PUBLISH"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUBLISH channel message")),(0,a.kt)("p",null,"\u5c06\u4fe1\u606f\u53d1\u9001\u5230\u6307\u5b9a\u7684\u9891\u9053\u3002"),(0,a.kt)("h3",{id:"\u9000\u8ba2"},"\u9000\u8ba2"),(0,a.kt)("h4",{id:"punsubscribe"},"PUNSUBSCRIBE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUNSUBSCRIBE [pattern [pattern ...]]")),(0,a.kt)("p",null,"\u9000\u8ba2\u7ed9\u5b9a\u6a21\u5f0f\uff08\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\u7684\u9891\u9053\uff0c\u65e0\u53c2\u5219\u9000\u8ba2\u5168\u90e8\u3002"),(0,a.kt)("h4",{id:"unsubscribe"},"UNSUBSCRIBE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBE [channel [channel ...]]")),(0,a.kt)("p",null,"\u9000\u8ba2\u7ed9\u5b9a\u7684\u9891\u9053\u3002"),(0,a.kt)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,a.kt)("h4",{id:"pubsub"},"PUBSUB"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUBSUB subcommand [argument [argument ...]]")),(0,a.kt)("p",null,"\u67e5\u770b\u8ba2\u9605\u4e0e\u53d1\u5e03\u7cfb\u7edf\u72b6\u6001"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUBSUB CHANNELS [pattern]")),(0,a.kt)("p",null,"\u5217\u51fa\u5f53\u524d\u6d3b\u52a8\u7684\u901a\u9053\u3002\u6d3b\u52a8\u901a\u9053\u662f\u5e26\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u8ba2\u9605\u8005\uff08\u4e0d\u5305\u62ec\u8ba2\u9605\u6a21\u5f0f\u7684\u5ba2\u6237\u7aef\uff09\u7684\u53d1\u5e03/\u8ba2\u9605\u901a\u9053\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUBSUB NUMSUB [channel-1 ... channel-N]")),(0,a.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u901a\u9053\u7684\u8ba2\u9605\u65b9\u6570\u91cf\uff08\u4e0d\u5305\u62ec\u8ba2\u9605\u6a21\u5f0f\u7684\u5ba2\u6237\u7aef\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUBSUB NUMPAT")),(0,a.kt)("p",null,"\u8fd4\u56de\u6a21\u5f0f\u7684\u8ba2\u9605\u6570\u91cf\uff08\u4f7f\u7528 PSUBSCRIBE \u547d\u4ee4\u6267\u884c\uff09\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e0d\u4ec5\u662f\u8ba2\u9605\u6a21\u5f0f\u7684\u5ba2\u6237\u7aef\u6570\u91cf\uff0c\u800c\u4e14\u662f\u6240\u6709\u5ba2\u6237\u7aef\u8ba2\u9605\u6a21\u5f0f\u7684\u603b\u6570\u3002"),(0,a.kt)("h2",{id:"\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5"},"\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u9700\u8981\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5\uff0c\u5373\u9700\u8981\u8bbe\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"notify-keyspace-events"),"\u53c2\u6570\uff0c\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u7684\uff08\u8bb0\u5f97\u6539\u914d\u7f6e\u6587\u4ef6\u65f6\u4fdd\u6301\u5f15\u53f7\uff0c\u547d\u4ee4\u884c\u4e0d\u9700\u8981\u5f15\u53f7\uff09\uff0c\u9ed8\u8ba4\u662f\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"notify-keyspace-events"),"\u6709\u4ee5\u4e0b\u53c2\u6570\uff08\u57fa\u4e8e Redis 6.0.5\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"K"),"\uff1a\u952e\u7a7a\u95f4\u4e8b\u4ef6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"keyspace@<db>")," \u524d\u7f00\u53d1\u5e03"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),"\uff1a\u952e\u7a7a\u95f4\u4e8b\u4ef6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"keyevent@<db>")," \u524d\u7f00\u53d1\u5e03"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"g"),"\uff1a\u6cdb\u578b\u547d\u4ee4\uff08\u975e\u7c7b\u578b\u7279\u5b9a\uff09\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"DEL"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"EXPIRE"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"RENAME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$"),"\uff1aString \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"l"),"\uff1aList \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s"),"\uff1aSet \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h"),"\uff1aHash \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"z"),"\uff1aSortedSet \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\uff1a\u8fc7\u671f\u4e8b\u4ef6\uff0c\u6bcf\u6b21\u952e\u8fc7\u671f\u65f6\u751f\u6210\u7684\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"e"),"\uff1a\u9a71\u9010\u4e8b\u4ef6\uff0c\u7531\u4e8e\u952e\u8fbe\u5230 max memory \u800c\u751f\u6210\u7684\u9a71\u9010\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"t"),"\uff1aStream \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m"),"\uff1a\u952e\u9519\u8fc7\u4e8b\u4ef6\uff08key-miss event\uff09\uff0c\u6ce8\u610f\uff1a\u5b83\u4e0d\u5305\u62ec\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"g$lshzxet"),"\u7684\u522b\u540d\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"AKE"),"\u5c31\u4ee3\u8868\u4e86\u6240\u6709\u4e8b\u4ef6\uff08\u9664\u4e86\u56e0\u5176\u72ec\u7279\u7684\u6027\u8d28\u800c\u88ab\u6392\u9664\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u4e4b\u5916\u7684\u5173\u952e\u9057\u6f0f\u4e8b\u4ef6\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u521d\u89c1",(0,a.kt)("inlineCode",{parentName:"p"},"key-miss event"),"\u6ca1\u53cd\u5e94\u8fc7\u6765\u662f\u6307\u7684\u4ec0\u4e48\uff0c\u540e\u6765\u624d\u660e\u767d\uff0c\u662f\u8bbf\u95ee\u7684 key \u4e0d\u5728 Redis \u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u5b9e\u6218"},"\u5b9e\u6218"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u542f\u4e8b\u4ef6\u901a\u77e5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> redis-cli config set notify-keyspace-events KEAm\nOK\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"m"),"\u5728 Redis 6 \u4ee5\u4e0a\u624d\u652f\u6301"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8ba2\u9605\u9891\u9053"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> redis-cli psubscribe *\nReading messages... (press Ctrl-C to quit)\n1) "subscribe"\n2) "test"\n3) (integer) 1\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64cd\u4f5c"),(0,a.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u5185\u5bb9\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> redis-cli publish test testp\n(integer) 1\n> redis-cli set a hello\nOK\n> redis-cli get b\n(nil)\n> redis-cli set c hello EX 2\nOK\n\n")),(0,a.kt)("p",{parentName:"li"},"\u8ba2\u9605\u7a97\u53e3\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> redis-cli psubscribe *\nReading messages... (press Ctrl-C to quit)\n1) "psubscribe"\n2) "*"\n3) (integer) 1\n# redis-cli publish test testp\n1) "pmessage"\n2) "*"\n3) "test"\n4) "testp"\n# redis-cli set a hello\n1) "pmessage"\n2) "*"\n3) "__keyspace@0__:a"\n4) "set"\n1) "pmessage"\n2) "*"\n3) "__keyevent@0__:set"\n4) "a"\n# redis-cli get b\n1) "pmessage"\n2) "*"\n3) "__keyspace@0__:b"\n4) "keymiss"\n1) "pmessage"\n2) "*"\n3) "__keyevent@0__:keymiss"\n4) "b"\n# redis-cli set c hello EX 2\n1) "pmessage"\n2) "*"\n3) "__keyspace@0__:c"\n4) "set"\n1) "pmessage"\n2) "*"\n3) "__keyevent@0__:set"\n4) "c"\n1) "pmessage"\n2) "*"\n3) "__keyspace@0__:c"\n4) "expire"\n1) "pmessage"\n2) "*"\n3) "__keyevent@0__:expire"\n4) "c"\n1) "pmessage"\n2) "*"\n3) "__keyspace@0__:c"\n4) "expired"\n1) "pmessage"\n2) "*"\n3) "__keyevent@0__:expired"\n4) "c"\n')))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("p",null,"\u7528 Go \u6765\u5b9e\u73b0\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("p",null,"\u5148\u521d\u59cb\u5316\u5de5\u7a0b\uff0c\u5e76\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-redis/redis",title:"go-redis"},"go-redis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> go mod init redis-robot\ngo: creating new go.mod: module redis-robot\n> go get github.com/go-redis/redis/v8\n")),(0,a.kt)("p",null,"main.go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Package main Nekobox69 Create at 2020-07-03 21:44\npackage main\n\nimport (\n    "log"\n    "strings"\n    "time"\n\n    "github.com/go-redis/redis/v8"\n)\n\nconst channel = "test"\n\nfunc robot(client *redis.Client) {\n    ctx := client.Context()\n\n    sub := client.PSubscribe(ctx, channel)\n    defer sub.Close()\n    for {\n        message, err := sub.ReceiveMessage(ctx)\n        if nil != err {\n            log.Println(err.Error())\n            continue\n        }\n        log.Printf("Receive: %+v\\n", *message)\n    }\n}\n\nfunc main() {\n    client := redis.NewClient(&redis.Options{\n    Addr:     "localhost:6379",\n        Password: "", // no password set\n        DB:       0,  // use default DB\n    })\n    ctx := client.Context()\n    _, err := client.Ping(ctx).Result()\n    if nil != err {\n        log.Fatal(err.Error())\n    }\n    go robot(client)\n    client.Publish(ctx, channel, "hi")\n    time.Sleep(10*time.Second)\n}\n')))}k.isMDXComponent=!0}}]);