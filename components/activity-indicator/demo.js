webpackJsonp([21],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(23),p=t(e),o=s(22),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){e=!0,p=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},s=l["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),l["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),o=t(p);a["default"]=e;var c=s(1),l=t(c),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},22:function(n,a,s){n.exports={"default":s(24),__esModule:!0}},23:function(n,a,s){n.exports={"default":s(25),__esModule:!0}},24:function(n,a,s){s(21),s(19),n.exports=s(26)},25:function(n,a,s){s(21),s(19),n.exports=s(27)},26:function(n,a,s){var t=s(33),e=s(36);n.exports=s(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},27:function(n,a,s){var t=s(45),e=s(28)("iterator"),p=s(34);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},29:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},31:function(n,a,s){"use strict";s(37)},37:function(n,a){},39:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:l,style:o,onClick:c})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},40:function(n,a,s){"use strict";s(9),s(54)},47:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,l=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:l,style:c},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},48:function(n,a,s){"use strict";s(9),s(60)},49:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&F(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(F(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(7),c=t(o),l=s(8),u=t(l),i=s(17),k=t(i),r=s(4),d=t(r),f=s(6),m=t(f),g=s(5),h=t(g),v=s(1),y=t(v),x=s(3),b=t(x),E=s(12),w=t(E),T=s(29),N=t(T),_=s(18),S=t(_),C=s(20),M=t(C),z=/^[\u4e00-\u9fa5]{2}$/,F=z.test.bind(z),j=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,S["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),s=(0,k["default"])(a,2),t=s[0],e=t.children,o=t.className,l=t.prefixCls,i=t.type,r=t.size,d=t.inline,f=t.across,m=t.disabled,g=t.icon,h=t.loading,v=t.touchFeedback,x=t.activeStyle,E=s[1],T=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,l,!0),(0,u["default"])(n,l+"-primary","primary"===i),(0,u["default"])(n,l+"-ghost","ghost"===i),(0,u["default"])(n,l+"-warning","warning"===i),(0,u["default"])(n,l+"-small","small"===r),(0,u["default"])(n,l+"-inline",d),(0,u["default"])(n,l+"-across",f),(0,u["default"])(n,l+"-disabled",m),(0,u["default"])(n,l+"-loading",h),n),_=(0,w["default"])({},this.props.style);v&&(_=(0,w["default"])(_,x),T[l+"-active"]=!0);var C=h?"loading":g,M=y["default"].Children.map(e,p);return C&&(T[l+"-icon"]=!0),delete E.htmlType,y["default"].createElement("button",(0,c["default"])({},E,{type:this.props.htmlType||"button",style:_,className:(0,b["default"])(T),disabled:m}),C?y["default"].createElement(N["default"],{type:C}):null,M)},a}(y["default"].Component);j.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,M["default"])(j),n.exports=a["default"]},50:function(n,a,s){"use strict";s(9),s(31),s(53)},53:function(n,a){},54:function(n,a){},60:function(n,a){},659:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(48),s(47)),p=t(e),o=(s(50),s(49)),c=t(o),l=(s(785),s(784)),u=t(l),i=(s(40),s(39)),k=t(i),r=s(1),d=t(r),f=s(2);t(f);n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ActivityIndicator<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      animating<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentWillUnmount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >clearTimeout</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer <span class="token operator" >=</span> <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >2000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u65e0\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >animating</span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u5e26\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u52a0\u8f7d\u4e2d...<span class="token punctuation" >"</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example</span> <span class="token attr-name" >white"</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6df1\u8272\u80cc\u666f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>darkBg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>white<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u53f7icon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb\u663e\u793a Toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >toast</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >animating</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating<span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",getInitialState:function(){return{animating:!1}},componentWillUnmount:function(){clearTimeout(this.closeTimer)},showToast:function(){var n=this;this.setState({animating:!this.state.animating}),this.closeTimer=setTimeout(function(){n.setState({animating:!n.state.animating})},2e3)},render:function(){return d["default"].createElement("div",null,d["default"].createElement(p["default"],null,d["default"].createElement("div",{className:"loading-container"},d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"icon\u65e0\u6587\u6848"),d["default"].createElement(u["default"],{animating:!0})),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"icon\u5e26\u6587\u6848"),d["default"].createElement(u["default"],{text:"\u52a0\u8f7d\u4e2d..."})),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example white"},d["default"].createElement("p",{className:"title"},"\u6df1\u8272\u80cc\u666f"),d["default"].createElement("div",{className:"darkBg"},d["default"].createElement(u["default"],{color:"white"}))),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"\u5927\u53f7icon"),d["default"].createElement(u["default"],{size:"large"})),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement(c["default"],{type:"ghost",onClick:this.showToast},"\u70b9\u51fb\u663e\u793a Toast"),d["default"].createElement("div",{className:"toast-example"},d["default"].createElement(u["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d",animating:this.state.animating})))))}});return d["default"].createElement(n,null)},style:".title {\n  font-size: 0.28rem;\n  color: #888;\n  font-weight: 300;\n  width: 25%;\n}\n.loading-example {\n  display: flex;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n.darkBg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 0.89rem;\n  height: 0.89rem;\n  background-color: #2B2F42;\n}\n.loading-example .title {\n  margin-right: 0.2rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >0.28</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#888</span><span class="token punctuation" >;</span>\n  <span class="token property" >font-weight</span><span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >25%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.darkBg</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >justify-content</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >0.89</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >0.89</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >background-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#2B2F42</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},784:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,e=s.className,o=s.animating,c=s.toast,l=s.size,u=s.color,i=s.text,k=(0,m["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-lg","large"===l),(0,p["default"])(n,t+"-sm","small"===l),(0,p["default"])(n,e,!!e),(0,p["default"])(n,t+"-toast",!!c),n)),r=(0,m["default"])((a={},(0,p["default"])(a,t+"-spinner",!0),(0,p["default"])(a,t+"-spinner-lg",!!c||"large"===l),(0,p["default"])(a,t+"-spinner-white",!!c||"white"===u),a));return o?c?d["default"].createElement("div",{className:k},d["default"].createElement("div",{className:t+"-content"},d["default"].createElement("span",{className:r}),i&&d["default"].createElement("span",{className:t+"-toast"},i))):d["default"].createElement("div",{className:k},d["default"].createElement("span",{className:r}),i&&d["default"].createElement("span",{className:t+"-tip"},i)):null},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",color:"gray",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},785:function(n,a,s){"use strict";s(9),s(1131)},865:function(n,a,s){n.exports={basic:s(659)}},1131:function(n,a){}});