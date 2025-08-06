import type { Meta, StoryObj } from "@storybook/react";
import { DisplayCard } from ".";

const meta: Meta<typeof DisplayCard> = {
  title: "Components/DisplayCard",
  component: DisplayCard,
};

export default meta;

type Story = StoryObj<typeof DisplayCard>;

export const Default: Story = {
  args: {
    className: {},
    rectangleClassName: {},
    rectangle: "/img/rectangle-2-1.png",
    detailsClassName: {},
    contentClassName: {},
    wrapClassName: {},
    divClassName: {},
    text: "Rénovation Éco-Quartier Lyon",
    statusesClassName: {},
    divClassNameOverride: {},
    divClassName1: {},
    text1: "200 kg CO₂ évité",
    progressFigmaClassName: {},
    divClassName2: {},
    overlapGroupClassName: {},
    progressBackgroundClassName: {},
    divClassName3: {},
    text2: "85%",
  },
};
