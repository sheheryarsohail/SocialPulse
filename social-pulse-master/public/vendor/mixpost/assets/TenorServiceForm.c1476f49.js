import{r as f,o as u,k as _,w as e,b as s,a as o,d as r,O as d}from"./app.172b2de0.js";import{u as v}from"./useNotifications.fe41dfa4.js";import{_ as h}from"./Panel.52ba92d7.js";import{_ as x}from"./Input.c7303889.js";import{_ as g}from"./PrimaryButton.a873fded.js";import{_ as $}from"./HorizontalGroup.13d04729.js";import{_ as k}from"./Error.16549282.js";import{_ as y}from"./ReadDocHelp.7358a820.js";import{T}from"./Services.c80ef5dc.js";import"./PageHeader.5206c81b.js";import"./Tab.59fd00ff.js";import"./ProviderIcon.58df7758.js";const V={class:"flex items-center"},b={class:"mr-xs"},C=s("p",null,"With Tenor you can use GIF's directly in Mixpost.",-1),N=s("p",null,[s("a",{href:"https://console.cloud.google.com/",class:"link",target:"_blank"},"Create an App on Google Console"),r(". ")],-1),K={__name:"TenorServiceForm",props:{form:{required:!0,type:Object}},setup(a){const l=a,{notify:c}=v(),t=f({}),m=()=>{t.value={},d.put(route("mixpost.services.update",{service:"tenor"}),l.form,{preserveScroll:!0,onSuccess(){c("success","Tenor credentials have been saved")},onError:n=>{t.value=n}})};return(n,i)=>(u(),_(h,null,{title:e(()=>[s("div",V,[s("span",b,[o(T)]),r(" Tenor ")])]),description:e(()=>[C,N,o(y,{href:`${n.$page.props.mixpost.docs_link}/services/media/tenor`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[o($,{class:"mt-lg"},{title:e(()=>[r("API Key")]),footer:e(()=>[o(k,{message:t.value.client_id},null,8,["message"])]),default:e(()=>[o(x,{modelValue:a.form.client_id,"onUpdate:modelValue":i[0]||(i[0]=p=>a.form.client_id=p),error:t.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),o(g,{onClick:m,class:"mt-lg"},{default:e(()=>[r("Save")]),_:1})]),_:1}))}};export{K as default};
