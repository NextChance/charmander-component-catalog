(function(t,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t["charmander-component-library"]={},t.Vue))})(this,function(t,e){"use strict";var f=(()=>`.ch-badge{width:1.25rem;height:1.25rem;padding:var(--ch-badge-spacing, .5rem);border-radius:50%;color:var(--color-content-inverse, white);background-color:var(--color-primary-high, #f97070);display:flex;align-items:center;justify-content:center}
`)();const a={class:"ch-badge"},i={class:"value"},d=e.defineComponent({__name:"ChBadge",props:{value:null},setup(o){const n=o,r=e.computed(()=>n.value<10?`0${n.value}`:n.value);return(c,s)=>(e.openBlock(),e.createElementBlock("div",a,[e.createElementVNode("span",i,e.toDisplayString(e.unref(r)),1)]))}});var y=(()=>`.ch-dummy{color:red}
`)(),_=(o,n)=>{const r=o.__vccOpts||o;for(const[c,s]of n)r[c]=s;return r};const l={},u={class:"ch-dummy"},m=[e.createElementVNode("span",{class:"value"},"5",-1)];function h(o,n){return e.openBlock(),e.createElementBlock("div",u,m)}var p=_(l,[["render",h]]);t.ChBadge=d,t.ChDummy=p,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});