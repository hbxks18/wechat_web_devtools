'use strict';!function(require,directRequire){function a(d,e=!0){try{if(!b.existsSync(d))return;let f=b.statSync(d);if(f.isDirectory()){let f=b.readdirSync(d);if(0<f.length)for(let b=0,e=f.length;b<e;b++)a(c.join(d,f[b]),!0);e&&b.rmdirSync(d)}else b.unlinkSync(d)}catch(a){}}const b=require('fs'),c=require('path'),d=require('mkdir-p'),e=global.appConfig.isNodeTest?__dirname:c.join(nw.App.getDataPath(),'..');var f={};f.WeappStorage=c.join(e,'WeappStorage'),d.sync(f.WeappStorage),f.WeappFileCache=c.join(e,'WeappFileCache'),d.sync(f.WeappFileCache),f.WeappApplication=c.join(e,'WeappApplication'),d.sync(f.WeappApplication),f.WeappVendor=c.join(e,'WeappVendor'),d.sync(f.WeappVendor),f.WeappLog=c.join(e,'WeappLog'),d.sync(f.WeappLog),f.ProxyCache=c.join(e,'ProxyCache'),d.sync(f.ProxyCache),f.WeappEditor=c.join(e,'WeappEditor'),d.sync(f.WeappEditor),f.WeappRemote=c.join(e,'WeappRemote'),d.sync(f.WeappRemote),f.WeappRemoteData=c.join(e,'WeappRemote','data'),d.sync(f.WeappRemoteData),f.WeappRemoteTemp=c.join(e,'WeappRemote','temp'),d.sync(f.WeappRemoteTemp),f.WeappRemoteLog=c.join(e,'WeappRemote','log'),d.sync(f.WeappRemoteLog),f.WeappRemoteVendor=c.join(e,'WeappRemote','vendor'),d.sync(f.WeappRemoteVendor),f.WeappFileSystem=c.join(e,'WeappFileSystem'),d.sync(f.WeappFileSystem),f.WeappLocalData=c.join(e,'WeappLocalData'),d.sync(f.WeappLocalData),f.WeappMiniCode=c.join(e,'WeappMiniCode'),d.sync(f.WeappMiniCode),f.WeappCode=c.join(e,'WeappCode'),d.sync(f.WeappCode),f.Weappdest=c.join(e,'Weappdest'),a(f.Weappdest,!1),d.sync(f.Weappdest),f.WeappTraceFiles=c.join(e,'WeappTraceFiles'),a(f.WeappTraceFiles,!1),d.sync(f.WeappTraceFiles),module.exports=f}(require('lazyload'),require);