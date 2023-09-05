"use strict";(self.webpackChunktugas_akhir=self.webpackChunktugas_akhir||[]).push([[8418],{95972:(D,y,t)=>{t.r(y),t.d(y,{default:()=>ie});var e=t(67294),r=t(88767),i=t(86896),a=t(64289),f=t(14087),T=t(185),O=t(53979),E=t(49066),c=t(81912),n=t(89031);const u=async()=>{const{get:d}=(0,a.tg)(),{data:h}=await d((0,n.Gc)("email-templates"));return h},M=d=>{const{put:h}=(0,a.tg)();return h((0,n.Gc)("email-templates"),d)};var j=t(45697),o=t.n(j),s=t(38939),p=t(8060),m=t(79031),l=t(37909),g=t(63237),B=t(75515),b=t(15234),I=t(52624),Z=t(12028),S=t(30815),H=t(4585),Q=t(85018);const K=({canUpdate:d,onEditClick:h})=>{const{formatMessage:v}=(0,i.Z)();return e.createElement(s.i,{colCount:3,rowCount:3},e.createElement(p.h,null,e.createElement(m.Tr,null,e.createElement(l.Th,{width:"1%"},e.createElement(g.T,null,v({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(l.Th,null,e.createElement(B.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(l.Th,{width:"1%"},e.createElement(g.T,null,v({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(b.p,null,e.createElement(m.Tr,{...(0,a.X7)({fn:()=>h("reset_password")})},e.createElement(l.Td,null,e.createElement(I.J,null,e.createElement(S.Z,{"aria-label":v({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(l.Td,null,e.createElement(B.Z,null,v({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(l.Td,{...a.UW},e.createElement(Z.h,{onClick:()=>h("reset_password"),label:v({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement(H.Z,null)}))),e.createElement(m.Tr,{...(0,a.X7)({fn:()=>h("email_confirmation")})},e.createElement(l.Td,null,e.createElement(I.J,null,e.createElement(Q.Z,{"aria-label":v({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(l.Td,null,e.createElement(B.Z,null,v({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(l.Td,{...a.UW},e.createElement(Z.h,{onClick:()=>h("email_confirmation"),label:v({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement(H.Z,null)})))))};K.propTypes={canUpdate:o().bool.isRequired,onEditClick:o().func.isRequired};const X=K;var Y=t(41054),w=t(42866),k=t(24969),W=t(2407),q=t(59946),_=t(11276),U=t(74571),ee=t(64256),te=t(36856),N=t(29728),R=t(87561);const ae=R.Ry().shape({options:R.Ry().shape({from:R.Ry().shape({name:R.Z_().required(a.I0.required),email:R.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:R.Z_().email(a.I0.email),object:R.Z_().required(a.I0.required),message:R.Z_().required(a.I0.required)}).required(a.I0.required)}),z=({template:d,onToggle:h,onSubmit:v})=>{const{formatMessage:x}=(0,i.Z)();return e.createElement(w.P,{onClose:h,labelledBy:`${x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,n.OB)(d.display),defaultMessage:d.display})}`},e.createElement(k.x,null,e.createElement(W.O,{label:`${x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,n.OB)(d.display),defaultMessage:d.display})}`},e.createElement(W.$,null,x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(W.$,null,x({id:(0,n.OB)(d.display),defaultMessage:d.display})))),e.createElement(Y.J9,{onSubmit:v,initialValues:d,validateOnChange:!1,validationSchema:ae,enableReinitialize:!0},({errors:P,values:L,handleChange:A,isSubmitting:F})=>e.createElement(a.l0,null,e.createElement(q.f,null,e.createElement(_.r,{gap:5},e.createElement(U.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:A,value:L.options.from.name,error:P?.options?.from?.name,type:"text"})),e.createElement(U.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:A,value:L.options.from.email,error:P?.options?.from?.email,type:"text"})),e.createElement(U.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:A,value:L.options.response_email,error:P?.options?.response_email,type:"text"})),e.createElement(U.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:A,value:L.options.object,error:P?.options?.object,type:"text"})),e.createElement(U.P,{col:12,s:12},e.createElement(ee.g,{label:x({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:A,value:L.options.message,error:P?.options?.message&&x({id:P.options.message,defaultMessage:P.options.message})})))),e.createElement(te.m,{startActions:e.createElement(N.z,{onClick:h,variant:"tertiary"},"Cancel"),endActions:e.createElement(N.z,{loading:F,type:"submit"},"Finish")}))))};z.propTypes={template:o().shape({display:o().string,icon:o().string,options:o().shape({from:o().shape({name:o().string,email:o().string}),message:o().string,object:o().string,response_email:o().string})}).isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired};const ne=z,se=()=>e.createElement(a.O4,{permissions:c.Z.readEmailTemplates},e.createElement(le,null)),le=()=>{const{formatMessage:d}=(0,i.Z)(),{trackUsage:h}=(0,a.rS)(),{notifyStatus:v}=(0,f.G)(),x=(0,a.lm)(),{lockApp:P,unlockApp:L}=(0,a.o1)(),A=(0,e.useRef)(h),F=(0,r.useQueryClient)();(0,a.go)();const[oe,re]=(0,e.useState)(!1),[G,de]=(0,e.useState)(null),me=(0,e.useMemo)(()=>({update:c.Z.updateEmailTemplates}),[]),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)(me),{status:pe,data:V}=(0,r.useQuery)("email-templates",()=>u(),{onSuccess(){v(d({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){x({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",$=()=>{re(C=>!C)},ge=C=>{de(C),$()},J=(0,r.useMutation)(C=>M({"email-templates":C}),{async onSuccess(){await F.invalidateQueries("email-templates"),x({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),A.current("didEditEmailTemplates"),L(),$()},onError(){x({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),L()},refetchActive:!0}),{isLoading:fe}=J,he=C=>{P(),A.current("willEditEmailTemplates");const ve={...V,[G]:C};J.mutate(ve)};return Ee?e.createElement(T.o,{"aria-busy":"true"},e.createElement(a.SL,{name:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.T,{title:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(E.D,null,e.createElement(a.dO,null))):e.createElement(T.o,{"aria-busy":fe},e.createElement(a.SL,{name:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.T,{title:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(E.D,null,e.createElement(X,{onEditClick:ge,canUpdate:ue}),oe&&e.createElement(ne,{template:V[G],onToggle:$,onSubmit:he})))},ie=se},89031:(D,y,t)=>{t.d(y,{YX:()=>a,Gc:()=>O,OB:()=>E.Z});var e=t(41609),r=t.n(e);const a=c=>Object.keys(c).reduce((n,u)=>{const M=c[u].controllers,j=Object.keys(M).reduce((o,s)=>(r()(M[s])||(o[s]=M[s]),o),{});return r()(j)||(n[u]={controllers:j}),n},{});var f=t(31498);const O=c=>`/${f.Z}/${c}`;var E=t(84757)},2407:(D,y,t)=>{t.d(y,{$:()=>c,O:()=>n});var e=t(85893),r=t(16405),i=t(46449),a=t(63237),f=t(11047),T=t(41580),O=t(75515);const E=(0,i.ZP)(f.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:u})=>u.colors.neutral500};
    }
  }
  :last-of-type ${T.x} {
    display: none;
  }
  :last-of-type ${O.Z} {
    color: ${({theme:u})=>u.colors.neutral800};
    font-weight: ${({theme:u})=>u.fontWeights.bold};
  }
`,c=({children:u})=>(0,e.jsxs)(E,{inline:!0,as:"li",children:[(0,e.jsx)(O.Z,{variant:"pi",textColor:"neutral600",children:u}),(0,e.jsx)(T.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(r.Z,{})})]});c.displayName="Crumb";const n=({children:u,label:M,...j})=>(0,e.jsxs)(f.k,{...j,children:[(0,e.jsx)(a.T,{children:M}),(0,e.jsx)("ol",{"aria-hidden":!0,children:u})]});n.displayName="Breadcrumbs"},49066:(D,y,t)=>{t.d(y,{D:()=>f});var e=t(85893),r=t(67294),i=t(45697),a=t(41580);const f=({children:T})=>(0,e.jsx)(a.x,{paddingLeft:10,paddingRight:10,children:T});f.propTypes={children:i.node.isRequired}},53979:(D,y,t)=>{t.d(y,{T:()=>M});var e=t(85893),r=t(67294),i=t(45697),a=t(46449);const f=s=>{const p=(0,r.useRef)(null),[m,l]=(0,r.useState)(!0),g=([B])=>{l(B.isIntersecting)};return(0,r.useEffect)(()=>{const B=p.current,b=new IntersectionObserver(g,s);return B&&b.observe(p.current),()=>{B&&b.disconnect()}},[p,s]),[p,m]};var T=t(95355);const O=(s,p)=>{const m=(0,T.W)(p);(0,r.useLayoutEffect)(()=>{const l=new ResizeObserver(m);return Array.isArray(s)?s.forEach(g=>{g.current&&l.observe(g.current)}):s.current&&l.observe(s.current),()=>{l.disconnect()}},[s,m])};var E=t(41580),c=t(11047),n=t(75515);const u=()=>{const s=(0,r.useRef)(null),[p,m]=(0,r.useState)(null),[l,g]=f({root:null,rootMargin:"0px",threshold:0});return O(l,()=>{l.current&&m(l.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{s.current&&m(s.current.getBoundingClientRect())},[s]),{containerRef:l,isVisible:g,baseHeaderLayoutRef:s,headerSize:p}},M=s=>{const{containerRef:p,isVisible:m,baseHeaderLayoutRef:l,headerSize:g}=u();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:g?.height},ref:p,children:m&&(0,e.jsx)(o,{ref:l,...s})}),!m&&(0,e.jsx)(o,{...s,sticky:!0,width:g?.width})]})};M.displayName="HeaderLayout";const j=(0,a.ZP)(E.x)`
  width: ${s=>s.width}px;
  z-index: ${({theme:s})=>s.zIndices[1]};
`,o=r.forwardRef(({navigationAction:s,primaryAction:p,secondaryAction:m,subtitle:l,title:g,sticky:B,width:b,...I},Z)=>{const S=typeof l=="string";return B?(0,e.jsx)(j,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:b,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(c.k,{justifyContent:"space-between",children:[(0,e.jsxs)(c.k,{children:[s&&(0,e.jsx)(E.x,{paddingRight:3,children:s}),(0,e.jsxs)(E.x,{children:[(0,e.jsx)(n.Z,{variant:"beta",as:"h1",...I,children:g}),S?(0,e.jsx)(n.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),m?(0,e.jsx)(E.x,{paddingLeft:4,children:m}):null]}),(0,e.jsx)(c.k,{children:p?(0,e.jsx)(E.x,{paddingLeft:2,children:p}):void 0})]})}):(0,e.jsxs)(E.x,{ref:Z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(E.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(c.k,{justifyContent:"space-between",children:[(0,e.jsxs)(c.k,{minWidth:0,children:[(0,e.jsx)(n.Z,{as:"h1",variant:"alpha",...I,children:g}),m?(0,e.jsx)(E.x,{paddingLeft:4,children:m}):null]}),p]}),S?(0,e.jsx)(n.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})});o.displayName="BaseHeaderLayout",o.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},o.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,sticky:i.bool,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired,width:i.number},M.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},M.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired}},185:(D,y,t)=>{t.d(y,{o:()=>f});var e=t(85893),r=t(46449),i=t(41580);const a=(0,r.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,f=({labelledBy:T="main-content-title",...O})=>(0,e.jsx)(a,{"aria-labelledby":T,as:"main",id:"main-content",tabIndex:-1,...O})}}]);
