(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{5186:function(e,t,l){Promise.resolve().then(l.bind(l,9183))},9183:function(e,t,l){"use strict";l.r(t);var s=l(1844),i=l(5003),n=l(9734),a=l(3299),o=l(5784),c=l(3454);let r=e=>{var t,l,r,x;let{params:d}=e,{data:u}=(0,a.useSession)(),[m,f]=(0,o.useState)(),v=e=>{var t;return fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(null==u?void 0:null===(t=u.user)||void 0===t?void 0:t.accessToken)}}).then(e=>e.json())},{data:h,error:g}=(0,n.ZP)(c.env.BACKEND_URL+"/users/"+d.memberId,v);return(0,o.useEffect)(()=>{h&&(console.log(h),f(h))},[h]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"mt-12 lg:mt-48 lg:mx-48 flex flex-col lg:flex-row items-center lg:items-start justify-between text-customLightPink tracking-wider",children:[(0,s.jsxs)("div",{className:"mb-6 text-center lg:text-left",children:[(0,s.jsxs)("div",{className:" lg:text-xl font-thin",children:[(0,s.jsxs)("div",{className:"text-3xl lg:text-5xl mb-6 font-medium",children:[null==m?void 0:null===(t=m.firstName)||void 0===t?void 0:t.toUpperCase()," ",null==m?void 0:null===(l=m.lastName)||void 0===l?void 0:l.toUpperCase()]}),(0,s.jsx)("p",{children:"Yıldız Teknik \xdcniversitesi"}),(0,s.jsx)("p",{children:"End\xfcstri M\xfchendisliği"}),(0,s.jsx)("p",{children:null==m?void 0:m.email})]}),(0,s.jsx)("div",{className:"flex flex-col lg:flex-row justify-start space-y-1 lg:space-y-0 lg:space-x-12 mt-8 lg:w-96",children:(0,s.jsxs)("div",{className:"text-lg lg:text-2xl flex justify-between lg:justify-center lg:flex-col",children:[(0,s.jsx)("p",{children:null==m?void 0:null===(r=m.roles)||void 0===r?void 0:r.toString()}),(0,s.jsx)("p",{children:null==m?void 0:null===(x=m.team)||void 0===x?void 0:x.toString()})]})})]}),(0,s.jsxs)("ul",{className:"text-customAccent flex flex-col items-center lg:items-start justify-start gap-3 mt-8 font-semibold tracking-[0.3em]",children:[(0,s.jsx)(i.Z,{className:"text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105",text:"\xdcye Ayarları",type:"team"}),(0,s.jsx)(i.Z,{className:"text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105",text:"Rol Ayarları",type:"team"}),(0,s.jsx)(i.Z,{className:"text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105",text:"Ekip Ayarları",type:"team"}),(0,s.jsx)(i.Z,{className:"text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105",text:"Proje Ayarları",type:"team"})]})]})})};t.default=r}},function(e){e.O(0,[299,734,3,17,744],function(){return e(e.s=5186)}),_N_E=e.O()}]);