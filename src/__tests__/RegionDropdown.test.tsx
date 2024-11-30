// the rollup build converts the raw data from country-region-data into a smaller format, which is why this
// imports from the dist. So run `yarn` prior to running the tests
import { RegionDropdown } from '../../dist/rcrs.es';
import { RegionDropdownProps } from '../rcrs.types';
import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('RegionDropdown', () => {
  const setupTest = (props?: Partial<RegionDropdownProps>) => {
    render(
      <RegionDropdown
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

  describe('name attribute', () => {
    it('falls back on default name attribute when not specified', () => {
      const select = setupTest();
      expect(select.getAttribute('name')).toBe('rcrs-region');
    });

    it('sets explicit name attribute', () => {
      const select = setupTest({ name: 'name-attribute' });
      expect(select.getAttribute('name')).toBe('name-attribute');
    });
  });

  describe('disabled attribute', () => {
    it('not disabled by default', () => {
      const select = setupTest();
      expect(select).not.toBeDisabled();
    });

    it('disabled attribute', () => {
      const select = setupTest({ disabled: true });
      expect(select).toBeDisabled();
    });
  });

  describe('default option', () => {
    it('confirm default label when there are no countries is "-"', () => {
      const select = setupTest();
      const defaultOption = select.options[0].text;
      expect(defaultOption).toBe('-');
    });

    it('confirm default label when there are countries is "Select Region"', () => {
      const select = setupTest({ country: 'Canada' });
      const defaultOption = select.options[0].text;
      expect(defaultOption).toBe('Select Region');
    });

    it('defaultOptionLabel - applies only when a country is passed note!', () => {
      const customLabel = 'Holy moly I am a custom label!';
      const select = setupTest({
        defaultOptionLabel: customLabel,
        country: 'Canada',
      });
      const defaultOption = select.options[0].text;
      expect(defaultOption).toBe(customLabel);
    });
  });

  describe('country parameter', () => {
    it('setting no country parameter shows the default blank option and no other options', () => {
      const select = setupTest({ country: '' });
      expect(select.options.length).toBe(1);
      expect(select.options[0].text).toBe('-');
    });

    it('does not disable the region field by default when there is no country param', () => {
      const select = setupTest({ country: '' });
      expect(select).not.toBeDisabled();
    });

    it('disables the region field when there is no country param and disableWhenEmpty set to true', () => {
      const select = setupTest({ country: '', disableWhenEmpty: true });
      expect(select).toBeDisabled();
    });

    it('shows the regions for the selected country', () => {
      const select = setupTest({ country: 'Canada' });
      expect(select.options.length).toBe(14);
      expect(select.options[1].text).toBe('Alberta');
      expect(select.options[2].text).toBe('British Columbia');
    });

    it('does not show any country if you pass an invalid country name', () => {
      const consoleMock = jest.spyOn(console, 'error').mockImplementation();
      const select = setupTest({ country: 'ChickenLand' });
      expect(select.options.length).toBe(1);
      expect(select.options[0].text).toBe('Select Region');
      expect(consoleMock).toHaveBeenCalledWith(
        expect.stringContaining('Error. Unknown country passed: ChickenLand')
      );
      consoleMock.mockRestore();
    });

    describe('valueType', () => {
      it('region values are full region name by default', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
        });
        expect(select.value).toBe('Alberta');
      });

      it('valueType = full still uses full region name as option values', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
          valueType: 'full',
        });
        expect(select.value).toBe('Alberta');
      });

      it('valueType changes value to region short codes when specified', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
          valueType: 'short',
        });
        expect(select.value).toBe('AB');
      });
    });

    describe('labelType', () => {
      it('region labels are full region name by default', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
        });
        expect(
          (select.querySelectorAll('option:checked')[0] as HTMLOptionElement)
            .text
        ).toBe('Alberta');
      });

      it('labelType = full still uses full region name as option values', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
          labelType: 'full',
        });
        expect(
          (select.querySelectorAll('option:checked')[0] as HTMLOptionElement)
            .text
        ).toBe('Alberta');
      });

      it('valueType changes value to region short codes when specified', () => {
        const select = setupTest({
          country: 'Canada',
          showDefaultOption: false,
          labelType: 'short',
        });
        expect(
          (select.querySelectorAll('option:checked')[0] as HTMLOptionElement)
            .text
        ).toBe('AB');
      });

      describe('customOptions', () => {
        it('should not render any custom options when no country value is passed', () => {
          const select = setupTest({
            country: '',
            showDefaultOption: false,
            customOptions: ['All', 'Final Entry'],
          });

          const options = select.querySelectorAll('option');
          expect(options.length).toEqual(1);
        });

        it('should render the custom options in the region dropdown.', () => {
          const select = setupTest({
            country: 'Canada',
            showDefaultOption: false,
            customOptions: ['All', 'Final Entry'],
          });

          const options = select.querySelectorAll('option');
          expect((options[options.length - 2] as HTMLOptionElement).text).toBe(
            'All'
          );
          expect((options[options.length - 1] as HTMLOptionElement).text).toBe(
            'Final Entry'
          );
        });

        it('should throw an error when the duplicate values are present.', () => {
          const consoleMock = jest.spyOn(console, 'error').mockImplementation();
          setupTest({
            country: 'Canada',
            showDefaultOption: false,
            customOptions: ['Final Entry', 'Alberta'],
          });

          expect(consoleMock).toHaveBeenCalledWith(
            expect.stringContaining('Error: Duplicate regions present: Alberta')
          );
          consoleMock.mockRestore();
        });
      });
    });
  });

  test('calls onChange callback with expected value', () => {
    const onChange = jest.fn();
    const select = setupTest({
      country: 'Canada',
      showDefaultOption: true,
      onChange,
    });

    fireEvent.change(select, { target: { value: 'Manitoba' } });

    expect(onChange).toHaveBeenCalledWith('Manitoba', expect.any(Object));
  });
});
