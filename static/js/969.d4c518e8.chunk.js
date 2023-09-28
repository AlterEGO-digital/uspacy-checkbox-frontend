"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[969],{3969:function(e,n,t){t.r(n);var i=t(5893),l=t(2245),s=t(1508),r=t(2734),a=t(2658),o=t(2747),c=t.n(o),d=t(1934),x=t(453),u=t(5642),h=t(9517),g=t(9261),p=t(8665),f=t(2188),j=t(5809),m=function(){return m=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},m.apply(this,arguments)},v=function(){var e=(0,d.useTranslation)("settings").t,n=(0,r.Z)(),t=(0,x.z_)(),c=t.cashierData,h=t.loading,g=t.logOut,v=t.saveSettings,Z=(0,u.G)().errorNotification,y=(0,o.useState)(""),b=y[0],k=y[1],S=(0,o.useState)(""),w=S[0],C=S[1],_=(0,o.useState)(""),W=_[0],I=_[1],z=(0,o.useState)(""),O=z[0],P=z[1];return(0,o.useEffect)((function(){k((null==c?void 0:c.cashier_login)||""),k((null==c?void 0:c.cashier_password)||""),I((null==c?void 0:c.cashier_pinecode)||""),P((null==c?void 0:c.license_key)||"")}),[c]),h?(0,i.jsx)(s.Z,{sx:{height:"500px"},children:(0,i.jsx)(f.Z,{size:100})}):(0,i.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",padding:"10px 50px"},children:[(0,i.jsxs)(s.Z,{sx:{fontSize:"16px",fontWeight:"800",color:n.palette.text.primary,display:"flex",alignItems:"center",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'},children:[e("integration"),": ",(null==c?void 0:c.integration_status)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{sx:{color:n.palette.success.light},children:e("install")}),(0,i.jsxs)(s.Z,{sx:{ml:2,fontWeight:"normal",cursor:"pointer"},onClick:g,children:["(",e("exit"),")"]})]}):(0,i.jsx)(a.Z,{sx:{color:n.palette.error.light},children:e("dontInstall")})]}),(0,i.jsxs)(s.Z,{sx:{gap:"8px",alignItems:"center",width:"80%",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'},children:[(0,i.jsxs)(s.Z,{sx:{display:"flex",width:"100%",mt:3},children:[(0,i.jsx)(s.Z,{sx:{mr:2},children:"1)"}),(0,i.jsxs)(s.Z,{sx:{width:"100%"},children:[(0,i.jsx)(s.Z,{children:e("login")}),(0,i.jsx)(j.sS,{fullWidth:!0,sx:{color:n.palette.text.disabled,background:"none",outline:"none",mt:1},onChange:function(e){return k(e.target.value)},value:b}),(0,i.jsx)(s.Z,{sx:{mt:1},children:e("password")}),(0,i.jsx)(j.sS,{fullWidth:!0,sx:{color:n.palette.text.disabled,background:"none",outline:"none",mt:1},onChange:function(e){return C(e.target.value)},value:w}),(0,i.jsx)(s.Z,{sx:{mt:2},children:e("or")}),(0,i.jsx)(s.Z,{sx:{mt:2},children:e("pin")}),(0,i.jsx)(j.sS,{fullWidth:!0,sx:{color:n.palette.text.disabled,background:"none",outline:"none",mt:1},onChange:function(e){return I(e.target.value)},value:W})]})]}),(0,i.jsxs)(s.Z,{sx:{display:"flex",width:"100%",mt:3},children:[(0,i.jsx)(s.Z,{sx:{mr:2},children:"2)"}),(0,i.jsxs)(s.Z,{sx:{width:"100%"},children:[(0,i.jsx)(s.Z,{children:e("key")}),(0,i.jsx)(j.sS,{fullWidth:!0,sx:{color:n.palette.text.disabled,background:"none",outline:"none",mt:1},onChange:function(e){return P(e.target.value)},value:O})]})]}),(0,i.jsx)(s.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:(0,i.jsx)(l.Z,{fullWidth:!0,onClick:function(){if(O.length&&(b.length&&w.length||W.length)){var n=m(m(m({},b.length&&w.length&&{cashier_login:b,cashier_password:w}),W.length&&(!b.length||!w.length)&&{cashier_pinecode:W}),{license_key:O});v(n)}else Z(e("validationErr"))},size:"large",type:"submit",variant:"contained",sx:{background:n.palette.primary.main,border:"1px solid ".concat(n.palette.primary.main),textTransform:"initial",borderRadius:"5px",padding:"5px 7px",width:"200px","& .MuiLoadingButton-loadingIndicator":{color:n.palette.primary.main}},children:e("save")})})]}),(0,i.jsx)(p.Z,{})]})};n.default=function(e){var n=e.userSettings;return(0,o.useEffect)((function(){h.Z.changeLanguage(null==n?void 0:n.lang)}),[null==n?void 0:n.lang]),(0,i.jsx)(c().Suspense,{children:(0,i.jsx)(d.I18nextProvider,{i18n:h.Z,children:(0,i.jsx)(g.ZP,{userSettings:n,children:(0,i.jsx)(x.ZP,{children:(0,i.jsx)(v,{})})})})})}}}]);
//# sourceMappingURL=969.d4c518e8.chunk.js.map