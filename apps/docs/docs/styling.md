---
sidebar_position: 2
---

# Styling

This comes up quite a lot. The `react-country-region-selector` package outputs _simple HTML `<select>` and `<option>` elements_ - nothing more. So if you need to change the styles of the dropdowns, it just a matter of using CSS in your page. To target the elements, pass a class via the `className` prop to each component, and style it based on that - or pass custom a custom `style` prop right to the component, [as shown here](./demos/features/ArbitraryAttributes).

Note that if you're using this script in an [integration](./demos/integrations/), like with Material UI, styling will be different. You'll need to refer to those
external libraries to find out how styling works for them.
