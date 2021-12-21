import { Story, Meta } from '@storybook/react';
import { Rcrs, RcrsProps } from './rcrs';

export default {
	component: Rcrs,
	title: 'Rcrs',
} as Meta;

const Template: Story<RcrsProps> = (args) => <Rcrs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
