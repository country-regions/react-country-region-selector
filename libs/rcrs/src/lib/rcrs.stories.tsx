import { Story, Meta } from '@storybook/react';
import { Intro as Intro2 } from './rcrs';

export default {
	component: Intro2,
	title: 'Components'
} as Meta;

const Template: Story<any> = (args) => <Intro2 {...args} />;

export const Intro = Template.bind({});
Intro.args = {};
