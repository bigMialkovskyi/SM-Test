/* HouseHold LegacyMode */
(()=>{var ht=Object.defineProperty,ge=Object.defineProperties,le=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyDescriptors;var kt=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ft=(o,t,e)=>t in o?ht(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,P=(o,t)=>{for(var e in t||(t={}))ue.call(t,e)&&ft(o,e,t[e]);if(kt)for(var e of kt(t))de.call(t,e)&&ft(o,e,t[e]);return o},R=(o,t)=>ge(o,ce(t)),i=(o,t)=>ht(o,"name",{value:t,configurable:!0});var c=(o,t,e,r)=>{for(var n=r>1?void 0:r?le(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(n=(r?a(t,e,n):a(n))||n);return r&&n&&ht(t,e,n),n};var l=(o,t,e)=>(ft(o,typeof t!="symbol"?t+"":t,e),e);var S=(o,t,e)=>new Promise((r,n)=>{var s=m=>{try{u(e.next(m))}catch(d){n(d)}},a=m=>{try{u(e.throw(m))}catch(d){n(d)}},u=m=>m.done?r(m.value):Promise.resolve(m.value).then(s,a);u((e=e.apply(o,t)).next())});var g={modules:["LegacyLayer","SignalsIds","SignalsBsc","SignalsVlp","SignalsTvp","SignalsAbs","SignalsAutoInsertion","GptMeasurement","EverydayHealthConfig","TimeConfig","VoxMediaConfig","PrisaConfig"],configs:{"RFY3MTg2ODU=":[0,1],RFYxMTA2NjUz:[0,1,2,3,4,5,6],"RFY5NzQ3MzA=":[0,1,2,3,4],RFYxMzI3NzYx:[0,1,2,6],RFYxMTU3NzY0:[0,1,2,3,4,6],"RFY0NjUxNTc=":[0,1,2,3,6],RFYxMjAzNDUy:[0,1,2,3,4,6],RFYxMDU4Nzk0:[0,1,2,3,4,6,7,8],RFYxMjgwMTY3:[0,1,2,6],RFYxMjcwNTgx:[0,1,2,6],RFYxMDAxNjU0:[0,1,2,3,4,5,6],RFYxMjYzOTQ1:[0,1,2,6],"RFYxMTExMTE=":[0,1,2,3,4,6],RFYxMTYxMjU5:[],RFYxMTQ3ODUx:[0,1,2,3,4,6],RFYxMTgwNTc5:[0,1,2,6],RFYxMTEwOTk0:[0,1,2,3,4,5,6],"RFY2NzI1MjE=":[0,1,2,3,4,6],"RFY5NzQ3MzI=":[],"RFY4MjE5MTg=":[0,1,2,3,4,6],"RFY3MzQzNDI=":[0,1,2,3,4,5,6],"RFY5MDI5MjM=":[0,1,2,3,4,6],RFYxMTQ4MjYx:[0,1,2,3,4,5,6],RFYxMzIzOTIy:[0,1,2,3,4,5,6],"RFY3OTI4NTU=":[0,1,3,6],RFYxMjk5NDUw:[0,1,2,3,4,5,6],RFYxMjQwMTY0:[0,1,2,6],"RFY4NDY4Mjc=":[0,5,6],"RFY2ODQzNDg=":[0,1,2,3,4,5,6],"RFY0MjQ5NDA=":[0,1,2,3,6],RFYxMTQwNjg5:[6],RFYxMjIzMzY5:[0,1,2,6],"RFY4NjYwMjU=":[0,1,2,3,4,6],RFYxMDgzNzg4:[0,1,2,3,4,6],RFYxMzExMDk0:[6],RFYxMDM2Nzc2:[0,1,2,5],RFYxMjA4ODI5:[0,1,2,3,4,5,6],RFYxMTQ1NzI5:[0,1,2,6],RFYxMTYyMjEy:[0,1,2,6],"RFY3NTk1MjA=":[0,1,2,3,4,5,6,7,9],"RFYzNzU5MzU=":[0,1,2,3,6],RFYxMjgwMTQ1:[0,1,2,6],"RFY4NjQ3ODc=":[0,5,6],RFYxMzAwNjc0:[0,1,2,6],"RFY3NTc3MzA=":[0,1,2,3,4,6],"RFY5NDU5ODg=":[0,1,2,3,4,5,6],RFYxMjYzOTgw:[0,1,2,6],RFYxMjcxNDU1:[0,1,2,6],RFYxMjY0MTI2:[0,1,2,6],"RFY2NzM2NzI=":[0,1,2,3,4,5,6],RFYxMjg4NjUw:[0,1,2,6],"MTc0OTI1Mjg=":[0,1,2,3,6],RFYxMTIyMjY4:[0,1,2,6],"RFY4OTMwNTY=":[0,1,2,3,4],"RFY0NjQwMjE=":[0,1,2,3,4,5,6],RFYxMTMwNzQ4:[0,1,2,6],RFYxMTY4NjQ0:[0,1,2,3,4,6],RFYxMDE2NjU2:[0,1,2,3,4,5,6],RFYxMjUwMjAy:[0,1,2,3,4,5,6],"RFY0NjQwMzM=":[0,1,2,3,6],RFYxMzA3Mzc3:[0,1,2,3,4,5,6],"RFY3Nzc4ODU=":[0,1,2,3,4,6],"RFY5NzI5MzU=":[6],"RFY4NDQ0Njg=":[0,1,2,3,4,5,6],RFYxMDI2NTMx:[0,1,2,3,4,6],"RFY3NDg3MjI=":[0,1,2,3,4,5,6],RFYxMDcxNDY3:[0,1,2,3,4,5,6],RFYxMzIzODg3:[0,1,2,3,4,6],"RFY1ODc0MTQ=":[0,1,2,3,4,5,6],RFYxMzMwODU4:[0,1,2,3,4,5,6],RFYxMTcyOTg1:[0,1,2,3,4,5,6],RFYxMDExNDU1:[0,1,2,3,4,5,6],RFYxMzI3NzU0:[0,1,2,6],"RFY0NjQwNDE=":[0,1,10,2,3,5,6,7],RFYxMTkzODQ2:[0,1,2,6],"RFY3OTc2ODY=":[0,1,2,3,4,6],RFYxMjc5MjEw:[0,1,2,3,4,5,6],RFYxMTUzNjQ1:[0,1,2,6],"RFYzMTIwNDg=":[0,1,2,3,6],RFYxMTA4MTY0:[0,1,2,3,4,5,6],RFYxMDcwMjkx:[0,1,2,3,4,5,6],"RFY4MDU2MDE=":[0,1,3,4],RFYxMTA2MDA5:[0,1,2,3,4,5,6],"RFY4MDkxOTk=":[0,1,2,3,4,6],"RFY3Nzc1NzY=":[0,1,2,3,4,6],"RFY5MTA2Mzg=":[0,1,2],RFYxMTg3NDkx:[0,1,2,3,4,6],"RFY5Nzg2NjI=":[6],"RFY2NTE3NDQ=":[0,1,2,3,4,5,6],RFYxMjAwOTM3:[0,1,2,6],"RFY2NjkzNjE=":[0,1,2,3,4,6],RFYxMTgwNTQx:[0,1,2,6],"RFY2NzUwMzg=":[0,1,2,3,4,6],"RFY3MTA4Nzg=":[0,1,2,3,4,6],"RFYzNzQxNTg=":[0,1,2,3,6],"RFY4MzIzNDY=":[0,1,2,6],RFYxMjk4NzIy:[0,1,2,3,4,5,6],RFYxMjA4OTc5:[0,1,2,3,4,5],RFYxMDEyNjAw:[0,5],RFYxMTQ5Mzg3:[0,1,2,6],"RFY4OTY3MTQ=":[0,1,2,3,4,5,6],"RFY2NDcwODg=":[0,1,2,3,4,6],"RFY4MzIzNTM=":[0,1,2,6],RFYxMDEwNzI4:[0,1,2,3,4],RFYxMDgwMjEy:[0,5,6],RFYxMjQ2NzA1:[0,1,2,6],RFYxMzMxNjkz:[6],RFYxMTA2NzY0:[0,1,2,3,4,5,6],RFYxMTA4MDIy:[0,1,2,6],"RFY5NzQ3MzE=":[0,1,2,3,4],"RFY5NDIxOTY=":[0,1,2,3,4,5,6],RFYxMDQ0MzMw:[0,1,11,2,3,4,5,6,7],RFYxMDIzOTQ1:[0,5,6],"RFY5ODk2NzI=":[0,5,6],RFYxMjkzODQ1:[0,5,6],RFYxMTM2MTU2:[0,1,2,6],RFYxMjg5MDY0:[0,1,6],"RFY5NDMzOTk=":[0,1,2,3,4,5,6]}};var U={TYPE:"b1",COMMIT_HASH:"b2",ENTRY_MODULES:"b3",HOSTNAME:"b4",CTX:"b5",CMP:"b6",VISIT_ID:"b7",FEATURE_FLAGS:"b8",TAG_FORMAT:"b9",SAMPLE_INTERVAL:"d1",FLUSH_TO_PXSRV:"d2",_PLACEHOLDER_BLOB_10:"b10",_PLACEHOLDER_DOUBLE_3:"d3",_PLACEHOLDER_DOUBLE_4:"d4",_PLACEHOLDER_DOUBLE_5:"d5"},st=R(P({},U),{LOG_LEVEL:"b11",MESSAGE:"b12",TRACE:"b13"}),I=R(P({},U),{AD_REQUEST_STATUS:"b11",AD_REQUEST_INDEX:"d6",AD_REQUEST_DELAY:"d7",INTEGRATION_STYLE:"b12"});var St={queueAdRequest:o=>{var t;try{(t=o.callback)==null||t.call(o),o.callback=null}catch(e){}},defineSlot:(o,t)=>{},getTargeting:o=>({})};var Tt=class Tt{constructor(){l(this,"isEntryModule",!0)}};i(Tt,"EntryModule");var rt=Tt;var at=class at{constructor(t){l(this,"_error");l(this,"_message","unknown");l(this,"_trace",[]);if(t instanceof at)return t;t instanceof Error&&(this._error=t,this._message=t.message)}get error(){return this._error}get message(){return this._message}get trace(){return this._trace}addToTrace(t){this.trace.unshift(t)}};i(at,"TracedError");var K=at;var yt=class yt{constructor(t,e){l(this,"window");l(this,"dvtag");l(this,"modules",new Map);l(this,"errorHandlers",[]);l(this,"errors",[]);var r;this.window=e,this.window.dvtag=(r=this.window.dvtag)!=null?r:{},this.dvtag=this.window.dvtag,this.dvtag._core=this;for(let[n,s]of Object.entries(St))this.dvtag[n]=s;for(let n of t)this.createModule(n);for(let n of this.modules.values())this.applyModuleDecoration(n);for(let n of this.modules.values())this.applyErrorDecoration(n);for(let n of this.modules.values())this.applyPluginDecoration(n);for(let n of this.modules.values())this.applyApiDecoration(n);for(let n of this.modules.values())this.applyExecuteDecoration(n)}get moduleList(){return[...this.modules.keys()].map(t=>t.name)}get entryModuleList(){return[...this.modules.entries()].filter(([t,e])=>e instanceof rt).map(([t,e])=>t.name)}get(t){return this.getModule(t).gateway}getByName(t){let e=[...this.modules.keys()].find(r=>r.name===t);return e!=null?this.get(e):null}getModule(t){let e=this.modules.get(t);if(e==null)throw new Error(`module not in core: ${t.name}`);return e}createModule(t){if(t.prototype.moduleConfig==null)throw new Error(`not a module: ${t.name}`);let e=new t;e.core=this,e.gateway={module:e},this.modules.set(t,e)}applyModuleDecoration(t){var n,s,a,u,m,d;let e=t.constructor.prototype.moduleConfig,r=t.constructor.name;for(let{method:f}of e){let E=t[f].bind(t),v=(a=(s=(n=this.dvtag._hooks)==null?void 0:n.interceptModule)==null?void 0:s[r])==null?void 0:a[f],T=v==null?E:v.bind(t),A=(d=(m=(u=this.dvtag._hooks)==null?void 0:u.inspectModule)==null?void 0:m[r])==null?void 0:d[f],b=A==null?T:(...N)=>{let h=T(...N);return A(N,h),h},mt=i((...N)=>{let h;try{h=b(...N)}catch(et){throw this.traceMethodError(t,f,N,et)}return h instanceof Promise?h.then(et=>et,et=>{throw this.traceMethodError(t,f,N,et)}):h},"traced");t.gateway[f]=mt}if(t.plugins!=null){t.pluginFunctions={};for(let f of Object.keys(t.plugins)){t.pluginFunctions[f]=[];let E=t.pluginFunctions[f];t.plugins[f]=(...v)=>{let T=[];for(let A of E)try{T.push(A(...v))}catch(b){this.tracePluginError(t,f,b)}return T}}}}traceMethodError(t,e,r,n){let s=new K(n);return s.addToTrace(`${t.constructor.name}.${e}(${r.map(a=>typeof a).join(",")})`),s}traceExecuteError(t){let e=new K(t);return e.addToTrace("@execute"),this.handleSevereError(e),e}tracePluginError(t,e,r){let n=new K(r);return n.addToTrace(`@plugin(${t.constructor.name}, '${e}')`),this.handleSevereError(n),n}traceApiError(t,e){let r=new K(e);return r.addToTrace(`@api('${t}')`),this.handleSevereError(r),r}handleSevereError(t){for(let e of this.errorHandlers)try{e(t)}catch(r){}this.errors.length>10||this.errors.push({message:t.message,trace:t.trace})}applyErrorDecoration(t){var r;let e=(r=t.constructor.prototype.errorConfig)!=null?r:[];for(let{method:n}of e)this.errorHandlers.push(t.gateway[n])}applyPluginDecoration(t){var r;let e=(r=t.constructor.prototype.pluginConfig)!=null?r:[];for(let{PluggableClass:n,category:s,method:a}of e)this.getModule(n).pluginFunctions[s].push(t.gateway[a])}applyApiDecoration(t){var r;let e=(r=t.constructor.prototype.apiConfig)!=null?r:[];for(let{api:n,method:s}of e)Object.defineProperty(this.dvtag,n,{value:(...a)=>{var u,m;try{return t.gateway[s](...a)}catch(d){return this.traceApiError(n,d),(m=(u=St)[n])==null?void 0:m.call(u,...a)}},writable:!1})}applyExecuteDecoration(t){return S(this,null,function*(){var r;let e=(r=t.constructor.prototype.executeConfig)!=null?r:[];for(let{method:n}of e)try{yield t.gateway[n]()}catch(s){this.traceExecuteError(s)}})}};i(yt,"Core");var nt=yt;var _t=[],Et=_t;var p=i(o=>{let t=o.prototype,e=Object.getOwnPropertyNames(t).filter(r=>{var n;return r!=="constructor"&&((n=Object.getOwnPropertyDescriptor(t,r))==null?void 0:n.value)instanceof Function});t.moduleConfig=e.map(r=>({method:r})),_t.push(o)},"moduleClass"),X=i(o=>t=>{},"attachModule"),$=i((o,t)=>{var e;o.executeConfig=(e=o.executeConfig)!=null?e:[],o.executeConfig.push({method:t})},"executeMethod"),At=i((o,t)=>(e,r)=>{var n;e.pluginConfig=(n=e.pluginConfig)!=null?n:[],e.pluginConfig.push({PluggableClass:o,category:t,method:r})},"pluginMethod"),H=i(o=>(t,e)=>{var r;t.apiConfig=(r=t.apiConfig)!=null?r:[],t.apiConfig.push({api:o,method:e})},"apiMethod"),Gt=i((o,t)=>{var e;o.errorConfig=(e=o.errorConfig)!=null?e:[],o.errorConfig.push({method:t})},"errorMethod");var me=[[/((\?)|&)(?:amp_lite|fr=operanews)/g,"$2"],[/(^https?:\/\/)(www\.)/g,"$1"],[/(((\?)|&|%3F|%26|;)(?:utm_campaign|utm_source|utm_content|utm_term|utm_viral|utm_medium|utm_identifier|utm_key|fb_source|referrer|referer|ref|rand|rnd|randid|\.?rand|\.?partner|cb|count|adid|session|sessionid|session_redirect|param\d|userinfo|uid|refresh|ocid|ncid|clickenc|fbclid|amp_js_v|amp_gsa|ns_source|ns_campaign|ns_mchanel|ns_mchannel|ns_linkname|ns_fee|src|ex_cid|usqp|source|xid|trkid|utm_social-type|mbid|utm_brand|__twitter_impression|utm_referrer|CMP|cmp|_cmp|cq_cmp)=[^&]*)/g,"$3"],[/[/.]amp(?:\/[?&]*)?$/g,""],[/((\?)|&)(?:outputType|isFollow|suppressMediaBar|cid|ICID|icid|bdk|wtu_id_h|utm_placement|intcmp|_native_ads|traffic_source|entry|\.tsrc|autoplay|autostart|dc_data|influencer|pubdate|utm_hp_ref|redirect|service|refresh_ce|refresh_cens|xcmg|target_id|_amp)=[^&]*/g,"$2"],[/(\?|&)(?:amp)(?:&|$|=[^&]*)/g,"$1"]],fe=[[/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g,""],[/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g,""]],Nt=i((o,t)=>{for(let[e,r]of o)t=t.replace(e,r);return t},"replaceByRules"),Bt=i(o=>{let t=Nt(me,o);return Nt(fe,t)},"normalizeUrl");var zt=i(o=>o.split("?",1)[0].split("#",1)[0],"stripUrlQuery");var gt,he=new Uint8Array(16);function Ut(){if(!gt&&(gt=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!gt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return gt(he)}i(Ut,"rng");var y=[];for(let o=0;o<256;++o)y.push((o+256).toString(16).slice(1));function jt(o,t=0){return y[o[t+0]]+y[o[t+1]]+y[o[t+2]]+y[o[t+3]]+"-"+y[o[t+4]]+y[o[t+5]]+"-"+y[o[t+6]]+y[o[t+7]]+"-"+y[o[t+8]]+y[o[t+9]]+"-"+y[o[t+10]]+y[o[t+11]]+y[o[t+12]]+y[o[t+13]]+y[o[t+14]]+y[o[t+15]]}i(jt,"unsafeStringify");var Se=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),vt={randomUUID:Se};function Te(o,t,e){if(vt.randomUUID&&!t&&!o)return vt.randomUUID();o=o||{};let r=o.random||(o.rng||Ut)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){e=e||0;for(let n=0;n<16;++n)t[e+n]=r[n];return t}return jt(r)}i(Te,"v4");var xt=Te;var F=i(()=>xt(),"uuid");var Ft=i((o,t)=>{try{let e=new URLSearchParams(o),r=e.get("ctx"),n=e.get("cmp");if(r!=null&&n!=null)return{ctx:r,cmp:n,prefetch:t,legacy:!0}}catch(e){}return null},"parseInfo"),Qt=i(o=>{var t;return o.pathname!=="/signals/pub.js"?null:(t=Ft(o.search,!0))!=null?t:Ft(o.hash.substring(1),!1)},"parseLegacyPagetagUrl");var ye=/^\/dvtag\/([^/]+)\/([^/]+)\/pub\.js$/,_=class{constructor(){l(this,"visitUuid",F());l(this,"tagInfo");l(this,"normalizedUrl")}_initialize(){this.getTagInfo()}getTagInfo(){var t;if(this.tagInfo==null){try{this.tagInfo=this._parseTagInfo()}catch(e){}(t=this.tagInfo)!=null||(this.tagInfo={ctx:"unknown",cmp:"unknown"})}return this.tagInfo}getVisitUuid(){return this.visitUuid}_parseTagInfo(){let t=this.getCurrentScriptSrc();if(t==null)return null;let e=new URL(t,"https://pub.doubleverify.com"),r=e.pathname,n=ye.exec(r);if(n!=null){let[,s,a]=n;return{ctx:s,cmp:a}}return Qt(e)}getCurrentScriptSrc(){var t,e;return(e=(t=this.core.window.document.currentScript)==null?void 0:t.getAttribute("src"))!=null?e:null}getStrippedPageUrl(){return zt(this.core.window.location.href)}getNormalizedPageUrl(){var e;let t=this.getStrippedPageUrl();return((e=this.normalizedUrl)==null?void 0:e.stripped)!==t&&(this.normalizedUrl={stripped:t,normalized:Bt(this.core.window.location.href)}),this.normalizedUrl.normalized}};i(_,"Context"),c([$],_.prototype,"_initialize",1),_=c([p],_);var C=class{getShortCommitId(){return"12f9202"}getBuildTimestamp(){return 1713798018315}getAuthToken(){return typeof AUTH_TOKEN=="undefined"?"default":AUTH_TOKEN}};i(C,"DefinedVariables"),C=c([p],C);var Q=class{getWindow(){return this.core.window}getDocument(){return this.getWindow().document}getUserAgent(){var t,e;return(e=(t=this.getWindow().navigator)==null?void 0:t.userAgent)!=null?e:""}getPageUrl(){var t,e;return(e=(t=this.getWindow().location)==null?void 0:t.href)!=null?e:""}getHostname(){return new URL(this.getPageUrl()).hostname}getNavigator(){return this.getWindow().navigator}getPerformance(){var t;return(t=this.getWindow().performance)!=null?t:{}}getPerformanceTimeMs(){var t,e,r;return Math.floor((r=(e=(t=this.getPerformance()).now)==null?void 0:e.call(t))!=null?r:null)}};i(Q,"Environment"),Q=c([p],Q);var Pt=class Pt{constructor(){l(this,"pending",[]);l(this,"flushing",!1)}push(t){this.pending.push(t),this.flush()}flush(){return S(this,null,function*(){var e;if(this.flushing)return;this.flushing=!0;let t=this.pending.shift();for(;t!=null;){try{yield t.promise}catch(r){}try{(e=t.callback)==null||e.call(t)}catch(r){}t=this.pending.shift()}this.flushing=!1})}};i(Pt,"AsyncQueue");var lt=Pt;var w=class{constructor(){l(this,"plugins",{adRequestQueued:t=>[],adRequestCompleted:t=>[]});l(this,"queue",new lt);l(this,"adRequestCounter",0)}_queueAdRequest(t={}){var s,a;let e={index:this.adRequestCounter++,status:"queued",timeoutValue:(s=t.timeout)!=null?s:0,onDvtagReadyCalled:(a=t.timestamp)!=null?a:0,waitingStarted:new Date().getTime(),internal:t.internal};this.plugins.adRequestQueued(e);let r=t.callback;r===void 0?e.status="no-callback":r===null?e.status="tag-timeout":t.callback=()=>{e.status="queue-timeout",e.callbackCalled=new Date().getTime(),t.callback=null;try{r()}catch(u){}};let n=i(()=>{if(t.callback!=null){t.callback=null,e.status="success",e.callbackCalled=new Date().getTime();try{r==null||r()}catch(u){}}e.waitingEnded=new Date().getTime(),this.plugins.adRequestCompleted(e)},"onAsyncOperationsCompleted");this.queue.push({callback:n})}delayAdRequests(t){this.queue.push({promise:t})}};i(w,"AdRequestQueue"),c([H("queueAdRequest")],w.prototype,"_queueAdRequest",1),w=c([p],w);var _e="https://pub.doubleverify.com/dvtag/metrics/event.png",Ee=1,wt=1,x=class{constructor(){l(this,"sharedDataPoints");l(this,"sampleInterval",wt)}_onAdRequestCompleted(t){if(t.index!==0)return;let{timeoutValue:e,onDvtagReadyCalled:r,callbackCalled:n}=t,s=n!=null?n-r:e;this.fireEvent("ad-request",{[I.AD_REQUEST_STATUS]:t.status,[I.AD_REQUEST_INDEX]:t.index,[I.AD_REQUEST_DELAY]:s,[I.INTEGRATION_STYLE]:t.internal?"legacy":"modern"},{sampleInterval:this.sampleInterval,flushToPxsrv:1})}_handleError(t){this.fireEvent("log",{[st.LOG_LEVEL]:"error",[st.MESSAGE]:t.message,[st.TRACE]:t.trace.join("=>")},{sampleInterval:Ee,flushToPxsrv:0})}_getSharedDataPoints(){if(this.sharedDataPoints==null){let t=this.core.get(_),e=this.core.get(C),r=this.core.get(Q),{ctx:n,cmp:s,legacy:a}=t.getTagInfo(),u=r.getHostname(),m=t.getVisitUuid(),d=e.getShortCommitId();this.sharedDataPoints={[U.COMMIT_HASH]:d,[U.ENTRY_MODULES]:"",[U.VISIT_ID]:m,[U.TAG_FORMAT]:a?"legacy":"modern",[U.FEATURE_FLAGS]:"",[U.CTX]:n,[U.CMP]:s,[U.HOSTNAME]:u}}return this.sharedDataPoints}fireEvent(t,e,{sampleInterval:r=1,flushToPxsrv:n=0}={}){if(Math.random()>=1/r)return;e=R(P(P({},e),this._getSharedDataPoints()),{[U.TYPE]:t,[U.SAMPLE_INTERVAL]:r,[U.FLUSH_TO_PXSRV]:n});let s=new URL(_e);for(let[a,u]of Object.entries(e))s.searchParams.set(a,u.toString());this._sendBeacon(s.href)}_sendBeacon(t){try{typeof(navigator==null?void 0:navigator.sendBeacon)=="function"?navigator.sendBeacon(t):new Image().src=t}catch(e){}}};i(x,"Events"),c([At(w,"adRequestCompleted")],x.prototype,"_onAdRequestCompleted",1),c([Gt],x.prototype,"_handleError",1),x=c([p],x);var ct=["BSC","ABS"],Vt=["IDS"],ut=["VLP","TVP"],Y=[...ct,...Vt,...ut],bt=i(o=>Y.includes(o.toUpperCase()),"isSignal"),dt=i(o=>ut.includes(o.toUpperCase()),"isSlotSignal"),qt=i(o=>Vt.includes(o.toUpperCase()),"isUserSignal"),Kt=i(o=>ct.includes(o.toUpperCase()),"isPageSignal"),$t=i(o=>o.map(t=>t.toUpperCase()).filter(bt),"asSignals");var L=class{constructor(){l(this,"pq",null)}getPq(){return this.pq==null&&(this.pq=this._initialize()),this.pq}getPts(){return this.getPq().PTS}setApi(t){let e=this.getPq();e!=null&&(e.init=()=>{},e.loadSignals=t.loadSignals,e.loadSignalsForSlots=t.loadSignalsForSlots,e.getTargeting=t.getTargeting)}_pushToDvtagCmd(...t){var e;this.core.dvtag.cmd=(e=this.core.dvtag.cmd)!=null?e:[],this.core.dvtag.cmd.push(...t)}_initialize(){var r,n;this.core.window.PQ=(r=this.core.window.PQ)!=null?r:{};let t=this.core.window.PQ;if(t.loaded)return{cmd:[],PTS:{}};t.loaded=!0,t.PTS=(n=t.PTS)!=null?n:{};let e=t.cmd;return t.cmd={push:s=>this._pushToDvtagCmd(s)},Array.isArray(e)&&this._pushToDvtagCmd(...e),t}};i(L,"LegacyPq"),L=c([p],L);var J=i(o=>{if(o==null)return[];let t=Ht(o);return t!=null?[t]:Array.isArray(o)?o.map(Ht).filter(e=>e!=null):[]},"parseSlotSizes"),Ht=i(o=>{if(o==null)return null;if(typeof o=="string")return{label:o};if(Array.isArray(o)){if(o.length===1&&typeof o[0]=="string")return{label:o[0]};if(o.length===2&&typeof o[0]=="number"&&typeof o[1]=="number")return{width:o[0],height:o[1]}}if(typeof o=="object"){let{label:t,width:e,height:r}=o;if(typeof e=="number"&&typeof r=="number")return{width:e,height:r};if(typeof t=="string")return{label:t}}return null},"parseSlotSize");var Ae=/^(\d+)x(\d+)$/,Yt=i(o=>o==="all"?[]:o.split(",").map(t=>{let e=t.match(Ae);return e==null?{label:t}:{width:parseInt(e[1],10),height:parseInt(e[2],10)}}),"stringToSlotSizes"),ot=i(o=>o.length===0?"all":o.map(({width:t,height:e,label:r})=>r!=null?r:`${t}x${e}`).join(","),"slotSizesToString"),Wt=i(o=>o==null?"":o.length>0&&o.every(({label:r})=>r==null)?ot(o):"","slotSizesToStringIfSpecific");var Xt=i(o=>{var r,n,s;let t=F(),e={id:(n=(r=o.adUnitPath)!=null?r:o.invCode)!=null?n:o.tagId,sizes:J(Yt((s=o.sizes)!=null?s:"all")),position:o.position};return{elementId:t,adUnit:e}},"parseLegacyAdUnit");var Jt=i(o=>{try{return o.getSizes()}catch(t){return[]}},"getGptSlotSize");var Zt=i(o=>({elementId:o.getSlotElementId(),adUnit:{id:o.getAdUnitPath(),sizes:J(Jt(o)),position:o.getTargeting("dvp_spos")[0]}}),"parseLegacyGptSlot");var te=i((o,t)=>(t==null?void 0:t.structuredClone)!=null?t.structuredClone(o):JSON.parse(JSON.stringify(o)),"deepClone");var Z="qt_loaded",ee="pts_pid",re="pts_sid",Rt=class Rt extends Error{constructor(e,r){super(r);this.code=e}};i(Rt,"QtError");var pt=Rt;var ne=i((o,t)=>{var n;let e=(n=o.IDS)==null?void 0:n[0];if(e==null)return;let r=parseInt(e);isNaN(r)||(t.IDS=r)},"setUserTargetingOnPts"),oe=i((o,t)=>{for(let e of ct)o[e]!=null&&(t[e]=o[e])},"setPageTargetingOnPts"),ie=i((o,t,e)=>{var u,m,d,f,E,v;let{adUnit:r}=o;if((r==null?void 0:r.id)==null)return;let n=r.id,s=ot((u=r.sizes)!=null?u:[]),a=r.position;for(let T of ut){let A=t[T];A!=null&&((m=e[T])!=null||(e[T]={}),(f=(d=e[T])[n])!=null||(d[n]={}),e[T][n][s]=A[0],a!=null&&((v=(E=e[T][n])[a])!=null||(E[a]={}),e[T][n][a][s]=A[0]))}},"setSlotTargetingOnPts");var Ct=i(o=>[...new Set(o.filter(bt).map(t=>t.toLowerCase()))],"getGreenlightSignal");var V=class{autoInsertPageId(){let e=this.core.get(_).getVisitUuid();this._onPubadsReady(r=>{r.setTargeting(ee,e)})}autoInsertGlobalTargeting(t){this._onPubadsReady(e=>{for(let[r,n]of Object.entries(t))e.setTargeting(r,n);e.setTargeting(Z,Ct([...e.getTargeting(Z),...Object.keys(t)]))})}autoInsertSlotId(t){this._onPubadsReady(e=>{let r=e.getSlots().find(n=>n.getSlotElementId()===t.elementId);r!=null&&r.setTargeting(re,t.uuid)})}autoInsertSlotTargeting(t,e){this._onPubadsReady(r=>{let n=r.getSlots().find(s=>s.getSlotElementId()===t.elementId);if(n!=null){for(let[s,a]of Object.entries(e))n.setTargeting(s,a);n.setTargeting(Z,Ct([...r.getTargeting(Z),...n.getTargeting(Z),...Object.keys(e)]))}})}_onPubadsReady(t){var r,n;let e=this.core.window;e.googletag=(r=e.googletag)!=null?r:{},e.googletag.cmd=(n=e.googletag.cmd)!=null?n:[],e.googletag.cmd.push(()=>{t(e.googletag.pubads())})}};i(V,"LegacyModeAutoInsertion"),V=c([p],V);var M=class{constructor(){l(this,"cache",{})}_performFetchJson(t,e){return S(this,null,function*(){let r=t;if(e!=null&&e.authToken){let a=this.core.get(C).getAuthToken(),u=new URL(t);u.searchParams.set("token",a),r=u.href}let n=yield this.core.window.fetch(r);return{json:yield n.json(),headers:n.headers}})}fetchJson(t,e){return S(this,null,function*(){let r=this.cache[t];return r==null&&(r=this._performFetchJson(t,e).then(n=>n.json),this.cache[t]=r),r})}};i(M,"Fetch"),M=c([p],M);var se=i(o=>o==null?"":`@${o}`,"getPositionSuffix");var Ue="https://pub.doubleverify.com/dvtag/signals/",D=class{_getBaseUrl(t){let e=this.core.get(_),{ctx:r,cmp:n}=e.getTagInfo(),s=e.getNormalizedPageUrl();try{s=new URL(s).origin}catch(u){}let a=new URL(t,Ue);return a.searchParams.set("ctx",r),a.searchParams.set("cmp",n),a.searchParams.set("url",s),a}getUserTargetingUrl(t){let e=this._getBaseUrl("ids/pub.json");return t.includes("IDS")&&e.searchParams.set("ids","1"),e.href}getPageTargetingUrl(t,e){let r=this._getBaseUrl("bsc/pub.json");return r.searchParams.set("url",e),t.includes("BSC")&&r.searchParams.set("bsc","1"),t.includes("ABS")&&r.searchParams.set("abs","1"),r.href}getSlotTargetingUrl(t,e){var s;let r=this._getBaseUrl("vlp/pub.json");t.includes("VLP")&&r.searchParams.set("vlp","1"),t.includes("TVP")&&r.searchParams.set("tvp","1");let n=0;for(let a of e){let{id:u,position:m,sizes:d}=(s=a.adUnit)!=null?s:{},f=u+se(m);r.searchParams.set(`slot-${n++}-${f}`,Wt(d))}return r.href}};i(D,"SignalsUrlBuilder"),D=c([p],D);var q=class{_getUserTargeting(t){return S(this,null,function*(){if(!t.some(qt))return{};let e=this.core.get(D).getUserTargetingUrl(t);try{return yield this.core.get(M).fetchJson(e,{authToken:!0})}catch(r){return{}}})}_getPageTargeting(t){return S(this,null,function*(){if(!t.some(Kt))return{};let e=this.core.get(_).getNormalizedPageUrl(),r=this.core.get(D).getPageTargetingUrl(t,e);try{return yield this.core.get(M).fetchJson(r,{authToken:!0})}catch(n){return{}}})}_getSlotTargeting(t,e){return S(this,null,function*(){if(!t.some(dt)||e.length===0)return new Array(e.length).fill({});let r=this.core.get(D).getSlotTargetingUrl(t,e);try{let n=yield this.core.get(M).fetchJson(r,{authToken:!0});return n.length!==e.length?new Array(e.length).fill({}):n.map(s=>Object.fromEntries(Object.entries(s).map(([a,u])=>[a,[u[0]]])))}catch(n){return new Array(e.length).fill({})}})}getTargeting(t,e){return S(this,null,function*(){let[r,n,s]=yield Promise.all([this._getUserTargeting(t),this._getPageTargeting(t),this._getSlotTargeting(t,e)]);return{userTargeting:r,pageTargeting:n,slotTargeting:s}})}};i(q,"LegacyModeFetchTargeting"),q=c([p],q);var ve={SignalsIds:"IDS",SignalsBsc:"BSC",SignalsAbs:"ABS",SignalsVlp:"VLP",SignalsTvp:"TVP"},xe="SignalsAutoInsertion",O=class{constructor(){l(this,"validConfigFound");l(this,"enabledSignals");l(this,"autoInsertionEnabled")}isValidConfigFound(){return this._initialize(),this.validConfigFound}isSignalEnabled(t){return this._initialize(),t!=null&&this.enabledSignals.includes(t)}isAutoInsertionEnabled(){return this._initialize(),this.autoInsertionEnabled}_initialize(){if(this.validConfigFound!=null)return;let t;try{t=this._getEntryModules()}catch(e){this.validConfigFound=!0,this.enabledSignals=Y,this.autoInsertionEnabled=!0;return}if(t==null){this.validConfigFound=!1,this.enabledSignals=[],this.autoInsertionEnabled=!1;return}this.validConfigFound=!0,this.enabledSignals=t.map(e=>ve[e]).filter(e=>e!=null),this.autoInsertionEnabled=t.includes(xe)}_getEntryModules(){let{cmp:t}=this.core.get(_).getTagInfo(),e=btoa(t),{modules:r,configs:n}=g,s=n[e];return s==null?null:s.map(a=>r[a])}};i(O,"TagConfig"),O=c([p],O);var ae=i((o,t)=>{var s,a,u,m;let e=[],r=[],n=[];if(t.VLP==null)return{newSlots:o,existingSlots:r,existingTargeting:n};for(let d of o){let{id:f,sizes:E}=d.adUnit,v=ot(E),T=(a=(s=t.VLP)==null?void 0:s[f])==null?void 0:a[v];if(T==null){e.push(d);continue}r.push(d);let A=(m=(u=t.TVP)==null?void 0:u[f])==null?void 0:m[v],b={};T!=null&&(b.VLP=[T]),A!=null&&(b.TVP=[A]),n.push(b)}return{newSlots:e,existingSlots:r,existingTargeting:n}},"processNewSlots");var k=class{performFetches(t,e,r,n){return S(this,null,function*(){let s=this.core.get(q),a=this.core.get(V),u=this.core.get(O),d=this.core.get(L).getPts();if(!u.isValidConfigFound())throw new pt("404","Config not found!");let f=$t(t).filter(h=>u.isSignalEnabled(h)).filter(h=>dt(h)||d[h]==null),{newSlots:E,existingSlots:v,existingTargeting:T}=n?ae(e,d):{newSlots:e,existingSlots:[],existingTargeting:[]};e=[...E,...v];let{userTargeting:A,pageTargeting:b,slotTargeting:mt}=yield s.getTargeting(f,E),N=[...mt,...T];ne(A,d),oe(b,d);for(let h=0;h<e.length;h++)ie(e[h],N[h],d);if(r&&u.isAutoInsertionEnabled()){a.autoInsertPageId(),a.autoInsertGlobalTargeting(A),a.autoInsertGlobalTargeting(b);for(let h=0;h<e.length;h++)a.autoInsertSlotId(e[h]),a.autoInsertSlotTargeting(e[h],N[h])}return te(d,this.core.window)})}};i(k,"LegacyModePerformFetches"),k=c([p],k);var Lt="legacy-success",Mt="legacy-error",W=class{constructor(){l(this,"_slotUuids",{});l(this,"_metricEventCount",0)}_initialize(){this.core.get(L).setApi({loadSignals:this.loadSignals.bind(this),loadSignalsForSlots:this.loadSignalsForSlots.bind(this),getTargeting:this.getTargeting.bind(this)})}loadSignals(t,e){return S(this,null,function*(){let r=this.core.get(k),n=this.core.get(O),s=this._prepareMetricEvent(),u=n.isSignalEnabled("VLP")||n.isSignalEnabled("TVP")?yield this._getSlots():[],m=!0,d=!1;try{yield r.performFetches(Y,u,m,d);try{e==null||e()}catch(f){}s(Lt)}catch(f){try{e==null||e(f)}catch(E){}s(Mt)}})}loadSignalsForSlots(t,e,r){return S(this,null,function*(){let n=this.core.get(k),s=this._prepareMetricEvent(),a=t.map(d=>this._parseGptSlot(d)),u=!0,m=!0;r=typeof e=="function"?e:r;try{yield n.performFetches(Y,a,u,m);try{r==null||r()}catch(d){}s(Lt)}catch(d){try{r==null||r(d)}catch(f){}s(Mt)}})}getTargeting(t,e){return S(this,null,function*(){var m,d;let r=this.core.get(k),n=this._prepareMetricEvent(),s=(d=(m=t.adUnits)==null?void 0:m.map(f=>this._parseAdUnit(f)))!=null?d:[],a=!1,u=!1;try{let f=yield r.performFetches(Y,s,a,u);try{e==null||e(void 0,f)}catch(E){}n(Lt)}catch(f){try{e==null||e(f)}catch(E){}n(Mt)}})}_getSlots(){return S(this,null,function*(){var n,s;let t=this.core.window;t.googletag=(n=t.googletag)!=null?n:{},t.googletag.cmd=(s=t.googletag.cmd)!=null?s:[];let e=t.googletag;return(yield new Promise(a=>e.cmd.push(()=>{a(e.pubads().getSlots())}))).map(a=>this._parseGptSlot(a))})}_getSlotUuid(t){let e=this._slotUuids[t];return e==null&&(e=F(),this._slotUuids[t]=e),e}_parseGptSlot(t){let{elementId:e,adUnit:r}=Zt(t);return{elementId:e,uuid:this._getSlotUuid(r.id),adUnit:R(P({},r),{position:null})}}_parseAdUnit(t){let{adUnit:e}=Xt(t);return{elementId:e.id,uuid:this._getSlotUuid(e.id),adUnit:R(P({},e),{position:null})}}_prepareMetricEvent(){let t=this.core.get(x);if(this._metricEventCount>0)return()=>{};this._metricEventCount++;let e=new Date().getTime();return r=>t.fireEvent("ad-request",{[I.AD_REQUEST_STATUS]:r,[I.AD_REQUEST_INDEX]:0,[I.AD_REQUEST_DELAY]:new Date().getTime()-e,[I.INTEGRATION_STYLE]:"legacy"},{sampleInterval:wt,flushToPxsrv:1})}};i(W,"LegacyMode"),c([$],W.prototype,"_initialize",1),W=c([p],W);var B=class{constructor(){l(this,"initialized",!1);l(this,"size",0)}_initialize(){return S(this,null,function*(){if(yield Promise.resolve(),this.initialized)return;this.initialized=!0,this.core.dvtag.cmd instanceof Array||(this.core.dvtag.cmd=[]);let t=this.core.dvtag.cmd;this.core.dvtag.cmd={push:(...e)=>{for(let r of e)try{r()}catch(n){}return this.size+=e.length,this.size}},this.core.dvtag.cmd.push(...t)})}};i(B,"CommandBuffer"),c([$],B.prototype,"_initialize",1),B=c([p],B);var Dt=class Dt{constructor(t,e,r,n,s){this._slotStore=t;this.source=e;this.elementId=r;this.adUnit=n;this._targetable=s;l(this,"uuid");l(this,"_variables",{});l(this,"_targeting",{});l(this,"_flushedTargeting",{});this.uuid=F()}setVariable(t,e){this._variables[t]=e}getVariable(t){return this._variables[t]}getUptTargetingKeys(){return[...new Set([...Object.keys(this._targeting),...this._slotStore.getUptPageTargetingKeys()])]}getUptTargetingForKey(t){var e;return[...new Set([...(e=this._targeting[t])!=null?e:[],...this._slotStore.getUptPageTargetingForKey(t)])]}getUptTargeting(){let t={};for(let e of this.getUptTargetingKeys())t[e]=this.getUptTargetingForKey(e);return t}setUptSlotTargeting(t){for(let[e,r]of Object.entries(t))this._targeting[e]=[...new Set(r)],this.flushUptTargetingToAdServer(e)}addUptSlotTargeting(t){var e;for(let[r,n]of Object.entries(t))this._targeting[r]=[...new Set([...(e=this._targeting[r])!=null?e:[],...n])],this.flushUptTargetingToAdServer(r)}getAdServerTargeting(t){var e;return(e=this._targetable.getTargeting(t))!=null?e:[]}flushUptTargetingToAdServer(t){var n;let e=(n=this._flushedTargeting[t])!=null?n:[],r=this.getUptTargetingForKey(t);(e.length!==r.length||r.sort().some((s,a)=>e[a]!==s))&&(this._targetable.setTargeting(t,this.getUptTargetingForKey(t)),this._flushedTargeting[t]=r)}validateAdServerTargeting(){let t=2;for(let e of this.getUptTargetingKeys()){let r=this.getUptTargetingForKey(e),n=this.getAdServerTargeting(e);if(r.length>n.length||r.some(s=>!n.includes(s)))return 0;n.length>r.length&&(t=1)}return t}};i(Dt,"Slot");var it=Dt;var Pe={getTargeting:()=>[],setTargeting:()=>{}},G=class{constructor(){l(this,"plugins",{slotScanned:(t,e)=>[],slotDiscovered:t=>[],slotRequested:(t,e)=>[],slotDestroyed:t=>[]});l(this,"_slots",{});l(this,"_pageTargeting",{})}getSlot(t,e){var r;return(r=this._slots[t])==null?void 0:r[e]}getSlots(t){var e;return t==null?Object.values(this._slots).flatMap(r=>Object.values(r)):Object.values((e=this._slots[t])!=null?e:{})}createSlot(t,e,r,n=Pe){var u,m;let s=this.getSlot(t,e);s!=null&&this.plugins.slotDestroyed(s);let a=new it(this,t,e,r,n);(m=(u=this._slots)[t])!=null||(u[t]={}),this._slots[t][e]=a;for(let d of Object.keys(this._pageTargeting))a.flushUptTargetingToAdServer(d);return this.plugins.slotDiscovered(a),a}notifySlotScanned(t,e){this.plugins.slotScanned(t,e)}notifyAdRequested(t,e){this.plugins.slotRequested(t,e)}getUptPageTargetingKeys(){return Object.keys(this._pageTargeting)}getUptPageTargetingForKey(t){var e;return(e=this._pageTargeting[t])!=null?e:[]}getUptPageTargeting(){let t={};for(let[e,r]of Object.entries(this._pageTargeting))t[e]=[...r];return t}setUptPageTargeting(t){for(let[e,r]of Object.entries(t))this._pageTargeting[e]=[...new Set(r)];this._flushUptPageTargetingToAdServer(Object.keys(t))}addUptPageTargeting(t){var e;for(let[r,n]of Object.entries(t))this._pageTargeting[r]=[...new Set([...(e=this._pageTargeting[r])!=null?e:[],...n])];this._flushUptPageTargetingToAdServer(Object.keys(t))}_flushUptPageTargetingToAdServer(t){for(let e of Object.values(this._slots))for(let r of Object.values(e))for(let n of t)r==null||r.flushUptTargetingToAdServer(n)}};i(G,"SlotStore"),G=c([p],G);var Ot="api",z=class{_defineSlot(t,e={}){this.core.get(G).createSlot(Ot,t,R(P({},e),{sizes:J(e.sizes)}))}};i(z,"DefineSlot"),c([H("defineSlot")],z.prototype,"_defineSlot",1),z=c([p],z);var j=class{_getTargeting(t){var r;let e=this.core.get(G);if(t==null)return e.getUptPageTargeting();{let n=e.getSlot(Ot,t);return(r=n==null?void 0:n.getUptTargeting())!=null?r:e.getUptPageTargeting()}}};i(j,"GetTargeting"),c([H("getTargeting")],j.prototype,"_getTargeting",1),j=c([p],j);var tt=class{};i(tt,"HouseHold"),tt=c([p,X(w),X(B),X(z),X(j),X(x)],tt);if(window.dvtag==null||window.dvtag._core==null)try{new nt(Et,window)}catch(o){}})();
