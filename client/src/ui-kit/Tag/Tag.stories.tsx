import type { Meta, StoryObj } from "@storybook/react";
import TagComponent from "./index";

const meta = {
  title: "Example/Tag",
  component: TagComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TagComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Tag: Story = {
  args: {
    type: "done",
  },
};
