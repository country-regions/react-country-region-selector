import React from 'react';
import { RegionDropdown } from '../../dist/rcrs.es';

import { render, queryByTestId, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('RegionDropdown', () => {

	it('sets ID attribute', () => {
		const { container } = render(
			<RegionDropdown data-testid="id-attribute" />
		);

		expect(queryByTestId(container, 'id-attribute')).toBeTruthy();
		expect(queryByTestId(container, 'id-attribute')).toBeFalsy()
	});

	it('classes attribute gets recognized', () => {
		const { container } = render(
			<RegionDropdown data-testid="id" classes="one two three" />
		);

		expect(queryByTestId(container, 'id')).toHaveClass('one two three');
	});

	describe('name attribute', () => {
		it('falls back on default name attribute when not specified', () => {
			const { container } = render(<RegionDropdown data-testid="id" />);
			expect(queryByTestId(container, 'id').name).toBe('rcrs-region');
		});

		it('sets explicit name attribute', () => {
			const { container } = render(
				<RegionDropdown data-testid="id" name="name-attribute" />
			);

			expect(queryByTestId(container, 'id').name).toBe('name-attribute');
		});
	});

	describe('disabled attribute', () => {
		it('not disabled by default', () => {
			const { container } = render(
				<RegionDropdown />
			);
			expect(container.find('select').getElement().props.disabled).toBe(false);
		});
		it('disabled attribute', () => {
			const { container } = render(
				<RegionDropdown disabled={true} />
			);
			expect(container.find('select').getElement().props.disabled).toBe(true);
		});
	});

	describe('default option', () => {
		it('confirm default label when there are no countries is "-"', () => {
			const { container } = render(<RegionDropdown />);
			expect(container.find('select').childAt(0).text()).toBe('-');
		});

		it('confirm default label when there are countries is "Select Region"', () => {
			const { container } = render(<RegionDropdown country="Canada" />);
			expect(container.find('select').childAt(0).text()).toBe('Select Region');
		});

		it('defaultOptionLabel - applies only when a country is passed note!', () => {
			const customLabel = 'Holy moly I am a custom label!';
			const { container } = render(
				<RegionDropdown defaultOptionLabel={customLabel} country="Canada" />
			);
			expect(container.find('select').childAt(0).text()).toBe(customLabel);
		});
	});

	describe('country parameter', () => {

		describe('blank country parameter', () => {
			it('setting no country parameter shows the default blank option and no other options', () => {
				const { container } = render(
					<RegionDropdown country="" />
				);
				expect(container.find('option').length).toBe(1);
				expect(container.find('option').text()).toBe('-');
			});

			it('does not disable the region field by default when there is no country param', () => {
				const { container } = render(
					<RegionDropdown country="" />
				);
				expect(container.find('select').getElement().props.disabled).toBe(false);
			});

			it('disables the region field when there is no country param and disableWhenEmpty set to true', () => {
				const { container } = render(
					<RegionDropdown country="" disableWhenEmpty={true} />
				);
				expect(container.find('select').getElement().props.disabled).toBe(true);
			});
		});

		describe('with country parameter set', () => {
			it('shows the regions for the selected country', () => {
				const { container } = render(
					<RegionDropdown country="Canada" />
				);
				expect(container.find('option').length).toBe(14);
				expect(container.find('select').childAt(1).text()).toBe('Alberta');
				expect(container.find('select').childAt(2).text()).toBe('British Columbia');
			});

			it('does not show any country if you pass an invalid country name', () => {
				// suppress console.error here
				const { container } = render(
					<RegionDropdown country="Chickenland" />
				);
				expect(container.find('option').length).toBe(1);
				expect(container.find('option').text()).toBe('Select Region');
			});
		});

		describe('valueType', () => {
			it('region values are full region name by default', () => {
				const { container } = render(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);
				expect(container.find('select').childAt(0).getElement().props.value).toBe('Alberta');
			});

			it('valueType = full still uses full region name as option values', () => {
				const { container } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						valueType="full" />
				);
				expect(container.find('select').childAt(0).getElement().props.value).toBe('Alberta');
			});

			it('valueType changes value to region short codes when specified', () => {
				const { container } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						valueType="short" />
				);
				expect(container.find('select').childAt(0).getElement().props.value).toBe('AB');
			});
		});

		describe('labelType', () => {
			it('region labels are full region name by default', () => {
				const { container } = render(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);
				expect(container.find('select').childAt(0).text()).toBe('Alberta');
			});

			it('labelType = full still uses full region name as option values', () => {
				const { container } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="full" />
				);
				expect(container.find('select').childAt(0).text()).toBe('Alberta');
			});

			it('valueType changes value to region short codes when specified', () => {
				const { container } = render(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="short" />
				);
				expect(container.find('select').childAt(0).text()).toBe('AB');
			});
		});

		describe('customOptions', () => {
			it('should render the custom options in the dropdown when a valid list is provided.', () => {
				const { container } = render(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['All']} />
				);
				
				container.setProps({country: 'Antarctica'});
				expect(container.find('select').childAt(1).text()).toBe('All');
			});

			it('should throw an error when the duplicate values are present.', () => {
				console.error = jest.fn();
				const { container } = render(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['Antarctica']} />
				);
				
				container.setProps({country: 'Antarctica'});
				expect(console.error).toBeCalledWith('Error: Duplicate regions present: Antarctica.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			});
		});

	});

});
