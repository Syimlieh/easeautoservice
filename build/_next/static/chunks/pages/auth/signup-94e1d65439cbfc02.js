(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{1906:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signup",function(){return s(2867)}])},2867:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var r=s(5893),n=s(7294),a=s(1163),o=s(5675),l=s.n(o),i=function(){var e=(0,a.useRouter)(),t=(0,n.useCallback)((function(){e.push("/auth/signin")}),[e]);return(0,r.jsxs)("div",{className:"w-[50%]",children:[(0,r.jsxs)("h2",{className:"text-2xl font-semibold font-inherit text-gray-800",children:[(0,r.jsx)("span",{children:"Welcome to"}),(0,r.jsx)("span",{className:"text-brown",children:" EasyAuto"})]}),(0,r.jsxs)("div",{className:"mt-8 ",children:[(0,r.jsx)("p",{className:"font-outfit text-2xs leading-10",children:"If you already have an account"}),(0,r.jsxs)("p",{className:"font-outfit text-2xs cursor-pointer leading-10",onClick:t,children:[(0,r.jsx)("span",{children:"You can"}),(0,r.jsx)("span",{className:"text-indigo-200",children:" SingIn Here !"})]})]}),(0,r.jsx)("div",{className:"mt-8 text-center",children:(0,r.jsx)(l(),{src:"/saly141@2x.png",alt:"easeAuto Sign up illustration",width:200,loading:"lazy",height:300,objectFit:"cover"})})]})},c=s(7568),u=s(1799),d=s(655),x=s(2175),p=s(2284),m=s(8945);function h(e,t,s,r,n,a){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)((function(e,t,s,r,n,a){return(0,d.__generator)(this,(function(o){switch(o.label){case 0:return[4,m.Z.post("".concat("http://localhost:3000/api","/auth/signup"),{firstName:e,lastName:t,email:s,phoneNumber:r,password:n}).then((function(e){return a.push("/auth/signin"),e})).catch((function(e){return console.log("register error: "+e.response.data.message),e}))];case 1:return o.sent(),[2]}}))}))).apply(this,arguments)}var b=s(1973),N=function(){var e=(0,n.useState)(),t=e[0],s=e[1],o=(0,n.useState)(),i=o[0],m=(o[1],(0,a.useRouter)());function f(){return(f=(0,c.Z)((function(e){var t,r,n,a,o,l;return(0,d.__generator)(this,(function(i){switch(i.label){case 0:return t=e.firstName,r=e.lastName,n=e.email,a=e.phoneNumber,o=e.password,s(!0),[4,h(t,r,n,a,o,m)];case 1:return l=i.sent(),console.log(l),s(!1),[2]}}))}))).apply(this,arguments)}var N=(0,x.TA)({initialValues:{firstName:"",lastName:"",email:"",phoneNumber:"",password:"",confirmPassword:""},validate:p.o5,onSubmit:function(e){return f.apply(this,arguments)}});return(0,r.jsxs)("div",{className:"w-[40%]",children:[(0,r.jsx)("h2",{className:"text-[4.8rem] font-semibold font-inherit text-brown",children:"Sign Up"}),(0,r.jsxs)("form",{className:"relative h-auto mt-24",onSubmit:N.handleSubmit,children:[i&&(0,r.jsx)("p",{className:"text-brown text-xs text-center mb-4 absolute -top-12 left-1/2 transform -translate-x-1/2",children:i}),(0,r.jsxs)("div",{className:" relative mb-8",children:[(0,r.jsx)("input",(0,u.Z)({type:"firstName",className:" border-2 border-solid ".concat(N.errors.firstName&&N.touched.firstName?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),name:"firstName",placeholder:"Enter firstName",autoFocus:!0},N.getFieldProps("firstName"))),N.errors.firstName&&N.touched.firstName?(0,r.jsx)("span",{className:"text-brown text-xss",children:N.errors.firstName}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)("div",{className:" relative mb-8",children:[(0,r.jsx)("input",(0,u.Z)({type:"lastName",className:" border-2 border-solid ".concat(N.errors.lastName&&N.touched.lastName?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),placeholder:"Enter lastName"},N.getFieldProps("lastName"))),N.errors.lastName&&N.touched.lastName?(0,r.jsx)("span",{className:"text-brown text-xss",children:N.errors.lastName}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)("div",{className:" relative mb-8",children:[(0,r.jsx)("input",(0,u.Z)({type:"email",className:" border-2 border-solid ".concat(N.errors.email&&N.touched.email?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),placeholder:"Enter Email"},N.getFieldProps("email"))),N.errors.email&&N.touched.email?(0,r.jsx)("span",{className:"text-brown text-xss",children:N.errors.email}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)("div",{className:" w-full relative mb-8",children:[(0,r.jsx)("input",(0,u.Z)({className:" border-2 border-solid ".concat(N.errors.phoneNumber&&N.touched.phoneNumber?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"tel",placeholder:"Phone Number"},N.getFieldProps("phoneNumber"))),N.errors.phoneNumber&&N.touched.phoneNumber?(0,r.jsx)("span",{className:"text-brown text-xss",children:N.errors.phoneNumber}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)("div",{className:" w-full relative mb-8",children:[(0,r.jsx)("input",(0,u.Z)({className:" border-2 border-solid ".concat(N.errors.password&&N.touched.password?"border-brown":"","  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"),type:"password",placeholder:"Password",minLength:8},N.getFieldProps("password"))),N.errors.password&&N.touched.password?(0,r.jsx)("span",{className:"text-brown text-xss",children:N.errors.password}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsx)("button",{className:"mt-8 cursor-pointer h-20 [border:none] rounded-[8px] w-full text-xs bg-indigo-200 text-white font-outfit text-center flex box-border items-center justify-center",type:"submit",children:t?(0,r.jsx)("span",{className:"-ml-16",children:(0,r.jsx)(b.Z,{})}):"REGISTER"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-12 items-center",children:[(0,r.jsx)("h5",{className:"mt-24 text-base font-normal font-inherit text-gray-200 inline-block",children:"Or continue with"}),(0,r.jsxs)("button",{className:"cursor-pointer font-poppins [border:1px_solid_#b5b5b5] px-0 py-2 w-[28rem] bg-gray-900 rounded-[9px] flex items-center justify-center gap-4",children:[(0,r.jsx)(l(),{src:"/google1@2x.png",alt:"google auth icon",width:50,height:50,objectFit:"cover"}),(0,r.jsx)("span",{className:"font-medium inline-block",children:"Sing up with Google"})]})]})]})},g=s(9316),j=function(){var e=(0,a.useRouter)(),t=(0,n.useCallback)((function(){e.push("/")}),[e]);return(0,r.jsxs)("div",{className:"container py-6",children:[(0,r.jsx)("img",{onClick:t,className:" w-[213.91px] h-[55px] cursor-pointer object-contain",alt:"EaseAutoService Logo",src:"/logo/easeautoservice_logo.png"}),(0,r.jsx)("div",{className:" relative bg-white w-full text-left text-black font-outfit mt-32",children:(0,r.jsxs)("div",{className:"flex w-full ",children:[(0,r.jsx)(i,{}),(0,r.jsx)(N,{})]})}),(0,r.jsx)(g.Z,{})]})},w=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(j,{})})}}},function(e){e.O(0,[873,807,945,571,774,888,179],(function(){return t=1906,e(e.s=t);var t}));var t=e.O();_N_E=t}]);