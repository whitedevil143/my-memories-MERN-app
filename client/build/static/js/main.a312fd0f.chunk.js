(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(15),l=a(19),s=a(60),u=a(69),m="CREATE",p="UPDATE",d="DELETE",f="FETCH_ALL",g="LIKE",b=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case g:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case m:return[].concat(Object(u.a)(e),[t.payload]);case p:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case d:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),v=a(40),h=a(145),E=a(146),y=a(140),x=a(149),j=a(144),O=a(143),C=a(137),w=a(139),k=a(148),I=a(141),N=a(142),S=a(66),_=a.n(S),z=a(67),D=a.n(z),T=a(65),W=a.n(T),A=a(61),B=a.n(A),F=a(12),L=a.n(F),M=a(21),R=a(30),H=a.n(R),J="http://localhost:5000/posts",P=function(e){return H.a.patch("".concat(J,"/").concat(e,"/likePost"))},K=function(e,t){return H.a.patch("".concat(J,"/").concat(e),t)},U=function(e){return H.a.delete("".concat(J,"/").concat(e))},V=function(e){return function(){var t=Object(M.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,H.a.post(J,c);case 3:n=t.sent,r=n.data,a({type:m,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},q=function(e,t){return function(){var a=Object(M.a)(L.a.mark((function a(n){var r,c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,K(e,t);case 3:r=a.sent,c=r.data,n({type:p,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},G=a(134),Q=Object(G.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),X=function(e){var t=e.post,a=e.setCurrentId,n=Object(o.b)(),c=Q();return r.a.createElement(C.a,{className:c.card},r.a.createElement(w.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(y.a,{variant:"h6"},t.creator),r.a.createElement(y.a,{variant:"body2"},B()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(k.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(W.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(y.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(I.a,null,r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(N.a,{className:c.cardActions},r.a.createElement(k.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(M.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:n=t.sent,r=n.data,a({type:g,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(_.a,{fontSize:"small"})," Like ",t.likeCount," "),r.a.createElement(k.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(M.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e);case 3:a({type:d,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(D.a,{fontSize:"small"})," Delete")))},Y=Object(G.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Z=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=Y();return a.length?r.a.createElement(j.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(j.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(X,{post:e,setCurrentId:t}))}))):r.a.createElement(O.a,null)},$=a(16),ee=a(71),te=a(147),ae=a(68),ne=a.n(ae),re=Object(G.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(v.a)(c,2),l=i[0],s=i[1],u=Object(o.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(o.b)(),p=re();Object(n.useEffect)((function(){u&&s(u)}),[u]);var d=function(){a(0),s({creator:"",title:"",message:"",tags:"",selectedFile:""})},f=function(){var e=Object(M.a)(L.a.mark((function e(a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(V(l)),d()):(m(q(t,l)),d());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ee.a,{className:p.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:f},r.a.createElement(y.a,{variant:"h6"},t?'Editing "'.concat(u.title,'"'):"Creating a Memory"),r.a.createElement(te.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:l.creator,onChange:function(e){return s(Object($.a)(Object($.a)({},l),{},{creator:e.target.value}))}}),r.a.createElement(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object($.a)(Object($.a)({},l),{},{title:e.target.value}))}}),r.a.createElement(te.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:l.message,onChange:function(e){return s(Object($.a)(Object($.a)({},l),{},{message:e.target.value}))}}),r.a.createElement(te.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:l.tags,onChange:function(e){return s(Object($.a)(Object($.a)({},l),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:p.fileInput},r.a.createElement(ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object($.a)(Object($.a)({},l),{},{selectedFile:t}))}})),r.a.createElement(k.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(k.a,{variant:"contained",color:"secondary",size:"small",onClick:d,fullWidth:!0},"Clear")))},ie=Object(G.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),oe=a.p+"static/media/memories.aa6a163b.png",le=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),l=ie();return Object(n.useEffect)((function(){i(function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get(J);case 3:a=e.sent,n=a.data,t({type:f,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]),r.a.createElement(h.a,{maxWidth:"lg"},r.a.createElement(E.a,{className:l.appBar,position:"static",color:"inherit"},r.a.createElement(y.a,{className:l.heading,variant:"h2",align:"center"},"Our Memories"),r.a.createElement("img",{className:l.image,src:oe,alt:"icon",height:"60"})),r.a.createElement(x.a,{in:!0},r.a.createElement(h.a,null,r.a.createElement(j.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(j.a,{item:!0,xs:12,sm:7},r.a.createElement(Z,{setCurrentId:c})),r.a.createElement(j.a,{item:!0,xs:12,sm:4},r.a.createElement(ce,{currentId:a,setCurrentId:c}))))))},se=(a(105),Object(l.e)(b,Object(l.d)(Object(l.a)(s.a))));i.a.render(r.a.createElement(o.a,{store:se},r.a.createElement(le,null)),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.a312fd0f.chunk.js.map