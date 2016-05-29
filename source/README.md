## React-Country-Region-Selector

Yikes, when did web development get so complex?! Let me explain all this.

This folder contains the raw source code for the `react-country-region-selector` component. If you want to just _use_
the component, ignore all this: you'll want the code in the `/dist` (distribution) folder.


### Content

- `react-crs.jsx`: the main code file. It's written in ES6 with JSX. 
- `data.js`: the country-region data used for the most recent build of the script. This is a commonJS module that 
returns whatever country data is pertinent.


### How it works

- The content in this folder are built using grunt to generate the files in `dist/`.
- The raw country-region data is pulled from a separate repo: https://github.com/benkeen/country-region-data. The 
reason it's in a separate location is to allow it being easily re-used for other applications / code, such as the plain
vanilla (non-React) version of this script: https://github.com/benkeen/country-region-selector. The grunt process 
pulls that data into a /source/data.js file which is then references by react-crs-jsx. The reason for this extra step (i.e. 
rather than just reference the data directly from the node_modules location) is to allow custom builds. If you run 
the `grunt build --countries="XXX"` command (see main readme), it'll generate a custom data.js file in the source folder
containing the subset of the countries you want. This'll keep the actual JS doled up to the client small.
