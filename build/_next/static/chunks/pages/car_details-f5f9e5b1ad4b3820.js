(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{6282:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/car_details",function(){return t(4559)}])},2712:function(e,r,t){"use strict";var n=t(5893),s=(t(7294),t(9316)),a=t(5556);r.Z=function(e){var r=e.children;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(a.Z,{}),r,(0,n.jsx)(s.Z,{})]})}},9316:function(e,r,t){"use strict";var n=t(5893);t(7294);r.Z=function(){return(0,n.jsxs)("div",{className:" w-full mt-32 overflow-hidden",children:[(0,n.jsx)("p",{className:"text-center text-xs ",children:"\xa9 2022 College Projects. All rights reserved."}),(0,n.jsx)("div",{className:"bg-red w-screen h-[4px] mt-12"})]})}},5556:function(e,r,t){"use strict";var n=t(5893),s=t(7294),a=t(1163),i=t(3299);r.Z=function(){var e=(0,a.useRouter)(),r=(0,i.useSession)().data,t=(0,s.useCallback)((function(){e.push("/about_us")}),[e]),o=(0,s.useCallback)((function(){e.push("/contact_us")}),[e]),l=(0,s.useCallback)((function(){e.push("/")}),[e]),c=(0,s.useCallback)((function(){e.push("/auth/signin")}),[e]);return(0,n.jsxs)("nav",{className:" flex justify-between items-center w-full h-auto py-6",children:[(0,n.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,n.jsx)("img",{className:" w-[213.91px] h-[55px] object-contain",alt:"EaseAutoService Logo",src:"/logo/easeautoservice_logo.png"})}),(0,n.jsxs)("div",{className:" w-[448.21px] h-[55px] flex flex-row p-[0px_20px] box-border items-center justify-center gap-[70px]",children:[(0,n.jsx)("p",{className:"m-[0] relative text-xs font-hind-kochi text-black text-left inline-block cursor-pointer",onClick:t,children:"About Us"}),(0,n.jsx)("p",{className:"m-[0] relative text-xs font-hind-kochi text-black text-left inline-block cursor-pointer",onClick:o,children:"Contact"}),(0,n.jsx)("p",{className:"m-[0] relative text-xs font-hind-kochi text-black text-left inline-block",children:"Services"})]}),(0,n.jsx)("div",{className:"cursor-pointer [border:none] p-[0] bg-[transparent] w-[134.8px] h-[47px]",children:r?(0,n.jsx)("button",{className:"cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center flex items-center justify-center",onClick:function(){return(0,i.signOut)()},children:"Log Out"}):(0,n.jsx)("button",{className:"cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center flex items-center justify-center",onClick:c,children:"Sign In"})})]})}},4559:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(5893),s=t(2712),a=t(7568),i=t(1799),o=t(655),l=t(8945),c=t(2175),d=t(1163),u=t(7294),x=t(2284),p=function(){var e=(0,d.useRouter)(),r=(0,u.useState)(""),t=r[0],s=r[1];(0,u.useCallback)((function(){e.push("/car_owner")}),[e]);function p(){return p=(0,a.Z)((function(e){var r,t,n,i,c;function d(){return d=(0,a.Z)((function(e,r,t,n,a){return(0,o.__generator)(this,(function(i){switch(i.label){case 0:return[4,l.Z.post("http://127.0.0.1:5000/predict-car-price",{company:r,car_models:t,year:e,fuel_type:n,kilo_driven:a}).then((function(e){return console.log("machine learning "+e.data),console.log("machine learning "+e.data.result),s(e.data.result),e.data})).catch((function(e){console.log(" error: "),console.log(e)}))];case 1:return i.sent(),[2]}}))})),d.apply(this,arguments)}return(0,o.__generator)(this,(function(s){return r=e.registerYear,t=e.carBrand,n=e.carModel,i=e.carVariant,c=e.kilometerDriven,function(e,r,t,n,s){d.apply(this,arguments)}(r,t,n,i,c),[2]}))})),p.apply(this,arguments)}var m=(0,c.TA)({initialValues:{registerYear:"",carBrand:"",carModel:"",carVariant:"",kilometerDriven:""},validate:x.g_,onSubmit:function(e){return p.apply(this,arguments)}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsxs)("h2",{className:"text-[4.8rem] font-semibold font-inherit inline-block",children:[(0,n.jsx)("span",{children:"Fill in "}),(0,n.jsx)("span",{className:"text-brown ",children:"Car Details"})]})}),(0,n.jsx)("p",{className:"text-brown text-xs text-center",children:t}),(0,n.jsxs)("form",{className:"w-full h-auto mt-24",onSubmit:m.handleSubmit,children:[(0,n.jsxs)("div",{className:"flex flex-wrap w-full h-auto",children:[(0,n.jsxs)("div",{className:"flex flex-col w-1/2 h-auto pr-6 mb-8",children:[(0,n.jsx)("label",{className:"cursor-pointer text-xs font-medium font-poppins text-gray-500 text-left inline-block",htmlFor:"registrationYear",children:(0,n.jsxs)("p",{className:"text-xs font-medium font-poppins text-left inline-block",children:[(0,n.jsx)("span",{className:"text-gray-500",children:"Registration"}),(0,n.jsx)("span",{className:"text-indigo-100",children:"Year"})]})}),(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("input",(0,i.Z)({className:" border-2 border-solid ".concat(m.errors.registerYear&&m.touched.registerYear?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"text",id:"registrationYear",placeholder:"2022",autoFocus:!0},m.getFieldProps("registerYear"))),m.errors.registerYear&&m.touched.registerYear?(0,n.jsx)("span",{className:"text-brown text-xss",children:m.errors.registerYear}):(0,n.jsx)(n.Fragment,{})]})]}),(0,n.jsxs)("div",{className:"flex flex-col w-1/2 h-auto pr-6 mb-8",children:[(0,n.jsx)("label",{className:"cursor-pointer text-xs font-medium font-poppins text-gray-500 text-left inline-block",htmlFor:"carbrand",children:"Car Brand"}),(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("input",(0,i.Z)({className:" border-2 border-solid ".concat(m.errors.carBrand&&m.touched.carBrand?"border-brown":""," outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"text",id:"carbrand",placeholder:"Mercedes"},m.getFieldProps("carBrand"))),m.errors.carBrand&&m.touched.carBrand?(0,n.jsx)("span",{className:"text-brown text-xss",children:m.errors.carBrand}):(0,n.jsx)(n.Fragment,{})]})]}),(0,n.jsxs)("div",{className:"flex flex-col w-1/2 h-auto pr-6 mb-8",children:[(0,n.jsx)("label",{className:"cursor-pointer text-xs font-medium font-poppins text-gray-500 text-left inline-block",htmlFor:"carModel",children:"Car model"}),(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("input",(0,i.Z)({className:" border-2 border-solid ".concat(m.errors.carModel&&m.touched.carModel?"border-brown":""," outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"text",id:"carModel",placeholder:"Benz C-Class"},m.getFieldProps("carModel"))),m.errors.carModel&&m.touched.carModel?(0,n.jsx)("span",{className:"text-brown text-xss",children:m.errors.carModel}):(0,n.jsx)(n.Fragment,{})]})]}),(0,n.jsxs)("div",{className:"flex flex-col w-1/2 h-auto pr-6 mb-8",children:[(0,n.jsx)("label",{className:"cursor-pointer text-xs font-medium font-poppins text-gray-500 text-left inline-block",htmlFor:"carVariant",children:"Car Variant"}),(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("input",(0,i.Z)({className:" border-2 border-solid ".concat(m.errors.carVariant&&m.touched.carVariant?"border-brown":""," outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"text",placeholder:"C-220d",id:"carVariant"},m.getFieldProps("carVariant"))),m.errors.carVariant&&m.touched.carVariant?(0,n.jsx)("span",{className:"text-brown text-xss",children:m.errors.carVariant}):(0,n.jsx)(n.Fragment,{})]})]}),(0,n.jsxs)("div",{className:" flex flex-col w-1/2 h-auto pr-6 mb-8",children:[(0,n.jsx)("label",{className:"cursor-pointer text-xs font-medium font-poppins text-gray-500 text-left inline-block",htmlFor:"kilometerDriven",children:"Kilometer Driven"}),(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("input",(0,i.Z)({className:" border-2 border-solid ".concat(m.errors.kilometerDriven&&m.touched.kilometerDriven?"border-brown":""," outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"text",placeholder:"5000",id:"kilometerDriven"},m.getFieldProps("kilometerDriven"))),m.errors.kilometerDriven&&m.touched.kilometerDriven?(0,n.jsx)("span",{className:"text-brown text-xss",children:m.errors.kilometerDriven}):(0,n.jsx)(n.Fragment,{})]})]})]}),(0,n.jsx)("button",{className:"mt-8 cursor-pointer [border:none] p-[10px_35px] text-xs bg-indigo-200 text-white font-outfit text-center rounded-[20px] flex flex-row box-border items-center justify-center",type:"submit",children:"Next Step"})]})]})},m=function(){return(0,n.jsx)(s.Z,{children:(0,n.jsx)("div",{className:"relative bg-white w-full text-left text-black font-outfit mt-32",children:(0,n.jsx)(p,{})})})}},2284:function(e,r,t){"use strict";function n(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?e.password.length<8||e.password.length>20?r.password="Must be greater then 8 and less then 20 characters long":e.password.includes(" ")&&(r.password="Invalid Password"):r.password="Required",r}function s(e){var r={};return e.firstName||(r.firstName="Required"),e.lastName||(r.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.phoneNumber?(!/^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/i.test(e.phoneNumber)||e.phoneNumber.length>15)&&(r.phoneNumber="Invalid Phone Number "):r.phoneNumber="Required",e.password?e.password.length<8||e.password.length>20?r.password="Must be greater then 8 and less then 20 characters long":e.password.includes(" ")&&(r.password="Invalid Password"):r.password="Required",r}function a(e){var r={};return e.registerYear||(r.registerYear="Required"),e.carBrand||(r.carBrand="Required"),e.carModel||(r.carModel="Required"),e.carVariant||(r.carVariant="Required"),e.kilometerDriven||(r.kilometerDriven="Required"),r}function i(e){var r={};return e.name||(r.name="Required"),e.subject||(r.subject="Required"),e.email||(r.email="Required"),e.message||(r.message="Required"),r}t.d(r,{ZP:function(){return n},cX:function(){return i},g_:function(){return a},o5:function(){return s}})},1163:function(e,r,t){e.exports=t(387)}},function(e){e.O(0,[807,945,774,888,179],(function(){return r=6282,e(e.s=r);var r}));var r=e.O();_N_E=r}]);