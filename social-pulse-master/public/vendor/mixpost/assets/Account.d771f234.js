import{u as g,_ as v}from"./ProviderIcon.58df7758.js";import{E as h}from"./ExclamationCircle.962a476a.js";import{h as r,D as b,o as l,c as n,b as t,n as a,u as w,i as y,a as i,f as x}from"./app.172b2de0.js";const C={class:"flex items-center justify-center"},_=["src"],j={key:0,class:"flex items-center justify-center rounded-full absolute top-0 -ml-12 bg-orange-500 text-white"},E={__name:"Account",props:{imgUrl:{type:[String,null],required:!0},provider:{type:String,required:!0},active:{type:Boolean,default:!1},size:{type:String,default:"md"},warningMessage:{type:String,default:""}},setup(e){const s=e,{borderClasses:o,activeBgClasses:c}=g(s.provider),u=r(()=>s.active?o.value:"border-stone-600"),d=r(()=>({md:"w-10 h-10",lg:"w-16 h-16"})[s.size]),m=r(()=>({md:"w-5 h-5 -mb-11 -mr-5",lg:"w-8 h-8 -mb-16 -mr-9"})[s.size]),f=r(()=>({md:"!w-4 !h-4"})[s.size]);return(z,B)=>{const p=b("tooltip");return l(),n("span",C,[t("span",{class:a([u.value,"flex items-center justify-center relative border-2 p-1 rounded-full bg-white"])},[t("span",{class:a([[w(c),d.value,{grayscale:!e.active}],"inline-flex justify-center items-center flex-shrink-0 rounded-full"])},[t("img",{src:e.imgUrl,class:"object-cover w-full h-full rounded-full",alt:""},null,8,_)],2),e.warningMessage?y((l(),n("span",j,[i(h,{class:a(f.value)},null,8,["class"])])),[[p,e.warningMessage]]):x("",!0),t("span",{class:a([[m.value,{grayscale:!e.active}],"flex items-center justify-center absolute bg-white p-md rounded-full"])},[t("span",null,[i(v,{provider:s.provider},null,8,["provider"])])],2)],2)])}}};export{E as _};
