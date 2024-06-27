(function(){"use strict";var e={860:function(e,t,o){var r=o(751),s=o(641);const n={id:"app"};function a(e,t,o,r,a,l){const c=(0,s.g2)("Home");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(c)])}var l=o(33);const c={class:"container"};function i(e,t,o,r,n,a){const i=(0,s.g2)("HeaderComponent"),u=(0,s.g2)("FiltersComponent"),h=(0,s.g2)("SearchComponent"),d=(0,s.g2)("SchoolList"),p=(0,s.g2)("DetailsCard");return(0,s.uX)(),(0,s.CE)("div",c,[(0,s.Lk)("div",{class:(0,l.C4)({"blur-background":n.selectedSchool})},[(0,s.bF)(i,{onSourceChange:a.onSourceChange},null,8,["onSourceChange"]),(0,s.bF)(u,{onFilterChange:a.onFilterChange},null,8,["onFilterChange"]),(0,s.bF)(h,{onSearch:a.onSearch},null,8,["onSearch"]),(0,s.bF)(d,{schools:n.schools,selectedFilters:n.selectedFilters,searchQuery:n.searchQuery,onShowDetails:a.showDetails},null,8,["schools","selectedFilters","searchQuery","onShowDetails"])],2),n.selectedSchool?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"overlay",onClick:t[0]||(t[0]=(...e)=>a.hideDetails&&a.hideDetails(...e))})):(0,s.Q3)("",!0),n.selectedSchool?((0,s.uX)(),(0,s.Wv)(p,{key:1,school:n.selectedSchool},null,8,["school"])):(0,s.Q3)("",!0)])}const u=e=>((0,s.Qi)("data-v-7c22afa2"),e=e(),(0,s.jt)(),e),h=u((()=>(0,s.Lk)("h1",null,"CS BAOYAN Deadlines",-1))),d=u((()=>(0,s.Lk)("p",null,[(0,s.eW)(" 计算机保研DDL， "),(0,s.Lk)("a",{href:"https://github.com/CS-BAOYAN/cs-baoyan-ddl"},"GitHub链接"),(0,s.eW)("， 欢迎PR。 ")],-1))),p=u((()=>(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,"声明:"),(0,s.eW)(" 本网站排序使用时间+字典序排序，DDL均为人为收集，起到参考作用，如有错误不承担任何责任。 ")],-1))),m=u((()=>(0,s.Lk)("p",null," 全部DDL的显示使用 Asia/Shanghai 时间。一切20XX年XX月XX日截至的夏令营/预推免，在DDL中均显示为20XX年XX月XX+1日零点。 ",-1))),g={id:"dropdown-container"},f=u((()=>(0,s.Lk)("label",{for:"source-select"},"选择数据源:",-1))),v=u((()=>(0,s.Lk)("option",{value:"camp2024"},"夏令营2024",-1))),C=u((()=>(0,s.Lk)("option",{value:"yutuimian2024"},"预推免2024",-1))),k=[v,C];function b(e,t,o,n,a,l){return(0,s.uX)(),(0,s.CE)("header",null,[h,d,p,m,(0,s.Lk)("div",g,[f,(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedSource=e),onChange:t[1]||(t[1]=(...e)=>l.onSourceChange&&l.onSourceChange(...e)),id:"source-select"},k,544),[[r.u1,a.selectedSource]])])])}var y={name:"HeaderComponent",data(){return{selectedSource:"camp2024"}},methods:{onSourceChange(){this.$emit("source-change",this.selectedSource)}}},S=o(262);const L=(0,S.A)(y,[["render",b],["__scopeId","data-v-7c22afa2"]]);var _=L;const F={class:"filters"},X=["value"];function w(e,t,o,n,a,c){return(0,s.uX)(),(0,s.CE)("div",F,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.filters,(e=>((0,s.uX)(),(0,s.CE)("label",{key:e},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",value:e,"onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedFilters=e),onChange:t[1]||(t[1]=(...e)=>c.onFilterChange&&c.onFilterChange(...e))},null,40,X),[[r.lH,a.selectedFilters]]),(0,s.eW)(" "+(0,l.v_)(e),1)])))),128))])}var D={name:"FiltersComponent",data(){return{filters:["TOP2","华五","C9","985","211","双非","四非","研究院","联培","已开营","已结营"],selectedFilters:[]}},methods:{onFilterChange(){this.$emit("filter-change",this.selectedFilters)}}};const A=(0,S.A)(D,[["render",w],["__scopeId","data-v-3943b263"]]);var E=A;const Q={class:"search-container"};function I(e,t,o,n,a,l){return(0,s.uX)(),(0,s.CE)("div",Q,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.searchQuery=e),onInput:t[1]||(t[1]=(...e)=>l.onSearch&&l.onSearch(...e)),placeholder:"搜索学校或学院...",class:"search-input"},null,544),[[r.Jo,a.searchQuery]]),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.clearSearch&&l.clearSearch(...e)),class:"clear-search"},"清空搜索")])}var N={name:"SearchComponent",data(){return{searchQuery:""}},methods:{onSearch(){this.$emit("search",this.searchQuery)},clearSearch(){this.searchQuery="",this.$emit("search",this.searchQuery)}}};const O=(0,S.A)(N,[["render",I],["__scopeId","data-v-9aaf287a"]]);var j=O;const R=e=>((0,s.Qi)("data-v-ee161024"),e=e(),(0,s.jt)(),e),$={id:"school-list"},W=["onClick"],P=R((()=>(0,s.Lk)("strong",null,"日期:",-1))),x=R((()=>(0,s.Lk)("strong",null,"网址:",-1))),H=["href"],K={class:"tags"},T={class:"progress-container"};function M(e,t,o,r,n,a){const c=(0,s.g2)("ProgressRing");return(0,s.uX)(),(0,s.CE)("div",$,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.filteredSchools,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:(0,l.C4)(["school",e.timeRemaining===1/0?"red":"green"]),onClick:t=>a.showDetails(e)},[(0,s.Lk)("div",null,[(0,s.Lk)("h2",null,(0,l.v_)(e.name)+" "+(0,l.v_)(e.institute),1),(0,s.Lk)("p",null,(0,l.v_)(e.description),1),(0,s.Lk)("p",null,[P,(0,s.eW)(" "+(0,l.v_)(e.date),1)]),(0,s.Lk)("p",null,[x,(0,s.eW)(),(0,s.Lk)("a",{href:e.website,target:"_blank"},(0,l.v_)(e.website),9,H)]),(0,s.Lk)("div",K,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.tags,(e=>((0,s.uX)(),(0,s.CE)("span",{key:e,style:(0,l.Tr)({color:a.hashColor(e),borderColor:a.hashColor(e)})},(0,l.v_)(e),5)))),128))])]),(0,s.Lk)("div",T,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.progress,((t,o)=>((0,s.uX)(),(0,s.Wv)(c,{key:o,label:o,progress:t,num:e.times[o]},null,8,["label","progress","num"])))),128))])],10,W)))),128))])}const U=e=>((0,s.Qi)("data-v-4e0156f4"),e=e(),(0,s.jt)(),e),V={class:"progress-ring"},B={width:"100",height:"100"},Y=U((()=>(0,s.Lk)("circle",{class:"progress-ring__circle-bg",cx:"50",cy:"50",r:"40"},null,-1))),z=["stroke-dasharray","stroke-dashoffset"],G={class:"progress-ring__label"};function J(e,t,o,r,n,a){return(0,s.uX)(),(0,s.CE)("div",V,[((0,s.uX)(),(0,s.CE)("svg",B,[Y,(0,s.Lk)("circle",{class:"progress-ring__circle","stroke-dasharray":a.circumference,"stroke-dashoffset":a.offset,cx:"50",cy:"50",r:"40"},null,8,z)])),(0,s.Lk)("div",G,(0,l.v_)(a.labelName),1)])}var q={props:{label:String,progress:Number,num:[Number,String]},computed:{circumference(){return 2*Math.PI*40},offset(){return this.circumference-this.progress/100*this.circumference},labelName(){return"N/A"===this.num?`${this.num}`:`${this.num} ${this.label}`}}};const Z=(0,S.A)(q,[["render",J],["__scopeId","data-v-4e0156f4"]]);var ee=Z,te={components:{ProgressRing:ee},props:{schools:Array,selectedFilters:Array,searchQuery:String},computed:{filteredSchools(){const e=new Date;return this.schools.filter((e=>{const t=0===this.selectedFilters.length||this.selectedFilters.every((t=>e.tags.includes(t))),o=""===this.searchQuery||e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.institute.toLowerCase().includes(this.searchQuery.toLowerCase());return t&&o})).map((t=>{if("N/A"!==t.deadline&&""!==t.deadline){const o=new Date(t.deadline),r=o-e;if(r>=0){const e=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),n=Math.floor(r%36e5/6e4),a=Math.floor(r%6e4/1e3);t.date=this.formatDate(o),t.timeRemaining=r,t.countdown=`${e} 天 ${s} 小时 ${n} 分钟 ${a} 秒`,t.times={days:e,hours:s,minutes:n,seconds:a},t.progress={days:e/90*100,hours:s/24*100,minutes:n/60*100,seconds:a/60*100}}else t.timeRemaining=1/0,t.countdown="已经结束",t.date=this.formatDate(o),t.times={days:0,hours:0,minutes:0,seconds:0},t.progress={days:100,hours:100,minutes:100,seconds:100}}else t.timeRemaining=1e10,t.countdown="N/A",t.date="N/A",t.times={days:"N/A",hours:"N/A",minutes:"N/A",seconds:"N/A"},t.progress={days:0,hours:0,minutes:0,seconds:0};return t})).sort(((e,t)=>e.timeRemaining===t.timeRemaining?e.name.localeCompare(t.name):e.timeRemaining-t.timeRemaining))}},methods:{formatDate(e){const t={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1};return new Intl.DateTimeFormat("zh-CN",t).format(e)},hashColor(e){let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);const o=(16777215&t).toString(16).toUpperCase();return"#"+"00000".substring(0,6-o.length)+o},showDetails(e){this.$emit("show-details",e)}}};const oe=(0,S.A)(te,[["render",M],["__scopeId","data-v-ee161024"]]);var re=oe;const se=e=>((0,s.Qi)("data-v-36a44746"),e=e(),(0,s.jt)(),e),ne=se((()=>(0,s.Lk)("strong",null,"日期:",-1))),ae=se((()=>(0,s.Lk)("strong",null,"网址:",-1))),le=["href"],ce={class:"tags"},ie={class:"progress-container"};function ue(e,t,o,n,a,c){const i=(0,s.g2)("ProgressRing");return(0,s.uX)(),(0,s.CE)("div",{class:"details-card",onClick:t[0]||(t[0]=(0,r.D$)((()=>{}),["stop"]))},[(0,s.Lk)("div",null,[(0,s.Lk)("h2",null,(0,l.v_)(o.school.name)+" "+(0,l.v_)(o.school.institute),1),(0,s.Lk)("p",null,(0,l.v_)(o.school.description),1),(0,s.Lk)("p",null,[ne,(0,s.eW)(" "+(0,l.v_)(o.school.date),1)]),(0,s.Lk)("p",null,[ae,(0,s.eW)(),(0,s.Lk)("a",{href:o.school.website,target:"_blank"},(0,l.v_)(o.school.website),9,le)]),(0,s.Lk)("div",ce,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.school.tags,(e=>((0,s.uX)(),(0,s.CE)("span",{key:e,style:(0,l.Tr)({color:c.hashColor(e),borderColor:c.hashColor(e)})},(0,l.v_)(e),5)))),128))]),(0,s.Lk)("div",ie,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.school.progress,((e,t)=>((0,s.uX)(),(0,s.Wv)(i,{key:t,label:t,progress:e,num:o.school.times[t]},null,8,["label","progress","num"])))),128))])])])}var he={components:{ProgressRing:ee},props:{school:Object},methods:{hashColor(e){let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);const o=(16777215&t).toString(16).toUpperCase();return"#"+"00000".substring(0,6-o.length)+o}}};const de=(0,S.A)(he,[["render",ue],["__scopeId","data-v-36a44746"]]);var pe=de,me={name:"HomeView",components:{HeaderComponent:_,FiltersComponent:E,SearchComponent:j,SchoolList:re,DetailsCard:pe},data(){return{schools:[],selectedFilters:[],searchQuery:"",currentSource:"camp2024",selectedSchool:null}},methods:{loadData(e){fetch("/cs-baoyan-ddl/config/schools.json").then((e=>e.json())).then((t=>{this.schools=t[e]}))},onSourceChange(e){this.currentSource=e,this.loadData(e)},onFilterChange(e){this.selectedFilters=e},onSearch(e){this.searchQuery=e},showDetails(e){this.selectedSchool=e},hideDetails(){this.selectedSchool=null}},mounted(){this.loadData(this.currentSource),setInterval((()=>{this.loadData(this.currentSource)}),1e3)}};const ge=(0,S.A)(me,[["render",i],["__scopeId","data-v-2265e8f0"]]);var fe=ge,ve={name:"App",components:{Home:fe}};const Ce=(0,S.A)(ve,[["render",a]]);var ke=Ce;(0,r.Ef)(ke).mount("#app")}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,n){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(l=!1,n<a&&(a=n));if(l){e.splice(u--,1);var i=s();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,a=r[0],l=r[1],c=r[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(c)var u=c(o)}for(t&&t(r);i<a.length;i++)n=a[i],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self["webpackChunkcs_baoyan_ddl"]=self["webpackChunkcs_baoyan_ddl"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(860)}));r=o.O(r)})();
//# sourceMappingURL=app.e26047e8.js.map