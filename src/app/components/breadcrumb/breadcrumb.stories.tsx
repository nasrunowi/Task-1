import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    datas: {
      control: {
        type: 'object',
      },
    },
    spacer: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    variant: 'medium',
    datas: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
    spacer: <span className="mx-2 text-gray-500">/</span>, // Custom spacer
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    variant: 'medium',
    datas: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
    spacer: <span className="mx-2 text-gray-500">/</span>, // Custom spacer
  },
};

export const CustomSpacer: Story = {
  args: {
    variant: 'medium',
    datas: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
    spacer: <span className="mx-2 text-blue-600">|</span>, // Custom spacer
  },
};
