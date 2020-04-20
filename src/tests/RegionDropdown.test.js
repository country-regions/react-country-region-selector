import React from 'react';
import { RegionDropdown } from '../../dist/rcrs.es';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('RegionDropdown', () => {
	it('sets ID attribute', () => {
		const { getByTestId } = render(
			<RegionDropdown data-testid="id-attribute" />
		);

		expect(getByTestId('id-attribute')).toBeTruthy();
	});

	it('classes attribute gets recognized', () => {
		const { getByTestId } = render(
			<RegionDropdown data-testid="id" classes="one two three" />
		);

		expect(getByTestId('id')).toHaveClass('one two three');
	});

	describe('name attribute', () => {
		it('falls back on default name attribute when not specified', () => {
			const { getByTestId } = render(<RegionDropdown data-testid="id" />);
			expect(getByTestId('id').name).toBe('rcrs-region');
		});

		it('sets explicit name attribute', () => {
			const { getByTestId } = render(
				<RegionDropdown data-testid="id" name="name-attribute" />
			);

			expect(getByTestId('id').name).toBe('name-attribute');
		});
	});

	describe('disabled attribute', () => {
		it('not disabled by default', () => {
			const { getByTestId } = render(
				<RegionDropdown data-testid="id" />
			);
			expect(getByTestId('id').disabled).toBeFalsy();
		});
		it('disabled attribute', () => {
			const { getByTestId } = render(
				<RegionDropdown data-testid="id" disabled={true} />
			);
			expect(getByTestId('id').disabled).toBeTruthy();
		});
	});

	describe('default option', () => {
		it('confirm default label when there are no countries is "-"', () => {
			const { findByText } = render(<RegionDropdown data-testid="id"/>);
			expect(findByText('-')).toBeTruthy();
		});

		it('confirm default label when there are countries is "Select Region"', () => {
			const { findByText } = render(<RegionDropdown country="Canada" />);
			expect(findByText('Select Region')).toBeTruthy();
		});

		it('defaultOptionLabel - applies only when a country is passed note', () => {
			const customLabel = 'Holy moly I am a custom label';
			const { findByText } = render(
				<RegionDropdown data-testid="id" defaultOptionLabel={customLabel} country="Canada" />
			);
			expect(findByText(customLabel)).toBeTruthy();
		});
	});

	describe('country parameter', () => {
		describe('blank country parameter', () => {
			it('setting no country parameter shows the default blank option and no other options', () => {
				const { getByTestId, findByText } = render(
					<RegionDropdown country="" data-testid="id" />
				);

				// does this find option length?
				expect(getByTestId('id').length).toBe(1);
				expect(findByText('-')).toBeTruthy();
			});

			it('does not disable the region field by default when there is no country param', () => {
				const { getByTestId } = render(
					<RegionDropdown country="" data-testid="id" />
				);

				expect(getByTestId('id').disabled).toBeFalsy();
			});

			it('disables the region field when there is no country param and disableWhenEmpty set to true', () => {
				const { getByTestId } = render(
					<RegionDropdown country="" disableWhenEmpty={true} data-testid="id" />
				);

				expect(getByTestId('id').disabled).toBeTruthy();
			});
		});

		describe('with country parameter set', () => {
			it('shows the regions for the selected country', () => {
				const { getByTestId, getByText } = render(
					<RegionDropdown country="Canada" data-testid="id" />
				);

				expect(getByTestId('id').length).toBe(14);
				expect(getByText('Alberta')).toBeTruthy();
				expect(getByText('British Columbia')).toBeTruthy();
			});

			it('does not show any country if you pass an invalid country name', () => {
				// suppress console.error here
				const { getByTestId, getByText } = render(
					<RegionDropdown country="Chickenland" data-testid="id" />
				);

				expect(getByTestId('id').length).toBe(1);
				expect(getByText('Select Region')).toBeTruthy();
			});
		});

		describe('valueType', () => {
			it('region values are full region name by default', () => {
				const { getByText } = render(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);

				expect(getByText('Alberta')).toBeTruthy();
			});

			it('valueType = full still uses full region name as option values', () => {
				const { getByText } = render(
					<RegionDropdown
					  	country="Canada"
						showDefaultOption={false}
						valueType="full" />
				);

				expect(getByText('Alberta')).toBeTruthy();
			});

			it('valueType changes value to region short codes when specified', () => {
				const { getByText } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						valueType="short" />
				);

				expect(getByText('Alberta')).toHaveValue('AB');
			});
		});

		describe('labelType', () => {
			it('region labels are full region name by default', () => {
				const { getByText } = render(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);
				expect(getByText('Alberta')).toBeTruthy();
			});

			it('labelType = full still uses full region name as option values', () => {
				const { getByText } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="full" />
				);

				expect(getByText('Alberta')).toBeTruthy();
			});

			it('valueType changes value to region short codes when specified', () => {
				const { getByText } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="short" />
				);
				expect(getByText('AB')).toBeTruthy();
			});
		});

		describe('customOptions', () => {
			it('should render the custom options in the dropdown when a valid list is provided.', () => {
				const { rerender, getByText } = render(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['All']} />
				);

				rerender(<RegionDropdown
					country="Antarctica"
					showDefaultOption={false}
					customOptions={['All']} />)

				expect(getByText('All')).toBeTruthy();
			});

			it('should throw an error when the duplicate values are present.', () => {
				console.error = jest.fn();
				const { rerender } = render(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['Antarctica']} />
				);
				rerender(<RegionDropdown country="Antarctica" showDefaultOption={false} customOptions={['Antarctica']} />)

				expect(console.error).toBeCalledWith('Error: Duplicate regions present: Antarctica.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			});
		});
	});
});
