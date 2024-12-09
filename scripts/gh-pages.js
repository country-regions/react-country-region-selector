// to use, run `npm run build` from the root, then run `node scripts/gh-pages.js`. This deploys the docusaurus
// build to github pages here: https://country-regions.github.io/react-country-region-selector/
var ghpages = require('gh-pages');

ghpages.publish('apps/docs/build', function (err) {
  if (!err) {
    console.log('Github pages doc updated.');
  }
});
