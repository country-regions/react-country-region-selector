import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import All from './allCountries';
import Specific from './specificCountries';
import Custom from './customData';

export default {
	component: All,
	title: 'Source Data'
} as Meta;

export const AllCountries: ComponentStory<typeof All> = () => <All />;
export const SpecificCountries: ComponentStory<typeof Specific> = () => <Specific />;
export const CustomData: ComponentStory<typeof Custom> = () => <Custom />;

// export const BlacklistCountries: ComponentStory<typeof All> = () => <All />;
// export const WhitelistCountries: ComponentStory<typeof All> = () => <All />;
// export const BlacklistRegions: ComponentStory<typeof All> = () => <All />;
