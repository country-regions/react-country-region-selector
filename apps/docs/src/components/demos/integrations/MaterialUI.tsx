import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid2';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const customRender = ({ options, customProps, ...selectProps }) => (
  <Select {...selectProps} {...customProps}>
    {options.map(({ label, value, key }) => (
      <MenuItem value={value} key={key}>
        {label}
      </MenuItem>
    ))}
  </Select>
);

const MaterialUISelect = () => {
  const [country, setCountry] = React.useState('');
  const [region, setRegion] = React.useState('');

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel id="label-mui-country-field">Country</InputLabel>
          <CountryDropdown
            value={country}
            id="mui-country-field"
            onChange={(val) => {
              setCountry(val);
              setRegion('');
            }}
            customRender={customRender}
            customProps={{
              labelId: 'label-mui-country-field',
              label: 'Country',
            }}
          />
        </FormControl>
      </Grid>
      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel id="label-mui-region-field">Region</InputLabel>
          <RegionDropdown
            country={country}
            value={region}
            id="mui-region-field"
            onChange={(val) => setRegion(val)}
            disableWhenEmpty={true}
            customRender={customRender}
            customProps={{
              labelId: 'label-mui-region-field',
              label: 'Region',
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default MaterialUISelect;
