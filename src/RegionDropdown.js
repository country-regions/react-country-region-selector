import React from 'react'
import PropTypes from 'prop-types'
import CountryRegionData from '../node_modules/country-region-data/data.json'
import C from './constants'

const RegionDropdown = React.forwardRef((props, ref) => {
  const {
    value, country, onChange, onBlur, id, name, classes, disabled, blankOptionLabel, showDefaultOption,
    defaultOptionLabel, labelType, valueType, countryValueType, disableWhenEmpty, customOptions,
    ...arbitraryProps
  } = props

  const [regions, setRegions] = React.useState(getRegions(props.country, countryValueType))

  React.useEffect(() => {
    const defaultRegions = getRegions(country, countryValueType)

    setRegions([
      ...defaultRegions,
      getCustomOptions(defaultRegions, valueType, customOptions)
    ])
  }, [props.country])

  const isDisabled = disabled || (disableWhenEmpty && country === '')

  const attrs = {
    ref,
    ...arbitraryProps,
    name,
    value,
    onChange: (e) => onChange(e.target.value, e),
    onBlur: (e) => onBlur(e),
    disabled: isDisabled
  }
  if (id) {
    attrs.id = id
  }
  if (classes) {
    attrs.className = classes
  }

  return (
    <select {...attrs}>
      <DefaultOption {...props} />
      <RegionList regions={regions} labelType={labelType} valueType={valueType} />
    </select>
  )
})

const RegionList = ({ regions, labelType, valueType }) => {
  return regions.map(({ regionName, regionShortCode }) => {
    const label = (labelType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode
    const value = (valueType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode
    return <option value={value} key={regionName}>{label}</option>
  })
}

// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
// a "default" option which shows
const DefaultOption = ({ country, blankOptionLabel, showDefaultOption, defaultOptionLabel }) => {
  if (!country) {
    return <option value="">{blankOptionLabel}</option>
  }
  if (showDefaultOption) {
    return <option value="">{defaultOptionLabel}</option>
  }

  return null
}

export default RegionDropdown

const getRegions = (country, countryValueType) => {
  if (!country) {
    return []
  }

  const searchIndex = (countryValueType === C.DISPLAY_TYPE_FULL) ? 0 : 1
  let regions = []
  CountryRegionData.forEach((i) => {
    if (i[searchIndex] === country) {
      regions = i
    }
  })

  // this could happen if the user is managing the state of the region/country themselves and screws up passing
  // in a valid country
  if (!regions || regions.length === 0) {
    console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown')
    return []
  }
  return regions[2].split(C.REGION_LIST_DELIMITER).map((regionPair) => {
    const [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER)
    return { regionName, regionShortCode }
  })
}

const getCustomOptions = (regions, valueType, customOptions) => {
  const regionKey = valueType === C.DISPLAY_TYPE_FULL ? 'regionName' : 'regionShortCode'

  const duplicateRegions = regions.filter((region) => customOptions.indexOf(region[regionKey]) !== -1).map(region => region[regionKey])

  if (duplicateRegions.length) {
    console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.')
    return []
  }

  return customOptions.map((option) => {
    if (option) {
      return { regionName: option, regionShortCode: option }
    }
  })
}

RegionList.propTypes = {
  region: PropTypes.array,
  labelType: PropTypes.string,
  valueType: PropTypes.string
}

DefaultOption.propTypes = {
  country: PropTypes.string,
  blankOptionLabel: PropTypes.string,
  showDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string
}

RegionDropdown.propTypes = {
  country: PropTypes.string,
  countryValueType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  blankOptionLabel: PropTypes.string,
  showDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelType: PropTypes.string,
  valueType: PropTypes.string,
  disabled: PropTypes.bool,
  disableWhenEmpty: PropTypes.bool,
  customOptions: PropTypes.array
}

RegionDropdown.defaultProps = {
  country: '',
  value: '',
  name: 'rcrs-region',
  id: '',
  classes: '',
  blankOptionLabel: '-',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Region',
  onChange: () => {
  },
  onBlur: () => {
  },
  countryValueType: C.DISPLAY_TYPE_FULL,
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  disabled: false,
  disableWhenEmpty: false,
  customOptions: []
}

RegionDropdown.displayName = 'RegionDropdown'
