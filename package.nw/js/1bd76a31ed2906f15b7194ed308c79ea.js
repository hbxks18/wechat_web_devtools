'use strict';!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('./1ca0b7713664710bff99ca9c6d29c43c.js'),d=require('./e6c156a6815c8adb17a51ec940f64b68.js'),e=require('./ab4a0f633f4913cbecaafdfbe76012e6.js'),f=require('./7e8b43d0f45f82eadcaf56b7708c4c05.js'),g=require('./5c6730dead6e321eb6cd429af9a845f5.js'),h=require('./4389a88e405d1d37f36c16fc0ec96540.js'),i=require('./b86cb96a5caed2b5ae72ef2e6a5d13ef.js'),j=require('./0cecfd7c413f06c788a4d6b7972cdf96.js'),k=require('./e452f0d072800b8203d233682d37d71a.js'),l=require('./c4190a2430506f3602ca550e1e75d620.js'),{connect:m}=require('react-redux');class n extends a.Component{componentDidMount(){this.props.isPopup&&this.adjustWindowSize(),chrome.fontSettings.setMinimumFontSize({pixelSize:12})}componentWillReceiveProps(a){this.props.isPopup&&(a.screenWidth!==this.props.screenWidth||a.screenHeight!==this.props.screenHeight)&&this.adjustWindowSize()}getChildContext(){return{isPopup:this.props.isPopup,window:this.props.win?this.props.win:null}}adjustWindowSize(){setTimeout(()=>{const a=this.props.win;if(a){let b=this.props.screenWidth;isMac||(b-=10),a.width=b;let c=this.props.screenHeight;const d=document.getElementsByClassName('simulator-toolbar');c+=d[0]?d[0].offsetHeight:27,isMac||(c-=10),a.height=c}})}getWindowComponents(){let b=this.props,c=[];return b.window.addCardShow&&c.push(a.createElement(i,{key:'addcard'})),b.window.viewCardShow&&c.push(a.createElement(j,{key:'viewcard'})),b.window.chooseCardShow&&c.push(a.createElement(k,{key:'choosecard'})),c}onLeftBtnClick(a){a.stopPropagation(),this.props.setActions('back')}onRightBtnClick(a){a.stopPropagation(),this.props.setFooter({show:!0})}render(){let b,i=this.props;i.isPopup?b={width:'100%',height:'100%'}:(b={minWidth:i.shellMinWidth},this.props.debuggerPopup&&(b.width='100%'));let j;return j=i.isPopup?{top:'0',left:'0',width:i.screenWidth,height:i.screenHeight,transform:`scale(${i.deviceScale})`,transformOrigin:'50% 0'}:{marginLeft:-i.screenWidth/2,width:i.screenWidth,height:i.screenHeight,transform:`scale(${i.deviceScale})`,transformOrigin:'50% 0'},a.createElement('div',{className:'simulator-container',style:b},a.createElement(c,null),a.createElement('div',{className:'simulator-shell'},a.createElement('div',{className:'simulator',style:j},a.createElement(h,{height:20,titleStyle:'white',backgroundColor:'#000000'}),a.createElement(d,{showLeftBtn:i.leftbtn,onLeftBtnClick:this.onLeftBtnClick.bind(this),onRightBtnClick:this.onRightBtnClick.bind(this)}),a.createElement(e,null),a.createElement(f,null),a.createElement(g,null)),this.getWindowComponents()))}}n.childContextTypes={isPopup:b.bool,window:b.object},module.exports=m((a)=>{let b=a.toolbar.deviceInfo,c=a.webdebugger||{},d=c.cardInfo,e=a.toolbar.deviceScale,f=Math.max(350,(b.screenWidth+100)*e),g=a.window.simulator||{},h=a.window.debug||{};return{deviceScale:e,shellMinWidth:f,leftbtn:c.leftbtn,screenWidth:b.screenWidth,screenHeight:b.screenHeight,statusbarHeight:b.statusbarHeight,navigationbarHeight:b.navigationbarHeight,isPopup:'popup'===g.position,debuggerPopup:h.popup,window:{addCardShow:'addcard'==d.show,viewCardShow:'viewcard'==d.show,chooseCardShow:'choosecard'==d.show}}},(a)=>{return{setActions:(b)=>{a(l.setActions(b))},setFooter:(b)=>{a(l.setFooter(b))}}})(n)}(require('lazyload'),require);