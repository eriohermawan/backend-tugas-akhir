"use strict";(self.webpackChunktugas_akhir=self.webpackChunktugas_akhir||[]).push([[3552],{72751:(ee,T,t)=>{t.r(T),t.d(T,{default:()=>Je});var e=t(67294),r=t(64289),E=t(45697),i=t.n(E),m=t(86896),C=t(185),K=t(53979),L=t(29728),R=t(49066),I=t(89722),Q=t(96315),Z=t(86031),$=t(8181),l=t(57813),u=t(41054),v=t(85018),x=t(42866),p=t(24969),f=t(75515),P=t(59946),A=t(82777),F=t(11047),b=t(60633),V=t(70004),de=t(41580),W=t(42761),re=t(36856),te=t(87561);const a=(0,te.Ry)().shape({code:(0,te.Z_)().required(),displayName:(0,te.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(r.I0.required)});var O=t(86706),B=t(7982);const ae=()=>{const[o,s]=(0,e.useState)(!1),d=(0,O.I0)(),n=(0,r.lm)(),{put:c}=(0,r.kY)();return{isEditing:o,editLocale:async(g,y)=>{try{s(!0);const{data:D}=await c(`/i18n/locales/${g}`,y);n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.edit.success")}}),d({type:B.OT,editedLocale:D})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}};var H=t(11276),G=t(74571),Pe=t(40619),je=t(82562),J=t(16364),le=t(88767),Re=t(14087);const me=()=>{const{formatMessage:o}=(0,m.Z)(),{notifyStatus:s}=(0,Re.G)(),d=(0,r.lm)(),{get:n}=(0,r.kY)(),{isLoading:c,data:h}=(0,le.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:g}=await n("/i18n/iso-locales");return s(o({id:(0,l.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),g}catch{return d({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:h,isLoading:c}},he=({locale:o})=>{const{formatMessage:s}=(0,m.Z)(),{values:d,handleChange:n,errors:c}=(0,u.u6)(),{defaultLocales:h,isLoading:g}=me(),y=!g&&h.find(D=>D.code===o.code);return e.createElement(H.r,{gap:4},e.createElement(G.P,{col:6},e.createElement(Pe.P,{label:s({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:y?.code||o.code,disabled:!0},e.createElement(je.W,{value:y?.code||o.code},y?.name||o.code))),e.createElement(G.P,{col:6},e.createElement(J.o,{name:"displayName",label:s({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?s({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.displayName,onChange:n})))},be=he;he.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}).isRequired};var ge=t(36213);const X=({isDefaultLocale:o})=>{const{values:s,setFieldValue:d}=(0,u.u6)(),{formatMessage:n}=(0,m.Z)();return e.createElement(ge.X,{name:"isDefault",hint:n({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!s.isDefault),value:s.isDefault,disabled:o},n({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};X.propTypes={isDefaultLocale:i().bool.isRequired};const Se=X,ne=({locale:o,onClose:s})=>{const{refetchPermissions:d}=(0,r.vn)(),{isEditing:n,editLocale:c}=ae(),{formatMessage:h}=(0,m.Z)(),g=async({displayName:y,isDefault:D})=>{await c(o.id,{name:y,isDefault:D}),await d()};return e.createElement(x.P,{onClose:s,labelledBy:"edit-locale-title"},e.createElement(u.J9,{initialValues:{code:o?.code,displayName:o?.name||"",isDefault:Boolean(o?.isDefault)},onSubmit:g,validationSchema:a},e.createElement(r.l0,null,e.createElement(p.x,null,e.createElement(f.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},h({id:(0,l.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(P.f,null,e.createElement(A.v,{label:h({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.k,{justifyContent:"space-between"},e.createElement(f.Z,{as:"h2"},h({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(b.m,null,e.createElement(b.O,null,h({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(b.O,null,h({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(V.i,null),e.createElement(de.x,{paddingTop:7,paddingBottom:7},e.createElement(W.n,null,e.createElement(W.x,null,e.createElement(be,{locale:o})),e.createElement(W.x,null,e.createElement(Se,{isDefaultLocale:Boolean(o&&o.isDefault)})))))),e.createElement(re.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:s},h({id:"app.components.Button.cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(v.Z,null),disabled:n},h({id:"global.save"}))}))))};ne.defaultProps={locale:void 0},ne.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}),onClose:i().func.isRequired};const fe=ne,pe=()=>{const[o,s]=(0,e.useState)(!1),d=(0,O.I0)(),n=(0,r.lm)(),{del:c}=(0,r.kY)();return{isDeleting:o,deleteLocale:async g=>{try{s(!0),await c(`/i18n/locales/${g}`),n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.delete.success")}}),d({type:B.HC,id:g})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},oe=({localeToDelete:o,onClose:s})=>{const{isDeleting:d,deleteLocale:n}=pe(),c=Boolean(o),h=()=>n(o.id).then(s);return e.createElement(r.QH,{isConfirmButtonLoading:d,onConfirm:h,onToggleDialog:s,isOpen:c})};oe.defaultProps={localeToDelete:void 0},oe.propTypes={localeToDelete:i().shape({id:i().number.isRequired}),onClose:i().func.isRequired};const ve=oe;var Ae=t(27361),ye=t.n(Ae);const xe=()=>{const[o,s]=(0,e.useState)(!1),d=(0,O.I0)(),n=(0,r.lm)(),{post:c}=(0,r.kY)();return{isAdding:o,addLocale:async g=>{s(!0);try{const{data:y}=await c("/i18n/locales",g);n({type:"success",message:{id:(0,l.O)("Settings.locales.modal.create.success")}}),d({type:B.xz,newLocale:y})}catch(y){const D=ye()(y,"response.payload.message",null);throw D&&D.includes("already exists")?n({type:"warning",message:{id:(0,l.O)("Settings.locales.modal.create.alreadyExist")}}):n({type:"warning",message:{id:"notification.error"}}),y}finally{s(!1)}}}};var Le=t(29178),Be=t(90608);const Y=e.memo(({value:o,onClear:s,onLocaleChange:d,error:n})=>{const{formatMessage:c}=(0,m.Z)(),{defaultLocales:h,isLoading:g}=me(),{locales:y}=(0,$.Z)(),D=(h||[]).map(j=>({label:j.name,value:j.code})).filter(({value:j})=>{const N=y.find(({code:ie})=>ie===j);return!N||N.code===o}),z=o||"";return e.createElement(Le.hQ,{"aria-busy":g,error:n,label:c({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:z,onClear:o?s:void 0,onChange:j=>{const N=D.find(ie=>ie.value===j);N&&d({code:N.value,displayName:N.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"})},D.map(j=>e.createElement(Be.O,{value:j.value,key:j.value},j.label)))});Y.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},Y.propTypes={error:i().string,onClear:i().func,onLocaleChange:i().func,value:i().string};const w=Y,U=()=>{const{formatMessage:o}=(0,m.Z)(),{values:s,handleChange:d,setFieldValue:n,errors:c}=(0,u.u6)(),h=(0,e.useCallback)(y=>{n("displayName",y.displayName),n("code",y.code)},[n]),g=(0,e.useCallback)(()=>{n("displayName",""),n("code","")},[n]);return e.createElement(H.r,{gap:4},e.createElement(G.P,{col:6},e.createElement(w,{error:c.code,value:s.code,onLocaleChange:h,onClear:g})),e.createElement(G.P,{col:6},e.createElement(J.o,{name:"displayName",label:o({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:o({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?o({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:d})))},Ze=()=>{const{values:o,setFieldValue:s}=(0,u.u6)(),{formatMessage:d}=(0,m.Z)();return e.createElement(ge.X,{hint:d({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!o.isDefault),value:o.isDefault},d({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},Ce={code:"",displayName:"",isDefault:!1},se=({onClose:o})=>{const{isAdding:s,addLocale:d}=xe(),{formatMessage:n}=(0,m.Z)(),{refetchPermissions:c}=(0,r.vn)(),h=async g=>{await d({code:g.code,name:g.displayName,isDefault:g.isDefault}),await c()};return e.createElement(x.P,{onClose:o,labelledBy:"add-locale-title"},e.createElement(u.J9,{initialValues:Ce,onSubmit:h,validationSchema:a,validateOnChange:!1},e.createElement(r.l0,null,e.createElement(p.x,null,e.createElement(f.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},n({id:(0,l.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(P.f,null,e.createElement(A.v,{label:n({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.k,{justifyContent:"space-between"},e.createElement(f.Z,{as:"h2",variant:"beta"},n({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(b.m,null,e.createElement(b.O,null,n({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(b.O,null,n({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(V.i,null),e.createElement(de.x,{paddingTop:7,paddingBottom:7},e.createElement(W.n,null,e.createElement(W.x,null,e.createElement(U,null)),e.createElement(W.x,null,e.createElement(Ze,null)))))),e.createElement(re.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:o},n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(v.Z,null),disabled:s},n({id:"global.save",defaultMessage:"Save"}))}))))};se.propTypes={onClose:i().func.isRequired};const Me=se;var $e=t(38939),k=t(8060),Oe=t(79031),S=t(37909),Fe=t(63237),We=t(15234),De=t(12028),Ue=t(4585),Ne=t(20022);const q=({locales:o,onDeleteLocale:s,onEditLocale:d})=>{const{formatMessage:n}=(0,m.Z)();return e.createElement($e.i,{colCount:4,rowCount:o.length+1},e.createElement(k.h,null,e.createElement(Oe.Tr,null,e.createElement(S.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.id")}))),e.createElement(S.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.displayName")}))),e.createElement(S.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},n({id:(0,l.O)("Settings.locales.row.default-locale")}))),e.createElement(S.Th,null,e.createElement(Fe.T,null,"Actions")))),e.createElement(We.p,null,o.map(c=>e.createElement(Oe.Tr,{key:c.id,...(0,r.X7)({fn:()=>d(c),condition:d})},e.createElement(S.Td,null,e.createElement(f.Z,{textColor:"neutral800"},c.id)),e.createElement(S.Td,null,e.createElement(f.Z,{textColor:"neutral800"},c.name)),e.createElement(S.Td,null,e.createElement(f.Z,{textColor:"neutral800"},c.isDefault?n({id:(0,l.O)("Settings.locales.default")}):null)),e.createElement(S.Td,null,e.createElement(F.k,{gap:1,justifyContent:"flex-end",...r.UW},d&&e.createElement(De.h,{onClick:()=>d(c),label:n({id:(0,l.O)("Settings.list.actions.edit")}),icon:e.createElement(Ue.Z,null),noBorder:!0}),s&&!c.isDefault&&e.createElement(De.h,{onClick:()=>s(c),label:n({id:(0,l.O)("Settings.list.actions.delete")}),icon:e.createElement(Ne.Z,null),noBorder:!0})))))))};q.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},q.propTypes={locales:i().array,onDeleteLocale:i().func,onEditLocale:i().func};const Ke=q,_=({canUpdateLocale:o,canDeleteLocale:s,onToggleCreateModal:d,isCreating:n})=>{const[c,h]=(0,e.useState)(),[g,y]=(0,e.useState)(),{locales:D}=(0,$.Z)(),{formatMessage:z}=(0,m.Z)();(0,r.go)();const j=()=>h(void 0),N=s?h:void 0,ie=()=>y(void 0),Xe=o?y:void 0;return e.createElement(C.o,{tabIndex:-1},e.createElement(K.T,{primaryAction:e.createElement(L.z,{startIcon:e.createElement(Q.Z,null),onClick:d,size:"S"},z({id:(0,l.O)("Settings.list.actions.add")})),title:z({id:(0,l.O)("plugin.name")}),subtitle:z({id:(0,l.O)("Settings.list.description")})}),e.createElement(R.D,null,D?.length>0?e.createElement(Ke,{locales:D,onDeleteLocale:N,onEditLocale:Xe}):e.createElement(I.x,{icon:e.createElement(Z.Z,{width:void 0,height:void 0}),content:z({id:(0,l.O)("Settings.list.empty.title")}),action:d?e.createElement(L.z,{variant:"secondary",startIcon:e.createElement(Q.Z,null),onClick:d},z({id:(0,l.O)("Settings.list.actions.add")})):null})),n&&e.createElement(Me,{onClose:d}),g&&e.createElement(fe,{onClose:ie,locale:g}),e.createElement(ve,{localeToDelete:c,onClose:j}))};_.defaultProps={onToggleCreateModal:void 0},_.propTypes={canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired,onToggleCreateModal:i().func,isCreating:i().bool.isRequired};const Ve=_,Te=({canReadLocale:o,canCreateLocale:s,canDeleteLocale:d,canUpdateLocale:n})=>{const[c,h]=(0,e.useState)(!1),g=s?()=>h(y=>!y):void 0;return o?e.createElement(Ve,{canUpdateLocale:n,canDeleteLocale:d,onToggleCreateModal:g,isCreating:c}):null};Te.propTypes={canReadLocale:i().bool.isRequired,canCreateLocale:i().bool.isRequired,canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired};const M=Te;var Ge=t(2135);const Je=()=>{const{isLoading:o,allowedActions:{canRead:s,canUpdate:d,canCreate:n,canDelete:c}}=(0,r.ss)(Ge.Z);return o?null:e.createElement(M,{canReadLocale:s,canCreateLocale:n,canUpdateLocale:d,canDeleteLocale:c})}},29178:(ee,T,t)=>{t.d(T,{Wx:()=>te,XU:()=>A,hQ:()=>P});var e=t(85893),r=t(67294),E=t(70968),i=t(12645),m=t(61505),C=t(46449),K=t(51809),L=t(10892),R=t(2504),I=t(75368),Q=t(15585),Z=t(77197),$=t(41580),l=t(75515),u=t(54574),v=t(11047),x=t(19270),p=t(63428),f=t(96404);const P=({children:a,clearLabel:O="clear",creatable:B=!1,createMessage:ue=w=>`Create "${w}"`,defaultFilterValue:ae,defaultTextValue:H,defaultOpen:G=!1,open:Pe,onOpenChange:je,disabled:J=!1,error:le,filterValue:Re,hasMoreItems:ze=!1,hint:me,id:he,label:be,labelAction:ge,loading:X=!1,loadingMessage:Se="Loading content...",noOptionsMessage:ne=()=>"No results found",onChange:fe,onClear:Ee,onCreateOption:pe,onFilterValueChange:oe,onInputChange:ve,onTextValueChange:Ae,onLoadMore:ye,placeholder:Qe="Select or enter a value",required:xe=!1,startIcon:Le,textValue:Be,value:Y})=>{const[w,He]=(0,L.T)({prop:Pe,defaultProp:G,onChange:je}),[U,Ie]=(0,L.T)({prop:Be,defaultProp:H,onChange:Ae}),[Ze,Ce]=(0,L.T)({prop:Re,defaultProp:ae,onChange:oe}),se=r.useRef(null),Me=r.useRef(null),$e=r.useRef(null),k=(0,R.M)(he),Oe=M=>{Ee&&!J&&(Ie(""),Ce(""),Ee(M),Me.current.focus())},S=M=>{He(M)},Fe=M=>{Ie(M)},We=M=>{Ce(M)},De=M=>{ve&&ve(M)},Ue=M=>{fe&&fe(M)},Ne=(0,R.M)(),q=`intersection-${(0,K.B)(Ne)}`,Ke=M=>{ye&&ze&&!X&&ye(M)},_=()=>{pe&&U&&pe(U)};(0,I.s)(se,Ke,{selectorToWatch:`#${q}`,skipWhen:!w});const Ve=`${k}-hint`,Te=`${k}-error`;return(0,e.jsx)(u.g,{hint:me,error:le,id:k,required:xe,children:(0,e.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(x.Q,{action:ge,children:be}),(0,e.jsxs)(m.hQ.Root,{autocomplete:B?"list":"both",open:w,onOpenChange:S,onTextValueChange:Fe,textValue:U,allowCustomValue:!0,disabled:J,required:xe,value:Y===null?void 0:Y,onValueChange:Ue,filterValue:Ze,onFilterValueChange:We,children:[(0,e.jsxs)(b,{$hasError:!!le,children:[(0,e.jsxs)(v.k,{flex:"1",as:"span",gap:3,children:[Le?(0,e.jsx)($.x,{as:"span","aria-hidden":!0,children:Le}):null,(0,e.jsx)(V,{placeholder:Qe,id:k,"aria-invalid":!!le,"aria-labelledby":`${Ve} ${Te}`,onChange:De,ref:Me})]}),(0,e.jsxs)(v.k,{as:"span",gap:3,children:[U&&Ee?(0,e.jsx)(F,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Oe,"aria-disabled":J,"aria-label":O,title:O,ref:$e,children:(0,e.jsx)(E.Z,{})}):null,(0,e.jsx)(de,{children:(0,e.jsx)(i.Z,{})})]})]}),(0,e.jsx)(m.hQ.Portal,{children:(0,e.jsx)(W,{sideOffset:4,children:(0,e.jsxs)(re,{ref:se,children:[a,B?(0,e.jsx)(m.hQ.CreateItem,{onPointerUp:_,onClick:_,asChild:!0,children:(0,e.jsx)(ce,{children:(0,e.jsx)(l.Z,{children:ue(U??"")})})}):null,!B&&!X?(0,e.jsx)(m.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(ce,{$hasHover:!1,children:(0,e.jsx)(l.Z,{children:ne(U??"")})})}):null,X?(0,e.jsx)(v.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(Z.a,{small:!0,children:Se})}):null,(0,e.jsx)($.x,{id:q,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(p.J,{}),(0,e.jsx)(f.c,{})]})})},A=a=>(0,e.jsx)(P,{...a,creatable:!0}),F=(0,C.ZP)($.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,b=(0,C.ZP)(m.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:O})=>O?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:O})=>(0,Q.k3)()({theme:a,hasError:O})};
`,V=(0,C.ZP)(m.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,de=(0,C.ZP)(m.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,W=(0,C.ZP)(m.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,re=(0,C.ZP)(m.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,te=r.forwardRef(({children:a,value:O,disabled:B,textValue:ue,...ae},H)=>(0,e.jsx)(m.hQ.ComboboxItem,{asChild:!0,value:O,disabled:B,textValue:ue,children:(0,e.jsx)(ce,{ref:H,...ae,children:(0,e.jsx)(m.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(l.Z,{children:a})})})})),ce=C.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${l.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:O=!0})=>O?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${l.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(ee,T,t)=>{t.d(T,{O:()=>r});var e=t(29178);const r=e.Wx},49066:(ee,T,t)=>{t.d(T,{D:()=>m});var e=t(85893),r=t(67294),E=t(45697),i=t(41580);const m=({children:C})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:C});m.propTypes={children:E.node.isRequired}},53979:(ee,T,t)=>{t.d(T,{T:()=>Z});var e=t(85893),r=t(67294),E=t(45697),i=t(46449);const m=u=>{const v=(0,r.useRef)(null),[x,p]=(0,r.useState)(!0),f=([P])=>{p(P.isIntersecting)};return(0,r.useEffect)(()=>{const P=v.current,A=new IntersectionObserver(f,u);return P&&A.observe(v.current),()=>{P&&A.disconnect()}},[v,u]),[v,x]};var C=t(95355);const K=(u,v)=>{const x=(0,C.W)(v);(0,r.useLayoutEffect)(()=>{const p=new ResizeObserver(x);return Array.isArray(u)?u.forEach(f=>{f.current&&p.observe(f.current)}):u.current&&p.observe(u.current),()=>{p.disconnect()}},[u,x])};var L=t(41580),R=t(11047),I=t(75515);const Q=()=>{const u=(0,r.useRef)(null),[v,x]=(0,r.useState)(null),[p,f]=m({root:null,rootMargin:"0px",threshold:0});return K(p,()=>{p.current&&x(p.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{u.current&&x(u.current.getBoundingClientRect())},[u]),{containerRef:p,isVisible:f,baseHeaderLayoutRef:u,headerSize:v}},Z=u=>{const{containerRef:v,isVisible:x,baseHeaderLayoutRef:p,headerSize:f}=Q();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:f?.height},ref:v,children:x&&(0,e.jsx)(l,{ref:p,...u})}),!x&&(0,e.jsx)(l,{...u,sticky:!0,width:f?.width})]})};Z.displayName="HeaderLayout";const $=(0,i.ZP)(L.x)`
  width: ${u=>u.width}px;
  z-index: ${({theme:u})=>u.zIndices[1]};
`,l=r.forwardRef(({navigationAction:u,primaryAction:v,secondaryAction:x,subtitle:p,title:f,sticky:P,width:A,...F},b)=>{const V=typeof p=="string";return P?(0,e.jsx)($,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:A,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{children:[u&&(0,e.jsx)(L.x,{paddingRight:3,children:u}),(0,e.jsxs)(L.x,{children:[(0,e.jsx)(I.Z,{variant:"beta",as:"h1",...F,children:f}),V?(0,e.jsx)(I.Z,{variant:"pi",textColor:"neutral600",children:p}):p]}),x?(0,e.jsx)(L.x,{paddingLeft:4,children:x}):null]}),(0,e.jsx)(R.k,{children:v?(0,e.jsx)(L.x,{paddingLeft:2,children:v}):void 0})]})}):(0,e.jsxs)(L.x,{ref:b,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?(0,e.jsx)(L.x,{paddingBottom:2,children:u}):null,(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{minWidth:0,children:[(0,e.jsx)(I.Z,{as:"h1",variant:"alpha",...F,children:f}),x?(0,e.jsx)(L.x,{paddingLeft:4,children:x}):null]}),v]}),V?(0,e.jsx)(I.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:p}):p]})});l.displayName="BaseHeaderLayout",l.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},l.propTypes={navigationAction:E.node,primaryAction:E.node,secondaryAction:E.node,sticky:E.bool,subtitle:E.oneOfType([E.string,E.node]),title:E.string.isRequired,width:E.number},Z.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},Z.propTypes={navigationAction:E.node,primaryAction:E.node,secondaryAction:E.node,subtitle:E.oneOfType([E.string,E.node]),title:E.string.isRequired}},185:(ee,T,t)=>{t.d(T,{o:()=>m});var e=t(85893),r=t(46449),E=t(41580);const i=(0,r.ZP)(E.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,m=({labelledBy:C="main-content-title",...K})=>(0,e.jsx)(i,{"aria-labelledby":C,as:"main",id:"main-content",tabIndex:-1,...K})}}]);
