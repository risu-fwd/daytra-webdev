!function(){var e={549:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{metadata:function(){return i},name:function(){return f},settings:function(){return m}});var a=window.wp.element,o=(window.lodash,window.wp.blocks),s=(window.wp.richText,window.wp.i18n),i=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/tab-panel","title":"Tab panel","description":"This is tab panel block.","category":"smb","parent":["snow-monkey-blocks/tabs"],"attributes":{"tabPanelId":{"type":"string","source":"attribute","selector":".smb-tab-panel","attribute":"id","default":""},"ariaHidden":{"type":"string","source":"attribute","selector":".smb-tab-panel","attribute":"aria-hidden","default":"true"}},"supports":{"customClassName":false,"reusable":false,"html":false,"__experimentalToolbar":false},"example":{},"editorScript":"file:../../../dist/block/tabs/tab-panel/editor.js"}'),l=(0,a.createElement)("svg",{viewBox:"0 0 24 24"},(0,a.createElement)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,a.createElement)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"}));function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u=n(184),p=n.n(u),d=window.wp.blockEditor,b=window.wp.data;const{name:f}=i,m={icon:{foreground:"#cd162c",src:l},edit:function(e){let{attributes:t,className:n,clientId:r}=e;const{tabPanelId:o}=t,s=(0,b.useSelect)((e=>{var t,n;return!(null===(t=e("core/block-editor").getBlock(r))||void 0===t||null===(n=t.innerBlocks)||void 0===n||!n.length)}),[r]),i=p()("smb-tab-panel",n),l=(0,d.useBlockProps)({className:i}),u=(0,d.useInnerBlocksProps)({className:"smb-tab-panel__body"},{renderAppender:s?d.InnerBlocks.DefaultBlockAppender:d.InnerBlocks.ButtonBlockAppender});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",c({},l,{id:o,role:"tabpanel"}),(0,a.createElement)("div",u)))},save:function(e){let{attributes:t,className:n}=e;const{tabPanelId:r,ariaHidden:o}=t,s=p()("smb-tab-panel",n);return(0,a.createElement)("div",c({},d.useBlockProps.save({className:s}),{id:r,"aria-hidden":o,role:"tabpanel"}),(0,a.createElement)("div",d.useInnerBlocksProps.save({className:"smb-tab-panel__body"})))}};(e=>{if(!e)return;const{metadata:t,settings:n,name:r}=e;t&&(t.title&&(t.title=(0,s.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=(0,s.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=(0,s.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),(0,o.registerBlockType)({name:r,...t},n)})(r)},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(549)}();