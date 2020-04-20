import React from 'react'
import { CountryDropdown, CountryRegionData } from '../../dist/rcrs.es'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('CountryDropdown', () => {
  it('sets ID attribute', () => {
    const { getByTestId } = render(
      <CountryDropdown data-testid="id-attribute" />
    )

    expect(getByTestId('id-attribute')).toBeTruthy()
  })

  it('classes attribute gets recognized', () => {
    const { getByTestId } = render(
      <CountryDropdown classes="one two three" data-testid="id-attribute" />
    )

    expect(getByTestId('id-attribute')).toHaveClass('one two three')
  })

  it('passes arbitrary properties', () => {
    const { getByTestId } = render(
      <CountryDropdown style={{ color: 'red' }} data-whatever="5" data-testid="id-attribute" />
    )

    expect(getByTestId('id-attribute')).toHaveStyle('color: red')
    expect(getByTestId('id-attribute')).toHaveAttribute('data-whatever')
  })

  describe('name attribute', () => {
    it('falls back on default name attribute when not specified', () => {
      const { getByTestId } = render(<CountryDropdown data-testid="id-attribute" />)

      expect(getByTestId('id-attribute').name).toBe('rcrs-country')
    })

    it('sets explicit name attribute', () => {
      const { getByTestId } = render(
        <CountryDropdown name="name-attribute" data-testid="id-attribute" />
      )

      expect(getByTestId('id-attribute')).toHaveAttribute('name')
    })
  })

  describe('disabled attribute', () => {
    it('disabled attribute not on by default', () => {
      const { getByTestId } = render(
        <CountryDropdown data-testid="id-attribute" />
      )

      expect(getByTestId('id-attribute').disabled).toBeFalsy()
    })
    it('disabled attribute', () => {
      const { getByTestId } = render(
        <CountryDropdown disabled={true} data-testid="id-attribute" />
      )

      expect(getByTestId('id-attribute').disabled).toBeTruthy()
    })
  })

  describe('default blank option', () => {
    it('showDefaultOption = false removes the default option', () => {
      const { getByTestId } = render(<CountryDropdown showDefaultOption={false} data-testid="id-attribute" />)

      expect(getByTestId('id-attribute').length).toBe(CountryRegionData.length)
    })

    it('confirm default label is "Select Country"', () => {
      const { getByText } = render(
        <CountryDropdown />
      )
      expect(getByText('Select Country')).toBeTruthy()
    })

    it('defaultOptionLabel', () => {
      const customLabel = 'Holy moly I am a custom label'
      const { getByText } = render(
        <CountryDropdown defaultOptionLabel={customLabel} />
      )

      expect(getByText(customLabel)).toBeTruthy()
    })
  })

  describe('country list', () => {
    it('outputs the list of countries', () => {
      const { getByTestId } = render(<CountryDropdown data-testid="id-attribute" />)

      expect(getByTestId('id-attribute').length).toBe(CountryRegionData.length + 1) // 1 for the "Select Country" default option
    })

    it('respects the blacklist', () => {
      const blacklist = ['GB', 'CA', 'US']
      const { getByTestId, queryByText } = render(
        <CountryDropdown blacklist={blacklist} showDefaultOption={false} data-testid="id-attribute" />
      )
      expect(getByTestId('id-attribute').length).toBe(CountryRegionData.length - blacklist.length)

      // confirm a non-blacklist item appears
      expect(queryByText('Afghanistan')).toBeTruthy()

      // confirm none of the blacklist item appears
      expect(queryByText('United Kingdom')).toBeFalsy()
      expect(queryByText('Canada')).toBeFalsy()
      expect(queryByText('United States')).toBeFalsy()
    })

    it('respects the whitelist', () => {
      const whitelist = ['GB', 'CA', 'US']
      const { queryByText, getByTestId } = render(
        <CountryDropdown whitelist={whitelist} showDefaultOption={false} data-testid="id-attribute" />
      )
      expect(getByTestId('id-attribute').length).toBe(whitelist.length)

      // confirm the expected items appear
      // confirm none of the blacklist item appears
      expect(queryByText('United Kingdom')).toBeTruthy()
      expect(queryByText('Canada')).toBeTruthy()
      expect(queryByText('United States')).toBeTruthy()
    })
  })

  describe('valueType', () => {
    it('confirm value is full country name by default', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} />
      )
      expect(getByText(CountryRegionData[0][0]).value).toBe('Afghanistan')
    })

    it('confirm explicit valueType="full" also sets full country name', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} valueType="full" />
      )
      expect(getByText(CountryRegionData[0][0]).value).toBe('Afghanistan')
    })

    it('confirm valueType="short" outputs country short code', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} valueType="short" />
      )
      expect(getByText(CountryRegionData[0][0]).value).toBe('AF')
    })
  })

  describe('labelType', () => {
    it('confirm label type is full country name by default', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} />
      )

      expect(getByText(CountryRegionData[0][0])).toBeTruthy()
    })

    it('confirm label type is full country name when explicitly set', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} labelType="full" />
      )
      expect(getByText(CountryRegionData[0][0])).toBeTruthy()
    })

    it('confirm label type is the country shortcode when set', () => {
      const { getByText } = render(
        <CountryDropdown showDefaultOption={false} labelType="short" />
      )
      expect(getByText(CountryRegionData[0][1])).toBeTruthy()
    })
  })
})
