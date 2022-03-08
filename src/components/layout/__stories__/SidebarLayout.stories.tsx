import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import SidebarLayout from '@/components/layout/SidebarLayout';
import ThemeChanger from '@/components/layout/ThemeChanger';
export default {
  title: 'Components/Layout/SidebarLayout',
  component: SidebarLayout,
  argTypes: {
    // override React.ReactNode type with this
    children: {
      control: { type: 'text' },
    },
    darkMode: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <ThemeChanger />,
};

export const WithDarkMode = Template.bind({});
WithDarkMode.args = {
  children: '',
};
