import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import StatsToolbar from '@/components/videoPlayer/StatsToolbar';

export default {
  title: 'Components/VideoPlayer/StatsToolbar',
  component: StatsToolbar,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof StatsToolbar>;

const Template: ComponentStory<typeof StatsToolbar> = () => <StatsToolbar />;

export const Default = Template.bind({});
Default.args = {};
