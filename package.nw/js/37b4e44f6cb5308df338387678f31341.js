'use strict';!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('./aa9fff323e28f4dcd42f368a90ea14e6.js'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./eadce02c750c875a10680bcfedadec88.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),h=require('./3c55dff3626a3ee184d599f076158345.js'),i=require('./41cc7eb0a353a977c089797ea79a43c6.js'),j=require('./adf91eab0ec6d374e49bef9d1646b617.js'),k=require('./7c2dbbb98877b7bbfb1d9a8ea6b5c77c.js'),l=require('./97bb45d1f540ee20771bd8470a70e195.js'),{connect:m}=require('react-redux');class n extends a.Component{constructor(a){super(a),this.onMouseEnter=(a,b)=>{if(this.state.dropdownStatus[a]){const c=b.currentTarget.getBoundingClientRect(),d=this.getDropdownStatusTemplate();d[a]={show:!0,left:c.left+c.width,top:c.top},this.setState({dropdownStatus:d})}},this.onMouseLeave=(a)=>{this.state.dropdownStatus[a]&&this.setState({dropdownStatus:this.getDropdownStatusTemplate()})},this.state={dropdownStatus:this.getDropdownStatusTemplate()}}getDropdownStatusTemplate(){return[{show:!1,left:0,top:0,width:120},{show:!1,left:0,top:0,width:120}]}render(){const b=this.props.list.join(', '),d={list:this.props.list,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave};let e=[];return this.state.dropdownStatus[0].show?e[0]={class:l,props:{show:!0,left:this.state.dropdownStatus[0].left,top:this.state.dropdownStatus[0].top,width:this.state.dropdownStatus[0].width}}:this.state.dropdownStatus[1].show&&(e[1]={class:j,props:{show:!0,left:this.state.dropdownStatus[1].left,top:this.state.dropdownStatus[1].top,width:this.state.dropdownStatus[1].width}}),d.subDropdowns=e,a.createElement(c,{show:this.props.show,currentWording:b,onShowClick:this.props.onShowClick,dropdown:i,dropdownProps:d})}}n.contextTypes={isPopup:b.bool,window:b.object},module.exports=m((a)=>{let b=a.toolbar.device,c=b.list[b.current].name,d=a.toolbar.network,f=g.NETWORK_STATUS_DISPLAY[d.list[d.current]];return{show:a.toolbar.clickKey==e.COMPACT,list:[c,f],top:27,left:219,width:120}},(a)=>{return{onShowClick:f.bindActionCreators(d.toggleCompactToolbar,a)}})(n)}(require('lazyload'),require);