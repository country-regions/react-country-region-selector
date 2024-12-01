## Changelog

- `4.0.0-alpha` - Dec 1, 2024 - **In development**
- `3.7.0` - Nov 21, 2024
  - Upgrade country-region-data to 3.1.0.
- `3.6.1` - Aug 3, 2022
  - Dependency version fix.
- `3.6.0` - Aug 2, 2022
  - React 18 support added.
- `3.5.0` - Jul 30, 2022
  - Upgrade country-region-data to 2.6.0.
- `3.4.0` - Oct 24, 2021
  - Typings fix.
  - Upgrade country-region-data to 1.11.0.
- `3.3.0` - Aug 17, 2021
  - Upgrade country-region-data to 1.10.0.
- `3.2.0` - Jul 30, 2021
  - Upgrade country-region-data to 1.9.0.
- `3.1.0` - May 11, 2021
  - React 17 support added, thanks [madhums](https://github.com/madhums)!
- `3.0.2` - Jan 18, 2021
  - typings file fix.
- `3.0.1` - Sep 26, 2020
  - typings file fix.
- `3.0.0` - Sep 8, 2020
  - blacklist option added for the Region component (thanks [Mitch Rickman](https://github.com/mitch-rickman)!)
  - typings fix and onBlur callback standardized with value passed as first param, with full event as second. This
    is a _breaking change_. Thanks [Vinod Ramakrishnan](https://github.com/vinod-rp)!
- `2.1.0` - Mar 28, 2020
  - country-region-data updated to 1.6.0
- `2.0.0` - Mar 21, 2020
  - Typings fixes
  - Dependency updates
- `1.4.7` - Dec 24, 2019:
  - Fix to include typings in published bundle.
- `1.4.6` - Dec 22, 2019:
  - Typescript typings added. Thanks, [Kyle Davis](https://github.com/kyledavisdev)!
  - [country region data](https://github.com/country-regions/country-region-data) updated to 1.5.1
- `1.4.5` - Oct 9, 2019.
  - [country region data](https://github.com/country-regions/country-region-data) updated to 1.5.0
  - RegionDropdown component updates to refactor deprecated componentWillReceiveProps method
  - misc dependency updates
- `1.4.4` - Aug 2, 2019. Country data updates.
- `1.4.3` - Dev 2, 2018:
  - RegionDropdown converted to PureComponent; now updates on any prop change
  - [country region data](https://github.com/country-regions/country-region-data) updated to 1.4.5
- `1.4.2` - Nov 8, 2018:
  - `customOptions` setting added for the Region dropdown.
  - `priorityOptions` option added to the CountryDropdown to allow placing items at the top of the country dropdown.
- `1.4.1` - Sept 9, 2018: bug fix for invalid JSON data source conversion.
- `1.4.0` - Sept 8, 2018:
  - _Breaking change_: the library is no longer exported in UMD format. Now it's only exported in es6
    (`dist/rcrs.es.js`) and commonJS (`dist/rcrs.js`) format. This library is intended for use in _React_ applications.
  - _Breaking change_: no longer available via Bower. I don't recall ANY react component used via Bower, so if I'm
    mistaken here, open a github issue to explain your use-case and I can re-add it.  
     If you need UMD, check out the [plain vanilla version](https://github.com/country-regions/country-region-selector).
  - country-region-data updated to latest version (1.4.4) - You can now pass arbitrary attributes to the components (e.g. `style={{ color: 'red' }}` and have them output in the
    markup)
  - the old gulp build process updated to use rollup - this component library, the source data set and the plain vanilla JS version are now all grouped under a single github organization
- `1.3.0` - Mar 20, 2018. Bug fix for invalid country, [@n-david](https://github.com/n-david)! onBlur event added.
- `1.2.3` - Nov 7, 2017. Country data updates. React moved to peer dependency, thanks [@iamdey](https://github.com/iamdey)!
- `1.2.2` - Oct 4, 2017 - Update to pass event on change. Thanks [@robertnealan](https://github.com/robertnealan)!
- `1.2.1` - Sept 6, 2017 - IE11 bug fix.
- `1.2.0` - Aug 7, 2017 - updated country-region-data; dependency updates.
- `1.1.0` - May 18, 2017 - dependency updates. `disabled` option added to `<CountryDropdown />` and `<RegionDropdown />`.
- `1.0.4` - April 12, 2017 - bug fix. Thanks @bebbi and @tchaffee!
- `1.0.3` - Jan 2, 2016 - updated country-region-data, repo link fix.
- `1.0.2` - October 16, 2016 - Fix issue where source-data.js in lib had no country data.
- `1.0.0` - July 1, 2016 - initial version.
