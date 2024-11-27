export type DisplayType = 'full' | 'short';

export type CountryDropdownProps = {
  readonly name: string;
  readonly id: string;
  readonly classes: string;
  readonly value: string;
  readonly onChange?: (value: string, event: any) => null;
  readonly onBlur?: (value: string, event: any) => null;
  readonly disabled: boolean;
  readonly showDefaultOption: boolean;
  readonly defaultOptionLabel: string;
  readonly labelType: DisplayType;
  readonly valueType: DisplayType;
  readonly whitelist: object;
  readonly blacklist: object;
  readonly customOptions: string[];
  readonly priorityOptions: string[];
};

export type RegionDropdownProps = {
  readonly country: string;
  readonly value?: string | number;
  readonly id?: string;
  readonly name?: string;
  readonly blankOptionLabel?: string;
  readonly classes?: string;
  readonly showDefaultOption?: boolean;
  readonly defaultOptionLabel: string;
  readonly disabled?: boolean;
  readonly disableWhenEmpty?: boolean;
  readonly labelType?: DisplayType;
  readonly countryValueType?: DisplayType;
  readonly valueType?: DisplayType;
  readonly customOptions: string[];
  readonly onChange?: (value: string, event: any) => null;
  readonly onBlur?: (value: string, event: any) => null;
  readonly whitelist?: object;
  readonly blacklist?: object;
};
