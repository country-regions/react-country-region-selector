import { FC, useMemo } from "react";
import CountryRegionData from "./_data";
import { filterAndSortCountries, defaultRender } from "./helpers";
import type {
  CountryDropdownProps,
  CountryRegionDataMinified,
  RenderDataOption,
} from "./types";

const defaultWhitelist: string[] = [];
const defaultBlacklist: string[] = [];

export const CountryDropdown: FC<CountryDropdownProps> = ({
  value = "",
  name = "rcrs-country",
  id = "",
  className = "",
  showDefaultOption = true,
  defaultOptionLabel = "Select Country",
  priorityOptions = [],
  onChange = () => null,
  onBlur = () => null,
  labelType = "full",
  valueType = "full",
  whitelist = defaultWhitelist,
  blacklist = defaultBlacklist,
  disabled = false,
  customRender = defaultRender,
  ...arbitraryProps
}): JSX.Element => {
  const countries: RenderDataOption[] = useMemo(() => {
    const countries = filterAndSortCountries(
      CountryRegionData as unknown as CountryRegionDataMinified[],
      priorityOptions,
      whitelist,
      blacklist,
      labelType,
    );
    return countries.map(([countryName, countrySlug]) => ({
      value: valueType === "short" ? countrySlug : countryName,
      key: countrySlug,
      label: labelType === "short" ? countrySlug : countryName,
    }));
  }, [priorityOptions, whitelist, blacklist, valueType, labelType]);

  const defaultOption = useMemo(() => {
    if (showDefaultOption) {
      return {
        value: "",
        key: "default",
        label: defaultOptionLabel,
      };
    }
  }, [showDefaultOption, defaultOptionLabel]);

  const attrs: any = {
    ...arbitraryProps,
    name,
    value,
    onChange: (e: any) => onChange(e.target.value, e),
    onBlur: (e: any) => onBlur(e),
    disabled,
  };
  if (id) {
    attrs.id = id;
  }
  if (className) {
    attrs.className = className;
  }

  return customRender({
    ...attrs,
    options: [defaultOption, ...countries],
  });
};
