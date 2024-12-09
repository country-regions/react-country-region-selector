# react-country-region-selector

### About

This library provides a pair of React components to display _connected_ country and region dropdowns (pick a country, it shows the relevant regions). If you're not using React, check out the [plain vanilla JS version](https://github.com/country-regions/country-region-selector) instead. The list of countries and regions is maintained separately and found in the [country-region-data](https://github.com/country-regions/country-region-data) repo.

> [!NOTE]
>
> `4.0.0` has been released! This is a major rewrite of the whole script.
>
> - Breaking changes:
>   - Minimum react version updated to 16.8.0 (hooks)
>   - `classes` prop has been renamed `className`
>   - `onBlur` callback is no longer passed the selected value as first argument, just the event
> - Improvements:
>   - completely rewritten in modern React and typescript, plus a new dev environment for working locally
>   - [greatly improved documentation](https://country-regions.github.io/react-country-region-selector/)
>   - now supports integrations with third party component library (Material UI, Fluent UI etc.)
>   - bundle size now 72KB (previously 88KB)
>
> Please report any issues [here on github](https://github.com/country-regions/react-country-region-selector).

### Demos & Doc

Check out the [github pages](http://country-regions.github.io/react-country-region-selector/) section for the full documentation + example
JSX code.

### Developer links

- [CHANGELOG.md](./CHANGELOG.md)
- [DEVELOPER.md](./DEVELOPER.md)

### License

MIT
