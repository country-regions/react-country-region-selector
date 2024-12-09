"use strict";(self.webpackChunkrcrs_docs=self.webpackChunkrcrs_docs||[]).push([[381],{3164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"demos/features/DisableFields","title":"Disable Fields","description":"The disabled prop can be used on either component.","source":"@site/docs/demos/features/DisableFields.mdx","sourceDirName":"demos/features","slug":"/demos/features/DisableFields","permalink":"/react-country-region-selector/demos/features/DisableFields","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Disable Fields","sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Region Blacklist","permalink":"/react-country-region-selector/demos/features/RegionBlacklist"},"next":{"title":"Arbitrary Attributes","permalink":"/react-country-region-selector/demos/features/ArbitraryAttributes"}}');var r=t(5723),o=t(6142),i=t(2155),a=t(7388);const l=()=>{const[e,n]=(0,i.useState)(""),[t,s]=(0,i.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.wP,{value:e,onChange:e=>n(e),disabled:!0}),(0,r.jsx)(a.mM,{country:e,value:t,onChange:e=>s(e),disabled:!0})]})},c={title:"Disable Fields",sidebar_position:12},d=void 0,u={},p=[];function b(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"disabled"})," prop can be used on either component."]}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import React, { useState } from 'react';\nimport { CountryDropdown, RegionDropdown } from 'react-country-region-selector';\n\nconst DisableFields = () => {\n  const [country, setCountry] = useState('');\n  const [region, setRegion] = useState('');\n\n  return (\n    <>\n      <CountryDropdown\n        value={country}\n        onChange={(val) => setCountry(val)}\n        // highlight-next-line\n        disabled={true}\n      />\n      <RegionDropdown\n        country={country}\n        value={region}\n        onChange={(val) => setRegion(val)}\n        // highlight-next-line\n        disabled={true}\n      />\n    </>\n  );\n};\n\nexport default DisableFields;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);