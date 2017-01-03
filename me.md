### Notes for me

Always bloody forget this. 

```
gulp watch:examples
gulp publish:examples -- updates github pages
```

Note: there's an issue with the synchronous gulp process not being sync. It should process the custom build file 
first (i.e. generate the src/source-data.js file first) then package it up. Until this is fixed, do it manually:

```
gulp customBuild 
gulp build
```
