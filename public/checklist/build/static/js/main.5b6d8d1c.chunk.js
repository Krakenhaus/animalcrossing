(this.webpackJsonpchecklist=this.webpackJsonpchecklist||[]).push([[0],{80:function(e,a,t){e.exports=t(94)},85:function(e,a,t){},90:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(11),o=t.n(c),l=(t(85),t(4)),i=t(13),s=t(147),u=t(12),d=t(130),m=t(40),b=t(134),f=t(95),h=t(135),p=t(136),g=t(151),j=t(137),O=t(138),v=t(133),E=t(52),y=t.n(E),w=t(125),k=t(128),C=t(148),S=t(131),N="greg-acnh-sort",x=function(e){return e.key?e.key:(a=e.type,"greg-acnh-".concat(a));var a};function I(e){var a=window&&window.localStorage,t=x(e);return a&&JSON.parse(a.getItem(t))||{}}function L(e,a){var t=window&&window.localStorage,r=x(e);t&&t.setItem(r,JSON.stringify(a))}var T="Criterpedia Order",A="Alphabetical",F="Price",R="Ascending",M="Descending",B=function(e,a,t){var r=t===M;return a.sort((function(a,t){var n=a[e],c=t[e];return"?"===n?1:"?"===c?-1:r?c-n:n-c}))},D=function(e,a){return function(e,a,t){var r=t===M;return a.sort((function(a,t){var n=a[e].toUpperCase(),c=t[e].toUpperCase(),o=0;return n>c?o=r?1:-1:n<c&&(o=r?-1:1),o}))}("name",e,a)};function P(e,a){switch(a.by){case A:return D(e,a.order);case T:return function(e,a){return B("index",e,a)}(e,a.order);case F:return function(e,a){return B("price",e,a)}(e,a.order);default:return e}}function V(){var e=I({key:N});e.by&&e.order||L({key:N},{by:T,order:M});return e}var z=Object(w.a)((function(e){return{root:{},formControl:{margin:e.spacing(1),width:"100%",paddingLeft:16,paddingRight:24}}}));function H(e){var a=z(),t=e.currentSort,r=e.onChangeSort;return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{className:a.formControl},n.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.by,onChange:function(e){var a=Object(l.a)({},t,{by:e.target.value});L({key:N},a),r(a)}},n.a.createElement(S.a,{value:A},A),n.a.createElement(S.a,{value:T},T),n.a.createElement(S.a,{value:F},F))),n.a.createElement(k.a,{className:a.formControl},n.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.order,onChange:function(e){var a=Object(l.a)({},t,{order:e.target.value});L({key:N},a),r(a)}},n.a.createElement(S.a,{value:M},M),n.a.createElement(S.a,{value:R},R))))}var J=t(153),U=t(132),q=t(66),$=t.n(q),G=t(65),W=t.n(G),X=t(9),K=Object(w.a)((function(e){return{search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},clearIcon:{color:e.palette.common.white},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Q(e){var a=K(),t=e.onChangeSearch,r=n.a.useState({search:""}),c=Object(i.a)(r,2),o=c[0],l=c[1],s=o.search;return n.a.createElement("div",{className:a.search},n.a.createElement("div",{className:a.searchIcon},n.a.createElement(W.a,null)),n.a.createElement(J.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var a=e.target.value;l({search:a}),t(a)},value:s,endAdornment:n.a.createElement(U.a,{position:"end"},n.a.createElement(v.a,{"aria-label":"clear",onClick:function(){l({search:""}),t("")},className:a.clearIcon},n.a.createElement($.a,null)))}))}var Y=t(152),Z=t(51),_=t.n(Z);function ee(){return(new Date).getMonth()+1}function ae(e){var a=ee();return e.includes(a)}var te={ACTIVE:"active"};function re(e,a){if(!a)return e;var t=e;return a.includes(te.ACTIVE)&&(t=e.filter((function(e){return ae(e.northernMonths)}))),t}var ne=Object(w.a)((function(e){return{root:{margin:10}}}));function ce(e){var a=ne(),t=e.currentFilters,r=e.onChangeFilters,c=function(e){var a=t.includes(e)?[]:[te.ACTIVE];r(a)},o=Object.keys(te).map((function(e){var a=t.includes(te[e]);switch(te[e]){case te.ACTIVE:return n.a.createElement(Y.a,{color:a?"primary":"default",icon:n.a.createElement(_.a,null),label:"Active!",onClick:function(e){return c(te.ACTIVE)},key:te.ACTIVE,onDelete:a?function(){return c(te.ACTIVE)}:null});default:return null}}));return n.a.createElement("div",{className:a.root},o)}var oe=Object(w.a)((function(e){var a;return{appBar:{background:"repeating-linear-gradient(45deg, #333333 0, #333333 5%, #4f4f4f 0, #4f4f4f 50%) 0 / 10px 10px",flexGrow:1},list:{width:250},menuTitle:{textAlign:"center"},title:(a={flexGrow:1,display:"none"},Object(u.a)(a,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(a,"textAlign","left"),a),toolbar:{backgroundColor:"#f0f0f0",height:50}}}));var le=function(e){var a=oe(),t=n.a.useState({open:!1}),r=Object(i.a)(t,2),c=r[0],o=r[1],s=e.onUpdatePage,u=e.onChangeFilters,E=e.onChangeSearch,w=e.onChangeSort,k=e.pageName,C=e.filters,S=e.sort,N=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(l.a)({},c,{open:e}))}},x=function(e){s(e),o(Object(l.a)({},c,{open:!1}))},I=n.a.createElement("div",{className:a.list,role:"presentation"},n.a.createElement(d.a,null,n.a.createElement(m.a,{variant:"h6",className:a.menuTitle},"Page"),n.a.createElement(b.a,null),n.a.createElement(f.a,{button:!0,key:"Fish",onClick:function(){return x("Fish")}},n.a.createElement(h.a,null,n.a.createElement(y.a,null)),n.a.createElement(p.a,{primary:"Fish"})),n.a.createElement(f.a,{button:!0,key:"Bugs",onClick:function(){return x("Bugs")}},n.a.createElement(h.a,null,n.a.createElement(y.a,null)),n.a.createElement(p.a,{primary:"Bugs"})),n.a.createElement(m.a,{variant:"h6",className:a.menuTitle},"Sort"),n.a.createElement(b.a,null),n.a.createElement(H,{currentSort:S,onChangeSort:w}),n.a.createElement(m.a,{variant:"h6",className:a.menuTitle},"Filters"),n.a.createElement(b.a,null),n.a.createElement(ce,{currentFilters:C,onChangeFilters:u})));return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{anchor:"left",open:c.open,onClose:N(!1)},I),n.a.createElement(j.a,{className:a.appBar,position:"sticky"},n.a.createElement(O.a,null,n.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:N(!0)},n.a.createElement(y.a,null)),n.a.createElement(m.a,{variant:"h6",className:a.title},k),n.a.createElement(Q,{onChangeSearch:E}))))},ie=(t(90),t(55)),se=t.n(ie),ue=t(67),de=t(146),me=t(139);function be(e,a){return a?e.filter((function(e){var t=!!e.name&&e.name.toLowerCase().includes(a.toLowerCase()),r=!!e.location&&e.location.toLowerCase().includes(a.toLowerCase());return t||r})):e}var fe=t(72),he=t.n(fe),pe=t(69),ge=t.n(pe),je=t(70),Oe=t.n(je),ve=t(71),Ee=t.n(ve),ye=t(141),we=t(142),ke=t(143),Ce=t(144),Se=t(145),Ne=t(150),xe=t(75),Ie=Object(w.a)({root:{width:120},month:{width:30,height:20},inactive:{backgroundColor:"#949494"},current:{outline:"2px solid #444",outlineOffset:-2}});function Le(e){var a=e.activeMonths,t=Ie();return n.a.createElement(me.a,{container:!0,className:t.root,spacing:0},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){var r=a.includes(e),c=e===ee(),o=t.month;return o=r?t.month:"".concat(t.month," ").concat(t.inactive),o=c?"".concat(o," ").concat(t.current):o,n.a.createElement(me.a,{key:e,item:!0},n.a.createElement(xe.a,{className:o,square:!0},e))})))}var Te=t(154),Ae=t(68),Fe=t.n(Ae);var Re={width:"100%",height:"100%"},Me={width:"115%",height:"115%"},Be={width:"125%",height:"125%"},De={width:"150%",height:"150%"},Pe={anchovy:Object(l.a)({color:"#a8ebff"},Re),angelfish:Object(l.a)({color:"#aeae8d"},De),arapaima:Object(l.a)({color:"#4a7342"},Re),arowana:Object(l.a)({color:"#fac900"},Be),"barred knifejaw":Object(l.a)({color:"#5a5a62"},Be),barreleye:Object(l.a)({color:"#78d3b6"},Re),betta:Object(l.a)({color:"#b4c0f7"},Re),bitterling:Object(l.a)({color:"#f29dd0"},De),"black bass":Object(l.a)({color:"#588a0e"},Be),blowfish:Object(l.a)({color:"#c8d0d8"},Be),"blue marlin":Object(l.a)({color:"#326a6e"},Re),bluegill:Object(l.a)({color:"#5e6fa2"},Be),"butterfly fish":Object(l.a)({color:"#fcd109"},De),carp:Object(l.a)({color:"#bd9b35"},Be),catfish:Object(l.a)({color:"#808068"},Be),char:Object(l.a)({color:"#b7ae96"},Be),"cherry salmon":Object(l.a)({color:"#b2a1a1"},Be),"clown fish":Object(l.a)({color:"#d44c00"},De),coelacanth:Object(l.a)({color:"#5a6b6b"},Be),crawfish:Object(l.a)({color:"#d8610c"},Be),"crucian carp":Object(l.a)({color:"#8f8f6d"},Be),dab:Object(l.a)({color:"#634208"},Be),dace:Object(l.a)({color:"#f09b35"},Be),dorado:Object(l.a)({color:"#faff50"},Me),"football fish":Object(l.a)({color:"#623994"},Re),"freshwater goby":Object(l.a)({color:"#b7af5d"},Be),frog:Object(l.a)({color:"#9ac416"},Be),gar:Object(l.a)({color:"#e6cd83"},Be),"giant snakehead":Object(l.a)({color:"#6b6b39"},Be),"giant trevally":Object(l.a)({color:"#a8d1d1"},Me),"golden trout":Object(l.a)({color:"#c9672f"},Re),goldfish:Object(l.a)({color:"#c1241c"},De),"great white shark":Object(l.a)({color:"#38618a"},Me),guppy:Object(l.a)({color:"#7c275a"},De),"hammerhead shark":Object(l.a)({color:"#aa7036"},Me),"horse mackerel":Object(l.a)({color:"#ffff02"},De),killifish:Object(l.a)({color:"#c0d8c0"},De),"king salmon":Object(l.a)({color:"#c9e2ea"},Be),koi:Object(l.a)({color:"#d75321"},Be),loach:Object(l.a)({color:"#d1c08d"},Be),"mahi-mahi":Object(l.a)({color:"#4ad699"},Re),"mitten crab":Object(l.a)({color:"#cbaa79"},Be),"moray eel":Object(l.a)({color:"#e9bf02"},Be),napoleonfish:Object(l.a)({color:"#78ebf4"},Be),"neon tetra":Object(l.a)({color:"#f64c4c"},De),"nibble fish":Object(l.a)({color:"#e7dfa5"},De),oarfish:Object(l.a)({color:"#d7efef"},Be),"ocean sunfish":Object(l.a)({color:"#a5e9e9"},Be),"olive flounder":Object(l.a)({color:"#c68421"},Be),"pale chub":Object(l.a)({color:"#90e5ff"},Be),"puffer fish":Object(l.a)({color:"#c4cce5"},Be),pike:Object(l.a)({color:"#c4d5a2"},Be),piranha:Object(l.a)({color:"#ccdd33"},De),"pond smelt":Object(l.a)({color:"#cec65a"},Be),"pop-eyed goldfish":Object(l.a)({color:"#949472"},De),rainbowfish:Object(l.a)({color:"#e3e3b5"},Re),"ranchu goldfish":Object(l.a)({color:"#dfb576"},Re),ray:Object(l.a)({color:"#f5d318"},Be),"red snapper":Object(l.a)({color:"#f8be9d"},Be),"ribbon eel":Object(l.a)({color:"#e5e5c3"},Be),"saddled bichir":Object(l.a)({color:"#d5b391"},Be),salmon:Object(l.a)({color:"#d15e66"},Be),"saw shark":Object(l.a)({color:"#deab9a"},Be),"sea bass":Object(l.a)({color:"#b2d46e"},Be),"sea butterfly":Object(l.a)({color:"#ffe52a"},De),"sea horse":Object(l.a)({color:"#e7746b"},De),"snapping turtle":Object(l.a)({color:"#c19c66"},Re),"soft-shelled turtle":Object(l.a)({color:"#e9e983"},Be),squid:Object(l.a)({color:"#d3ba88"},Be),stringfish:Object(l.a)({color:"#d8d8b6"},Be),sturgeon:Object(l.a)({color:"#c9bcb5"},Re),suckerfish:Object(l.a)({color:"#c2bfc4"},Re),surgeonfish:Object(l.a)({color:"#99ee99"},De),sweetfish:Object(l.a)({color:"#e6f709"},Be),tadpole:Object(l.a)({color:"#d8d8c7"},De),tilapia:Object(l.a)({color:"#b584c2"},Re),tuna:Object(l.a)({color:"#cba900"},Be),"whale shark":Object(l.a)({color:"#cdbcab"},Be),"yellow perch":Object(l.a)({color:"#90e56e"},Be),"zebra turkeyfish":Object(l.a)({color:"#dd9966"},Be),default:Object(l.a)({color:"#bdbdbd"},Re)},Ve=t(5),ze=t(140),He=Object(Ve.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(ze.a),Je=Object(w.a)({avatar:{backgroundColor:function(e){return e.color}},needSpace:{marginRight:10},confetti:{left:5,top:-20,position:"relative"}});function Ue(e){var a=e.active,t=e.name,r=e.seen,c=function(e,a,t){var r=t?"../images/".concat(a,"/").concat(e.toLowerCase().replace(/\s/g,""),".png"):null,n=Pe[e.toLowerCase()]||Pe.default;return{image:r,color:t?n.color:Pe.default.color,height:t?n.height:Pe.default.height,width:t?n.width:Pe.default.width}}(t,e.type,r),o=c.color,l=c.image,i=c.width,s=c.height,u=Je({color:o}),d={colors:[o],spread:360,startVelocity:25,elementCount:50,stagger:10},m=u.avatar;m=a?m:"".concat(m," ").concat(u.needSpace);var b=n.a.createElement("div",null,n.a.createElement(Te.a,{className:m,imgProps:{style:{width:"".concat(i),height:"".concat(s)}},alt:t,src:l}),n.a.createElement(Fe.a,{className:u.confetti,active:r,config:d}));return a?n.a.createElement(He,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",className:u.needSpace},b):b}var qe=Object(w.a)({root:{width:350,padding:0,overflow:"visible"},title:{marginTop:0},incomplete:{backgroundColor:"#f0f0f0",transition:"background-color .2s ease"},complete:{backgroundColor:"#d8f2a0",transition:"background-color .5s ease"},partial:{backgroundColor:"#f7f1df",transition:"background-color .5s ease"}}),$e={isDonated:!1,isHoarded:!1};function Ge(e){var a=qe(),t=e.activeMonths,c=e.index,o=e.location,s=e.name,u=e.price,d=e.size,m=e.time,f=e.type,h=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),p=Object(r.useState)(Object(l.a)({},$e,{isLoading:!0})),g=Object(i.a)(p,2),j=g[0],O=g[1],v=j.isDonated,E=j.isHoarded,y=j.isLoading;Object(r.useEffect)((function(){var e=I({type:f});O(Object(l.a)({},$e,{},e[c],{isLoading:!1}))}),[c,f]);var w=ae(t),k=v&&E,C=v||E,S=function(e){var a=e.target.name,t=I({type:f});t[c]?t[c][a]=!t[c][a]:(t[c]={},t[c][a]=!0),L({type:f},t),O(Object(l.a)({},$e,{},t[c],{isLoading:!1}))};return y?null:n.a.createElement(n.a.Fragment,null,n.a.createElement(ye.a,{className:a.root},n.a.createElement(we.a,null,n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(Ue,{active:w,name:s,seen:C,type:f}),n.a.createElement("h3",{className:a.title},s),n.a.createElement("div",{style:{marginLeft:"auto"}},w&&n.a.createElement(Y.a,{color:"secondary",icon:n.a.createElement(_.a,null),label:"Active!"}))),n.a.createElement(b.a,{variant:"inset"}),n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",padding:5,marginTop:5}},n.a.createElement(Y.a,{style:{marginLeft:5},icon:n.a.createElement(ge.a,null),label:h}),n.a.createElement(Y.a,{style:{marginLeft:5},icon:n.a.createElement(Oe.a,null),label:o}),d&&n.a.createElement(Y.a,{style:{marginLeft:5},icon:n.a.createElement(Ee.a,null),label:d})),n.a.createElement(me.a,{container:!0,cols:2,spacing:2,justify:"center",style:{marginTop:"10px"}},n.a.createElement(me.a,{item:!0,container:!0,justify:"center"},n.a.createElement("span",null,m)),n.a.createElement(me.a,{item:!0,container:!0,justify:"center"},n.a.createElement(Le,{activeMonths:t})))),n.a.createElement(ke.a,{className:k?a.complete:C?a.partial:a.incomplete},n.a.createElement(Ce.a,{row:!0},n.a.createElement(Se.a,{control:n.a.createElement(Ne.a,{"data-id":c,checked:v,color:"primary",onChange:S,name:"isDonated"}),label:"Donated"}),n.a.createElement(Se.a,{control:n.a.createElement(Ne.a,{"data-id":c,checked:E,color:"primary",onChange:S,name:"isHoarded"}),label:"Hoarded"})),k&&n.a.createElement(he.a,{style:{marginLeft:"auto"},fontSize:"large"}))))}var We=t(74),Xe=t(73);function Ke(e){var a=e.type,t=e.search,c=e.sort,o=e.filters,l=Object(r.useState)([]),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(r.useState)(!0),b=Object(i.a)(m,2),f=b[0],h=b[1];if(Object(r.useEffect)((function(){h(!0)}),[c,t,o]),Object(r.useEffect)((function(){function e(){return(e=Object(ue.a)(se.a.mark((function e(){var r,n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(a));case 2:return r=e.sent,e.next=5,r.json();case 5:n=re(n=be(n=P(n=e.sent,c),t),o),d(n),h(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,c,t,o]),f)return n.a.createElement(de.a,{variant:"query",style:{margin:100}});function p(e){var t=e.data,r=t.itemsPerRow,c=t.monthRegion,o=e.index,l=e.style,i=o*r,s=0===o?{marginTop:40}:{},d=u.slice(i,i+r).map((function(e){return n.a.createElement(me.a,{item:!0,key:e.index,style:s},n.a.createElement(Ge,Object.assign({},e,{type:a,activeMonths:e[c]})))}));return n.a.createElement("div",{style:l},n.a.createElement(me.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:10},d))}return n.a.createElement(Xe.a,null,(function(e){var a=e.height,t=e.width,r=Math.floor(t/430)||1;r=r>3?3:r;var c=Math.ceil(u.length/r);return n.a.createElement(We.a,{itemData:{itemsPerRow:r,monthRegion:"northernMonths"},height:a-64,width:t,itemSize:350,itemCount:c,style:{overflowX:"hidden"}},p)}))}var Qe=function(){var e=n.a.useState({filters:[],search:"",sort:V(),pageName:"Fish"}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=t.filters,o=t.search,u=t.sort,d=t.pageName;return n.a.createElement("div",{className:"App"},n.a.createElement(le,{pageName:d,onUpdatePage:function(e){r(Object(l.a)({},t,{pageName:e}))},onChangeFilters:function(e){r(Object(l.a)({},t,{filters:e}))},onChangeSearch:function(e){r(Object(l.a)({},t,{search:e}))},onChangeSort:function(e){r(Object(l.a)({},t,{sort:e}))},sort:u,filters:c}),t.page,n.a.createElement(s.a,null),"Fish"===d&&n.a.createElement(Ke,{type:"fish",filters:c,search:o,sort:u}),"Bugs"===d&&n.a.createElement(Ke,{type:"bugs",filters:c,search:o,sort:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.5b6d8d1c.chunk.js.map