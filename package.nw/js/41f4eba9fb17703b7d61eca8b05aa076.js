'use strict';!function(require,directRequire){const a=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),d=a.getState.bind(a),e=()=>{try{return!!d().project.current}catch(a){return!1}},f=()=>{try{return d().window.mainWindow===b.MAIN_WINDOW_TYPE.WEB_DEBUGGER}catch(a){return!1}},g=()=>{try{return d().window.mainWindow===b.MAIN_WINDOW_TYPE.DEV}catch(a){return!1}},h=()=>{try{return d().window.mainWindow===b.MAIN_WINDOW_TYPE.LOGIN}catch(a){return!1}},i=()=>{try{return d().window.mainWindow===b.MAIN_WINDOW_TYPE.SELECT_PROJECT}catch(a){return!1}},j=()=>{try{return d().window.simulator.show}catch(a){return!1}},k=()=>{try{return'popup'===d().window.simulator.position}catch(a){return!1}},l=()=>{try{return d().window.editor.show}catch(a){return!1}},m=()=>{try{return d().window.toolbar.show}catch(a){return!1}},n=()=>{try{return d().window.editor.fileTreeShow}catch(a){return!1}},o=()=>{try{return d().window.debug.show}catch(a){return!1}},p=()=>{try{return'left'===d().window.simulator.position}catch(a){return!1}},q=()=>{try{return d().window.focus===b.WINDOW_FOCUS.DEVTOOLS||d().window.focus===b.WINDOW_FOCUS.REMOTE_DEBUG_DEVTOOLS}catch(a){return!1}},r=()=>{try{return d().window.focus===b.WINDOW_FOCUS.EDITOR}catch(a){return!1}},s=()=>{try{return d().project.current.appid===c.TOURIST_APPID}catch(a){return!1}},t=()=>{try{return d().project.current.appid===c.GAME_TOURIST_APPID}catch(a){return!1}},u=()=>{try{return d().project.current.attr.userbanded}catch(a){return!0}},v=()=>{try{return d().project.current.isMiniCode}catch(a){return!0}},w=(a)=>{return eval(a.replace(/isMiniCode|userbanded|isEditorFocused|isMiniProgramDev|isWebDev|inMainWindow|inLoginWindow|isSimulatorVisible|isEditorVisible|isFileTreeVisible|isDevtoolsVisible|isToolbarVisible|isSimulatorLeft|isSimulatorPopup|isDevtoolsFocused|isTourist|isGameTourist|inSelectProjectWindow/g,(a)=>x[a]&&x[a]()))},x={isMiniProgramDev:e,isWebDev:f,inMainWindow:g,inLoginWindow:h,inSelectProjectWindow:i,isSimulatorVisible:j,isEditorVisible:l,isFileTreeVisible:n,isDevtoolsVisible:o,isToolbarVisible:m,isSimulatorLeft:p,isSimulatorPopup:k,isDevtoolsFocused:q,isTourist:s,isGameTourist:t,userbanded:u,isEditorFocused:r,isMiniCode:v};module.exports={predicates:x,evaluate:w}}(require('lazyload'),require);