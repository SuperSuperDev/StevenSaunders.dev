import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { HiSearch } from 'react-icons/hi';

import Button from '@/components/buttons/Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    // override React.ReactNode type with this
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <div className='flex items-center gap-2'>
      <HiSearch />
      <span>Search</span>
    </div>
  ),
};

// export const IconOnly = Template.bind({})
// IconOnly

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  iconLeft: <HiSearch className='h-6 w-6' aria-hidden='true' />,
  children: 'Search',
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  iconRight: <HiSearch className='h-6 w-6' aria-hidden='true' />,
  children: <span>Searchz</span>,
};
