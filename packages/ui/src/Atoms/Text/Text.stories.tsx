import { Text } from "./Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
    component: Text,
    title: "Atoms/Text",
};

export default meta;
export const Default: StoryObj<typeof Text> = {
    args: {
        children: "Hello, world!",
    },
};