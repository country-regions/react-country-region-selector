import React from 'react'
import PropTypes from 'prop-types'
import CountryRegionData from '../node_modules/country-region-data/data.json'
import C from './constants'
import * as helpers from './helpers'

const CountryDropdown = React.forwardRef((props, ref) => {
  // unused properties deliberately added so arbitraryProps gets populated with anything else the user specifies
  const {
    name, id, classes, value, onChange, onBlur, disabled, showDefaultOption, defaultOptionLabel,
    labelType, valueType, whitelist, blacklist, customOptions, priorityOptions, ...arbitraryProps
  } = props

  const [countries, setCountries] = React.useState([])

  React.useEffect(() => {
    setCountries(helpers.filterCountries(CountryRegionData, priorityOptions, whitelist, blacklist))
  }, [priorityOptions, whitelist, blacklist])

  const getCountries = () => {
    const { valueType, labelType } = props
    return countries.map(([countryName, countrySlug]) => (
      <option key={countrySlug} value={(valueType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}>
        {(labelType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}
      </option>
    ))
  }

  const getDefaultOption = () => {
    if (!showDefaultOption) {
      return null
    }
    return (
      <option value="" key="default">{defaultOptionLabel}</option>
    )
  }

  const attrs = {
    ref,
    ...arbitraryProps,
    name,
    value,
    onChange: (e) => onChange(e.target.value, e),
    onBlur: (e) => onBlur(e),
    disabled
  }
  if (id) {
    attrs.id = id
  }
  if (classes) {
    attrs.className = classes
  }

  return (
    <select {...attrs}>
      {getDefaultOption()}
      {getCountries()}
    </select>
  )
})

CountryDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  showDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priorityOptions: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  valueType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  whitelist: PropTypes.array,
  blacklist: PropTypes.array,
  disabled: PropTypes.bool,
  customOptions: PropTypes.object
}

CountryDropdown.defaultProps = {
  value: '',
  name: 'rcrs-country',
  id: '',
  classes: '',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Country',
  priorityOptions: [],
  onChange: () => {},
  onBlur: () => {},
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  whitelist: [],
  blacklist: [],
  disabled: false
}

CountryDropdown.displayName = 'CountryDropdown'

export default CountryDropdown
