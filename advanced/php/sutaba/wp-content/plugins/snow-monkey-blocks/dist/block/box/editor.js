!function(){var e={926:function(e,o,n){"use strict";var t={};n.r(t),n.d(t,{metadata:function(){return s},name:function(){return w},settings:function(){return x}});var r=window.wp.element,l=(window.lodash,window.wp.blocks),a=(window.wp.richText,window.wp.i18n);const i=function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<o)&&(e=o),null!==n&&e>n&&(e=n),e};var s=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/box","title":"Box","description":"It is a box.","category":"smb","attributes":{"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"borderColor":{"type":"string"},"textColor":{"type":"string"},"borderWidth":{"type":"number","default":1},"borderRadius":{"type":"number"},"opacity":{"type":"number","default":1},"contentPadding":{"type":"string","default":""},"boxShadow":{"type":"object","default":{"color":"","opacity":0.1,"horizontal":0,"vertical":0,"blur":10,"spread":0,"position":""}}},"supports":{"html":false},"example":{"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]},"style":"snow-monkey-blocks/box","editorScript":"file:../../dist/block/box/editor.js"}'),c=(0,r.createElement)("svg",{viewBox:"0 0 24 24"},(0,r.createElement)("path",{d:"M23,3H1A1,1,0,0,0,0,4V20a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V4A1,1,0,0,0,23,3Zm0,16.47a.52.52,0,0,1-.52.53h-21A.52.52,0,0,1,1,19.47V4.53A.52.52,0,0,1,1.52,4h21a.52.52,0,0,1,.52.53Z"}));function d(){return d=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var u=n(184),m=n.n(u),b=n(685),p=n.n(b),g=window.wp.blockEditor,h=window.wp.components,y=window.wp.data;function k(){const e={disableCustomColors:!(0,g.useSetting)("color.custom"),disableCustomGradients:!(0,g.useSetting)("color.customGradient")},o=(0,g.useSetting)("color.palette.custom"),n=(0,g.useSetting)("color.palette.theme"),t=(0,g.useSetting)("color.palette.default"),l=(0,g.useSetting)("color.defaultPalette");e.colors=(0,r.useMemo)((()=>{const e=[];return n&&n.length&&e.push({name:(0,a._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:n}),l&&t&&t.length&&e.push({name:(0,a._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),colors:t}),o&&o.length&&e.push({name:(0,a._x)("Custom","Indicates this palette comes from the theme.","snow-monkey-blocks"),colors:o}),e}),[t,n,o]);const i=(0,g.useSetting)("color.gradients.custom"),s=(0,g.useSetting)("color.gradients.theme"),c=(0,g.useSetting)("color.gradients.default"),d=(0,g.useSetting)("color.defaultGradients");return e.gradients=(0,r.useMemo)((()=>{const e=[];return s&&s.length&&e.push({name:(0,a._x)("Theme","Indicates this palette comes from the theme.","snow-monkey-blocks"),gradients:s}),d&&c&&c.length&&e.push({name:(0,a._x)("Default","Indicates this palette comes from WordPress.","snow-monkey-blocks"),gradients:c}),i&&i.length&&e.push({name:(0,a._x)("Custom","Indicates this palette is created by the user.","snow-monkey-blocks"),gradients:i}),e}),[i,s,c]),e}function v(e){let{settings:o}=e;return(0,r.createElement)(h.PanelBody,{title:(0,a.__)("Box Shadow","snow-monkey-blocks"),initialOpen:!1},(0,r.createElement)(h.BaseControl,null,o.map(((e,o)=>{return e.hasOwnProperty("colorValue")&&e.hasOwnProperty("onColorChange")?(0,r.createElement)(g.__experimentalColorGradientControl,d({key:o,label:(0,a.__)("Color","snow-monkey-blocks"),disableAlpha:!1,colorValue:e.colorValue,onColorChange:e.onColorChange},k(),{__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})):e.hasOwnProperty("opacityValue")&&e.hasOwnProperty("onOpacityChange")?(0,r.createElement)(h.RangeControl,{key:o,label:(0,a.__)("Opacity","snow-monkey-blocks"),value:Number(e.opacityValue.toFixed(1)),onChange:e.onOpacityChange,min:0,max:1,step:.1}):e.hasOwnProperty("horizontalValue")&&e.hasOwnProperty("onHorizontalChange")?(0,r.createElement)(h.RangeControl,{key:o,label:(0,a.__)("Horizontal","snow-monkey-blocks"),value:e.horizontalValue,onChange:e.onHorizontalChange,min:null!==(n=null==e?void 0:e.min)&&void 0!==n?n:-100,max:null!==(t=null==e?void 0:e.max)&&void 0!==t?t:100}):e.hasOwnProperty("verticalValue")&&e.hasOwnProperty("onVerticalChange")?(0,r.createElement)(h.RangeControl,{key:o,label:(0,a.__)("Vertical","snow-monkey-blocks"),value:e.verticalValue,onChange:e.onVerticalChange,min:null!==(l=null==e?void 0:e.min)&&void 0!==l?l:-100,max:null!==(i=null==e?void 0:e.max)&&void 0!==i?i:100}):e.hasOwnProperty("blurValue")&&e.hasOwnProperty("onBlurChange")?(0,r.createElement)(h.RangeControl,{key:o,label:(0,a.__)("Blur","snow-monkey-blocks"),value:e.blurValue,onChange:e.onBlurChange,min:null!==(s=null==e?void 0:e.min)&&void 0!==s?s:0,max:null!==(c=null==e?void 0:e.max)&&void 0!==c?c:100}):e.hasOwnProperty("spreadValue")&&e.hasOwnProperty("onSpreadChange")?(0,r.createElement)(h.RangeControl,{key:o,label:(0,a.__)("Spread","snow-monkey-blocks"),value:e.spreadValue,onChange:e.onSpreadChange,min:null!==(u=null==e?void 0:e.min)&&void 0!==u?u:-100,max:null!==(m=null==e?void 0:e.max)&&void 0!==m?m:100}):e.hasOwnProperty("positionValue")&&e.hasOwnProperty("onPositionChange")?(0,r.createElement)(h.SelectControl,{key:o,label:(0,a.__)("Position","snow-monkey-blocks"),value:e.positionValue,onChange:e.onPositionChange,options:[{value:"",label:(0,a.__)("Outline","snow-monkey-blocks")},{value:"inset",label:(0,a.__)("Inset","snow-monkey-blocks")}]}):(0,r.createElement)(r.Fragment,{key:o});var n,t,l,i,s,c,u,m}))))}const C=s.attributes;var _=[{attributes:{...C},save(e){let{attributes:o,className:n}=e;const{backgroundColor:t,borderColor:l,textColor:a,borderWidth:i}=o,s={backgroundColor:t||void 0,borderColor:l||void 0,color:a||void 0,borderWidth:i||void 0},c=m()("smb-box",n);return(0,r.createElement)("div",{className:c,style:s},(0,r.createElement)("div",{className:"smb-box__body"},(0,r.createElement)(g.InnerBlocks.Content,null)))}},{attributes:{...C},save(e){let{attributes:o}=e;const{backgroundColor:n,borderColor:t,textColor:l,borderWidth:a}=o;return(0,r.createElement)("div",{className:"smb-box",style:{backgroundColor:n,borderColor:t,color:l,borderWidth:a}},(0,r.createElement)("div",{className:"smb-box__body"},(0,r.createElement)(g.InnerBlocks.Content,null)))}}];const{name:w}=s,x={icon:{foreground:"#cd162c",src:c},edit:function(e){let{attributes:o,setAttributes:n,className:t,clientId:l}=e;const{backgroundColor:s,backgroundGradientColor:c,borderColor:u,textColor:b,borderWidth:C,borderRadius:_,opacity:w,contentPadding:x,boxShadow:f}=o,S=(0,y.useSelect)((e=>{var o,n;return!(null===(o=e("core/block-editor").getBlock(l))||void 0===o||null===(n=o.innerBlocks)||void 0===n||!n.length)}),[l]),P={color:b||void 0,borderRadius:0<=_?`${_}px`:void 0,boxShadow:f.color?`${f.horizontal}px ${f.vertical}px ${f.blur}px ${f.spread}px ${p()(f.color,f.opacity)}`:void 0},O={backgroundColor:s||void 0,backgroundImage:c||void 0,borderColor:u||void 0,borderWidth:C||void 0,borderRadius:0<=_?`${_}px`:void 0,opacity:w},E=m()("smb-box",t,{[`smb-box--p-${x}`]:!!x}),V=(0,g.useBlockProps)({className:E,style:P}),B=(0,g.useInnerBlocksProps)({className:"smb-box__body"},{renderAppender:S?g.InnerBlocks.DefaultBlockAppender:g.InnerBlocks.ButtonBlockAppender});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(g.InspectorControls,null,(0,r.createElement)(g.__experimentalPanelColorGradientSettings,{title:(0,a.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:b,onColorChange:e=>n({textColor:e}),label:(0,a.__)("Text color","snow-monkey-blocks")}],__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0},(0,r.createElement)(g.ContrastChecker,{backgroundColor:s,textColor:b})),(0,r.createElement)(h.PanelBody,{title:(0,a.__)("Border","snow-monkey-blocks"),initialOpen:!1},(0,r.createElement)(g.__experimentalColorGradientControl,d({label:(0,a.__)("Color","snow-monkey-blocks"),colorValue:u,onColorChange:e=>n({borderColor:e})},k(),{__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})),(0,r.createElement)(h.RangeControl,{label:(0,a.__)("Width","snow-monkey-blocks"),value:C,onChange:e=>n({borderWidth:i(e,0,5)}),min:"0",max:"5"}),(0,r.createElement)(h.RangeControl,{label:(0,a.__)("Border radius","snow-monkey-blocks"),help:(0,a.__)("-If set to -1, the default border radius will be applied.","snow-monkey-blocks"),value:_,onChange:e=>n({borderRadius:e||0<=e?e:void 0}),min:"-1",max:"50",initialPosition:"-1",allowReset:!0})),(0,r.createElement)(h.PanelBody,{title:(0,a.__)("Dimensions","snow-monkey-blocks"),initialOpen:!1},(0,r.createElement)(h.SelectControl,{label:(0,a.__)("Padding","snow-monkey-blocks"),value:x,options:[{value:"s",label:(0,a.__)("S","snow-monkey-blocks")},{value:"",label:(0,a.__)("M","snow-monkey-blocks")},{value:"l",label:(0,a.__)("L","snow-monkey-blocks")}],onChange:e=>n({contentPadding:e})})),(0,r.createElement)(h.PanelBody,{title:(0,a.__)("Background","snow-monkey-blocks"),initialOpen:!1},(0,r.createElement)(g.__experimentalColorGradientControl,d({label:(0,a.__)("Color","snow-monkey-blocks"),colorValue:s,gradientValue:c,onColorChange:e=>n({backgroundColor:e}),onGradientChange:e=>n({backgroundGradientColor:e})},k(),{__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})),(0,r.createElement)(h.RangeControl,{label:(0,a.__)("Opacity","snow-monkey-blocks"),value:w,onChange:e=>n({opacity:i(e,0,1)}),min:0,max:1,step:.1})),(0,r.createElement)(v,{settings:[{colorValue:f.color,onColorChange:e=>{const o={...f};o.color=e,n({boxShadow:o})}},{opacityValue:f.opacity,onOpacityChange:e=>{const o={...f};o.opacity=e,n({boxShadow:o})}},{horizontalValue:f.horizontal,onHorizontalChange:e=>{const o={...f};o.horizontal=e,n({boxShadow:o})}},{blurValue:f.blur,onBlurChange:e=>{const o={...f};o.blur=e,n({boxShadow:o})}},{spreadValue:f.spread,onSpreadChange:e=>{const o={...f};o.spread=e,n({boxShadow:o})}}]})),(0,r.createElement)("div",V,(0,r.createElement)("div",{className:"smb-box__background",style:O}),(0,r.createElement)("div",B)))},save:function(e){let{attributes:o,className:n}=e;const{backgroundColor:t,backgroundGradientColor:l,borderColor:a,textColor:i,borderWidth:s,borderRadius:c,opacity:d,contentPadding:u,boxShadow:b}=o,h={color:i||void 0,borderRadius:0<=c?`${c}px`:void 0,boxShadow:b.color?`${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${p()(b.color,b.opacity)}`:void 0},y={backgroundColor:t||void 0,backgroundImage:l||void 0,borderColor:a||void 0,borderWidth:s||void 0,borderRadius:0<=c?`${c}px`:void 0,opacity:d},k=m()("smb-box",n,{[`smb-box--p-${u}`]:!!u});return(0,r.createElement)("div",g.useBlockProps.save({className:k,style:h}),(0,r.createElement)("div",{className:"smb-box__background",style:y}),(0,r.createElement)("div",g.useInnerBlocksProps.save({className:"smb-box__body"})))},deprecated:_};(e=>{if(!e)return;const{metadata:o,settings:n,name:t}=e;o&&(o.title&&(o.title=(0,a.__)(o.title,"snow-monkey-blocks"),n.title=o.title),o.description&&(o.description=(0,a.__)(o.description,"snow-monkey-blocks"),n.description=o.description),o.keywords&&(o.keywords=(0,a.__)(o.keywords,"snow-monkey-blocks"),n.keywords=o.keywords)),(0,l.registerBlockType)({name:t,...o},n)})(t)},184:function(e,o){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)t.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(o,[]))||(e.exports=n)}()},685:function(e){"use strict";var o=function(e){return parseInt(e,16)};e.exports=function(e,n){var t,r,l=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),a=function(e){var n=e.g,t=e.b,r=e.a;return{r:o(e.r),g:o(n),b:o(t),a:+(o(r)/255).toFixed(2)}}({r:(r=3===(t=l).length||4===t.length)?"".concat(t.slice(0,1)).concat(t.slice(0,1)):t.slice(0,2),g:r?"".concat(t.slice(1,2)).concat(t.slice(1,2)):t.slice(2,4),b:r?"".concat(t.slice(2,3)).concat(t.slice(2,3)):t.slice(4,6),a:(r?"".concat(t.slice(3,4)).concat(t.slice(3,4)):t.slice(6,8))||"ff"});return function(e,o){var n,t=e.r,r=e.g,l=e.b,a=e.a,i=(n=o,!isNaN(parseFloat(n))&&isFinite(n)?o:a);return"rgba(".concat(t,", ").concat(r,", ").concat(l,", ").concat(i,")")}(a,n)}}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var l=o[t]={exports:{}};return e[t](l,l.exports,n),l.exports}n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,{a:o}),o},n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(926)}();