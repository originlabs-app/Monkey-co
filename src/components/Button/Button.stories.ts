import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  argTypes: {
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    state: {
      options: ["fantome", "default"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "danger", "secondary", "disabled"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    showIconRight: true,
    showIconLeft: true,
    value: "Button",
    size: "md",
    state: "fantome",
    variant: "primary",
    className: {},
    visible: true,
    divClassName: {},
    text: "Button",
    visible1: true,
  },
};
