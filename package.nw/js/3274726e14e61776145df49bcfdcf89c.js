'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./eadce02c750c875a10680bcfedadec88.js'),c=require('./fc137838572a83604db39acff8e909e0.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./875171e7b864aa58d026d4fa0999fbd1.js'),g=require('classnames'),{connect:h}=require('react-redux');class i extends a.Component{constructor(a){super(a),this.state=_extends({show:a.show},a.config)}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show}),a.config!=this.props.config&&this.setState(_extends({},a.config))}onConfirmClick(){this.setState({show:!1}),this.props.setToolbarConfig({cos:this.state.cos,qcloud:this.state.qcloud,tgit:this.state.tgit,upload:this.state.upload,test:this.state.test})}onAnimationOut(){this.props.setToolbarConfigWnd({show:!1})}onIconClick(a){this.setState({[a]:!this.state[a]})}getCheckboxState(b){return a.createElement('i',{className:g({"ui-icon-checkbox":!b,"ui-icon-checkbox-o":b})})}render(){let b=this.props,c=b.project.attr&&b.project.attr.gameApp;return a.createElement(f,{show:this.state.show,inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this),style:{width:600,marginLeft:-300}},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},'\u81EA\u5B9A\u4E49\u5DE5\u5177\u7BA1\u7406')),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'toolbar-item-group'},a.createElement('div',{className:'toolbar-item',onClick:this.onIconClick.bind(this,'upload')},a.createElement('div',{className:'toolbar-action'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-upload'})),a.createElement('p',{className:'toolbar-label'},'\u4E0A\u4F20')),a.createElement('label',{className:'ui-checkbox'},this.getCheckboxState(this.state.upload))),a.createElement('div',{className:'toolbar-item',style:{display:c?'none':''},onClick:this.onIconClick.bind(this,'test')},a.createElement('div',{className:'toolbar-action'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-beaker'})),a.createElement('p',{className:'toolbar-label'},'\u6D4B\u8BD5')),a.createElement('label',{className:'ui-checkbox'},this.getCheckboxState(this.state.test))),a.createElement('div',{className:'toolbar-item',onClick:this.onIconClick.bind(this,'qcloud')},a.createElement('div',{className:'toolbar-action'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-cloud'})),a.createElement('p',{className:'toolbar-label'},'\u817E\u8BAF\u4E91')),a.createElement('label',{className:'ui-checkbox'},this.getCheckboxState(this.state.qcloud))),a.createElement('div',{className:'toolbar-item',onClick:this.onIconClick.bind(this,'cos')},a.createElement('div',{className:'toolbar-action'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-material'})),a.createElement('p',{className:'toolbar-label'},'\u7D20\u6750\u7BA1\u7406')),a.createElement('label',{className:'ui-checkbox'},this.getCheckboxState(this.state.cos))))),a.createElement('div',{className:'ui-dialog-ft',onClick:this.onConfirmClick.bind(this)},a.createElement('div',{className:'ui-dialog-action'}),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-primary'},'\u786E\u5B9A'))))}}module.exports=h((a)=>{return{project:a.project.current||{},show:a.window.toolbarConfig&&a.window.toolbarConfig.show,config:a.toolbar.config}},(a)=>{return{setToolbarConfig:e.bindActionCreators(c.setToolbarConfig,a),setToolbarConfigWnd:e.bindActionCreators(d.setToolbarConfig,a)}})(i)}(require('lazyload'),require);