// Type definitions for react-country-region-selector 1.4.7 by <https://github.com/country-regions/react-country-region-selector>
// Project: https://github.com/country-regions/react-country-region-selector
// Definitions by: Kyle Davis <https://github.com/kyledavisdev>

import * as React from "react";

export type ValueType = "full" | "short";

export interface CountryDropdownProps {
  /**
   * The currently selected country. This should either
   * be the shortcode, or the full country name depending
   * on what you're using for your value attribute
   * (see the valueType option). By default it's the full country name.
   *
   * Default value: ""
   */
  value: string;

  /**
   * that gets called when the user selects a country. Use
   * this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * Default value: undefined
   */
  onChange: (val: string) => void;

  /**
   * Callback that gets called when the user blurs off the country field.
   *
   * Default value: undefined
   */
  onBlur?: (val: string) => void;

  /**
   * The name attribute of the generated select box.
   *
   * Default value: "rcrs-country"
   */
  name?: string;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  id?: string;

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */

  classes?: string;

  /**
   *  Whether you want to show a default option.
   *
   * Default value: true
   */
  showDefaultOption?: boolean;

  /**
   * Lets you target countries that should appear at the top
   * of the dropdown. Should also be an array of country shortcodes.
   *
   * Default value: array
   */
  priorityOptions?: string[];

  /**
   * The default option label.
   *
   * Default value: "Select Country"
   */
  defaultOptionLabel?: string;

  /**
   * Either "full" or "short". This governs whether you see
   * country names or country short codes in the dropdown.
   *
   * Default value: "full"
   */
  labelType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value
   * attribute of each <option> in the dropdown. Please note,
   * if you set this to "short" you will need to let the
   * corresponding <RegionDropdown /> component know as well,
   * by passing a countryValueType="short" attribute.
   *
   * Default value: "full"
   */
  valueType?: ValueType;

  /**
   * This setting lets you target specific countries to appear
   * in the dropdown. Only those specified here will appear.
   * This should be an array of country shortcodes. See the
   * country-region-data repo for the data and the shortcodes.
   *
   * Default value: []
   */
  whitelist?: string[];

  /**
   * Lets you target countries that should not appear in the
   * dropdown. Should also be an array of country shortcodes.
   *
   * Default value: []
   */
  blacklist?: string[];

  /**
   * Disables the country field.
   *
   * Default value: false
   */
  disabled?: boolean;
}

export class CountryDropdown extends React.Component<CountryDropdownProps> {}

export interface RegionDropdownProps {
  /**
   * The currently selected country.
   *
   * Default value: ""
   */
  country: string;

  /**
   * The currently selected region.
   *
   * Default value: ""
   */
  value: string;

  /**
   * Callback that gets called when the user selects a region.
   * Use this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * Default value: undefined
   */
  onChange: (val: string) => void;

  /**
   * Callback that gets called when the user blurs off the region field.
   *
   * Default value: undefined
   */
  onBlur?: string;

  /**
   * The name attribute of the generated select box.
   *
   * Default value: "rcrs-region"
   */
  name?: string;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  id?: string;

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */
  classes?: string;

  /**
   * The label that appears in the region dropdown when the user
   * hasn't selected a country yet.
   *
   * Default value: undefined
   */
  blankOptionLabel?: string;

  /**
   * Whether you want to show a default option. This is what the
   * user sees in the region dropdown after selecting a country.
   * It defaults to the defaultOptionLabel setting (see next).
   *
   * Default value: true
   */
  showDefaultOption?: string;

  /**
   * string	The default region option.
   *
   * Default value: "Select Region"
   */
  defaultOptionLabel?: string;

  /**
   * If you've changed the country dropdown valueType to short you
   * will need to set this value to short as well, so the component
   * knows what's being passed in the country property.
   *
   * Default value: "full"
   */
  countryValueType?: ValueType;

  /**
   * Either "full" or "short". This governs whether you see
   * region names or region short codes in the dropdown.
   *
   * Default value: "full"
   */
  labelType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value
   * attribute of each <option> in the dropdown.
   *
   * Default value: "full"
   */
  valueType?: ValueType;

  /**
   * Disables the region field when the user hasn't selected a country.
   *
   * Default value: false
   */
  disableWhenEmpty?: boolean;

  /**
   * Disables the region field. If set to true, it overrides disableWhenEmpty
   *
   * Default value: false
   */
  disabled?: boolean;

  /**
   * Appends a list of string to the every region dropdown,
   * regardless of the country selected.
   *
   * Default value: []
   */
  customOptions?: string[];
}

export class RegionDropdown extends React.Component<RegionDropdownProps> {}
