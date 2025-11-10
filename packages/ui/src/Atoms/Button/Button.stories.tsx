import { Button } from "./Button";
import { Text } from "../Text/Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    textSize: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    textWeight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    textFont: {
      control: "select",
      options: ["body", "heading", "mono"],
    },
    textLineHeight: {
      control: "select",
      options: ["tight", "normal", "relaxed"],
    },
    textLetterSpacing: {
      control: "select",
      options: ["tighter", "normal", "wider"],
    },
  },
};

export default meta;

// Default
export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

// Variants
export const Variants: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="error">Error</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
};

// Sizes
export const Sizes: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ),
};

// Variants and Sizes Combined
export const VariantsAndSizes: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="primary" size="sm">Primary Small</Button>
        <Button variant="primary" size="md">Primary Medium</Button>
        <Button variant="primary" size="lg">Primary Large</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="secondary" size="sm">Secondary Small</Button>
        <Button variant="secondary" size="md">Secondary Medium</Button>
        <Button variant="secondary" size="lg">Secondary Large</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="tertiary" size="sm">Tertiary Small</Button>
        <Button variant="tertiary" size="md">Tertiary Medium</Button>
        <Button variant="tertiary" size="lg">Tertiary Large</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="error" size="sm">Error Small</Button>
        <Button variant="error" size="md">Error Medium</Button>
        <Button variant="error" size="lg">Error Large</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="success" size="sm">Success Small</Button>
        <Button variant="success" size="md">Success Medium</Button>
        <Button variant="success" size="lg">Success Large</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
        <Button variant="warning" size="sm">Warning Small</Button>
        <Button variant="warning" size="md">Warning Medium</Button>
        <Button variant="warning" size="lg">Warning Large</Button>
      </div>
    </div>
  ),
};

// Text Sizes
export const TextSizes: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button textSize="xs">Extra Small Text</Button>
      <Button textSize="sm">Small Text</Button>
      <Button textSize="md">Medium Text</Button>
      <Button textSize="lg">Large Text</Button>
      <Button textSize="xl">Extra Large Text</Button>
      <Button textSize="2xl">2X Large Text</Button>
    </div>
  ),
};

// Text Weights
export const TextWeights: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button textWeight="regular">Regular Weight</Button>
      <Button textWeight="medium">Medium Weight</Button>
      <Button textWeight="semibold">Semibold Weight</Button>
      <Button textWeight="bold">Bold Weight</Button>
    </div>
  ),
};

// Text Fonts
export const TextFonts: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button textFont="body">Body Font</Button>
      <Button textFont="heading">Heading Font</Button>
      <Button textFont="mono">Mono Font</Button>
    </div>
  ),
};

// With Custom Text Component
export const WithCustomText: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button variant="primary">
        <Text size="lg" weight="bold" font="heading">
          Custom Text
        </Text>
      </Button>
      <Button variant="secondary">
        <Text size="xl" weight="semibold">
          Large Custom Text
        </Text>
      </Button>
      <Button variant="tertiary">
        <Text size="md" weight="medium" font="mono">
          Mono Text
        </Text>
      </Button>
    </div>
  ),
};

// States
export const States: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => alert("Clicked!")}>Clickable</Button>
    </div>
  ),
};

// Common Use Cases
export const ActionButtons: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button variant="primary" size="lg">Save Changes</Button>
      <Button variant="secondary" size="lg">Cancel</Button>
      <Button variant="tertiary" size="md">Learn More</Button>
    </div>
  ),
};

export const StatusButtons: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      <Button variant="success" size="md">Approve</Button>
      <Button variant="error" size="md">Delete</Button>
      <Button variant="warning" size="md">Warning</Button>
    </div>
  ),
};

// Interactive
export const Interactive: StoryObj<typeof Button> = {
  args: {
    children: "Interactive Button",
    variant: "primary",
    size: "md",
    textSize: "md",
    textWeight: "medium",
    textFont: "body",
    textLineHeight: "normal",
    textLetterSpacing: "normal",
  },
};
