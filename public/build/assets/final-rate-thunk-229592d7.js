import{s as n}from"./applicant-final-service-912b1e89.js";import{w as i}from"./app-0df8c9ad.js";import{a as r}from"./applicant-record-service-adbaa099.js";function p(t){return async function(a,e){const s=await r(t);console.log("result",s.status),a(i.actions.setApplicant(s.status))}}function u(t){return async function(a,e){await n(t)}}export{p as g,u as s};