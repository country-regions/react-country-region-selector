### Notes for me

Always bloody forget this. 

```
gulp watch:examples
gulp publish:examples -- updates github pages
```

To see the example, boot up a server and just view the dist files, e.g.
`http://localhost:8888/react-country-region-selector/examples/dist/`

Note: there's an issue with the synchronous gulp process not being sync. It should process the custom build file 
first (i.e. generate the src/source-data.js file first) then package it up. Until this is fixed, do it manually:

```
gulp customBuild 
gulp build
```
