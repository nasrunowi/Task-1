import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'], // Enable Auto Docs
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Determines if the modal is open or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    title: {
      control: 'text',
      description: 'The title of the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Confirmation' },
      },
    },
    description: {
      control: 'text',
      description: 'Description text inside the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Are you sure you want to proceed?' },
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
      description: 'Sets the position of the modal.',
      table: {
        type: { summary: `'left' | 'center'` },
        defaultValue: { summary: 'center' },
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['undefined', 'warning', 'confirm', 'scan', 'leave'],
      },
      description: 'Sets the icon displayed in the modal.',
      table: {
        type: { summary: `'undefined' | 'warning' | 'confirm' | 'scan' | 'leave'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    closeable: {
      control: 'boolean',
      description: 'Determines if the modal can be closed with the cancel button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    positiveLabel: {
      control: 'text',
      description: 'Label for the positive/confirm button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Submit' },
      },
    },
    negativeLabel: {
      control: 'text',
      description: 'Label for the negative/cancel button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    onClose: {
      description: 'Function that is triggered when the cancel button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
      action: 'closed',
    },
    onConfirm: {
      description: 'Function that is triggered when the confirm button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
      action: 'confirmed',
    },
  },
  args: {
    isOpen: true,
    title: 'Confirmation',
    description: 'Are you sure you want to proceed?',
    position: 'center',
    icon: 'undefined',
    closeable: true,
    positiveLabel: 'Submit',
    negativeLabel: 'Cancel',
    onClose: action('closed'),
    onConfirm: action('confirmed'),
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: 'confirm',
  },
};

export const WarningModal: Story = {
  args: {
    icon: 'warning',
    title: 'Warning!',
    description: 'This action is irreversible.',
  },
};

export const NonCloseableModal: Story = {
  args: {
    closeable: false,
    title: 'Non-Closeable Modal',
    description: 'This modal cannot be closed with the cancel button.',
  },
};
