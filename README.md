## Country-Region-Selector

A feature you often need in forms is a connected country and region dropdown, where the region field gets automatically 
updated when the user selects a country. It's very easy to code this of course, but it's a pain having to track down 
all the raw country-region data.

This script does all the legwork for you. It lets you add this feature to your form without having to write any code or 
spend mind-numbing hours on Wikipedia downloading and formatting the data. I did that. It wasn't pretty.

The script comes in two flavours:
- [standalone script](https://github.com/benkeen/country-region-selector/tree/master/dist/crs.min.js) (no dependencies, just plain JS)
- a [jQuery-dependent version](https://github.com/benkeen/country-region-selector/tree/master/dist/jquery.crs.min.js) 
(slightly smaller)

The reason the files are so large (60K or more) is that they contain all the country and region strings. If you know 
you're only going to need a small subset of all countries, you may want to generate a custom build containing only that 
info. That will substantially reduce the file size. See the Custom Builds section at the bottom of this page for more info.


### Features

- Lets you customize the default "Please select" field for each country/region with whatever language you want.
- Lets you specify a default value for each field.
- Lets you customize the appearance and value of the country field ("Canada" or "CA") - they can be different, if desired
(e.g. 2 char code for saving to database; full name for displaying purposes).
- Lets you have as many country-region-mapped fields as you need in your page.
- The standalone version has no dependencies on other any libs (jQuery etc) and you can include the JS file anywhere you want
(head/foot).
- Works with dynamically inserted DOM content.

### Example

Check out the following page for an example of the various ways it can be configured and used.
[http://benkeen.github.io/country-region-selector/](http://benkeen.github.io/country-region-selector/)


### Who maintains the list? 

Me, you - everyone! If you spot anything wonky for a particular country - out of date, incorrect or missing regions,
a pull request is very welcome. As of 0.3.0 the source data is found in a separate repo so it can be used by anyone: 
https://github.com/benkeen/country-region-data

### How to Use

It's very easy.

1. Include the `crs.min.js` file in your webpage.
2. Add two `<select>` fields in the appropriate locations in your form.
3. Give the country field a class of `crs-country`.
4. Now we need to map each country field to its corresponding region field so the script knows what to update when
a country is selected. Add an attribute to the country dropdown: `data-region-id="ABC"` where ABC is any string. Now
Give the region dropdown an **id** of "ABC".
5. That's it! You're done.

But here's a few more tips for further configuration.

#### Default "Please select" Values

If you want to add default "Please select" options to either the country or region fields, just go ahead and add it
directly in the markup. The script will **append** the country and region `<option>` fields - not overwrite them.

#### Adding default values for each field

If your form is used for people returning to it (e.g. "Edit Contact Info" or whatever), you'll need the country and
region fields to be prefilled with the appropriate value on page load. To do that, just add a `data-default-value=""`
attribute to each element containing the country / region value last saved. Note: the region value will only ever be
populated if the country field is as well.

### List of data-* attributes

This lists all the available data-* attributes that you can add to the country/region fields to customize the appearance
and behaviour.

##### country fields

- `data-region-id` - required. This should contain the ID of the region field that it's being mapped to.
- `data-default-option` - optional. Default: "Select country". This determines the default, blank option display value.
- `data-show-default-option` - optional. True by default. This shows the "Select Country" default option (or whatever
 string you've set). Set it to "false" to turn it off.
- `data-default-value` - optional. The default selected value in the country dropdown (e.g. "Canada")
- `data-value="shortcode"` - optional. The default behaviour is for the value attributes of the country dropdown options
to be the full country name. If you'd rather use a 2-char code, add this attribute. Note: the 2-char codes are **mostly**
ISO standard 2-char country codes, but not all. They are, however, unique across the dataset. N.B. This setting used 
to be named `2-char`, but was renamed for consistency with the new region option. For backward compatibility `2-char` 
still works.
- `data-whitelist` - optional. A comma-delimited lists of country shortcodes that you want to appear in the dropdown. 
Anything not specified here will be omitted. Take look here for the country list:
https://github.com/benkeen/country-region-selector/blob/master/source/data.json - you'll want to use the second index 
of the array, e.g. "AF" for Afghanistan, or "DE" for Germany. Note: if you're worried about file sizes, you can also 
choose to generate a custom build of the script that only contains those countries you need. This would replace the 
need for this option. See the Custom Builds section below.
- `data-blacklist` - optional. Like the data-whitelist, only a blacklist! This lets you display all countries *except*
the countries that you specify here. If you supply both white and blacklists, the blacklist setting is ignored. Just enter 
a comma delimited list of country shortcodes. Again, take look here for the country list + their shortcodes: 
https://github.com/benkeen/country-region-selector/blob/master/source/data.json

##### region fields
- `data-blank-option` - before the user selects a country, there's a single <option> displayed which by default is the
"-" character.
- `data-default-option` - optional. Default: "Select region". This determines the default, blank option display value
that shows up after a user has selected a country.
- `data-show-default-option` - optional. True by default. This shows the "Select Region" default option (or whatever
string you've set). Set it to "false" to turn it off.
- `data-default-value` - optional. The default selected value in the region dropdown (e.g. "British Columbia", or "BC" if using the data-value="shortcode" option)
- `data-value="shortcode"` - optional. By default, region dropdowns will display the full region name. This option lets 
you show a 2-code abbreviation instead. **Please note that all the abbreviations have not yet been added. See
[this thread](https://github.com/benkeen/country-region-selector/issues/2) that explains how the structure works.** If 
a region field is set to 2-char and a user user selects a country that doesn't have a region, it will show the full
country name instead.


### Working with dynamic HTML 

In case your page is being generated on the fly, you'll need to manually re-initialize the script after the new DOM 
content is inserted. 

##### AMD example

With AMD (requireJS), just include the lib as you usually would. If you inspect the return value, you'll see it has a 
single `init` function. Just call that method whenever you need it (i.e. after new DOM content is inserted into your
page).

```javascript
define(['/path/to/crs.min'], function(crs) {
    // when you're ready... 
    crs.init();
});
```
##### Plain vanilla JS example

If you're just including the crs.min.js in a `<script>` tag in your page, it'll automatically expose a `crs` property
on your global `window` object. Then you can call `window.crs.init()` whenever your new page content has been dynamically
inserted. That will initialize the newly inserted country-region fields. 


### Custom Builds

As of 0.2.4, you can generate a custom version of the library that contains only those countries you need. This can 
substantially reduce the overall file size, if that's important to you. 
 
To do this, follow the instructions in the following section to get your dev environment set up, then instead of the 
last step, run: `grunt customBuild --countries="Canada,United States"`

Just add whatever countries you want to include. To find the exact country names, look at the `source/data.json` file. 

This will generate new files in the `/dist` folder that you can use. 

If the country name you're targeting contains a comma, just escape with with a single backslash, like so: 
`grunt customBuild --countries="Côte d'Ivoire\, Republic of, Congo\, Republic of the (Brazzaville)"`


### Notes for Developers

If you want to edit the source code, go right ahead (pull requests welcome, of course!). The unminified source
is found in the `/source` folder. To re-generate the minified version, just run the Grunt task. In case you're not
familiar with Grunt, here's how you get that hooked up.

1. Install [Node](http://nodejs.org) on your computer.
2. Clone this repository to your local computer.
3. In the command line, navigate to to the root of the cloned repo (i.e. the folder with this README file in it).
4. Type `npm install` to download all necessary require modules.
5. Type `npm install -g grunt-cli` to install the Grunt command line tool to run properly.
6. Type `grunt generate`

That will then re-generate the minified files in your ./dist folder.

### Changelog

- `0.3.2` - May 15, 2016. More country shortcodes added - thanks [Ellen Hutchings](http://github.com/ellenhutchings)! Bug fixes
- `0.3.1` - Apr 30, 2016. Loads of new country shortcodes added - thanks [Ellen Hutchings](http://github.com/ellenhutchings)!
- `0.3.0` - Apr 28, 2016. Turkey region fix; source data moved to separate repo: https://github.com/benkeen/country-region-data
- `0.2.4` - Feb 11, 2016. South Africa data updated. Custom build option added to let you generate smaller JS files
containing only the country data you need.
- `0.2.3` - Feb 11, 2016. Indonesia, Mexico data updated.
- `0.2.2` - Oct 22, 2015. Update regions of Spain to match postal regions.
- `0.2.1` - Oct 20, 2015. Bug fix with Norwegian JS data.
- `0.2.0` - Oct 18, 2015. `data-whitelist` and `data-blacklist` options added to Country dropdowns. Support for 
`data-value="shortcode"` option for Regions dropdowns. 
- `0.1.9` - Aug 27, 2015. Option added to let you omit default option; NZ regions updated.
- `0.1.8` - June 19, 2015. Fix for Norway regions.
- `0.1.7` - May 2, 2015. Updated UK counties.
- `0.1.6` - Apr 10, 2015. Russian regions updated by @Konair0s
- `0.1.5` - Apr 5, 2015. Bug fix.
- `0.1.4` - Apr 4, 2015. Lib now wrapped in UMD (accessible with RequireJS, CommonJS, Node); custom init() function exposed
- `0.1.3` - Feb 10, 2015. Updated Ukraine regions.
- `0.1.2` - Nov 1, 2014. Fix for typo in UK counties list.
- `0.1.1` - April 24, 2014. Updated country list for ISO 3166 countries and short codes
- `0.1.0` - March 27, 2014. Initial version

### License

MIT.
