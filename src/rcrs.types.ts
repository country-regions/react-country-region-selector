import { ComponentProps } from 'react';

export type ValueType = 'full' | 'short';

type NativeDropdownProps = Omit<
  ComponentProps<'select'>,
  'onChange' | 'onBlur'
>;

export interface CountryDropdownProps extends NativeDropdownProps {
  /**
   * The currently selected country. This should either be the shortcode, or the full country name
   * depending on what you're using for your value attribute (see the valueType option). By
   * default it's the full country name.
   *
   * Default value: ""
   */
  readonly value?: string;

  /**
   * The name attribute of the generated select box.
   *
   * Default value: "rcrs-country"
   */
  readonly name?: string;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  readonly id?: string;

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */
  readonly className?: string;

  /**
   * Callback that gets called when the user selects a country. Use this to store the value in
   * whatever store you're using (or just the parent component state). The original event is also
   * available via the second argument.
   *
   * Default value: undefined
   */
  readonly onChange?: (value: string, event: any) => null;

  /**
   * Callback that gets called when the user blurs off the country field.
   *
   * Default value: undefined
   */
  readonly onBlur?: (event: any) => null;

  /**
   * Disables the country field.
   *
   * Default value: false
   */
  readonly disabled?: boolean;

  /**
   * Whether you want to show a default option.
   *
   * Default value: true
   */
  readonly showDefaultOption?: boolean;

  /**
   * The default option label.
   *
   * Default value: "Select Country"
   */
  readonly defaultOptionLabel?: string;

  /**
   * Either "full" or "short". This governs whether you see country names or country short codes in the dropdown.
   *
   * Default value: "full"
   */
  readonly labelType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value attribute of each <option> in the dropdown.
   * Please note, if you set this to "short" you will need to let the corresponding <RegionDropdown />
   * component know as well, by passing a countryValueType="short" attribute.
   *
   * Default value: "full"
   */
  readonly valueType?: ValueType;

  /**
   * Lets you target countries that should appear at the top of the dropdown. Should be an array of country
   * shortcodes.
   *
   * Default value: array
   */
  readonly priorityOptions?: string[];

  /**
   * This setting lets you target specific countries to appear in the dropdown. Only those specified here will
   * appear. This should be an array of country shortcodes. See the country-region-data repo for the data and
   * the shortcodes.
   *
   * Default value: []
   */
  readonly whitelist?: object;

  /**
   * Lets you target countries that should not appear in the dropdown. Should be an array of country shortcodes.
   *
   * Default value: []
   */
  readonly blacklist?: object;
}

export interface RegionDropdownProps extends NativeDropdownProps {
  /**
   * The currently selected region.
   *
   * Default value: ""
   */
  readonly value: string | number;

  /**
   * The currently selected country. The region needs to know this information to automatically load the right
   * country regions.
   *
   * Default value: ""
   */
  readonly country: string;

  /**
   * Callback for when the user selects a region. The first argument is the selected value, the second
   * is the full event - in case you need to access it.
   *
   * Default value: undefined
   */
  readonly onChange?: (value: string, event: any) => null;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  readonly id?: string;

  /**
   * The name attribute of the generated select box. Not required, but it'll be added with a default value
   * if you don't add it (intended for standard form submits which require a name prop to identify the data).
   *
   * Default value: "rcrs-region"
   */
  readonly name?: string;

  /**
   * The label that appears in the region dropdown when the user hasn't selected a country yet.
   *
   * Default value: undefined
   */
  readonly blankOptionLabel?: string;

  /**
   * Any additional space-separated class names you want to add to the select field.
   *
   * Default value: ""
   */
  readonly className?: string;

  /**
   * Whether you want to show a default option. This is what the user sees in the region dropdown
   * after selecting a country. It defaults to the defaultOptionLabel prop (see next).
   *
   * Default value: true
   */
  readonly showDefaultOption?: boolean;

  /**
   * The default visible region option.
   *
   * Default value: "Select Region"
   */
  readonly defaultOptionLabel?: string;

  /**
   * Disables the region field. If set to true, it overrides disableWhenEmpty.
   *
   * Default value: false
   */
  readonly disabled?: boolean;

  /**
   * Disables the region field when the user hasn't selected a country.
   *
   * Default value: false
   */
  readonly disableWhenEmpty?: boolean;

  /**
   * Either "full" or "short". This governs whether you see region names or short codes in the dropdown.
   *
   * Default value: "full"
   */
  readonly labelType?: ValueType;

  /**
   * If you've changed the country dropdown valueType to short you will need to set this value to short as
   * well, so the component knows what type of string is being passed in the `country` property.
   *
   * Default value: "full"
   */
  readonly countryValueType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value attribute of each <option> in the dropdown.
   *
   * Default value: "full"
   */
  readonly valueType?: ValueType;

  /**
   * Appends additional options to the region dropdown, regardless of the country selected. The values and labels
   * will get the same value passed.
   *
   * Default value: []
   */
  readonly customOptions?: string[];

  /**
   * Callback that gets called when the user blurs off the region field.
   *
   * Default value: undefined
   */
  readonly onBlur?: (event: any) => null;

  /**
   * This lets you specify a list of regions that should appear for a specify country. If you specify regions
   * for a country (specified by country code, not full name), only the regions that you enter here will show up.
   * For any countries that you didn't specify the whitelist, all their regions will show up.
   *
   * Note the data structure is different than the `whitelist` and `blacklist` properties on the CountryDropdown
   * component.
   *
   * Default value: undefined
   */
  readonly whitelist?: {
    [countryCode: string]: string[];
  };

  /**
   * This lets you specify a list of regions that should be omitted for a specify country.
   *
   * Default value: undefined
   */
  readonly blacklist?: {
    [countryCode: string]: string[];
  };
}

export type CountryRegionData = [string[]];
