import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ButtonComponent from "./index";

const meta = {
  title: "Example/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Button: Story = {
  args: {
    children: "Button",
  },
};
