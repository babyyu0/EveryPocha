(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{2126:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/mini/liar/Phase2",function(){return t(7677)}])},7677:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),s=t(7294),i=t(480);function a(){let[e,n]=(0,s.useState)(0),[t,a]=(0,s.useState)(1),[l,u]=(0,s.useState)("ing");(0,s.useEffect)(()=>{let r=setInterval(()=>{parseInt(t)>0&&a(parseInt(t)-1),0===parseInt(t)&&(0===parseInt(e)?(clearInterval(r),u("done")):(n(parseInt(e)-1),a(59)))},1e3);return()=>clearInterval(r)},[e,t]);let c=()=>{a(t+30)};return(0,r.jsxs)("div",{className:"discuss",style:{position:"relative",width:"600px",height:"600px",margin:"0 auto",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center"},children:["ing"===l&&e>=0&&t>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"토론을 해보세요"}),(0,r.jsxs)("h2",{children:[e,":",t<10?"0".concat(t):t,"초 남았습니다."]})]}),"ing"===l&&0===e&&t<=30&&t>=1&&(0,r.jsx)("button",{onClick:()=>c(),children:"시간 추가"}),"done"===l&&(0,r.jsx)(i.default,{})]})}},480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(5893);function s(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"누가 거짓말을 하고 있을까?"}),(0,r.jsx)("form",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsxs)("fieldset",{style:{width:"300px"},children:[(0,r.jsx)("legend",{style:{backgroundColor:"#000",color:"#fff",padding:"3px 6px"},children:"라이어라고 생각되는 사람에게 투표하세요"}),(0,r.jsx)("input",{style:{margin:"0.4rem"},type:"radio",id:"kraken",name:"monster",value:"K"}),(0,r.jsx)("label",{for:"kraken",children:"Kraken"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{style:{margin:"0.4rem"},type:"radio",id:"sasquatch",name:"monster",value:"S"}),(0,r.jsx)("label",{for:"sasquatch",children:"Sasquatch"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{style:{margin:"0.4rem"},type:"radio",id:"mothman",name:"monster",value:"M"}),(0,r.jsx)("label",{for:"mothman",children:"Mothman"})]})})]})}t(7294)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2126)}),_N_E=e.O()}]);