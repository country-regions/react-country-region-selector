var ghpages = require('gh-pages');

ghpages.publish('apps/docs/build', function (err) {
  console.log(err);
});
