"use strict";(self.webpackChunkrcrs_docs=self.webpackChunkrcrs_docs||[]).push([[629],{8405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"demos/features/RegionWhitelist","title":"Region Whitelist","description":"The whitelist prop on the RegionDropdown component limits the listed regions to those that you specify. The","source":"@site/docs/demos/features/RegionWhitelist.mdx","sourceDirName":"demos/features","slug":"/demos/features/RegionWhitelist","permalink":"/react-country-region-selector/demos/features/RegionWhitelist","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Region Whitelist","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Country Blacklist","permalink":"/react-country-region-selector/demos/features/CountryBlacklist"},"next":{"title":"Region Blacklist","permalink":"/react-country-region-selector/demos/features/RegionBlacklist"}}');var s=n(5723),i=n(6142),r=n(2155),a=n(7388);const l=()=>{const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.wP,{value:e,onChange:e=>t(e),whitelist:["CA","US"]}),(0,s.jsx)(a.mM,{country:e,value:n,onChange:e=>o(e),whitelist:{CA:["AB","BC"],US:["WA","TX"]}})]})},c={title:"Region Whitelist",sidebar_position:10},h=void 0,u={},d=[];function g(e){const t={a:"a",code:"code",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"whitelist"})," prop on the ",(0,s.jsx)(t.code,{children:"RegionDropdown"})," component limits the listed regions to those that you specify. The\nvalues are found in the ",(0,s.jsx)(t.code,{children:"countryShortCode"})," value in the ",(0,s.jsx)(t.a,{href:"https://github.com/country-regions/country-region-data/blob/master/data.json",children:"source data package"}),".\nNote the order will always be alphabetical."]}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import React, { useState } from 'react';\nimport { CountryDropdown, RegionDropdown } from 'react-country-region-selector';\n\nconst RegionWhitelist = () => {\n  const [country, setCountry] = useState('');\n  const [region, setRegion] = useState('');\n\n  return (\n    <>\n      <CountryDropdown\n        value={country}\n        onChange={(val) => setCountry(val)}\n        whitelist={['CA', 'US']}\n      />\n      <RegionDropdown\n        country={country}\n        value={region}\n        onChange={(val) => setRegion(val)}\n        // highlight-start\n        whitelist={{\n          CA: ['AB', 'BC'],\n          US: ['WA', 'TX'],\n        }}\n        // highlight-end\n      />\n    </>\n  );\n};\n\nexport default RegionWhitelist;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);