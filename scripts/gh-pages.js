// to use, run `npm run update-gh-pages` in the root folder.
var ghpages = require('gh-pages');

ghpages.publish('apps/docs/build', function (err) {
  if (!err) {
    console.log('Github pages doc updated.');
  }
});
