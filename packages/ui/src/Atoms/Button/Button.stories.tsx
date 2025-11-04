import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
};

export default meta;
export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Primary",
    variant: "primary"
  }
};
