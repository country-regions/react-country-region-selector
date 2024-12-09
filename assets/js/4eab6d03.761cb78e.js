"use strict";(self.webpackChunkrcrs_docs=self.webpackChunkrcrs_docs||[]).push([[450],{5746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>x,frontMatter:()=>g,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"demos/integrations/MaterialUI","title":"Material UI","description":"This shows an integration with Material UI. Note the","source":"@site/docs/demos/integrations/MaterialUI.mdx","sourceDirName":"demos/integrations","slug":"/demos/integrations/MaterialUI","permalink":"/react-country-region-selector/demos/integrations/MaterialUI","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Material UI","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Integrations","permalink":"/react-country-region-selector/demos/integrations/"},"next":{"title":"Fluent UI","permalink":"/react-country-region-selector/demos/integrations/FluentUI"}}');var o=t(5723),i=t(6142),l=t(2155),a=t(5897),s=t(9745),u=t(3023),c=t(3643),d=t(4314),m=t(7388);const p=e=>{let{options:n,customProps:t,...r}=e;return(0,o.jsx)(c.A,{...r,...t,children:n.map((e=>{let{label:n,value:t,key:r}=e;return(0,o.jsx)(s.A,{value:t,children:n},r)}))})},h=()=>{const[e,n]=l.useState(""),[t,r]=l.useState("");return(0,o.jsxs)(d.A,{container:!0,spacing:2,children:[(0,o.jsx)(d.A,{size:6,children:(0,o.jsxs)(u.A,{fullWidth:!0,children:[(0,o.jsx)(a.A,{id:"label-mui-country-field",children:"Country"}),(0,o.jsx)(m.wP,{value:e,id:"mui-country-field",onChange:e=>{n(e),r("")},customRender:p,customProps:{labelId:"label-mui-country-field",label:"Country"}})]})}),(0,o.jsx)(d.A,{size:6,children:(0,o.jsxs)(u.A,{fullWidth:!0,children:[(0,o.jsx)(a.A,{id:"label-mui-region-field",children:"Region"}),(0,o.jsx)(m.mM,{country:e,value:t,id:"mui-region-field",onChange:e=>r(e),disableWhenEmpty:!0,customRender:p,customProps:{labelId:"label-mui-region-field",label:"Region"}})]})})]})},g={title:"Material UI",sidebar_position:1},f=void 0,b={},y=[];function I(e){const n={a:"a",code:"code",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This shows an integration with ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/getting-started/",children:"Material UI"}),". Note the\n",(0,o.jsx)(n.code,{children:"customRender"})," method and how its handling the actual rendering of the dropdowns."]}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import * as React from 'react';\nimport InputLabel from '@mui/material/InputLabel';\nimport MenuItem from '@mui/material/MenuItem';\nimport FormControl from '@mui/material/FormControl';\nimport Select from '@mui/material/Select';\nimport Grid from '@mui/material/Grid2';\nimport { CountryDropdown, RegionDropdown } from 'react-country-region-selector';\n\nconst customRender = ({ options, customProps, ...selectProps }) => (\n  <Select {...selectProps} {...customProps}>\n    {options.map(({ label, value, key }) => (\n      <MenuItem value={value} key={key}>\n        {label}\n      </MenuItem>\n    ))}\n  </Select>\n);\n\nconst MaterialUISelect = () => {\n  const [country, setCountry] = React.useState('');\n  const [region, setRegion] = React.useState('');\n\n  return (\n    <Grid container spacing={2}>\n      <Grid size={6}>\n        <FormControl fullWidth>\n          <InputLabel id=\"label-mui-country-field\">Country</InputLabel>\n          <CountryDropdown\n            value={country}\n            id=\"mui-country-field\"\n            onChange={(val) => {\n              setCountry(val);\n              setRegion('');\n            }}\n            customRender={customRender}\n            customProps={{\n              labelId: 'label-mui-country-field',\n              label: 'Country',\n            }}\n          />\n        </FormControl>\n      </Grid>\n      <Grid size={6}>\n        <FormControl fullWidth>\n          <InputLabel id=\"label-mui-region-field\">Region</InputLabel>\n          <RegionDropdown\n            country={country}\n            value={region}\n            id=\"mui-region-field\"\n            onChange={(val) => setRegion(val)}\n            disableWhenEmpty={true}\n            customRender={customRender}\n            customProps={{\n              labelId: 'label-mui-region-field',\n              label: 'Region',\n            }}\n          />\n        </FormControl>\n      </Grid>\n    </Grid>\n  );\n};\n\nexport default MaterialUISelect;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(I,{...e})}):I(e)}}}]);