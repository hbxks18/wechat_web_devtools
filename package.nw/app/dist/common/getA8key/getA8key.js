'use strict';var _exports;function init(){function a(e){let f={},g=e.length;for(let h=0;h<g;h++)d[h]&&1===parseInt(e[h])&&(f[d[h]]=!0);return f}const b=require('../../config/urlConfig.js'),c=require('../../utils/tools.js'),d=require('./sdkBitConfig.js');require('../../stores/windowStores.js'),_exports={get:(e,f)=>{let g=c.parseURL(e.url),h={url:g,scene:1,devtoolsVersion:c.getVersionNum(),reason:e.isSync?0:1},j={url:b.GET8KEY_URL,body:JSON.stringify(h),method:'post',needToken:1};const k=require('../request/request.js');k(j,(l,m,n)=>{if(!l){let o=JSON.parse(n);o.purviewFormGetA8key=o.jsapi_control_bytes?a(o.jsapi_control_bytes):null,f(o)}})}}}init(),module.exports=_exports;