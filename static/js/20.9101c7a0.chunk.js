(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20],{1027:function(e,t,i){"use strict";i.r(t);var a=i(39),n=i(15),o=i(13),c=i(24),s=i.n(c),r=i(0),l=i.n(r),d=i(841),j=i.n(d),h=i(197),b=i(114),x=i(736),g=i(777),p=i(776),m=i(778),u=i(359),O=i(105),f=i(362),v=i(86),S=i(251),y=i(95),k=i.n(y),w=i(816),I=i.n(w),C=i(346),N=i(817),z=i.n(N),T=i(252),W=i(761),B=i(106),L=i(26),_=(i(843),i(844),i(819)),R=i(988),F=i.n(R),A=i(818),P=i.n(A),H=i(990),G=i.n(H),M=i(992),E=i.n(M),J=i(753),U=i(740),K=i(741),X=i(762),Y=i(814),$=i.n(Y),V=i(815),q=i.n(V),D=i(87),Q=i(726),Z=i(3),ee=Object(h.a)((function(e){return{root:{fontFamily:"NotoSansCJKtc",flexGrow:1,width:"100%"},tangle:{width:"100%",height:"8px",backgroundColor:"rgba(0, 0, 0, 0.05)"},comment:{fontWeight:500,fontSize:"14px",padding:"16px 16px 0 16px"},commentName:{fontWeight:"bold",fontSize:"14px",marginBottom:"16px"},rating:{marginBottom:"16px"},commentButton:{position:"absolute",right:10,marginLeft:"16px",textAlign:"center",fontSize:"12px"},thumbup:{paddingRight:"10%"},thumbupText:{fontSize:"14px",marginLeft:5},gridList:{},magetty:{padding:"2%",width:"88px",height:"88px"},time:{color:"#979797",fontSize:"12px"},number:{paddingLeft:"30%"}}})),te=Object(b.b)({palette:{type:"light",primary:{main:"#00d04c"}}});function ie(e){var t=ee(),i=Object(r.useState)(e.data),a=Object(n.a)(i,2),o=a[0],c=(a[1],Object(r.useState)(o.like)),s=Object(n.a)(c,2),l=s[0],d=s[1],j=Object(r.useState)(o.dislike),h=Object(n.a)(j,2),b=h[0],g=h[1],p=Object(r.useState)(o.likestatus),m=Object(n.a)(p,2),u=m[0],O=m[1],f=Object(r.useState)(o.dislikestatus),y=Object(n.a)(f,2),k=y[0],w=y[1],I=Object(L.k)();console.log("like",l),console.log("dislike",b),console.log("likeCheck",u),console.log("dislikeCheck",k);return Object(Z.jsx)(x.a,{theme:te,children:Object(Z.jsxs)(B.a,{className:t.comment,children:[Object(Z.jsx)(B.a,{className:t.commentName,children:o.user.name}),Object(Z.jsx)(X.a,{readOnly:!0,className:t.rating,name:"size-small",defaultValue:o.star}),Object(Z.jsxs)(C.a,{className:t.commentButton,variant:"outlined",color:"primary",children:[1==o.difficulty&&"\u975e\u5e38\u7c21\u55ae",2==o.difficulty&&"\u7c21\u55ae",3==o.difficulty&&"\u89ba\u5f97\u9084\u597d",4==o.difficulty&&"\u56f0\u96e3",5==o.difficulty&&"\u975e\u5e38\u56f0\u96e3"]}),Object(Z.jsx)(B.a,{children:o.content}),Object(Z.jsxs)(B.a,{item:!0,xs:12,sm:6,children:[Object(Z.jsxs)(S.a,{className:t.thumbup,children:[Object(Z.jsx)(Q.a,{checked:u,onChange:function(){!function(e){var t=0;localStorage.getItem("userId")?t=localStorage.getItem("userId"):I.push({pathname:"/signin"}),u?(d(l-1),O(!1)):(d(l+1),O(!0)),k&&(w(!1),g(b-1)),D.a.post("/api/likeComment/?user_id="+t+"&comment_id="+e+"&status=1").then((function(e){console.log("post sucess",e)}))}(o.id)},icon:Object(Z.jsx)($.a,{}),checkedIcon:Object(Z.jsx)($.a,{style:{color:"#3c5754"}})}),Object(Z.jsx)(v.a,{className:t.thumbupText,children:l})]}),Object(Z.jsxs)(S.a,{className:t.thumbup,children:[Object(Z.jsx)(Q.a,{checked:k,onChange:function(){!function(e){var t=0;localStorage.getItem("userId")?t=localStorage.getItem("userId"):I.push({pathname:"/signin"}),w((function(e){return!e})),k?g(b-1):(g(b+1),w(!0)),u&&(O(!1),d(l-1)),D.a.post("/api/likeComment/?user_id="+t+"&comment_id="+e+"&status="+-1).then((function(e){console.log("post sucess",e)}))}(o.id)},icon:Object(Z.jsx)(q.a,{}),checkedIcon:Object(Z.jsx)(q.a,{style:{color:"#3c5754"}})}),Object(Z.jsx)(v.a,{className:t.thumbupText,children:b})]})]}),Object(Z.jsx)(B.a,{className:t.gridList,children:o.comments_images.map((function(e,i){return Object(Z.jsx)("img",{src:e.s3_url,className:t.magetty},i)}))}),Object(Z.jsxs)(v.a,{className:t.time,children:[o.date,". \u4f86\u56de\u6642\u9593: ",Math.round(o.duration/60),"h ",o.duration%60,"m"]}),Object(Z.jsx)("hr",{})]})})}var ae=i(993),ne=i.n(ae),oe=i(5),ce=["destination","text"];function se(e){var t=e.destination,i=e.text,a=Object(oe.a)(e,ce);return Object(Z.jsx)("div",Object(o.a)(Object(o.a)({},a),{},{onClick:function(){window.open("https://www.google.com/maps/dir/?api=1&destination=".concat(t),"_blank")},children:i}))}se.defaultProps={destination:"\u967d\u660e\u5c71",text:"\u6253\u958bGPS\u8def\u7dda"};var re=i(758),le=i(254),de=i(253),je=Object(o.a)(Object(o.a)(Object(o.a)({},g.a),p.a),{},{buttonAlign:{padding:0}}),he=Object(h.a)(je),be={dot:!0,infinite:!0,speed:400,slidesToShow:1,slidesToScroll:1,arrows:!1},xe={dots:!1,arrows:!1,variableWidth:!0,swipeToSlide:!0,swipe:!0,infinite:!1},ge={rows:2,dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1};function pe(e){return Object(Z.jsx)(re.a,Object(o.a)(Object(o.a)({elevation:6,variant:"filled"},e),{},{style:{position:"fixed",bottom:"8vh",left:"50%",transform:"translate(-50%, -50%)",width:379}}))}Object(b.b)({palette:{type:"light",primary:{main:"#00d04c"}}}),t.default=function(e){var t=[],i=e.location.state.trail_id,c=localStorage.getItem("userId"),d=localStorage.getItem("previous_pathname");console.log(d);var h=he(),b=Object(L.k)(),g=Object(r.useState)(!1),p=Object(n.a)(g,2),y=p[0],w=p[1],N=Object(r.useState)(y),R=Object(n.a)(N,2),A=R[0],H=R[1],M=l.a.useState(!0),Y=Object(n.a)(M,2),$=Y[0],V=Y[1],q=function(){V(!1)},ee=Object(r.useState)([]),te=Object(n.a)(ee,2),ae=te[0],oe=te[1],ce=Object(r.useState)([]),re=Object(n.a)(ce,2),je=re[0],me=re[1],ue=Object(r.useState)([]),Oe=Object(n.a)(ue,2),fe=Oe[0],ve=Oe[1],Se=Object(r.useState)([]),ye=Object(n.a)(Se,2),ke=ye[0],we=ye[1],Ie=Object(r.useState)([]),Ce=Object(n.a)(Ie,2),Ne=Ce[0],ze=Ce[1],Te=Object(r.useState)([]),We=Object(n.a)(Te,2),Be=We[0],Le=We[1],_e=Object(r.useState)([]),Re=Object(n.a)(_e,2),Fe=Re[0],Ae=Re[1],Pe=Object(r.useState)([]),He=Object(n.a)(Pe,2),Ge=He[0],Me=He[1],Ee=Object(r.useState)([]),Je=Object(n.a)(Ee,2),Ue=(Je[0],Je[1]),Ke=Object(r.useState)([]),Xe=Object(n.a)(Ke,2),Ye=Xe[0],$e=Xe[1],Ve=Object(r.useState)(""),qe=Object(n.a)(Ve,2),De=qe[0],Qe=qe[1],Ze=Object(r.useState)([]),et=Object(n.a)(Ze,2),tt=et[0],it=et[1],at=Object(r.useState)(0),nt=Object(n.a)(at,2),ot=nt[0],ct=nt[1],st=Object(r.useState)(""),rt=Object(n.a)(st,2),lt=rt[0],dt=rt[1],jt=Object(r.useState)([]),ht=Object(n.a)(jt,2),bt=(ht[0],ht[1]);console.log("trail_id: ",i),console.log("userId:",c);var xt=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/trailinfo/"+i+"?uiud="+localStorage.getItem("userId")).then((function(e){t=e.data,bt(e.data.album),Qe(e.data),oe(t.album.slice(0,1)),me(t.chips),ve(t.trailHead),we(t.announcement.slice(0,3)),ze(t.attraction),Le(t.articles),Ae(t.similar),Me(t.title),ct(mt("floor",t.comment.avgStar,-1)),it(t.chart),dt(t.trailstatus)})).catch((function(e){console.log("====error==== ",e)}));case 2:return e.next=4,D.a.get("/api/comment/"+i+"?uuid="+c).then((function(e){Ue(e.data),$e(e.data.comments.slice(0,2))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),gt=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checkFavortite starts!"),t=localStorage.getItem("userId")?localStorage.getItem("userId"):1,console.log("userId: ",t),e.next=5,D.a.get("/api/favorites?uuid="+t).then((function(e){console.log("res",e),console.log("trail_id",i),e.data.map((function(e){console.log("element: ",e),e.trail_id==i&&(console.log("this trail has already been liked!"),w(!0),H(!0))}))})).catch((function(e){console.log("====error==== ",e),console.log("checked is checked!")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pt=Object(r.useRef)(!0);console.log("firstUpdate",pt),Object(r.useLayoutEffect)((function(){if(pt.current)return pt.current=!1,xt(),void gt()}),[A]);var mt=function(e,t,i){return"undefined"===typeof i||0===+i?Math[e](t):(t=+t,i=+i,isNaN(t)||"number"!==typeof i||i%1!==0?NaN:(t=t.toString().split("e"),+((t=(t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-i:-i)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+i:i))))},ut={series:[{name:"Series 1",data:tt}],options:{chart:{height:350,type:"radar",toolbar:{show:!1}},xaxis:{categories:["\u8ddd\u96e2","\u96e3\u6613","\u71b1\u9580","\u666f\u8272","\u9ad8\u5ea6"],labels:{style:{colors:[],fontSize:"16px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{show:!1},colors:["#00d04c"],markers:{size:2,colors:void 0,strokeColors:"#fff",strokeWidth:1,strokeOpacity:.9,fillOpacity:1,radius:1}}};return localStorage.getItem("userId")?localStorage.getItem("userId"):null,Object(Z.jsx)(x.a,{theme:m.a,children:Object(Z.jsxs)("div",{className:h.root,children:[Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},be),{},{className:h.slider,children:ae.map((function(e,t){return Object(Z.jsx)("div",{children:Object(Z.jsx)("img",{src:e,alt:"slider img",className:h.sliderImg})},t)}))})),Object(Z.jsx)(u.a,{className:h.appBarTransparent,children:Object(Z.jsxs)(f.a,{children:[Object(Z.jsx)(S.a,{style:{color:"inherit"},onClick:function(){b.push({pathname:d})},children:Object(Z.jsx)(k.a,{children:" "})}),Object(Z.jsx)("span",{style:{flexGrow:1}})," ",Object(Z.jsx)(Q.a,{checked:A,onChange:function(){!function(e){var t=localStorage.getItem("userId");console.log("user"),null!==t&&-1!==t&&void 0!==t||b.push("/collectpage"),H(!A),D.a.post("/api/favorite/?user_id="+t+"&trail_id="+e).then((function(e){console.log("res",e),console.log(e.status)}))}(i)},icon:Object(Z.jsx)(le.a,{fontSize:"small"}),checkedIcon:Object(Z.jsx)(de.a,{style:{color:"#FFF",fontSize:"24px"}}),className:h.favorite,name:"favorite"}),Object(Z.jsx)(S.a,{edge:"end",color:"inherit",style:{marginLeft:"24px"},"aria-label":"share article",onClick:function(){},children:Object(Z.jsx)(I.a,{onClick:function(){navigator.share?(console.log("Congrats! Your browser supports Web Share API"),navigator.share({url:"https://share.toogoodtogo.com/store/1006/milestones/meals-saved/"}).then((function(){console.log("Sharing successfull")})).catch((function(){console.log("Sharing failed")}))):console.log("Sorry! Your browser does not support Web Share API")}})})]})}),Object(Z.jsxs)("div",{style:{display:"flex"},children:[Object(Z.jsx)(v.a,{variant:"h6",className:h.titleXLL,style:{marginLeft:"8px",marginTop:"8px",fontWeight:"900"},children:De.title}),Object(Z.jsx)("span",{style:{flexGrow:1}}),Object(Z.jsxs)(C.a,{size:"small",variant:"outlined",color:"secondary",className:h.locationOnIcon,startIcon:Object(Z.jsx)(z.a,{}),style:{marginRight:"16px",marginTop:"16px"},children:[De.distance," km"]})]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsx)("div",{style:{paddingTop:"8px",paddingBottom:"8px"},children:je.map((function(e,t){return Object(Z.jsx)(W.a,{label:e,href:"#chip",variant:"outlined",style:{margin:"8px",marginRight:0,padding:"6px",fontSize:"14px",fontWeight:"700"}},t)}))}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)(B.a,{container:!0,spacing:0,children:[Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u6d77\u62d4 "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",De.altitude," m"]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u5168\u9577 "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",De.distance," km "]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u5206\u985e "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",De.class," "]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u884c\u7a0b\u6642\u9593 "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",Math.floor(De.costTime/60),"h ",De.costTime%60," m"]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u5730\u5340 "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",De.location," "]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("div",{className:h.hikingInfoLeft,children:" \u8def\u9762\u72c0\u6cc1 "})}),Object(Z.jsx)(B.a,{item:!0,xs:8,children:Object(Z.jsxs)("div",{className:h.hikingInfoRight,children:[" ",Object(Z.jsxs)("span",{children:[" ",De.roadstatus]})," "]})}),Object(Z.jsx)(B.a,{item:!0,xs:12,style:{marginBottom:"16px"},children:Object(Z.jsx)(T.a,{})})]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(v.a,{variant:"h6",style:{margin:"16px 0 16px 16px",fontSize:"16px",fontWeight:"900",lineHeight:"1.5",letterSpacing:"0.5px"},children:"\u767b\u5c71\u53e3"}),Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},xe),{},{children:fe.map((function(e,t){return Object(Z.jsx)("div",{children:Object(Z.jsx)(C.a,{variant:"contained",style:{backgroundColor:"#abebdc"},onClick:function(){b.push({pathname:"/trailhead",state:{trail_id:i,key:t}})},className:h.defaultButton,disableElevation:!0,children:e.name})},t)}))}))]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("div",{style:{fontSize:"16px",marginTop:"16px",marginLeft:"16px",fontWeight:"700"},children:"\u6b65\u9053\u96f7\u9054\u5716"}),Object(Z.jsx)(F.a,{options:ut.options,series:ut.series,type:"radar",height:325})]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{style:{display:"flex"},children:[Object(Z.jsx)(v.a,{style:{fontSize:"16px",marginTop:"16px",marginLeft:"16px",fontWeight:"700"},children:"\u6b65\u9053\u6d88\u606f"}),Object(Z.jsx)("span",{style:{flexGrow:1}}),Object(Z.jsx)(C.a,{style:{fontSize:"14px",color:"#00d04c",marginTop:"16px",fontWeight:"900",padding:"0"},onClick:function(){b.push({pathname:"/announcement",state:{trail_id:i}})},children:"\u986f\u793a\u66f4\u591a"}),Object(Z.jsx)(S.a,{edge:"end",color:"inherit",style:{color:"#00d04c",marginRight:"6px",marginTop:"16px",padding:"0"},"aria-label":"ChevronRightIcon",onClick:function(){b.push({pathname:"/announcement",state:{trail_id:i}})},children:Object(Z.jsx)(P.a,{})})]}),Object(Z.jsx)("div",{style:{marginLeft:"8px"},children:ke.slice(0,3).map((function(e,t){return Object(Z.jsx)(_.a,{coverImage:e.imgUrl,title:e.title,date:e.date,source:e.source},t)}))}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{style:{padding:"16px 16px 0 16px"},children:[Object(Z.jsx)(v.a,{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"700"},children:"\u6b65\u9053\u4ecb\u7d39"}),Object(Z.jsx)(v.a,{style:{marginBottom:"24px",fontSize:"14px"},children:De.intro}),Object(Z.jsxs)(O.a,{className:h.buttonBase,onClick:function(){return G.a.browsing({src:De.map})},children:[Object(Z.jsx)("img",{alt:"map",src:De.map,className:h.map}),Object(Z.jsx)("div",{className:h.overlay}),Object(Z.jsx)("div",{className:h.mapIcon,children:Object(Z.jsx)(E.a,{fontSize:"large"})})]})]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(v.a,{style:{margin:"16px 0 16px 16px",fontSize:"16px",fontWeight:"700"},children:"\u6b65\u9053\u7167\u7247"}),Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},xe),{},{children:ae.slice(0,1).map((function(e,t){return Object(Z.jsx)(O.a,{onClick:function(){return G.a.browsing({src:e})},children:Object(Z.jsx)("div",{children:Object(Z.jsx)("img",{src:e,alt:"slider img",style:{width:"96px",height:"96px",objectFit:"cover",marginLeft:"16px",marginBottom:"16px"}})},t)})}))}))]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(v.a,{style:{margin:"16px 0 16px 16px",fontSize:"16px",fontWeight:"700"},children:"\u9130\u8fd1\u666f\u9ede"}),Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},xe),{},{children:Ne.map((function(e,t){return Object(Z.jsx)("div",{children:Object(Z.jsx)(C.a,{variant:"contained",style:{backgroundColor:"#abddeb",minWidth:"83px",margin:"0 0 16px 16px"},onClick:function(){b.push({pathname:"/attraction",state:{tab:t,trail_id:i}})},disableElevation:!0,children:e.category})},t)}))}))]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{style:{padding:"16px 0 0 16px",marginBottom:"16px",display:"flex"},children:[Object(Z.jsx)(v.a,{style:{fontSize:"16px",fontWeight:"700"},children:"\u6b65\u9053\u7d00\u9304\u8207\u8a55\u50f9"}),Object(Z.jsx)("span",{style:{flexGrow:4}}),Object(Z.jsx)(C.a,{style:{fontSize:"14px",color:"#00d04c",fontWeight:"900",padding:"0"},onClick:function(){b.push({pathname:"/trailComment",state:{trail_id:i}})},children:"\u986f\u793a\u66f4\u591a"}),Object(Z.jsx)(S.a,{edge:"end",color:"inherit",style:{color:"#00d04c",marginRight:"6px",padding:"0"},"aria-label":"ChevronRightIcon",onClick:function(){b.push({pathname:"/trailComment",state:{trail_id:i}})},children:Object(Z.jsx)(P.a,{})})]}),Object(Z.jsx)(X.a,{precision:.1,value:ot,readOnly:!0,style:{fontSize:"28px",marginBottom:"16px",marginLeft:"16px"}}),Object(Z.jsx)(T.a,{}),Object(Z.jsx)("div",{children:Ye.map((function(e){return Object(Z.jsx)(ie,{data:e})}))}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(v.a,{style:{margin:"16px 0 16px 16px",fontSize:"16px",fontWeight:"700"},children:"\u76f8\u95dc\u6587\u7ae0"}),Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},xe),{},{children:Be.map((function(e,t){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("img",{src:e.image,alt:"related_article_images",style:{width:"174px",height:"96px",objectFit:"cover",margin:"0 0 8px 16px"}}),Object(Z.jsx)(v.a,{style:{fontSize:"14px",fontWeight:"900",marginBottom:"1px",marginLeft:"16px"},children:e.title}),Object(Z.jsx)(v.a,{style:{fontSize:"10px",color:"979797",marginBottom:"16px",marginLeft:"16px"},children:e.date})]},t)}))}))]}),Object(Z.jsx)(T.a,{style:{height:"8px"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(v.a,{style:{margin:"16px 0 16px 16px",fontSize:"16px",fontWeight:"700"},children:"\u76f8\u4f3c\u6b65\u9053"}),Object(Z.jsx)(j.a,Object(o.a)(Object(o.a)({},ge),{},{children:Fe.map((function(e,t){return Object(Z.jsx)(C.a,{className:h.buttonAlign,onClick:function(){return function(e){var t=e.trail_id;window.location.reload(),window.scrollTo(0,0),b.push({pathname:"/pathway",state:{trail_id:t}})}(e)},children:Object(Z.jsxs)(B.a,{container:!0,spacing:0,children:[Object(Z.jsx)(B.a,{item:!0,xs:4,children:Object(Z.jsx)("img",{src:e.coverImage,alt:"similar_pathway_images",style:{width:"104px",height:"72px",objectFit:"cover",margin:"0 0 8px 16px"}})}),Object(Z.jsxs)(B.a,{item:!0,xs:8,children:[Object(Z.jsx)(v.a,{style:{fontSize:"16px",fontWeight:"900",marginBottom:"1px",textAlign:"left"},children:e.title}),Object(Z.jsx)(v.a,{style:{fontSize:"14px",color:"#979797",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textAlign:"left"},children:e.location.name}),Object(Z.jsxs)(v.a,{style:{fontSize:"12px",color:"#979797",marginBottom:"16px",textAlign:"left"},children:["\u5168\u7a0b\u7d04 ",e.distance," km"]})]})]})},t)}))}))]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),null!==lt?Object(Z.jsx)(J.a,{open:$,onClose:q,children:Object(Z.jsx)(pe,{severity:"info",onClose:q,children:"\u76ee\u524d\u5168\u7dda\u5c01\u9589\uff0c\u66ab\u505c\u958b\u653e\u3002"})}):null,Object(Z.jsxs)(U.a,{showLabels:!0,className:h.bottomNavigation,children:[Object(Z.jsx)(K.a,{onClick:function(){return b.push({pathname:"/commentPage",state:{trail_id:i}})},label:Object(Z.jsx)(v.a,{className:"".concat(h.descText," ").concat(h.noWrap),color:"textPrimary",children:"\u8a55\u8ad6\u6b65\u9053"}),icon:Object(Z.jsx)(ne.a,{color:"secondary"}),className:h.leftNavigation}),Object(Z.jsx)(K.a,{label:Object(Z.jsx)(se,{text:Object(Z.jsx)(v.a,{className:"".concat(h.mainText," ").concat(h.boldFont),children:"\u6253\u958bGPS\u8def\u7dda"}),destination:Ge}),className:h.rightNavigation})]})]})})}},776:function(e,t,i){"use strict";var a=i(13),n=i(35),o={margin:"auto",maxWidth:"1440px",width:"100%",lineHeight:1.5,letterSpacing:.5,justifyContent:"center",alignItems:"center"},c={root:{width:"100%"},title:{padding:0,fontSize:"18px",fontWeight:"500",flexGrow:1},opacityAppBar:{boxShadow:"none",backgroundColor:n.m[5],color:n.f[5],objectFit:"cover",height:176,position:"relative"},appBar:{padding:0,boxShadow:"none",position:"fixed",top:0,left:0,right:0},toolbar:{width:"100%",position:"absolute",top:0,left:0},homeSectionPaper:{margin:"16px 0",padding:8,backgroundColor:n.o},sectionPaper:Object(a.a)(Object(a.a)({},o),{},{padding:8,backgroundColor:n.o}),homePaper:Object(a.a)(Object(a.a)({},o),{},{margin:"56px auto"}),basicPaper:Object(a.a)(Object(a.a)({},o),{},{padding:8,margin:"56px auto 0",backgroundColor:n.o}),tabPaper:Object(a.a)(Object(a.a)({},o),{},{backgroundColor:n.o,padding:8,margin:"104px auto 56px",minHeight:"80vh"}),banner:{objectFit:"cover",width:"100%",overflow:"hidden"},searchInput:{margin:8,display:"flex",alignItems:"center",backgroundColor:"#e5e5ea"},input:{flex:1},iconButton:{padding:10},mapBox:{width:379,margin:"123px auto",textAlign:"center",fontSize:16},loginButton:{height:"48px",padding:12,marginTop:28,fontSize:"16px"},drawerPaper:{width:364,paddingTop:0},drawerTitle:{width:"100%",backgroundColor:"rgba(0, 208, 76, 0.05)",color:n.m[0],padding:"29px 16px 17px",fontSize:"18px",fontWeight:"500"},categoryButton:{width:158},icon:{fontSize:14,color:n.f[5],padding:8,borderRadius:3,width:150,backgroundColor:"rgba(35, 35, 35, 0.1)","input:hover ~ &":{backgroundColor:"rgba(35, 35, 35, 0.15)"},"input:disabled ~ &":{boxShadow:"none"}},checkedIcon:{color:n.m[0],border:"1px solid #00d04c",backgroundColor:n.o,"&:before":{display:"block",backgroundColor:"gray"},"input:hover ~ &":{backgroundColor:"rgba(0, 208, 76, 0.05)"}},filterSection:{fontSize:16,margin:0,width:"100%",padding:16},checkboxRoot:{margin:"16px 16px 0 0",padding:0,"&:hover":{backgroundColor:"transparent"}},showMore:{padding:8,color:n.f[0]},filterButtonSection:{boxShadow:"0 -2px 2px 0 rgba(0, 0, 0, 0.05)",width:364,padding:8,margin:0,position:"fixed",bottom:0,right:0,backgroundColor:n.o},ads:{width:"100%",maxHeight:88,overflow:"hidden",objectFit:"cover",marginTop:104,display:"block"},appBarTransparent:{position:"absolute",top:0,left:0,width:"100%",background:"transparent",boxShadow:"none"},collectionContent:{marginTop:61,position:"relative",padding:8,height:120,overflow:"hidden"},collectionIcon:{position:"absolute",right:0,bottom:-40,width:142,height:142,overflow:"hidden"},chips:{margin:8,marginRight:0,padding:6,fontSize:14,fontWeight:500},suggestTitle:{padding:"16px 8px",fontWeight:"500",fontSize:"18px"},hr:{margin:"16px 8px 8px",border:"1px solid rgba(0, 0, 0, 0.12)"},divider:{margin:8},dividerSpacing:{height:8,opacity:0},slider:{width:"100%",height:176},sliderImg:{objectFit:"cover",width:"100%",height:176},locationOnIcon:{margin:8,padding:7,backgroundColor:"rgba(0, 208, 76, 0.1)"},spacingOff:{margin:0,padding:0},textAlignRight:{textAlign:"right"},defaultButton:{minWidth:83,padding:8,margin:8},overlay:{backgroundColor:"rgba(0, 0, 0, 0.6)",position:"relative",height:"100%",width:"100%",objectFit:"cover",padding:8},mapIcon:{padding:16,textAlign:"center",position:"absolute",backgroundColor:"rgba(35, 35, 35, 0.7)",borderRadius:32,height:64,width:64,color:n.o},map:{position:"absolute",height:224,width:"100%",padding:8,objectFit:"cover"},buttonBase:{padding:8,height:224,width:"100%",objectFit:"cover",position:"relative"},albumImage:{width:96,height:96,objectFit:"cover",margin:8},ratingBox:{padding:8},bottomNavigation:{backgroundColor:n.o,height:64,position:"fixed",bottom:0,left:0,width:"100%",boxShadow:"0 -2px 2px 0 rgba(0, 0, 0, 0.05)"},rootRoot:{color:"#e57373","&$selected":{color:"#007aff"}},leftNavigation:{minWidth:120,width:"20vw",color:n.m[0],backgroundColor:n.o},rightNavigation:{minWidth:291,width:"80vw",color:n.o,fontSize:"80px",backgroundColor:n.m[0]},categoryContent:{maxWidth:"1440px",paddingTop:192,padding:8,margin:"auto",width:"100%",lineHeight:1.5,letterSpacing:.5},bannerContent:{position:"absolute",color:n.f[5],backgroundColor:n.m[5],height:"176px",width:"100%",overflow:"hidden",paddingLeft:16},categoryTitle:{width:"100%",paddingTop:2,fontWeight:"500",fontSize:"18px"},toolbarSubmit:{fontSize:16,paddingRight:0},inputBox:{padding:8},hikingInfoLeft:{margin:"16px 0 16px 16px"},hikingInfoRight:{textAlign:"right",margin:"14px 16px 13px 0"}};t.a=c},777:function(e,t,i){"use strict";var a=i(13),n=i(35),o={fontWeight:"500",padding:8},c={padding:8,lineHeight:1.5,letterSpacing:.5},s={titleXLL:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),o),{},{fontSize:22}),titleXl:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),o),{},{fontSize:20}),titleText:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),o),{},{fontSize:18}),appbarTitle:{flexGrow:1},mainText:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),c),{},{fontSize:16}),mainTextWeight:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),c),{},{fontSize:16,fontWeight:500}),descText:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),c),{},{fontSize:14}),infoText:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),c),{},{fontSize:12}),labelText:Object(a.a)(Object(a.a)(Object(a.a)({},n.e),c),{},{fontSize:10}),widerPadding:{paddingTop:16,paddingBottom:16},inlineContent:{display:"inline-block",verticalAlign:"top"},weightFont:{fontWeight:500},boldFont:{fontWeight:"bold"},commentText:{textOverflow:"ellipsis",maxHeight:74,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},mutedText:{color:n.f[6]},defaultMargin:{margin:8},noWrap:{margin:0,padding:0}};t.a=s},778:function(e,t,i){"use strict";var a=i(114),n=i(35),o=Object(a.b)({palette:{common:{black:n.f[9],white:n.o},background:{paper:n.o,default:n.f[8]},primary:{main:n.m[4]},secondary:{main:n.m[0],contrastText:n.o},error:{light:n.d[0],main:n.d[1],dark:n.d[2],contrastText:n.o}},typography:{body1:{fontFamily:"NotoSansCJKtc, Noto Sans TC, sans-serif",fontWeight:400,fontSize:16},fontFamily:["NotoSansCJKtc","Noto Sans TC","-apple-system","Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiBottomNavigationAction:{root:{"&$selected":{color:n.m[0]}},selected:{}}}});t.a=o},819:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var a=i(13),n=i(5),o=i(252),c=i(197),s=i(86),r=(i(0),i(106)),l=i(749),d=i(105),j=i(3),h=["pathLink","coverImage","coverImageAlt","title","date","source"],b=Object(c.a)({gridcontain:{width:"100%"},gridItem:{position:"relative",width:"auto",height:"auto",margin:"16px 0 10px 0"},titleText:{fontSize:"16px",color:"#232323",margin:"0 0 0 6px"},mutedText:{color:"#979797",margin:"0 0 0 7px"},img:{width:"100%",height:72,objectFit:"cover",borderRadius:4,minWidth:72},buttonBase:{margin:"0 0 0 16px"}});function x(e){var t,i=e.pathLink,c=e.coverImage,x=(e.coverImageAlt,e.title),g=e.date,p=e.source,m=Object(n.a)(e,h),u=b();return Object(j.jsx)(l.a,{href:i,underline:"none",children:Object(j.jsxs)(r.a,Object(a.a)(Object(a.a)({container:!0},m),{},{className:u.gridcontain,spacing:2,justify:"center",alignItems:"center",children:[Object(j.jsx)(r.a,{item:!0,className:u.gridItem,xs:3,children:Object(j.jsx)(d.a,{className:u.buttonBase,children:Object(j.jsx)("img",{alt:"",src:c,className:u.img})})}),Object(j.jsxs)(r.a,{item:!0,xs:9,children:[Object(j.jsx)(s.a,{className:u.titleText,children:x}),Object(j.jsxs)("small",{className:u.mutedText,children:[" ",g," | ",(t=p,t.length>17?t.substring(0,16)+"...":t)," "]})]}),Object(j.jsx)(r.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{})})]}))})}x.defaultProps={coverImageAlt:"cover image"}}}]);
//# sourceMappingURL=20.9101c7a0.chunk.js.map