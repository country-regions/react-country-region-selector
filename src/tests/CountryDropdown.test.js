import React from 'react';
import { CountryDropdown, CountryRegionData } from '../../dist/rcrs.es';
import Enzyme, { shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe('CountryDropdown', () => {

	it('sets ID attribute', () => {
		const wrapper = shallow(
			<CountryDropdown id="id-attribute" />
		);
		expect(wrapper.find('#id-attribute').length).toBe(1);
		expect(wrapper.find('#fake-id-attribute').length).toBe(0);
	});


	it('classes attribute gets recognized', () => {
		const wrapper = shallow(
			<CountryDropdown classes="one two three" />
		);
		expect(wrapper.find('select').hasClass('one two three')).toBe(true);
	});

	it('passes arbitrary properties', () => {
		const wrapper = shallow(
			<CountryDropdown style={{ color: 'red' }} data-whatever="5" />
		);
		expect(wrapper.find('select').getElement().props.style.color).toBe('red');
		expect(wrapper.find('select').getElement().props['data-whatever']).toBe('5');
	});

	describe('name attribute', () => {
		it('falls back on default name attribute when not specified', () => {
			const wrapper = shallow(<CountryDropdown />);
			expect(wrapper.find('select').getElement().props.name).toBe('rcrs-country');
		});

		it('sets explicit name attribute', () => {
			const wrapper = shallow(
				<CountryDropdown name="name-attribute" />
			);
			expect(wrapper.find('select[name="name-attribute"]').length).toBe(1);
			expect(wrapper.find('select[name="fake-name-attribute"]').length).toBe(0);
		});
	});

	describe('disabled attribute', () => {
		it('disabled attribute not on by default', () => {
			const wrapper = shallow(
				<CountryDropdown />
			);
			expect(wrapper.find('select').getElement().props.disabled).toBe(false);
		});
		it('disabled attribute', () => {
			const wrapper = shallow(
				<CountryDropdown disabled={true} />
			);
			expect(wrapper.find('select').getElement().props.disabled).toBe(true);
		});
	});

	describe('default blank option', () => {
		it('showDefaultOption = false removes the default option', () => {
			const wrapper = shallow(<CountryDropdown showDefaultOption={false} />);
			expect(wrapper.find('option').length).toBe(CountryRegionData.length);
		});

		it('confirm default label is "Select Country"', () => {
			const wrapper = shallow(
				<CountryDropdown />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe('Select Country');
		});

		it('defaultOptionLabel', () => {
			const customLabel = 'Holy moly I am a custom label!';
			const wrapper = shallow(
				<CountryDropdown defaultOptionLabel={customLabel} />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe(customLabel);
		});
	});

	describe('country list', () => {
		it('outputs the list of countries', () => {
			const wrapper = shallow(<CountryDropdown />);
			expect(wrapper.find('option').length).toBe(CountryRegionData.length + 1); // 1 for the "Select Country" default option
		});

		it('respects the blacklist', () => {
			const blacklist = ['GB', 'CA', 'US'];
			const wrapper = shallow(
				<CountryDropdown blacklist={blacklist} showDefaultOption={false} />
			);
			expect(wrapper.find('option').length).toBe(CountryRegionData.length - blacklist.length);

			// confirm a non-blacklist item appears
			expect(wrapper.find('option[value="Afghanistan"]').length).toBe(1);

			// confirm none of the blacklist item appears
			expect(wrapper.find('option[value="United Kingdom"]').length).toBe(0);
			expect(wrapper.find('option[value="Canada"]').length).toBe(0);
			expect(wrapper.find('option[value="United States"]').length).toBe(0);
		});

		it('respects the whitelist', () => {
			const whitelist = ['GB', 'CA', 'US'];
			const wrapper = shallow(
				<CountryDropdown whitelist={whitelist} showDefaultOption={false} />
			);
			expect(wrapper.find('option').length).toBe(whitelist.length);

			// confirm the expected items appear
			expect(wrapper.find('option[value="United Kingdom"]').length).toBe(1);
			expect(wrapper.find('option[value="Canada"]').length).toBe(1);
			expect(wrapper.find('option[value="United States"]').length).toBe(1);
		});
	});

	describe('valueType', () => {
		it('confirm value is full country name by default', () => {
			const wrapper = shallow(
				<CountryDropdown showDefaultOption={false} />
			);
			expect(wrapper.find('select').childAt(0).getElement().props.value).toBe(CountryRegionData[0][0]);
		});

		it('confirm explicit valueType="full" also sets full country name', () => {
			const wrapper = shallow(
				<CountryDropdown
					showDefaultOption={false}
					valueType="full" />
			);
			expect(wrapper.find('select').childAt(0).getElement().props.value).toBe(CountryRegionData[0][0]);
		});

		it('confirm valueType="short" outputs country short code', () => {
			const wrapper = shallow(
				<CountryDropdown
					showDefaultOption={false}
					valueType="short" />
			);
			expect(wrapper.find('select').childAt(0).getElement().props.value).toBe(CountryRegionData[0][1]);
		});
	});

	describe('labelType', () => {
		it('confirm label type is full country name by default', () => {
			const wrapper = shallow(
				<CountryDropdown showDefaultOption={false} />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe(CountryRegionData[0][0]);
		});

		it('confirm label type is full country name when explicitly set', () => {
			const wrapper = shallow(
				<CountryDropdown showDefaultOption={false} labelType="full" />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe(CountryRegionData[0][0]);
		});

		it('confirm label type is the country shortcode when set', () => {
			const wrapper = shallow(
				<CountryDropdown showDefaultOption={false} labelType="short" />
			);
			expect(wrapper.find('select').childAt(0).text()).toBe(CountryRegionData[0][1]);
		});
	});

});
