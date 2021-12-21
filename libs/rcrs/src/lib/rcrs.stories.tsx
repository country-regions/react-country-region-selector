import { Story, Meta } from '@storybook/react';
import { Rcrs, RcrsProps } from './rcrs';

export default {
	component: Rcrs,
	title: 'Components',
} as Meta;

const Template: Story<RcrsProps> = (args) => <Rcrs {...args} />;

export const Intro = Template.bind({});
Intro.args = {};
