import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Intro from './intro';

export default {
	component: Intro,
	title: 'Demos'
} as Meta;

export const Introduction: ComponentStory<typeof Intro> = () => <Intro />;
// export const DisableRegionFieldWhenEmpty: ComponentStory<typeof Intro> = () => <Intro />;
// export const NoDefaultOptions: ComponentStory<typeof Intro> = () => <Intro />;
// export const CustomDefaultOptions: ComponentStory<typeof Intro> = () => <Intro />;
// export const NameClassIdAttributes: ComponentStory<typeof Intro> = () => <Intro />;
// export const ShortCountryAndRegionNames: ComponentStory<typeof Intro> = () => <Intro />;
// export const BlacklistCountries: ComponentStory<typeof Intro> = () => <Intro />;
// export const WhitelistCountries: ComponentStory<typeof Intro> = () => <Intro />;
// export const BlacklistRegions: ComponentStory<typeof Intro> = () => <Intro />;
// export const FieldRefs: ComponentStory<typeof Intro> = () => <Intro />;
// export const ArbitraryAttributes: ComponentStory<typeof Intro> = () => <Intro />;
// export const PriorityCountries: ComponentStory<typeof Intro> = () => <Intro />;
// export const Localization: ComponentStory<typeof Intro> = () => <Intro />;
