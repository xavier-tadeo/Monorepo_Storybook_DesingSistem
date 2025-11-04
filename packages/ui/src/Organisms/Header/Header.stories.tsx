import { Header } from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Organisms/Header",
};

export default meta;
export const Default: StoryObj<typeof Header> = {
    args: {
        title: "Header Title",
        description: "Header Description",
        image: "https://via.placeholder.com/150",
        link: "https://www.google.com",
    },
};