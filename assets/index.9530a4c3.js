import{H as e,aA as a,P as r,Q as s,T as o,W as t,X as c,_ as d,af as n,$ as p}from"./index.0a866c7e.js";import"./editor.worker.3eb73e22.js";var m=e({name:"NotFound",setup(){const e=a().query;return{errCode:e.errCode||"404",pathname:e.pathname||"",message:e.message||""}}});const i=p();r("data-v-53e65a8a");const l={class:"datav-error"},g=c("div",{class:"error-img"},null,-1),v={class:"back-home"},f={class:"error-text"},h={class:"error-info"},k={key:0,class:"info-p"},u={key:1,class:"info-p"},$={class:"go-back",href:"/"};s();const b=i(((e,a,r,s,p,m)=>(o(),t("div",l,[g,c("div",v,[c("div",f,d(e.$t("error.page.code_"+e.errCode)),1),c("div",h,[e.pathname?(o(),t("p",k,d(e.$t("error.page.errorUrl"))+": "+d(e.pathname),1)):n("",!0),e.message?(o(),t("p",u,d(e.$t("error.page.message"))+": "+d(e.message),1)):n("",!0)]),c("a",$,d(e.$t("error.page.back")),1)])]))));m.render=b,m.__scopeId="data-v-53e65a8a";export default m;
