'use strict';!function(require,directRequire){function a(){let a=h.getCurrent(),b='tourist'==a.appid,c=a.setting.urlCheck,d=!0;return b?d=!1:!c&&(d=!1),d}var b=Math.floor;const c=require('fs'),d=require('path'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./233d77ecf0781f44985f684f70e316d0.js'),h=require('./3bfffbe88b3d923921f851c0697974fe.js'),i=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),j=require('./dfd9a72b9ff6078018aa4a64eed949a5.js'),k=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./8bf10a96e005fd88d01d949c3d2f8d46.js'),n=l.CONTENTTYPEINFO,o=/^(http|ws)s?:\/\/[\w-.]+(:\d+)?/i;let p=0,q=0,r={},s=1,t={},u=1;module.exports={downloadFile:async function(b,f,e){let j=f.args;if(i.isLocalId(j.url)){let a=i.getFileRealPath(j.url);return a&&c.existsSync(a.fileRealPath)?{errMsg:`${f.api}:ok`,statusCode:200,tempFilePath:j.url}:{errMsg:`${f.api}:ok`,statusCode:404}}const m=e(),p=m.toolbar.network.list[m.toolbar.network.current];if('none'==p)return{errMsg:`${f.api}:fail network is down`};const r=h.getCurrent(),s=h.getCurrentConfig();let t=r.attr&&r.attr.gameApp?1024*(1024*s.setting.GameDownloadFileSizeLimit):1024*(1024*s.setting.DownloadFileSizeLimit);const u=m.simulator.appConfig||{},v=s.setting.MaxDownloadConcurrent;return q>=v?{errMsg:`${f.api}:fail exceed max download connection count ${v}`}:new Promise((b)=>{let e=!1;const p=(a)=>{e||(q--,b(a),e=!0)};try{q++;let b=0,e=200,s=d.extname(j.url.split('?')[0]),v=i.createTmpfileName(r,s),w=i.getFileRealPath(v),x=w.fileRealPath,y=j.header&&'object'==typeof j.header?j.header:{};y.Referer=`https://servicewechat.com/${h.getProjectAppID()}/devtools/page-frame.html`;const z=m.toolbar&&m.toolbar.deviceInfo&&m.toolbar.deviceInfo.ua||'';y['User-Agent']=z.replace('{{webviewID}}','');let A=!1,B={method:'get',url:j.url,encoding:null,headers:y,timeout:j.timeout||u.networkTimeout&&u.networkTimeout.downloadFile||6e4,followRedirect:function(b){if(!a())return!0;let c=b.statusCode;if(300<=c&&400>c&&(302==c||301==c)){let a=b.caseless.get('location'),c=h.getCurrentDomains().download,d=o.exec(a.toLowerCase());d=d&&d[0]||'';for(let a=0;a<c.length;a++){let b=c[a],e=o.exec(b.toLowerCase());if(e=e&&e[0],e==d)return!0}let e=[];c.forEach((a)=>{e.push([a])}),k.display({command:l.DISPLAY_INFO,type:l.DISPLAY_TYPES.DOMAIN_ERROR,data:{type:'download',url:`302: ${a}`,domains:e}}),A=!0}return!1}};a()?B.agentOptions={secureProtocol:'TLSv1_2_method'}:B.tunnel=!1;let C=g(B),D=[];C.on('response',(a)=>{if(e=a.statusCode,200!=e&&206!=e)A?p({errMsg:`${f.api}:fail url not in domain list`}):p({errMsg:`${f.api}:ok`,statusCode:e});else{let b=parseInt(a.headers['content-length']);if(a.headers['content-type']){const b=a.headers['content-type'].replace(/;.*/g,''),c=n[b.toLowerCase()];if(c)s=`.${c}`;else{let a=b.split('/');a&&a[1]&&!/\-|\+/ig.test(a[1])&&(s=`.${a[1]}`)}}b>t&&(C.abort(),p({errMsg:`${f.api}:fail exceed max file size`}))}}).on('error',function(a){a&&'EPROTO'===a.code?p({errMsg:`${f.api}:fail 小程序要求的 TLS 版本必须大于等于 1.2`}):a&&'ETIMEDOUT'===a.code?p({errMsg:`${f.api}:fail timeout`}):p({errMsg:`${f.api}:fail ${a}`})}).on('data',(a)=>{b+=a.length,D.push(a),b>t&&(C.abort(),p({errMsg:`${f.api}:fail exceed max file size`}))}).on('end',()=>{let a=Buffer.concat(D),b=i.initTmpfileName(r,a,s),d=i.getFileRealPath(b),g=d.fileRealPath;c.writeFileSync(g,a),c.unlinkSync(x),p({errMsg:`${f.api}:ok`,tempFilePath:b,statusCode:e})}).pipe(c.createWriteStream(x))}catch(a){p({errMsg:`${f.api}:fail ${a}`})}})},uploadFile:async function(b,d,e){let f=d.args;const j=h.getCurrentConfig(),k=j.setting.MaxUploadConcurrent,l=e(),m=l.toolbar.network.list[l.toolbar.network.current];if('none'==m)return{errMsg:`${d.api}:fail network is down`};if(p>=k)return{errMsg:`${d.api}:fail exceed max upload connection count ${k}`};let n=f.filePath,o=i.getFileRealPath(n),q=o.fileRealPath;if(!c.existsSync(q))return{errMsg:`${d.api}:fail file not found`};const r=l.simulator.appConfig||{};return new Promise((b)=>{let e=!1;const i=(a)=>{e||(p--,e=!0,b(a))};try{p++;let b={url:f.url,headers:f.header||{},formData:f.formData||{},method:'post',timeout:f.timeout||r.networkTimeout&&r.networkTimeout.uploadFile||6e4};a()?b.agentOptions={secureProtocol:'TLSv1_2_method'}:b.tunnel=!1,b.formData[f.name]=c.createReadStream(q),b.headers.Referer=`https://servicewechat.com/${h.getProjectAppID()}/devtools/page-frame.html`;const e=l.toolbar&&l.toolbar.deviceInfo&&l.toolbar.deviceInfo.ua||'';b.headers['User-Agent']=e.replace('{{webviewID}}','');g(b,(a,b,c)=>{let e={};e=a?b&&b.statusCode?{errMsg:`${d.api}:ok`,statusCode:b.statusCode,data:c}:'EPROTO'===a.code?{errMsg:`${d.api}:fail 小程序要求的 TLS 版本必须大于等于 1.2`}:'ETIMEDOUT'===a.code?{errMsg:`${d.api}:fail timeout`}:{errMsg:`${d.api}:fail ${a}`}:{errMsg:`${d.api}:ok`,statusCode:b.statusCode,data:c},i(e)})}catch(a){i({errMsg:`${d.api}:fail ${a}`})}})},createUploadTask:async function(d,k,e){const l=e();let n=k.args,o=h.getCurrentConfig(),q=j();const t=o.setting.MaxUploadConcurrent,u=l.toolbar.network.list[l.toolbar.network.current];if('none'==u)return{errMsg:`${k.api}:fail network is down`};if(p>=t)return{errMsg:`${k.api}:fail exceed max upload connection count ${t}`};let v=n.filePath,w=i.getFileRealPath(v),x=w.fileRealPath;if(!c.existsSync(x))return{errMsg:`${k.api}:fail file not found`};const y=l.simulator.appConfig||{};try{p++;let e={url:n.url,headers:n.header||{},formData:n.formData||{},method:'post',timeout:n.timeout||y.networkTimeout&&y.networkTimeout.uploadFile||6e4,time:!0};e.headers.Referer=`https://servicewechat.com/${h.getProjectAppID()}/devtools/page-frame.html`;const i=l.toolbar&&l.toolbar.deviceInfo&&l.toolbar.deviceInfo.ua||'';e.headers['User-Agent']=i.replace('{{webviewID}}',''),a()&&(e.agentOptions={secureProtocol:'TLSv1_2_method'});let j=c.createReadStream(x);e.formData[n.name]=j;let o=s++,t=c.statSync(x),u=0;const v=Date.now(),z=`1.${o}`;d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.requestWillBeSent',params:{requestId:z,documentURL:e.headers.Referer,request:{url:e.url,method:e.method,headers:e.headers},timestamp:v/1e3,type:'XHR'}}});Date.now()-v;j.on('data',function(a){u+=a.length,q.triggerOnEvent({eventName:'onUploadTaskStateChange',data:{uploadTaskId:o,state:'progressUpdate',progress:b(100*(u/t.size)),totalBytesSent:u,totalBytesExpectedToSend:t.size}})});const A=(a)=>{r[o]&&(q.triggerOnEvent({eventName:'onUploadTaskStateChange',data:Object.assign({uploadTaskId:o},a)}),p--,delete r[o])};let B=g(e),C=0,D=[],E=200;return B.on('response',(a)=>{E=a.statusCode;for(var b={},c=0,g=a.rawHeaders.length;c<g;c+=2)b[a.rawHeaders[c]]=a.rawHeaders[c+1]||'';var h=a.request.timings;d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.responseReceived',params:{requestId:z,timestamp:Date.now()/1e3,type:'XHR',response:{url:e.url,status:a.statusCode,statusText:a.statusMessage,headers:b,connectionId:z,timing:{requestTime:v/1e3,proxyStart:0,proxyEnd:h.socket,dnsStart:h.socket,dnsEnd:h.lookup,connectStart:h.lookup,connectEnd:h.connect,sslStart:-1,sslEnd:-1,workerStart:-1,workerReady:-1,sendStart:h.connect,sendEnd:h.connect,pushStart:0,pushEnd:0,receiveHeadersEnd:h.response},protocol:a.request.uri.protocol.replace(/:$/,'')+'/'+a.httpVersion}}}}),q.triggerOnEvent({eventName:'onUploadTaskStateChange',data:{downloadTaskId:o,state:'headersReceived',header:b}})}).on('error',(a)=>{w='EPROTO'===a.code?{state:'fail',errMsg:'\u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2'}:'ETIMEDOUT'===a.code?{statSync:'fail',errMsg:'timeout'}:{state:'fail',errMsg:`${a}`},A(w),d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFailed',params:{requestId:z,timestamp:Date.now()/1e3,type:'XHR',errorText:a.toString(),canceled:!1}}})}).on('data',(a)=>{C+=a.length,D.push(a),d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.dataReceived',params:{requestId:z,timestamp:Date.now()/1e3,dataLength:a.length,encodedDataLength:a.length}}})}).on('abort',()=>{setTimeout(()=>{A({state:'fail',errMsg:'abort'})},0),d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFailed',params:{requestId:z,timestamp:Date.now()/1e3,type:'XHR',errorText:'abort',canceled:!0}}})}).on('end',()=>{let a=Buffer.concat(D);A({state:'success',statusCode:E,data:a.toString()}),d({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFinished',params:{requestId:z,timestamp:Date.now()/1e3,dataLength:a.length,encodedDataLength:a.length}}}),m.set(z,a,'raw')}),r[o]={id:o,request:B},{errMsg:`${k.api}:ok`,uploadTaskId:o}}catch(a){return p--,{errMsg:`${k.api}:fail ${a}'`}}},operateUploadTask:async function(a,b){let c=b.args,d=c.uploadTaskId,e=c.operationType,f=r[d];return f?'abort'==e?(f.request&&f.request.abort(),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail illegal operationType`}:{errMsg:`${b.api}:fail task not found`}},createDownloadTask:async function(e,p,r){let s=p.args;const v=r(),w=v.toolbar.network.list[v.toolbar.network.current],x=j();let y=h.getCurrent();if('none'==w)return{errMsg:`${p.api}:fail network is down`};if(s.url&&!/^https?:\/\//.test(s.url.toLowerCase()))return{errMsg:`${p.api}:fail invalid url`};const z=h.getCurrentConfig(),A=z.setting.MaxDownloadConcurrent;if(q>=A)return{errMsg:`${p.api}:fail exceed max download connection count ${A}`};let B=y.attr&&y.attr.gameApp?1024*(1024*z.setting.GameDownloadFileSizeLimit):1024*(1024*z.setting.DownloadFileSizeLimit);let C=s.header&&'object'==typeof s.header?s.header:{};C.Referer=`https://servicewechat.com/${h.getProjectAppID()}/devtools/page-frame.html`;const D=v.toolbar&&v.toolbar.deviceInfo&&v.toolbar.deviceInfo.ua||'';C['User-Agent']=D.replace('{{webviewID}}','');try{q++;let j=0,r=[],w=200,z=d.extname(s.url.split('?')[0]),A=i.createTmpfileName(y,z),D=i.getFileRealPath(A),E=D.fileRealPath,F=v.simulator.appConfig||{},G=!1,H={method:'get',url:s.url,encoding:null,headers:C,timeout:s.timeout||F.networkTimeout&&F.networkTimeout.downloadFile||6e4,time:!0,followRedirect:function(b){if(!a())return!0;let c=b.statusCode;if(300<=c&&400>c&&(302==c||301==c)){let a=h.getCurrentDomains().download,c=b.caseless.get('location'),d=o.exec(c.toLowerCase());d=d&&d[0]||'';for(let b=0;b<a.length;b++){let c=a[b],e=o.exec(c.toLowerCase());if(e=e&&e[0],e==d)return!0}let e=[];a.forEach((a)=>{e.push([a])}),k.display({command:l.DISPLAY_INFO,type:l.DISPLAY_TYPES.DOMAIN_ERROR,data:{type:'download',url:`302: ${c}`,domains:e}}),G=!0}return!1}};a()?H.agentOptions={secureProtocol:'TLSv1_2_method'}:H.tunnel=!1;let I=u++;const J=`2.${I}`,K=Date.now();e({type:f.ASSDK_CALLBACK,res:{errMsg:`${p.api}:ok`,downloadTaskId:I},callbackID:p.callbackID}),e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.requestWillBeSent',params:{requestId:J,documentURL:C.Referer,request:{url:H.url,method:H.method,headers:C},timestamp:K/1e3,type:'XHR'}}});let L=g(H);t[I]={downloadTaskId:I,request:L};let M=B;const N=(a)=>{t[I]&&(delete t[I],q--,x.triggerOnEvent({eventName:'onDownloadTaskStateChange',data:Object.assign({downloadTaskId:I},a)}))},O=(a,c)=>{x.triggerOnEvent({eventName:'onDownloadTaskStateChange',data:{downloadTaskId:I,state:'progressUpdate',totalBytesWritten:a,totalBytesExpectedToWrite:c,progress:b(100*(a/c))}})};if(i.isLocalId(s.url)){let a=i.getFileRealPath(s.url);if(!(a&&c.existsSync(a.fileRealPath)))N({state:'success',statusCode:404});else if(s.filePath){let a=i.copyFile(y,s.url,s.filePath);a.error?N({state:'fail',statusCode:403,errMsg:`permission denied, open "${s.filePath}"`}):N({state:'success',filePath:s.filePath,statusCode:200})}else N({state:'success',tempFilePath:s.url,statusCode:200});return}L.on('response',(a)=>{if(w=a.statusCode,200!=w&&206!=w&&404!=w)G?N({state:'fail',errMsg:'url not in domain list'}):N({state:'success',statusCode:w});else{let b=parseInt(a.headers['content-length']);if(b>B?(L.abort(),N({state:'fail',errMsg:'exceed max file size'})):M=b,a.headers['content-type']){const b=a.headers['content-type'].replace(/;.*/g,''),c=n[b.toLowerCase()];if(c)z=`.${c}`;else{let a=b.split('/');a&&a[1]&&!/\-|\+/ig.test(a[1])&&(z=`.${a[1]}`)}}}for(var b={},c=0,d=a.rawHeaders.length;c<d;c+=2)b[a.rawHeaders[c]]=a.rawHeaders[c+1]||'';var g=a.request.timings;e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.responseReceived',params:{requestId:J,timestamp:Date.now()/1e3,type:'XHR',response:{url:H.url,status:a.statusCode,statusText:a.statusMessage,headers:b,connectionId:J,timing:{requestTime:K/1e3,proxyStart:0,proxyEnd:g.socket,dnsStart:g.socket,dnsEnd:g.lookup,connectStart:g.lookup,connectEnd:g.connect,sslStart:-1,sslEnd:-1,workerStart:-1,workerReady:-1,sendStart:g.connect,sendEnd:g.connect,pushStart:0,pushEnd:0,receiveHeadersEnd:g.response},protocol:a.request.uri.protocol.replace(/:$/,'')+'/'+a.httpVersion}}}}),x.triggerOnEvent({eventName:'onDownloadTaskStateChange',data:{downloadTaskId:I,state:'headersReceived',header:b}})}).on('error',function(a){a&&'EPROTO'===a.code?N({state:fail,errMsg:'\u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2'}):a&&'ETIMEDOUT'===a.code?N({state:'fail',errMsg:`timeout`}):N({state:'fail',errMsg:`${a}`}),e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFailed',params:{requestId:J,timestamp:Date.now()/1e3,type:'XHR',errorText:a.toString(),canceled:!1}}})}).on('data',(a)=>{j+=a.length,r.push(a),j>B?(N({state:'fail',errMsg:'exceed max file size'}),L.abort()):O(j,M),e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.dataReceived',params:{requestId:J,timestamp:Date.now()/1e3,dataLength:a.length,encodedDataLength:a.length}}})}).on('abort',()=>{setTimeout(()=>{N({state:'fail',errMsg:'abort'})},0),e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFailed',params:{requestId:J,timestamp:Date.now()/1e3,type:'XHR',errorText:'abort',canceled:!0}}})}).on('end',(a)=>{a&&r.push(a);let b=Buffer.concat(r),d=i.initTmpfileName(y,b,z),g=i.getFileRealPath(d),h=g.fileRealPath;if(c.writeFileSync(h,b),c.unlinkSync(E),s.filePath){const a=i.rename(y,d,s.filePath);a.error?(N({state:'fail',errMsg:`permission denied, open "${s.filePath}"`,statusCode:w}),c.unlinkSync(d),c.unlinkSync(E),c.unlinkSync(h)):N({state:'success',filePath:s.filePath,statusCode:w})}else N({state:'success',tempFilePath:d,statusCode:w});e({type:f.SIMULATOR_DEBUG_INFO,data:{method:'Network.loadingFinished',params:{requestId:J,timestamp:Date.now()/1e3,dataLength:b.length,encodedDataLength:b.length}}}),m.set(J,h,'file')}).pipe(c.createWriteStream(E))}catch(a){return{errMsg:`${p.api}:fail ${a}`}}},operateDownloadTask:async function(a,b){let c=b.args,d=c.downloadTaskId,e=c.operationType,f=t[d];return f?'abort'==e?(f.request&&f.request.abort(),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail illegal operationType`}:{errMsg:`${b.api}:fail task not found`}},resetNetworkStatus:function(){for(var a in r)try{r[a].request.abort()}catch(a){}for(var a in t)try{t[a].request.abort()}catch(a){}p=0,q=0,r={},t={}}}}(require('lazyload'),require);