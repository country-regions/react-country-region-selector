"use strict";(self.webpackChunkrcrs_docs=self.webpackChunkrcrs_docs||[]).push([[952],{4956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"demos/features/CustomDefaultOptionLabels","title":"Custom Default Option Labels","description":"In case you want to localize the strings or just change the defaults, take a look at the following props:","source":"@site/docs/demos/features/CustomDefaultOptionLabels.mdx","sourceDirName":"demos/features","slug":"/demos/features/CustomDefaultOptionLabels","permalink":"/react-country-region-selector/demos/features/CustomDefaultOptionLabels","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Custom Default Option Labels","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Disable Empty Region Field","permalink":"/react-country-region-selector/demos/features/DisableEmptyRegionField"},"next":{"title":"Name, ID, Class attributes","permalink":"/react-country-region-selector/demos/features/NameIdClassAttrs"}}');var s=n(5723),a=n(6142),r=n(2155),l=n(7388);const i=()=>{const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.wP,{value:e,onChange:e=>t(e),defaultOptionLabel:"Go ahead, select a country!"}),(0,s.jsx)(l.mM,{country:e,value:n,onChange:e=>o(e),blankOptionLabel:"No country selected...",defaultOptionLabel:"Now select a region, pal"})]})},u={title:"Custom Default Option Labels",sidebar_position:4},c=void 0,d={},p=[];function h(e){const t={code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In case you want to localize the strings or just change the defaults, take a look at the following props:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"defaultOptionLabel"})," (both RegionDropdown and CountryDropdown)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"blankOptionLabel"}),' (RegionDropdown only). By default it just shows a "-" character when no country has been selected,\nbut this prop allows it to be customized.']}),"\n"]}),"\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import React, { useState } from 'react';\nimport { CountryDropdown, RegionDropdown } from 'react-country-region-selector';\n\nconst CustomDefaultOptionLabels = () => {\n  const [country, setCountry] = useState('');\n  const [region, setRegion] = useState('');\n\n  return (\n    <>\n      <CountryDropdown\n        value={country}\n        onChange={(val) => setCountry(val)}\n        // highlight-next-line\n        defaultOptionLabel=\"Go ahead, select a country!\"\n      />\n      <RegionDropdown\n        country={country}\n        value={region}\n        onChange={(val) => setRegion(val)}\n        // highlight-next-line\n        blankOptionLabel=\"No country selected...\"\n        // highlight-next-line\n        defaultOptionLabel=\"Now select a region, pal\"\n      />\n    </>\n  );\n};\n\nexport default CustomDefaultOptionLabels;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);