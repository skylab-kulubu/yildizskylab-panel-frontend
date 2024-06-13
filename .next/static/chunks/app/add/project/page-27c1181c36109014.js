(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{2866:function(e,r,t){Promise.resolve().then(t.bind(t,3629))},3629:function(e,r,t){"use strict";t.r(r);var n=t(1844);t(5784);var i=t(2175),s=t(1356),o=t(3299),a=t(3454);let c=()=>{let{data:e}=(0,o.useSession)(),r=(0,i.TA)({initialValues:{name:"",description:""},validationSchema:s.B,onSubmit:e=>{t(e.name,e.description,[]),console.log(e)}});async function t(r,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=await fetch(a.env.BACKEND_URL+"/projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(null==e?void 0:e.user)},body:JSON.stringify({projectName:r,description:t,teams:n})}),s=i.json();console.log(s)}return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:r.handleSubmit,className:"font-bebas mx-0 sm:mx-[16%] scale-75 md:scale-75 lg:scale-100 mt-4 sm:mt-4 md:mt-8 lg:mt-24 tracking-[0.1em] text-lg text-customLightPink",children:[(0,n.jsx)("label",{htmlFor:"name",children:"Proje Adı"}),(0,n.jsx)("input",{name:"name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,required:!0,placeholder:"Projenin Adını Giriniz",className:"font-inter \n          mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ".concat(r.errors.name&&r.touched.name?"border-red-500 focus:border-red-500":"focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]")}),(0,n.jsx)("label",{htmlFor:"description",children:"Proje A\xe7ıklaması"}),(0,n.jsx)("input",{name:"description",value:r.values.description,onChange:r.handleChange,onBlur:r.handleBlur,required:!0,placeholder:"Proje A\xe7ıklamasını Giriniz",className:"font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ".concat(r.errors.description&&r.touched.description?"border-red-500 focus:border-red-500":"focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]")}),(0,n.jsx)("div",{className:"flex justify-center sm:justify-start",children:(0,n.jsx)("button",{type:"submit",disabled:!r.isValid,className:"text-center px-14 py-2 sm:hover:bg-customAccent bg-customLightPink text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400",children:"Proje Ekle"})})]})})};r.default=c},1356:function(e,r,t){"use strict";t.d(r,{B:function(){return s},L3:function(){return a},f2:function(){return i},fb:function(){return l},s4:function(){return u},wY:function(){return o}});var n=t(6310);let i=n.Ry().shape({email:n.Z_().email().required(),password:n.Z_().required().min(8)}),s=n.Ry().shape({name:n.Z_().required(),description:n.Z_().required()}),o=n.Ry().shape({teamName:n.Z_().required(),description:n.Z_().required(),photoURL:n.Z_().url().required()}),a=n.Ry().shape({name:n.Z_().required(),description:n.Z_().required(),date:n.Z_().required(),location:n.Z_().required(),teams:n.IX().of(n.Z_()).required()}),c=n.Z_().required(),l=n.Ry().shape({teams:n.IX().of(n.Z_()).required().min(1).max(2),0:c,1:c,2:c,3:c,4:c,5:c,6:n.Z_()}),u=[{title:"Kendİnİ Nasıl Bİrİ Olarak Tanımlarsın?",substring:""},{title:"İLGİLENDİĞİN ALANLAR NELERDİR?",substring:"(Makine \xd6ğrenmesi, Backend Geliştirme, Siber G\xfcvenlik ...)"},{title:"BİLDİĞİN VEYA \xd6ĞRENMEKTE OLDUĞUN TEKNOLOJİLER NELERDİR?",substring:"(C, Java, Python, Javascript, Linux ...)"},{title:"En SevdİĞİn İ\xe7ecek?",substring:""},{title:"En Sevdİğİn Atıştırmalık?",substring:""},{title:"SKYLAB Bİr Hamur Olsa Bu Hamurdan Ne Yapardın?",substring:""},{title:"Eklemek İstedİğİn Bir Şey Var Mı?",substring:""}]}},function(e){e.O(0,[299,310,175,17,744],function(){return e(e.s=2866)}),_N_E=e.O()}]);