(this.webpackJsonpchecklist=this.webpackJsonpchecklist||[]).push([[0],{81:function(e,a,t){e.exports=t(95)},86:function(e,a,t){},91:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),l=(t(86),t(4)),i=t(13),s=t(149),u=t(12),d=t(131),b=t(40),m=t(135),f=t(96),h=t(136),p=t(137),g=t(153),j=t(138),O=t(139),v=t(134),E=t(140),y=t(68),w=t.n(y),k=t(52),C=t.n(k),S=t(126),N=t(129),x=t(150),I=t(132),F="greg-acnh-sort",L=function(e){return e.key?e.key:(a=e.type,"greg-acnh-".concat(a));var a};function T(e){var a=window&&window.localStorage,t=L(e);return a&&JSON.parse(a.getItem(t))||{}}function A(e,a){var t=window&&window.localStorage,n=L(e);t&&t.setItem(n,JSON.stringify(a))}var R="Criterpedia Order",M="Alphabetical",B="Price",D="Ascending",P="Descending",V=function(e,a,t){var n=t===P;return a.sort((function(a,t){var r=a[e],c=t[e];return"?"===r?1:"?"===c?-1:n?c-r:r-c}))},z=function(e,a){return function(e,a,t){var n=t===P;return a.sort((function(a,t){var r=a[e].toUpperCase(),c=t[e].toUpperCase(),o=0;return r>c?o=n?1:-1:r<c&&(o=n?-1:1),o}))}("name",e,a)};function H(e,a){switch(a.by){case M:return z(e,a.order);case R:return function(e,a){return V("index",e,a)}(e,a.order);case B:return function(e,a){return V("price",e,a)}(e,a.order);default:return e}}function J(){var e=T({key:F});e.by&&e.order||A({key:F},{by:R,order:P});return e}var U=Object(S.a)((function(e){return{root:{},formControl:{margin:e.spacing(1),width:"100%",paddingLeft:16,paddingRight:24}}}));function G(e){var a=U(),t=e.currentSort,n=e.onChangeSort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:a.formControl},r.a.createElement(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.by,onChange:function(e){var a=Object(l.a)({},t,{by:e.target.value});A({key:F},a),n(a)}},r.a.createElement(I.a,{value:M},M),r.a.createElement(I.a,{value:R},R),r.a.createElement(I.a,{value:B},B))),r.a.createElement(N.a,{className:a.formControl},r.a.createElement(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.order,onChange:function(e){var a=Object(l.a)({},t,{order:e.target.value});A({key:F},a),n(a)}},r.a.createElement(I.a,{value:P},P),r.a.createElement(I.a,{value:D},D))))}var $=t(155),q=t(133),W=t(67),K=t.n(W),X=t(66),_=t.n(X),Q=t(8),Y=Object(S.a)((function(e){return{search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Q.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Q.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},clearIcon:{color:e.palette.common.white},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Z(e){var a=Y(),t=e.onChangeSearch,n=r.a.useState({search:""}),c=Object(i.a)(n,2),o=c[0],l=c[1],s=o.search;return r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(_.a,null)),r.a.createElement($.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var a=e.target.value;l({search:a}),t(a)},value:s,endAdornment:r.a.createElement(q.a,{position:"end"},r.a.createElement(v.a,{"aria-label":"clear",onClick:function(){l({search:""}),t("")},className:a.clearIcon},r.a.createElement(K.a,null)))}))}var ee=t(154),ae=t(51),te=t.n(ae);function ne(){return(new Date).getMonth()+1}function re(e){var a=ne();return e.includes(a)}var ce={ACTIVE:"active"};function oe(e,a){if(!a)return e;var t=e;return a.includes(ce.ACTIVE)&&(t=e.filter((function(e){return re(e.northernMonths)}))),t}var le=Object(S.a)((function(e){return{root:{margin:10}}}));function ie(e){var a=le(),t=e.currentFilters,n=e.onChangeFilters,c=function(e){var a=t.includes(e)?[]:[ce.ACTIVE];n(a)},o=Object.keys(ce).map((function(e){var a=t.includes(ce[e]);switch(ce[e]){case ce.ACTIVE:return r.a.createElement(ee.a,{color:a?"secondary":"default",icon:r.a.createElement(te.a,null),label:"Active!",onClick:function(e){return c(ce.ACTIVE)},key:ce.ACTIVE,onDelete:a?function(){return c(ce.ACTIVE)}:null});default:return null}}));return r.a.createElement("div",{className:a.root},o)}var se=Object(S.a)((function(e){var a;return{appBar:{background:"repeating-linear-gradient(45deg, #333333 0, #333333 5%, #4f4f4f 0, #4f4f4f 50%) 0 / 10px 10px",flexGrow:1},button:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"inherit"}),list:{width:250},menuTitle:{textAlign:"center"},title:(a={flexGrow:1,display:"none"},Object(u.a)(a,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(a,"textAlign","left"),a),toolbar:{backgroundColor:"#f0f0f0",height:50}}}));var ue=function(e){var a=se(),t=r.a.useState({open:!1}),n=Object(i.a)(t,2),c=n[0],o=n[1],s=e.onUpdatePage,u=e.onChangeFilters,y=e.onChangeSearch,k=e.onChangeSort,S=e.pageName,N=e.filters,x=e.sort,I=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(l.a)({},c,{open:e}))}},F=function(e){s(e),o(Object(l.a)({},c,{open:!1}))},L=r.a.createElement("div",{className:a.list,role:"presentation"},r.a.createElement(d.a,null,r.a.createElement(b.a,{variant:"h6",className:a.menuTitle},"Page"),r.a.createElement(m.a,null),r.a.createElement(f.a,{button:!0,key:"Fish",onClick:function(){return F("Fish")}},r.a.createElement(h.a,null,r.a.createElement(C.a,null)),r.a.createElement(p.a,{primary:"Fish"})),r.a.createElement(f.a,{button:!0,key:"Bugs",onClick:function(){return F("Bugs")}},r.a.createElement(h.a,null,r.a.createElement(C.a,null)),r.a.createElement(p.a,{primary:"Bugs"})),r.a.createElement(b.a,{variant:"h6",className:a.menuTitle},"Sort"),r.a.createElement(m.a,null),r.a.createElement(G,{currentSort:x,onChangeSort:k}),r.a.createElement(b.a,{variant:"h6",className:a.menuTitle},"Filters"),r.a.createElement(m.a,null),r.a.createElement(ie,{currentFilters:N,onChangeFilters:u})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{anchor:"left",open:c.open,onClose:I(!1)},L),r.a.createElement(j.a,{className:a.appBar,position:"sticky"},r.a.createElement(O.a,null,r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:I(!0)},r.a.createElement(C.a,null)),r.a.createElement(b.a,{variant:"h6",className:a.title},S),r.a.createElement(E.a,{href:"https://github.com/Krakenhaus/animalcrossing/issues",target:"_blank",variant:"contained",color:"primary",className:a.button,startIcon:r.a.createElement(w.a,null)},"Report issues on GitHub"),r.a.createElement(Z,{onChangeSearch:y}))))},de=(t(91),t(56)),be=t.n(de),me=t(69),fe=t(148),he=t(141);function pe(e,a){return a?e.filter((function(e){var t=!!e.name&&e.name.toLowerCase().includes(a.toLowerCase()),n=!!e.location&&e.location.toLowerCase().includes(a.toLowerCase());return t||n})):e}var ge=t(74),je=t.n(ge),Oe=t(71),ve=t.n(Oe),Ee=t(72),ye=t.n(Ee),we=t(73),ke=t.n(we),Ce=t(143),Se=t(144),Ne=t(145),xe=t(146),Ie=t(147),Fe=t(152),Le=t(77),Te=Object(S.a)({root:{width:120},month:{width:30,height:20},inactive:{backgroundColor:"#949494"},current:{outline:"2px solid #444",outlineOffset:-2}});function Ae(e){var a=e.activeMonths,t=Te();return r.a.createElement(he.a,{container:!0,className:t.root,spacing:0},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){var n=a.includes(e),c=e===ne(),o=t.month;return o=n?t.month:"".concat(t.month," ").concat(t.inactive),o=c?"".concat(o," ").concat(t.current):o,r.a.createElement(he.a,{key:e,item:!0},r.a.createElement(Le.a,{className:o,square:!0},e))})))}var Re=t(156),Me=t(70),Be=t.n(Me);var De={width:"100%",height:"100%"},Pe={width:"115%",height:"115%"},Ve={width:"125%",height:"125%"},ze={width:"150%",height:"150%"},He={anchovy:Object(l.a)({color:"#a8ebff"},De),angelfish:Object(l.a)({color:"#f3de4f"},Ve),arapaima:Object(l.a)({color:"#c4c4c4"},De),arowana:Object(l.a)({color:"#fac900"},Pe),"barred knifejaw":Object(l.a)({color:"#bebebe"},Pe),barreleye:Object(l.a)({color:"#78d3b6"},De),betta:Object(l.a)({color:"#b4c0f7"},Pe),bitterling:Object(l.a)({color:"#f29dd0"},Ve),"black bass":Object(l.a)({color:"#a2ba7c"},Pe),blowfish:Object(l.a)({color:"#c8d0d8"},Ve),"blue marlin":Object(l.a)({color:"#6baf33"},De),bluegill:Object(l.a)({color:"#5ab2db"},Ve),"butterfly fish":Object(l.a)({color:"#fcd109"},Ve),carp:Object(l.a)({color:"#bdb8a1"},De),catfish:Object(l.a)({color:"#e0d398"},De),char:Object(l.a)({color:"#ff794d"},De),"cherry salmon":Object(l.a)({color:"#e1a4b0"},De),"clown fish":Object(l.a)({color:"#fff1cc"},ze),coelacanth:Object(l.a)({color:"#80d3d3"},De),crawfish:Object(l.a)({color:"#dfa271"},Pe),"crucian carp":Object(l.a)({color:"#8f8f6d"},Ve),dab:Object(l.a)({color:"#d7c759"},Pe),dace:Object(l.a)({color:"#f09b35"},Pe),dorado:Object(l.a)({color:"#c7c324"},De),"football fish":Object(l.a)({color:"#9d9ce6"},De),"freshwater goby":Object(l.a)({color:"#b7af5d"},Ve),frog:Object(l.a)({color:"#9ac416"},Ve),gar:Object(l.a)({color:"#e6cd83"},De),"giant snakehead":Object(l.a)({color:"#d3cab2"},De),"giant trevally":Object(l.a)({color:"#a8d1d1"},De),"golden trout":Object(l.a)({color:"#c9672f"},De),goldfish:Object(l.a)({color:"#c1241c"},ze),"great white shark":Object(l.a)({color:"#b3c8cc"},De),guppy:Object(l.a)({color:"#aef5ea"},Ve),"hammerhead shark":Object(l.a)({color:"#efe3df"},De),"horse mackerel":Object(l.a)({color:"#f0f000"},Pe),killifish:Object(l.a)({color:"#c0d8c0"},ze),"king salmon":Object(l.a)({color:"#c9e2ea"},De),koi:Object(l.a)({color:"#eae9cc"},De),loach:Object(l.a)({color:"#d1c08d"},Pe),"mahi-mahi":Object(l.a)({color:"#4ad699"},De),"mitten crab":Object(l.a)({color:"#cbaa79"},Ve),"moray eel":Object(l.a)({color:"#e9bf02"},Pe),napoleonfish:Object(l.a)({color:"#78ebf4"},De),"neon tetra":Object(l.a)({color:"#f64c4c"},ze),"nibble fish":Object(l.a)({color:"#e7dfa5"},De),oarfish:Object(l.a)({color:"#d7efef"},De),"ocean sunfish":Object(l.a)({color:"#a5e9e9"},De),"olive flounder":Object(l.a)({color:"#c68421"},De),"pale chub":Object(l.a)({color:"#90e5ff"},Ve),"puffer fish":Object(l.a)({color:"#c4cce5"},Ve),pike:Object(l.a)({color:"#c4d5a2"},De),piranha:Object(l.a)({color:"#ccdd33"},Ve),"pond smelt":Object(l.a)({color:"#cec65a"},Ve),"pop-eyed goldfish":Object(l.a)({color:"#949472"},Ve),rainbowfish:Object(l.a)({color:"#e3e3b5"},Pe),"ranchu goldfish":Object(l.a)({color:"#dfb576"},Pe),ray:Object(l.a)({color:"#f5d318"},De),"red snapper":Object(l.a)({color:"#f8be9d"},De),"ribbon eel":Object(l.a)({color:"#e5e5c3"},De),"saddled bichir":Object(l.a)({color:"#d5b391"},De),salmon:Object(l.a)({color:"#d15e66"},De),"saw shark":Object(l.a)({color:"#deab9a"},De),"sea bass":Object(l.a)({color:"#b2d46e"},De),"sea butterfly":Object(l.a)({color:"#ffe52a"},ze),"sea horse":Object(l.a)({color:"#e7746b"},ze),"snapping turtle":Object(l.a)({color:"#c19c66"},De),"soft-shelled turtle":Object(l.a)({color:"#e9e983"},De),squid:Object(l.a)({color:"#d3ba88"},Pe),stringfish:Object(l.a)({color:"#d8d8b6"},De),sturgeon:Object(l.a)({color:"#c9bcb5"},De),suckerfish:Object(l.a)({color:"#c2bfc4"},Pe),surgeonfish:Object(l.a)({color:"#99ee99"},Ve),sweetfish:Object(l.a)({color:"#e6f709"},De),tadpole:Object(l.a)({color:"#d8d8c7"},ze),tilapia:Object(l.a)({color:"#b584c2"},De),tuna:Object(l.a)({color:"#cba900"},De),"whale shark":Object(l.a)({color:"#cdbcab"},De),"yellow perch":Object(l.a)({color:"#90e56e"},Pe),"zebra turkeyfish":Object(l.a)({color:"#dd9966"},Pe),default:Object(l.a)({color:"#bdbdbd"},De)},Je=t(5),Ue=t(142),Ge=Object(Je.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(Ue.a),$e=Object(S.a)({avatar:{backgroundColor:function(e){return e.color}},needSpace:{marginRight:10},confetti:{left:5,top:-20,position:"relative"}});function qe(e){var a=e.active,t=e.name,n=e.seen,c=function(e,a,t){var n=t?"../images/".concat(a,"/").concat(e.toLowerCase().replace(/\s/g,""),".png"):null,r=He[e.toLowerCase()]||He.default;return{image:n,color:t?r.color:He.default.color,height:t?r.height:He.default.height,width:t?r.width:He.default.width}}(t,e.type,n),o=c.color,l=c.image,i=c.width,s=c.height,u=$e({color:o}),d={colors:[o],spread:360,startVelocity:25,elementCount:50,stagger:10},b=u.avatar;b=a?b:"".concat(b," ").concat(u.needSpace);var m=r.a.createElement("div",null,r.a.createElement(Re.a,{className:b,imgProps:{style:{width:"".concat(i),height:"".concat(s)}},alt:t,src:l}),r.a.createElement(Be.a,{className:u.confetti,active:n,config:d}));return a?r.a.createElement(Ge,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",className:u.needSpace},m):m}var We=Object(S.a)({root:{width:375,padding:0,overflow:"visible"},title:{marginTop:0,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",paddingRight:10,paddingTop:10},incomplete:{backgroundColor:"#f0f0f0",transition:"background-color .2s ease"},complete:{backgroundColor:"#d8f2a0",transition:"background-color .5s ease"},partial:{backgroundColor:"#f7f1df",transition:"background-color .5s ease"}}),Ke={isDonated:!1,isHoarded:!1,isFigurine:!1};function Xe(e){var a=We(),t=e.activeMonths,c=e.index,o=e.location,s=e.name,u=e.price,d=e.size,b=e.time,f=e.type,h=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),p=Object(n.useState)(Object(l.a)({},Ke,{isLoading:!0})),g=Object(i.a)(p,2),j=g[0],O=g[1],v=j.isDonated,E=j.isHoarded,y=j.isFigurine,w=j.isLoading;Object(n.useEffect)((function(){var e=T({type:f});O(Object(l.a)({},Ke,{},e[c],{isLoading:!1}))}),[c,f]);var k=re(t),C=v&&E&&y,S=v||E||y,N=function(e){var a=e.target.name,t=T({type:f});t[c]?t[c][a]=!t[c][a]:(t[c]={},t[c][a]=!0),A({type:f},t),O(Object(l.a)({},Ke,{},t[c],{isLoading:!1}))};return w?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{className:a.root},r.a.createElement(Se.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(qe,{active:k,name:s,seen:S,type:f}),r.a.createElement("h3",{className:a.title},s),r.a.createElement("div",{style:{marginLeft:"auto",paddingTop:5}},k&&r.a.createElement(ee.a,{color:"secondary",icon:r.a.createElement(te.a,null),label:"Active!"}))),r.a.createElement(m.a,{variant:"inset"}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",padding:5,marginTop:5}},r.a.createElement(ee.a,{style:{marginLeft:5},icon:r.a.createElement(ve.a,null),label:h}),r.a.createElement(ee.a,{style:{marginLeft:5},icon:r.a.createElement(ye.a,null),label:o}),d&&r.a.createElement(ee.a,{style:{marginLeft:5},icon:r.a.createElement(ke.a,null),label:d})),r.a.createElement(he.a,{container:!0,cols:2,spacing:2,justify:"center",style:{marginTop:"10px"}},r.a.createElement(he.a,{item:!0,container:!0,justify:"center"},r.a.createElement("span",null,b)),r.a.createElement(he.a,{item:!0,container:!0,justify:"center"},r.a.createElement(Ae,{activeMonths:t})))),r.a.createElement(Ne.a,{className:C?a.complete:S?a.partial:a.incomplete},r.a.createElement(xe.a,{row:!0},r.a.createElement(Ie.a,{control:r.a.createElement(Fe.a,{"data-id":c,checked:v,color:"primary",onChange:N,name:"isDonated"}),label:"Donated"}),r.a.createElement(Ie.a,{control:r.a.createElement(Fe.a,{"data-id":c,checked:E,color:"primary",onChange:N,name:"isHoarded"}),label:"Hoarded"}),r.a.createElement(Ie.a,{control:r.a.createElement(Fe.a,{"data-id":c,checked:y,color:"primary",onChange:N,name:"isFigurine"}),label:"Figurine"})),C&&r.a.createElement(je.a,{style:{marginLeft:"auto"},fontSize:"large"}))))}var _e=t(76),Qe=t(75);function Ye(e){var a=e.type,t=e.search,c=e.sort,o=e.filters,l=Object(n.useState)([]),s=Object(i.a)(l,2),u=s[0],d=s[1],b=Object(n.useState)(!0),m=Object(i.a)(b,2),f=m[0],h=m[1];if(Object(n.useEffect)((function(){h(!0)}),[c,t,o]),Object(n.useEffect)((function(){function e(){return(e=Object(me.a)(be.a.mark((function e(){var n,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:r=oe(r=pe(r=H(r=e.sent,c),t),o),d(r),h(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,c,t,o]),f)return r.a.createElement(fe.a,{style:{margin:100}});function p(e){var t=e.data,n=t.itemsPerRow,c=t.monthRegion,o=e.index,l=e.style,i=o*n,s=0===o?{marginTop:40}:{},d=u.slice(i,i+n).map((function(e){return r.a.createElement(he.a,{item:!0,key:e.index,style:s},r.a.createElement(Xe,Object.assign({},e,{type:a,activeMonths:e[c]})))}));return r.a.createElement("div",{style:l},r.a.createElement(he.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:10},d))}return r.a.createElement(Qe.a,null,(function(e){var a=e.height,t=e.width,n=Math.floor(t/455)||1;n=n>3?3:n;var c=Math.ceil(u.length/n);return r.a.createElement(_e.a,{itemData:{itemsPerRow:n,monthRegion:"northernMonths"},height:a-64,width:t,itemSize:350,itemCount:c,style:{overflowX:"hidden"}},p)}))}var Ze=function(){var e=r.a.useState({filters:[],search:"",sort:J(),pageName:"Fish"}),a=Object(i.a)(e,2),t=a[0],n=a[1],c=t.filters,o=t.search,u=t.sort,d=t.pageName;return r.a.createElement("div",{className:"App"},r.a.createElement(ue,{pageName:d,onUpdatePage:function(e){n(Object(l.a)({},t,{pageName:e}))},onChangeFilters:function(e){n(Object(l.a)({},t,{filters:e}))},onChangeSearch:function(e){n(Object(l.a)({},t,{search:e}))},onChangeSort:function(e){n(Object(l.a)({},t,{sort:e}))},sort:u,filters:c}),t.page,r.a.createElement(s.a,null),"Fish"===d&&r.a.createElement(Ye,{type:"fish",filters:c,search:o,sort:u}),"Bugs"===d&&r.a.createElement(Ye,{type:"bugs",filters:c,search:o,sort:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.cfaaeb55.chunk.js.map