import"./entry.b96d5223.js";import{a as p,w as r,C as _,_ as c,$ as u,K as m,u as g,b as v}from"./swiper-vue.5de745df.js";const d={class:"pagination mb-5"},V={__name:"pagination",props:{totalPages:{default:1}},emits:{change:a=>a},setup(a,{emit:o}){const s=a,e=p(1);return r(()=>e.value,t=>{o("change",t)}),(t,n)=>{const l=_("v-pagination");return c(),u("div",d,[m(l,{"active-color":"primary",modelValue:g(e),"onUpdate:modelValue":n[0]||(n[0]=i=>v(e)?e.value=i:null),length:s.totalPages,"total-visible":3},null,8,["modelValue","length"])])}}};export{V as _};
