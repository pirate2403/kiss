import type { Meta, StoryObj } from "@storybook/react";
import TypographyComponent from "./index";

const meta = {
  title: "Example/Typography",
  component: TypographyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypographyComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Typography: Story = {
  args: {
    children: "TypographyComponent",
  },
};
