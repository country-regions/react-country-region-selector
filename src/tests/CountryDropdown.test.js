import React from 'react';
import { CountryDropdown, CountryRegionData } from '../../dist/rcrs.es';
import { shallow } from 'enzyme';

const Enzyme = require('enzyme');
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

	it('sets name attribute', () => {
		const wrapper = shallow(
			<CountryDropdown name="name-attribute" />
		);
		expect(wrapper.find('select[name="name-attribute"]').length).toBe(1);
		expect(wrapper.find('select[name="fake-name-attribute"]').length).toBe(0);
	});

	it('classes attribute gets recognized', () => {
		const wrapper = shallow(
			<CountryDropdown classes="one two three" />
		);
		expect(wrapper.find('select').hasClass('one two three')).toBe(true);
	});

	describe('default label', () => {
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

	describe('default label', () => {
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

	describe('country list', () => {
		it('outputs the list of countries', () => {
			const wrapper = shallow(<CountryDropdown />);
			expect(wrapper.find('option').length).toBe(CountryRegionData.length + 1); // 1 for the "please select" default option
		});

		it('respects the blacklist', () => {
			const blacklist = ['GB', 'CA', 'US'];
			const wrapper = shallow(
				<CountryDropdown blacklist={blacklist} showDefaultOption={false} />
			);
			expect(wrapper.find('option').length).toBe(CountryRegionData.length - blacklist.length);
		});

		it('respects the whitelist', () => {
			const whitelist = ['GB', 'CA', 'US'];
			const wrapper = shallow(
				<CountryDropdown whitelist={whitelist} showDefaultOption={false} />
			);
			expect(wrapper.find('option').length).toBe(whitelist.length);
		});
	});

});


























