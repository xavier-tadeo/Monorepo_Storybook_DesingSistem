import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
    component: Card,
    title: "Molecules/Card",
};

export default meta;
export const Default: StoryObj<typeof Card> = {
    args: {
        title: "Card Title",
        description: "Card Description",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com",
    },
};