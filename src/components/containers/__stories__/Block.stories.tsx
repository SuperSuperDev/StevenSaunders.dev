import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Block from '@/components/containers/Block';

import Box from '../Box';

export default {
  title: 'Components/Containers/Block',
  component: Block,
  argTypes: {
    // override React.ReactNode type with this
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'A Block is a simple element that provides consistant margin between siblins ',
  variant: 'default',
};

export const WithoutBlocks = Template.bind({});
WithoutBlocks.args = {
  children: (
    <>
      <Box>
        Text Here <br />
        is not
        <br />
        in blocks
        <br />
      </Box>
    </>
  ),
};

export const WithBlocks = Template.bind({});
WithBlocks.args = {
  children: (
    <>
      <Box>
        <Block className='bg-black'>Text Here</Block>
        <Block className='bg-blue'>IS</Block>
        <Block className='bg-red'>IN</Block>
        <Block className='bg-green'>BLOCKS</Block>
      </Box>
    </>
  ),
};
