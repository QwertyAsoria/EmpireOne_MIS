import{s as n}from"./applicant-final-service-08cd9aeb.js";import{w as i}from"./app-62b5ebaa.js";import{a as r}from"./applicant-record-service-b92bdd46.js";function p(t){return async function(a,e){const s=await r(t);console.log("result",s.status),a(i.actions.setApplicant(s.status))}}function u(t){return async function(a,e){await n(t)}}export{p as g,u as s};