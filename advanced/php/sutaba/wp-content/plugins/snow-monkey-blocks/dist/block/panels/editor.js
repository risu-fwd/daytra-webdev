!function(){var e={838:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,{metadata:function(){return m},name:function(){return E},settings:function(){return N}});var l=window.wp.element,s=window.lodash,i=window.wp.blocks,o=(window.wp.richText,window.wp.i18n);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==a&&e>a&&(e=a),e};var m=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/panels","title":"Panels","description":"Let\'s line up the contents like the panel.","category":"smb","attributes":{"sm":{"type":"number","default":1},"md":{"type":"number","default":1},"lg":{"type":"number","default":2},"imagePadding":{"type":"boolean","default":false},"itemTitleTagName":{"type":"string","default":"div"},"contentJustification":{"type":"string"}},"supports":{"html":false},"style":"snow-monkey-blocks/panels","editorScript":"file:../../dist/block/panels/editor.js"}'),c=(0,l.createElement)("svg",{viewBox:"0 0 24 24"},(0,l.createElement)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,l.createElement)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,l.createElement)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,l.createElement)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"}));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var d=a(184),p=a.n(d),g=window.wp.blockEditor,b=window.wp.components,_=window.wp.data;function k(e){const{desktop:t,tablet:a,mobile:n}=e,s=[];return t&&s.push({name:"desktop",title:(0,l.createElement)(b.Dashicon,{icon:"desktop"})}),a&&s.push({name:"tablet",title:(0,l.createElement)(b.Dashicon,{icon:"tablet"})}),n&&s.push({name:"mobile",title:(0,l.createElement)(b.Dashicon,{icon:"smartphone"})}),(0,l.createElement)(b.TabPanel,{className:"smb-inspector-tabs",tabs:s},(e=>{if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return a();if("mobile"===e.name)return n()}}))}const f=["snow-monkey-blocks/panels-item","snow-monkey-blocks/panels-item-horizontal","snow-monkey-blocks/panels-item-free","snow-monkey-blocks/panels-item-block-link"],w=["left","center","right","space-between"],y=m.attributes;var h=[{attributes:{...y},save(e){let{attributes:t}=e;const{sm:a,md:n,lg:s,imagePadding:i}=t;return(0,l.createElement)("div",{className:"smb-panels","data-image-padding":i},(0,l.createElement)("div",{className:"c-row c-row--margin c-row--fill","data-columns":a,"data-md-columns":n,"data-lg-columns":s},(0,l.createElement)(g.InnerBlocks.Content,null)))}},{attributes:{...y,columns:{type:"number",default:2},items:{type:"array",source:"query",default:[],selector:".smb-panels__item",query:{title:{source:"html",selector:".smb-panels__item__title"},summary:{source:"html",selector:".smb-panels__item__content"},linkLabel:{source:"html",selector:".smb-panels__item__link"},linkURL:{type:"string",source:"attribute",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",attribute:"target",default:"_self"},imageID:{type:"number",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"src",default:""}}}},migrate:e=>[{sm:e.sm,md:e.md,lg:e.lg,imagePadding:Boolean(e.imagePadding)},(()=>{const t=void 0===e.items?0:e.items.length;return(0,s.times)(t,(t=>{const a=(0,s.get)(e.items,[t,"title"],""),n=(0,s.get)(e.items,[t,"summary"],""),l=(0,s.get)(e.items,[t,"linkLabel"],""),o=(0,s.get)(e.items,[t,"linkURL"],""),r=(0,s.get)(e.items,[t,"linkTarget"],"_self"),m=(0,s.get)(e.items,[t,"imageID"],0),c=(0,s.get)(e.items,[t,"imageURL"],"");return(0,i.createBlock)("snow-monkey-blocks/panels-item",{titleTagName:e.itemTitleTagName,title:a,summary:n,linkLabel:l,linkURL:o,linkTarget:r,imageID:Number(m),imageURL:c})}))})()],save(e){let{attributes:t}=e;const{sm:a,md:n,lg:i,imagePadding:o,itemTitleTagName:r,items:m}=t,c=void 0===t.items?0:t.items.length,u=()=>{let e=[];return e.push("c-row__col"),e.push(`c-row__col--1-${a}`),e.push(`c-row__col--md-1-${n}`),e.push(`c-row__col--lg-1-${i}`),e=e.join(" "),e};return(0,l.createElement)("div",{className:`smb-panels smb-panels--sm-${a} smb-panels--md-${n} smb-panels--lg-${i}`,"data-image-padding":o},(0,l.createElement)("div",{className:"c-row c-row--margin c-row--fill"},(0,s.times)(c,(e=>{const t=(0,s.get)(m,[e,"title"],""),a=(0,s.get)(m,[e,"summary"],""),n=(0,s.get)(m,[e,"linkLabel"],""),i=(0,s.get)(m,[e,"linkURL"],""),o=(0,s.get)(m,[e,"linkTarget"],"_self"),c=(0,s.get)(m,[e,"imageID"],0),d=(0,s.get)(m,[e,"imageURL"],"");return(0,l.createElement)("div",{className:u()},(p=(0,l.createElement)(l.Fragment,null,!!c&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:d,alt:"",className:`wp-image-${c}`,"data-image-id":c})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!g.RichText.isEmpty(t)&&(0,l.createElement)(g.RichText.Content,{tagName:r,className:"smb-panels__item__title",value:t}),!g.RichText.isEmpty(a)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(g.RichText.Content,{value:a})),!g.RichText.isEmpty(n)&&(0,l.createElement)("div",{className:"smb-panels__item__action"},(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(g.RichText.Content,{value:n}))))),i?(0,l.createElement)("a",{className:"smb-panels__item",href:i,target:o},p):(0,l.createElement)("div",{className:"smb-panels__item",href:i,target:o},p)));var p}))))}},{attributes:{columns:{type:"number",default:2},sm:{type:"number",default:1},md:{type:"number",default:1},lg:{type:"number",default:2},imagePadding:{type:"boolean",default:!1},items:{type:"array",source:"query",default:[],selector:".smb-panels__item",query:{title:{source:"html",selector:".smb-panels__item__title"},summary:{source:"html",selector:".smb-panels__item__content"},linkLabel:{source:"html",selector:".smb-panels__item__link"},linkURL:{type:"string",source:"attribute",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",attribute:"target",default:"_self"},imageID:{type:"number",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"src",default:""}}}},save(e){let{attributes:t}=e;const{columns:a,sm:n,md:i,lg:o,imagePadding:r,items:m}=t;return(0,l.createElement)("div",{className:`smb-panels smb-panels--sm-${n} smb-panels--md-${i} smb-panels--lg-${o}`,"data-image-padding":r},(0,l.createElement)("div",{className:"c-row c-row--margin c-row--fill"},(0,s.times)(a,(e=>{const t=(0,s.get)(m,[e,"title"],""),a=(0,s.get)(m,[e,"summary"],""),r=(0,s.get)(m,[e,"linkLabel"],""),c=(0,s.get)(m,[e,"linkURL"],""),u=(0,s.get)(m,[e,"linkTarget"],"_self"),d=(0,s.get)(m,[e,"imageID"],0),p=(0,s.get)(m,[e,"imageURL"],"");return(0,l.createElement)("div",{className:(()=>{let e=[];return e.push("c-row__col"),e.push(`c-row__col--1-${n}`),n===i&&e.push(`c-row__col--1-${i}`),e.push(`c-row__col--lg-1-${o}`),e=e.join(" "),e})()},(b=(0,l.createElement)(l.Fragment,null,!!d&&(0,l.createElement)("div",{className:"smb-panels__item__figure"},(0,l.createElement)("img",{src:p,alt:"","data-image-id":d})),(0,l.createElement)("div",{className:"smb-panels__item__body"},!g.RichText.isEmpty(t)&&(0,l.createElement)("div",{className:"smb-panels__item__title"},(0,l.createElement)(g.RichText.Content,{value:t})),!g.RichText.isEmpty(a)&&(0,l.createElement)("div",{className:"smb-panels__item__content"},(0,l.createElement)(g.RichText.Content,{value:a})),!g.RichText.isEmpty(r)&&(0,l.createElement)("div",{className:"smb-panels__item__action"},(0,l.createElement)("div",{className:"smb-panels__item__link"},(0,l.createElement)(g.RichText.Content,{value:r}))))),c?(0,l.createElement)("a",{className:"smb-panels__item",href:c,target:u},b):(0,l.createElement)("div",{className:"smb-panels__item",href:c,target:u},b)));var b}))))}}],v={innerBlocks:[{name:"snow-monkey-blocks/panels-item",attributes:{title:"Lorem ipsum",summary:"sed do eiusmod tempor incididunt",imageURL:`${smb.pluginUrl}/dist/img/photos/beach-sand-coast2756.jpg`,imageID:1}},{name:"snow-monkey-blocks/panels-item",attributes:{title:"dolor sit amet",summary:"ut labore et dolore magna aliqua",imageURL:`${smb.pluginUrl}/dist/img/photos/building-architecture-sky2096.jpg`,imageID:1}}]};const{name:E}=m,N={icon:{foreground:"#cd162c",src:c},edit:function(e){let{attributes:t,setAttributes:a,className:n,clientId:s}=e;((e,t)=>{const{replaceBlock:a}=(0,_.useDispatch)("core/block-editor"),{getBlockOrder:n,getBlock:s}=(0,_.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),o=e=>`wp-block-${e.replace("/","-")}`;(0,l.useEffect)((()=>{n(e).forEach((e=>{const n=s(e);t.forEach((e=>{if("core/missing"===n.name||e.oldBlockName===n.name){const t=(0,i.parse)(n.originalContent.replace(e.oldBlockName,e.newBlockName).replace(o(e.oldBlockName),o(e.oldBlockName)+" "+o(e.newBlockName)))[0];a(n.clientId,t)}}))}))}),[])})(s,[{oldBlockName:"snow-monkey-blocks/panels--item--free",newBlockName:"snow-monkey-blocks/panels-item-free"},{oldBlockName:"snow-monkey-blocks/panels--item--horizontal",newBlockName:"snow-monkey-blocks/panels-item-horizontal"},{oldBlockName:"snow-monkey-blocks/panels--item",newBlockName:"snow-monkey-blocks/panels-item"}]);const{sm:m,md:c,lg:d,imagePadding:y,contentJustification:h}=t,v=(0,_.useSelect)((e=>{var t,a;return!(null===(t=e("core/block-editor").getBlock(s))||void 0===t||null===(a=t.innerBlocks)||void 0===a||!a.length)}),[s]),E=p()("smb-panels",n),N=(0,g.useBlockProps)({className:E}),B=h&&"left"!==h?h.replace("space-",""):void 0,T=p()("c-row","c-row--margin","c-row--fill",{[`c-row--${B}`]:h}),R=(0,g.useInnerBlocksProps)({className:T},{allowedBlocks:f,templateLock:!1,renderAppender:v?g.InnerBlocks.DefaultBlockAppender:g.InnerBlocks.ButtonBlockAppender,orientation:"horizontal"}),x=e=>a({lg:r(e,1,6)}),L=e=>a({md:r(e,1,6)}),C=e=>a({sm:r(e,1,6)});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.InspectorControls,null,(0,l.createElement)(b.PanelBody,{title:(0,o.__)("Block settings","snow-monkey-blocks")},(0,l.createElement)(k,{desktop:()=>(0,l.createElement)(b.RangeControl,{label:(0,o.__)("Columns per row (Large window)","snow-monkey-blocks"),value:d,onChange:x,min:"1",max:"6"}),tablet:()=>(0,l.createElement)(b.RangeControl,{label:(0,o.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:c,onChange:L,min:"1",max:"6"}),mobile:()=>(0,l.createElement)(b.RangeControl,{label:(0,o.__)("Columns per row (Small window)","snow-monkey-blocks"),value:m,onChange:C,min:"1",max:"6"})}),(0,l.createElement)(b.ToggleControl,{label:(0,o.__)("Set padding around images","snow-monkey-blocks"),checked:y,onChange:e=>a({imagePadding:e})}))),(0,l.createElement)(g.BlockControls,{group:"block"},(0,l.createElement)(g.JustifyToolbar,{allowedControls:w,value:h,onChange:e=>a({contentJustification:e})})),(0,l.createElement)("div",u({},N,{"data-image-padding":y}),(0,l.createElement)("div",u({},R,{"data-columns":m,"data-md-columns":c,"data-lg-columns":d}))))},save:function(e){let{attributes:t,className:a}=e;const{sm:n,md:s,lg:i,imagePadding:o,contentJustification:r}=t,m=p()("smb-panels",a),c=r&&"left"!==r?r.replace("space-",""):void 0,d=p()("c-row","c-row--margin","c-row--fill",{[`c-row--${c}`]:r});return(0,l.createElement)("div",u({},g.useBlockProps.save({className:m}),{"data-image-padding":o}),(0,l.createElement)("div",u({},g.useInnerBlocksProps.save({className:d}),{"data-columns":n,"data-md-columns":s,"data-lg-columns":i})))},deprecated:h,example:v};(e=>{if(!e)return;const{metadata:t,settings:a,name:n}=e;t&&(t.title&&(t.title=(0,o.__)(t.title,"snow-monkey-blocks"),a.title=t.title),t.description&&(t.description=(0,o.__)(t.description,"snow-monkey-blocks"),a.description=t.description),t.keywords&&(t.keywords=(0,o.__)(t.keywords,"snow-monkey-blocks"),a.keywords=t.keywords)),(0,i.registerBlockType)({name:n,...t},a)})(n)},184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var i=l.apply(null,a);i&&e.push(i)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(838)}();