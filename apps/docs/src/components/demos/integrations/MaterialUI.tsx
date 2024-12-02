import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid2';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const renderSelect = ({ onChange, value, children }) => (
  <Select value={value} label="Age" onChange={onChange}>
    {children}
  </Select>
);

const renderOption = ({ value, label }) => (
  <MenuItem value={value}>{label}</MenuItem>
);

// https://mui.com/material-ui/react-select/
const MaterialUISelect = () => {
  const [country, setCountry] = React.useState('');
  const [region, setRegion] = React.useState('');

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel id="mui-country-field">Country</InputLabel>
          <CountryDropdown
            value={country}
            id="mui-country-field"
            onChange={(val) => setCountry(val)}
            renderSelect={renderSelect}
            renderOption={renderOption}
          />
        </FormControl>
      </Grid>
      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel id="mui-region-field">Region</InputLabel>
          <RegionDropdown
            country={country}
            value={region}
            id="mui-region-field"
            onChange={(val) => setRegion(val)}
            disableWhenEmpty={true}
            renderSelect={renderSelect}
            renderOption={renderOption}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default MaterialUISelect;
