import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Box from '@/components/containers/Box';
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';

const defaultPlayer = {
  id: 'video-1',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
  fluid: true,
};
const defaultPlayer2 = {
  id: 'video-2',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
  fluid: true,
};

export default {
  title: 'Components/Containers/Box',
  component: Box,
  argTypes: {
    // override React.ReactNode type with this
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Anything that can go in a div',
  variant: 'rnd-shadow',
};

export const WithContentRounded = Template.bind({});
WithContentRounded.args = {
  children: <VideoPlayer {...defaultPlayer} />,
  variant: 'rnd-shadow',
};

export const WithContentSquared = Template.bind({});
WithContentSquared.args = {
  children: <VideoPlayer {...defaultPlayer2} />,
  variant: 'sq-shadow',
};
