'use strict';!function(require,directRequire){const a=require('fs'),b=require('path');module.exports=async function(c){switch(c){case'appservice.js':{const c=global.appConfig.isDev?'./js/extensions/devtools/experience/appservice/index.js':b.join(__dirname,'./extensions/devtools/experience/appservice/index.js');return`${a.readFileSync(c,'utf8')}`}case'webview.js':{const c=global.appConfig.isDev?'./js/extensions/devtools/experience/webview/index.js':b.join(__dirname,'./extensions/devtools/experience/webview/index.js');return`${a.readFileSync(c,'utf8')}`}}}}(require('lazyload'),require);