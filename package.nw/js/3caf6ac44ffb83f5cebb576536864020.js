'use strict';!function(require,directRequire){function a(){r=''}function b(a,b){let c=e.extname(b);'.js'===c&&('add'==a||'unlink'==a)&&(r='')}async function c(a){let c=await i(a);q&&q.srcPath==c.srcPath||(r='',q&&q.unWatch(b),q=c,q.watch(b))}async function d(a){let b=await g(a),c=b.widgets;for(let b,d=0,e=c.length;d<e;d++)if(b=c[d],b.type==a.compileType)return b.path}const e=require('path'),f=require('./d28a711224425b00101635efe1034c99.js'),g=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),h=require('./84b183688a46c9e2626d3e6f83365e13.js'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js'),{asDebug:j,htmlBegin:k,htmlEnd:l,vendorList:m,devVendorList:n,noBrowser:o}=require('./bcbc694e4d465af7bbc604e962f3f0e1.js'),p=global.appConfig.isDev?n:m;var q,r='';f.on('VENDOR_CONFIG_CHANGE',a),f.on('VENDOR_VERSION_CHANGE',a),module.exports=async function(a,b={}){if(await c(a),!r||b.force){let b=[];const c=require('fs'),g=global.appConfig.isDev?e.join(__dirname,'../../../extensions/appservice/index.js'):e.join(__dirname,'./extensions/appservice/index.js'),h=c.readFileSync(g,'utf8');b.push(k),b.push(`<script>${h}</script>`);for(let a=0,c=p.length;a<c;a++){let c=p[a],d=await f.getFile(c),g=e.extname(c);'.js'===g?b.push(`<script>${d} </script>`):'.css'===g&&b.push(`<style>${d}</style>`)}let i=await d(a),j=q.getAllJSFiles(),m=[],n=e.posix.join(i,'widget'),o=!1;return j.forEach((a)=>{let b=e.posix.normalize(a.replace(/\.js$/,''));0==e.posix.dirname(b).indexOf(i)&&(n==b?o=!0:m.push(`<script src="${a}"></script>`))}),n=o?`<script src="${n}.js"></script>
        <script>require("${n}.js")</script>`:`<script>
        console.group("${new Date} widget 编译错误")
        console.error(\` ${n}.js 出现脚本错误或者未正确调用 Widget()\`)
        console.groupEnd()
        </script>`,b=b.concat(m).concat([n]),b.push(l),b.join('\n')}return r}}(require('lazyload'),require);