'use strict';!function(require,directRequire){function a(a,b){function c(b,c){return'object'==e.getType(b)?'string'==e.getType(b.provider)?'string'==e.getType(b.version)?a.compileType!=h.plugin&&'dev'==b.version?void d.push(f.config.JSON_CONTENT_SHOULD_NOT_BE.format([`${c}.version`,'dev'])+'\n\u5982\u679C\u6B63\u5728\u5F00\u53D1\u63D2\u4EF6\uFF0C\u8BF7\u9009\u62E9\u63D2\u4EF6\u6A21\u5F0F'):a.compileType==h.plugin&&'dev'==b.version&&b.provider!=a.appid?void d.push(f.config.JSON_CONTENT_SHOULD_BE.format([`${c}.provider`,a.appid])):'dev'==b.version||/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(b.version)||void d.push(f.config.JSON_CONTENT_SHOULD_BE.format([`${c}.version`,'\u6570\u5B57.\u6570\u5B57.\u6570\u5B57'])):void d.push(f.config.JSON_CONTENT_SHOULD_BE.format([`${c}.version`,'string'])):void d.push(f.config.JSON_CONTENT_SHOULD_BE.format([`${c}.provider`,'string'])):void d.push(f.config.JSON_CONTENT_SHOULD_BE.format([`${c}`,'object']))}let d=[],g=b.plugins;if(!g)return d;if('object'!=e.getType(g))return d.push(f.config.JSON_CONTENT_SHOULD_BE.format(['plugins','object'])),d;let i={};for(let e in g){let a=g[e];c(a,`plugins.${e}`)&&(i[a.provider]?d.push(`plugins 中存在多个 provider:${a.provider}`):i[a.provider]={provider:a.provider,version:a.version,alias:e})}return b.subPackages&&b.subPackages.forEach((a,b)=>{if(a.plugins)for(let e in a.plugins){let h=a.plugins[e];(g[e]&&d.push(f.config.JSON_PLUGIN_SHOULD_NOT_IN_SUBPACKAGE.format([`plugins ${e}`,`subPackages[${b}]`])),!!c(h,`subPackages[${b}].plugins.${e}`))&&(i[h.provider]?d.push(`subPackages[${b}].plugins['${e}'].provider 已存在`):i[h.provider]={provider:h.provider,version:h.version,alias:h})}}),d}async function b(b){let k=await j(b),o=k.srcPath,p=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),q='app.json',r='',s=[];try{r=k.getFile(q)}catch(a){let b=new Error(f.config.FILE_NOT_FOUND.format(q));throw b.code=n.APP_JSON_READ_ERR,b.ext=a.toString(),b}let t={};try{t=JSON.parse(r)}catch(a){let b=l.parseJsonParseErr({data:r,error:a}),c=new Error(b);throw c.code=n.APP_JSON_PARSE_ERR,c}let u=b.compileType,v=t.pages||[];if('array'!=e.getType(v)||0===v.length){let a=new Error(f.config.ENTRANCE_NOT_FOUND.format(JSON.stringify(v)));throw a.code=n.APP_JSON_ENTRANCE_NOT_FOUND_ERR,a}let w=!t.entryPagePath,x={};for(let a,e=0;e<v.length;e++){if(a=v[e],x[a]){let b=new Error(f.config.JSON_PAGES_REPEAT.format([q,a]));throw b.code=n.APP_JSON_PAGES_ERR,b}if(x[a]=!0,w||a!=t.entryPagePath||(w=!0),!d.existsSync(c.join(o,`${v[e]}\.wxml`))){let b=new Error(f.config.JSON_PAGE_WXML_NOT_EXISTS.format([q,'pages',a]));throw b.code=n.APP_JSON_WXML_NOT_FOUND,b}if(!d.existsSync(c.join(o,`${v[e]}\.js`))){let b=new Error(f.config.JSON_PAGE_JS_NOT_EXISTS.format([q,'pages',a]));throw b.code=n.APP_JSON_JS_NOT_FOUND,b}}let y=t.tabBar;if(y){let a;if('array'!=e.getType(y.list))a=new Error(f.config.JSON_TABBAR_SHOULD_BE_LIST);else if(!y.list||y.list.length<p.setting.MinTabbarCount)a=new Error(f.config.JSON_TABBAR_AT_LEAST.format(p.setting.MinTabbarCount));else if(y.list.length>p.setting.MaxTabbarCount)a=new Error(f.config.JSON_TABBAR_AT_MOST.format(p.setting.MaxTabbarCount));else{s=[];for(var z=0;z<y.list.length;z++){let a=y.list[z];if(0>v.indexOf(a.pagePath)){s.push(`tabBar[${z}].pagePath "${a.pagePath}" 需在 pages 数组中`);continue}if('object'!=e.getType(a)){s.push(f.config.JSON_TABBAR_ITEM_OBJECT.format(z));continue}let b=a.pagePath;if(!b){s.push(f.config.JSON_TABBAR_PATH_EMPTY.format(z));continue}if('string'!=e.getType(b)){s.push(f.config.JSON_TABBAR_PATH_STRING.format(z));continue}2<=b.split('?').length&&s.push(f.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([z,'?'])),2<=b.split('.').length&&s.push(f.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([z,'.']));let g=[];if(a.iconPath){let b=c.join(o,a.iconPath);a.iconPath=c.relative(o,b),g.push({name:'iconPath',path:b})}if(a.selectedIconPath){let b=c.join(o,a.selectedIconPath);a.selectedIconPath=c.relative(o,b),g.push({name:'selectedIconPath',path:b})}g.forEach((a)=>{if(!d.existsSync(a.path))return s.push(f.config.JSON_TABBAR_ICON_NOT_FOUND.format([z,a.name]));let b=d.statSync(a.path);if(b.isDirectory())return s.push(f.config.JSON_TABBAR_ICON_NOT_DIR.format([z,a.name]));b.size>1024*p.setting.MaxTabbarIconSize&&s.push(f.config.JSON_TABBAR_ICON_MAX_SIZE.format([z,a.name,p.setting.MaxTabbarIconSize]));let e=c.extname(a.path);0>m.indexOf(e)&&s.push(f.config.JSON_TABBAR_ICON_EXT.format([z,a.name,m.join('\u3001')]))})}0<s.length&&(a=new Error(s.join('\n')))}if(a)throw a.code=n.APP_JSON_CONTENT_ERR,a}if(u==h.conversation||u==h.search){let a,g=t.widgets,h='';if(!g)a=new Error(f.config.JSON_WIDGETS_EMPTY.format('app.json'));else if('array'!=e.getType(g))a=new Error(f.config.JSON_WIDGETS_NOT_ARRAY.format('app.json'));else{let i=[];g.forEach((a,g)=>{if('object'!=e.getType(a))i.push(f.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(['app.json',g]));else if('conversation'!=a.type&&'search'!=a.type)i.push(f.config.JSON_WIDGETS_TYPE_INVALID.format(['app.json',g,'conversation\u3001search']));else if(!a.path||'string'!=e.getType(a.path))i.push(f.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['app.json',g]));else if(!d.existsSync(c.join(o,a.path)))i.push(f.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['app.json',g]));else{let b=d.statSync(c.join(o,a.path));b.isDirectory()?!d.existsSync(c.join(o,a.path,'widget.js'))&&i.push(f.config.JSON_WIDGETS_JS_NOT_FOUND.format(['app.json',g,'widget.js'])):i.push(f.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(['app.json',g]))}h||a.type!=b.compileType||(h=a.path)}),h||i.push(f.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(['app.json',b.compileType])),0<i.length&&(a=new Error(i.join('\n')))}if(a)throw a.code=n.APP_JSON_CONTENT_ERR,a}let i=await g(b);if(i)for(let a in i)'extPages'!=a&&(t[a]='object'==e.getType(i[a])?Object.assign({},t[a]||{},i[a]):i[a]);if(t.subPackages){if('array'!=e.getType(t.subPackages)){let a=new Error(f.config.JSON_CONTENT_SHOULD_BE.format(['subPackages','array']));throw a.code=n.APP_JSON_CONTENT_ERR,a}let a={},b={},g=[];if(t.subPackages.forEach((h,i)=>{if('string'!=e.getType(h.root))return void g.push(f.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'string']));h.root=c.posix.join(h.root,'/');let j=-1;if(t.subPackages.forEach((a,b)=>{b!=i&&a.root&&0<=h.root.indexOf(c.posix.join(a.root,'/'))&&(j=b)}),-1!=j)return void g.push(f.config.JSON_CONTENT_SHOULD_NOT_BE.format([`subPackages[${i}].root`,`subPackages[${j}].root 的子目录`]));if(v.forEach((a)=>{0==a.indexOf(h.root)&&g.push(f.config.JSON_PAGE_SHOULD_NOT_IN_SUBPACKAGE.format([`pages ${a}`,`subPackages[${i}]`]))}),!d.existsSync(c.join(o,h.root)))return void g.push(f.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']));let k=d.statSync(c.join(o,h.root));return k.isDirectory()?a[h.root]?void g.push(f.config.JSON_SUBPACKAGE_EXIST.format([`subPackages[${i}].root`])):(a[h.root]=!0,'array'==e.getType(h.pages)?void h.pages.forEach((a)=>{let e=c.posix.join(h.root,a);return b[e]?void g.push(f.config.JSON_PAGES_REPEAT.format([`subPackages[${i}]`,a])):void(b[e]=!0,!w&&e==t.entryPagePath&&(w=!0),!d.existsSync(c.join(o,`${e}\.wxml`))&&g.push(f.config.JSON_PAGE_WXML_NOT_EXISTS.format([`subPackages[${i}]`,'pages',e])),!d.existsSync(c.join(o,`${e}\.js`))&&g.push(f.config.JSON_PAGE_JS_NOT_EXISTS.format([`subPackages[${i}]`,'pages',e])))}):void g.push(f.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].pages`,'array']))):void g.push(f.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']))}),0<g.length){let a=new Error(g.join('\n'));throw a.code=n.APP_JSON_CONTENT_ERR,a}}if(!w){let a=new Error(f.config.JSON_ENTRY_PAGE_PATH_NOT_FOUND.format(['pages\u3001subPackages','entryPagePath']));throw a.code=n.APP_JSON_PAGES_ERR,a}if(s=a(b,t),0<s.length){let a=new Error(s.join('\n'));throw a.code=n.APP_JSON_CONTENT_ERR,a}if(t.window&&(s=[],['enablePullDownRefresh'].forEach((a)=>{'undefined'!=typeof t.window[a]&&'boolean'!=typeof t.window[a]&&s.push(f.config.JSON_CONTENT_SHOULD_BE.format([a,'boolean']))}),t.window.backgroundColorTop&&(t.window.backgroundColor=t.window.backgroundColorTop)),0<s.length){let a=new Error(s.join('\n'));throw a.code=n.APP_JSON_CONTENT_ERR,a}return t}const c=require('path'),d=require('fs'),e=require('./84b183688a46c9e2626d3e6f83365e13.js'),f=require('./common/locales/index.js'),g=require('./551bb965e1f344281d555a429cd2140c.js'),h=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),j=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),l=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),m=['.png','.jpg','.jpeg'],n=require('./949d8235c744ced2a80121e4dba34c28.js');module.exports=async function(a){try{return await b(a)}catch(a){throw a.code||(a.code=n.APP_JSON_CONTENT_ERR),a}}}(require('lazyload'),require);