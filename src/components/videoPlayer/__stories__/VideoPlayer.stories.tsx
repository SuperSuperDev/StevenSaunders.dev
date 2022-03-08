import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import VideoPlayer from '@/components/videoPlayer/VideoPlayer';

export default {
  title: 'Components/VideoPlayer/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    // override React.ReactNode type with this
    children: {
      id: { type: 'text' },
      url: { type: 'text' },
      poster: { type: 'text' },
      fluid: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => (
  <VideoPlayer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'vs',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
  fluid: true,
};
