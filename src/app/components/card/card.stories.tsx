import type { Meta, StoryObj } from '@storybook/react';
import { Card } from "./card"
import { fn } from '@storybook/test';

const meta: Meta<typeof Card> ={
    title: "Molecule/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes:{
        variant: {
            control:{
                type: "select",
                options: ["primary", "succes", "warning", "danger"],
            },
        },
        onClick: { action: "clicked"},
    },
    args: {
        variant: "light",
        label: "Card",
        onClick: fn()
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
    args: {
        variant: "light",
        title: "Light Theme",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis aliquam condimentum."
    },
};

