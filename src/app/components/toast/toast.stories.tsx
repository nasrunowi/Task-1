import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';
import { fn } from '@storybook/test';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['information', 'notification'],
      },
      if: { arg: 'variant', eq: 'default' } // Only for 'default' variant
    },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'danger', 'default'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    message: { control: 'text' },
    onClick: { action: 'clicked' }, // Click handler
  },
  args: {
    type: 'information',
    variant: 'default',
    size: 'medium',
    message: 'This is a toast message.',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const DefaultInformation: Story = {
  args: {
    type: 'information',
    variant: 'default',
    size: 'medium',
    message: 'This is an information message.',
  },
};

export const DefaultNotification: Story = {
  args: {
    type: 'notification',
    variant: 'default',
    size: 'medium',
    message: 'This is a notification message.',
  },
};

export const SuccessToast: Story = {
  args: {
    type: 'information', // Ignored for success variant
    variant: 'success',
    size: 'medium',
    message: 'This is a success message.',
  },
};

export const WarningToast: Story = {
  args: {
    type: 'information', // Ignored for warning variant
    variant: 'warning',
    size: 'medium',
    message: 'This is a warning message.',
  },
};

export const DangerToast: Story = {
  args: {
    type: 'information', // Ignored for danger variant
    variant: 'danger',
    size: 'medium',
    message: 'This is a danger message.',
  },
};

export const CustomSize: Story = {
  args: {
    type: 'information', // Ignored for custom size
    variant: 'success',
    size: 'large',
    message: 'This is a large success message.',
  },
};
