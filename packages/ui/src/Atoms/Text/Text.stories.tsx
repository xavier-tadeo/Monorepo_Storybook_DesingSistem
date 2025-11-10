import { Text } from "./Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
    component: Text,
    title: "Atoms/Text",
    argTypes: {
        as: {
            control: "select",
            options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        weight: {
            control: "select",
            options: ["regular", "medium", "semibold", "bold"],
        },
        font: {
            control: "select",
            options: ["body", "heading", "mono"],
        },
        lineHeight: {
            control: "select",
            options: ["tight", "normal", "relaxed"],
        },
        letterSpacing: {
            control: "select",
            options: ["tighter", "normal", "wider"],
        },
    },
};

export default meta;

// Default
export const Default: StoryObj<typeof Text> = {
    args: {
        children: "Hello, world!",
    },
};

// Sizes
export const Sizes: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Text size="xs">Extra Small Text (xs)</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="md">Medium Text (md)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="xl">Extra Large Text (xl)</Text>
            <Text size="2xl">2X Large Text (2xl)</Text>
        </div>
    ),
};

// Weights
export const Weights: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Text weight="regular">Regular Weight (400)</Text>
            <Text weight="medium">Medium Weight (500)</Text>
            <Text weight="semibold">Semibold Weight (600)</Text>
            <Text weight="bold">Bold Weight (700)</Text>
        </div>
    ),
};

// Fonts
export const Fonts: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Text font="body">Body Font - Inter, sans-serif</Text>
            <Text font="heading">Heading Font - Poppins, sans-serif</Text>
            <Text font="mono">Mono Font - Fira Code, monospace</Text>
        </div>
    ),
};

// Line Heights
export const LineHeights: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
            <div>
                <Text lineHeight="tight" size="lg">
                    Tight Line Height (1.1) - Perfect for headings and short text that needs to be compact.
                </Text>
            </div>
            <div>
                <Text lineHeight="normal" size="lg">
                    Normal Line Height (1.4) - Great for body text and general content. This is the default setting.
                </Text>
            </div>
            <div>
                <Text lineHeight="relaxed" size="lg">
                    Relaxed Line Height (1.6) - Ideal for longer paragraphs and reading comfort. Provides more breathing room.
                </Text>
            </div>
        </div>
    ),
};

// Letter Spacing
export const LetterSpacing: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Text letterSpacing="tighter" size="xl" weight="bold">
                Tighter Letter Spacing (-0.02em)
            </Text>
            <Text letterSpacing="normal" size="xl" weight="bold">
                Normal Letter Spacing (0)
            </Text>
            <Text letterSpacing="wider" size="xl" weight="bold">
                Wider Letter Spacing (0.05em)
            </Text>
        </div>
    ),
};

// Common Use Cases
export const Headings: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Text as="h1" size="2xl" weight="bold" font="heading" lineHeight="tight">
                Main Heading
            </Text>
            <Text as="h2" size="xl" weight="bold" font="heading" lineHeight="tight">
                Section Heading
            </Text>
            <Text as="h3" size="lg" weight="semibold" font="heading" lineHeight="tight">
                Subsection Heading
            </Text>
        </div>
    ),
};

export const BodyText: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px" }}>
            <Text as="p" size="md" weight="regular" font="body" lineHeight="relaxed">
                This is a paragraph of body text. It uses the regular weight, medium size, and relaxed line height
                for optimal readability. Perfect for longer content and articles.
            </Text>
            <Text as="p" size="md" weight="regular" font="body" lineHeight="relaxed">
                Another paragraph to demonstrate the spacing and flow of body text. The relaxed line height
                makes it comfortable to read multiple paragraphs in sequence.
            </Text>
        </div>
    ),
};
