import React from 'react';
import { RegionDropdown } from '../../dist/rcrs.es';
import Enzyme, { shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe('RegionDropdown', () => {

	it('sets ID attribute', () => {
		const wrapper = shallow(
			<RegionDropdown id="id-attribute" />
		);
		expect(wrapper.find('#id-attribute').length).toBe(1);
		expect(wrapper.find('#fake-id-attribute').length).toBe(0);
	});

	it('classes attribute gets recognized', () => {
		const wrapper = shallow(
			<RegionDropdown classes="one two three" />
		);
		expect(wrapper.find('select').hasClass('one two three')).toBe(true);
	});

	describe('name attribute', () => {
		it('falls back on default name attribute when not specified', () => {
			const wrapper = shallow(<RegionDropdown />);
			expect(wrapper.find('select').getElement().props.name).toBe('rcrs-region');
		});

		it('sets explicit name attribute', () => {
			const wrapper = shallow(
				<RegionDropdown name="name-attribute" />
			);
			expect(wrapper.find('select[name="name-attribute"]').length).toBe(1);
			expect(wrapper.find('select[name="fake-name-attribute"]').length).toBe(0);
		});
	});

	describe('disabled attribute', () => {
		it('not disabled by default', () => {
			const wrapper = shallow(
				<RegionDropdown />
			);
			expect(wrapper.find('select').getElement().props.disabled).toBe(false);
		});
		it('disabled attribute', () => {
			const wrapper = shallow(
				<RegionDropdown disabled={true} />
			);
			expect(wrapper.find('select').getElement().props.disabled).toBe(true);
		});
	});

	describe('default option', () => {
		it('confirm default label when there are no countries is "-"', () => {
			const wrapper = shallow(<RegionDropdown />);
			expect(wrapper.find('select').childAt(0).text()).toBe('-');
		});

		it('confirm default label when there are countries is "Select Region"', () => {
			const wrapper = shallow(<RegionDropdown country="Canada" />);
			expect(wrapper.find('select').childAt(0).text()).toBe('Select Region');
		});

		it('defaultOptionLabel - applies only when a country is passed note!', () => {
			const customLabel = 'Holy moly I am a custom label!';
			const wrapper = shallow(
				<RegionDropdown defaultOptionLabel={customLabel} country="Canada" />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe(customLabel);
		});
	});

	describe('country parameter', () => {

		describe('blank country parameter', () => {
			it('setting no country parameter shows the default blank option and no other options', () => {
				const wrapper = shallow(
					<RegionDropdown country="" />
				);
				expect(wrapper.find('option').length).toBe(1);
				expect(wrapper.find('option').text()).toBe('-');
			});

			it('does not disable the region field by default when there is no country param', () => {
				const wrapper = shallow(
					<RegionDropdown country="" />
				);
				expect(wrapper.find('select').getElement().props.disabled).toBe(false);
			});

			it('disables the region field when there is no country param and disableWhenEmpty set to true', () => {
				const wrapper = shallow(
					<RegionDropdown country="" disableWhenEmpty={true} />
				);
				expect(wrapper.find('select').getElement().props.disabled).toBe(true);
			});
		});

		describe('with country parameter set', () => {
			it('shows the regions for the selected country', () => {
				const wrapper = shallow(
					<RegionDropdown country="Canada" />
				);
				expect(wrapper.find('option').length).toBe(14);
				expect(wrapper.find('select').childAt(1).text()).toBe('Alberta');
				expect(wrapper.find('select').childAt(2).text()).toBe('British Columbia');
			});

			it('does not show any country if you pass an invalid country name', () => {
				// suppress console.error here
				const wrapper = shallow(
					<RegionDropdown country="Chickenland" />
				);
				expect(wrapper.find('option').length).toBe(1);
				expect(wrapper.find('option').text()).toBe('Select Region');
			});
		});

		describe('valueType', () => {
			it('region values are full region name by default', () => {
				const wrapper = shallow(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);
				expect(wrapper.find('select').childAt(0).getElement().props.value).toBe('Alberta');
			});

			it('valueType = full still uses full region name as option values', () => {
				const wrapper = shallow(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						valueType="full" />
				);
				expect(wrapper.find('select').childAt(0).getElement().props.value).toBe('Alberta');
			});

			it('valueType changes value to region short codes when specified', () => {
				const wrapper = shallow(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						valueType="short" />
				);
				expect(wrapper.find('select').childAt(0).getElement().props.value).toBe('AB');
			});
		});

		describe('labelType', () => {
			it('region labels are full region name by default', () => {
				const wrapper = shallow(
					<RegionDropdown country="Canada" showDefaultOption={false} />
				);
				expect(wrapper.find('select').childAt(0).text()).toBe('Alberta');
			});

			it('labelType = full still uses full region name as option values', () => {
				const wrapper = shallow(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="full" />
				);
				expect(wrapper.find('select').childAt(0).text()).toBe('Alberta');
			});

			it('valueType changes value to region short codes when specified', () => {
				const wrapper = shallow(
					<RegionDropdown
						country="Canada"
						showDefaultOption={false}
						labelType="short" />
				);
				expect(wrapper.find('select').childAt(0).text()).toBe('AB');
			});
		});

		describe('customOptions', () => {
			it('should render the custom options in the dropdown when a valid list is provided.', () => {
				const wrapper = shallow(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['All']} />
				);
				
				wrapper.setProps({country: 'Antarctica'});
				expect(wrapper.find('select').childAt(1).text()).toBe('All');
			});

			it('should throw an error when the duplicate values are present.', () => {
				console.error = jest.fn();
				const wrapper = shallow(
					<RegionDropdown
						showDefaultOption={false}
						customOptions={['Antarctica']} />
				);
				
				wrapper.setProps({country: 'Antarctica'});
				expect(console.error).toBeCalledWith('Error: Duplicate regions present: Antarctica.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			});
		});

	});

});
