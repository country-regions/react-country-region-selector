// the rollup build converts the raw data from country-region-data into a smaller format, which is why this
// imports from the dist. So run `yarn` prior to running the tests
import { CountryDropdown } from '../CountryDropdown';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { CountryDropdownProps } from '../types';
import CountryRegionData from '../_data';

describe('CountryDropdown', () => {
  const setupTest = (props?: Partial<CountryDropdownProps>) => {
    render(
      <CountryDropdown
        onChange={() => null}
        value=""
        role="combobox"
        {...props}
      />
    );
    return screen.getByRole('combobox') as HTMLSelectElement;
  };

  it('sets ID attribute', () => {
    const select = setupTest({ id: 'id-attr' });
    expect(select.getAttribute('id')).toBe('id-attr');
  });

  it('className attribute gets recognized', () => {
    const select = setupTest({ className: 'one two three' });
    expect(select.className).toBe('one two three');
  });

  it('passes arbitrary properties', () => {
    const select = setupTest({
      style: { color: 'red' },
      'aria-label': "The user's country",
    });

    expect(select.style.color).toBe('red');
    expect(select.getAttribute('aria-label')).toBe("The user's country");
  });

  describe('name attribute', () => {
    it('falls back on default name attribute when not specified', () => {
      const select = setupTest();
      expect(select.getAttribute('name')).toBe('rcrs-country');
    });

    it('sets explicit name attribute', () => {
      const select = setupTest({ name: 'name-attribute' });
      expect(select.getAttribute('name')).toBe('name-attribute');
    });
  });

  describe('disabled attribute', () => {
    it('disabled attribute not on by default', () => {
      const select = setupTest();
      expect(select).not.toBeDisabled();
    });
    it('disabled attribute', () => {
      const select = setupTest({ disabled: true });
      expect(select).toBeDisabled();
    });
  });

  describe('default blank option', () => {
    it('showDefaultOption = false outputs the expected number of options', () => {
      const select = setupTest({ showDefaultOption: false });
      expect(select.options.length).toBe(CountryRegionData.length);
    });

    it('showDefaultOption = true outputs the expected number of options', () => {
      const select = setupTest({ showDefaultOption: true });
      expect(select.options.length).toBe(CountryRegionData.length + 1);
    });

    it('confirm default label is "Select Country"', () => {
      const select = setupTest();
      expect(
        (select.querySelectorAll('option:checked')[0] as HTMLOptionElement).text
      ).toBe('Select Country');
    });

    it('defaultOptionLabel provides custom label', () => {
      const customLabel = 'Holy moly I am a custom label!';
      const select = setupTest({ defaultOptionLabel: customLabel });
      expect(
        (select.querySelectorAll('option:checked')[0] as HTMLOptionElement).text
      ).toBe(customLabel);
    });
  });

  describe('country list', () => {
    it('respects the blacklist', () => {
      const blacklist = ['GB', 'CA', 'US'];
      const select = setupTest({ blacklist, showDefaultOption: false });
      expect(select.options.length).toBe(
        CountryRegionData.length - blacklist.length
      );

      // confirm a non-blacklist item appears
      expect(
        select.querySelectorAll('option[value="Afghanistan"]').length
      ).toBe(1);

      // // confirm none of the blacklist item appears
      expect(
        select.querySelectorAll('option[value="United Kingdom"]').length
      ).toBe(0);
      expect(select.querySelectorAll('option[value="Canada"]').length).toBe(0);
      expect(
        select.querySelectorAll('option[value="United States"]').length
      ).toBe(0);
    });

    it('respects the whitelist', () => {
      const whitelist = ['GB', 'CA', 'US'];
      const select = setupTest({ whitelist, showDefaultOption: false });
      expect(select.querySelectorAll('option').length).toBe(whitelist.length);

      // confirm the expected items appear
      expect(
        select.querySelectorAll('option[value="United Kingdom"]').length
      ).toBe(1);
      expect(select.querySelectorAll('option[value="Canada"]').length).toBe(1);
      expect(
        select.querySelectorAll('option[value="United States"]').length
      ).toBe(1);
    });
  });

  describe('valueType', () => {
    it('confirm value is full country name by default', () => {
      const select = setupTest({ showDefaultOption: false });
      expect(select.options[0]!.value).toBe(CountryRegionData[0]![0]);
    });

    it('confirm explicit valueType="full" also sets full country name', () => {
      const select = setupTest({ showDefaultOption: false, valueType: 'full' });
      expect(select.value).toBe(CountryRegionData[0]![0]);
    });

    it('confirm valueType="short" outputs country short code', () => {
      const select = setupTest({
        showDefaultOption: false,
        valueType: 'short',
      });
      expect(select.value).toBe(CountryRegionData[0]![1]);
    });
  });

  describe('labelType', () => {
    it('confirm label type is full country name by default', () => {
      const select = setupTest({
        showDefaultOption: false,
      });
      expect(select.options[0]!.text).toBe(CountryRegionData[0]![0]);
    });

    it('confirm label type is full country name when explicitly set', () => {
      const select = setupTest({
        showDefaultOption: false,
        labelType: 'full',
      });
      expect(select.options[0]!.text).toBe(CountryRegionData[0]![0]);
    });

    it('confirm label type is the country shortcode when set', () => {
      const select = setupTest({
        showDefaultOption: false,
        labelType: 'short',
      });
      expect(select.options[0]!.text).toBe(CountryRegionData[0]![1]);
    });
  });
});
