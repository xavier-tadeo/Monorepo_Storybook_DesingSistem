import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../Atoms/Text/Text";
import { Button } from "../../Atoms/Button/Button";

const meta: Meta<typeof Card> = {
    component: Card,
    title: "Molecules/Card",
    argTypes: {
        title: {
            control: "text",
            description: "Título de la card",
        },
        titleIcon: {
            control: "select",
            options: [
                "Home",
                "User",
                "Settings",
                "Bell",
                "Search",
                "Mail",
                "Heart",
                "Star",
                "File",
                "Folder",
                "Image",
                "Video",
                "Music",
                "Calendar",
                "Clock",
            ],
            description: "Icono del título",
        },
        subtitle: {
            control: "text",
            description: "Subtítulo de la card",
        },
        subtitleIcon: {
            control: "select",
            options: [
                "Home",
                "User",
                "Settings",
                "Bell",
                "Search",
                "Mail",
                "Heart",
                "Star",
                "File",
                "Folder",
            ],
            description: "Icono del subtítulo",
        },
        description: {
            control: "text",
            description: "Descripción de la card",
        },
        image: {
            control: "text",
            description: "URL de la imagen",
        },
        imageAlt: {
            control: "text",
            description: "Texto alternativo de la imagen",
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "full"],
            description: "Border radius de la card",
        },
        bordered: {
            control: "boolean",
            description: "Si mostrar el borde de la card",
        },
        borderColor: {
            control: "select",
            options: ["50", "100", "200", "300", "400", "500"],
            description: "Color del borde",
        },
        borderWidth: {
            control: "text",
            description: "Ancho del borde",
        },
    },
};

export default meta;

// Default
export const Default: StoryObj<typeof Card> = {
    args: {
        title: "Card Title",
        description: "This is a card description. It can contain multiple lines of text to describe the content.",
        borderRadius: "md",
        bordered: true,
    },
};

// With Image
export const WithImage: StoryObj<typeof Card> = {
    args: {
        title: "Card with Image",
        description: "This card includes an image at the top.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        imageAlt: "Beautiful landscape",
        borderRadius: "md",
        bordered: true,
    },
};

// With Title Icon
export const WithTitleIcon: StoryObj<typeof Card> = {
    args: {
        title: "Card with Icon",
        titleIcon: "Star",
        description: "This card has an icon next to the title.",
        borderRadius: "md",
        bordered: true,
    },
};

// With Subtitle
export const WithSubtitle: StoryObj<typeof Card> = {
    args: {
        title: "Main Title",
        subtitle: "Subtitle text",
        description: "This card has both a title and a subtitle.",
        borderRadius: "md",
        bordered: true,
    },
};

// With Subtitle Icon
export const WithSubtitleIcon: StoryObj<typeof Card> = {
    args: {
        title: "Main Title",
        subtitle: "Subtitle with icon",
        subtitleIcon: "Clock",
        description: "This card has a subtitle with an icon.",
        borderRadius: "md",
        bordered: true,
    },
};

// Complete Card
export const Complete: StoryObj<typeof Card> = {
    args: {
        title: "Complete Card",
        titleIcon: "Star",
        subtitle: "Subtitle with icon",
        subtitleIcon: "Clock",
        description: "This is a complete card with all features: title with icon, subtitle with icon, description, and image.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
        imageAlt: "Complete card image",
        borderRadius: "md",
        bordered: true,
    },
};

// Without Border
export const WithoutBorder: StoryObj<typeof Card> = {
    args: {
        title: "Card without Border",
        description: "This card doesn't have a border.",
        borderRadius: "md",
        bordered: false,
    },
};

// Border Radius Variations
export const BorderRadiusVariations: StoryObj<typeof Card> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
            <Card
                title="Small Radius"
                description="Card with small border radius"
                borderRadius="sm"
                bordered={true}
            />
            <Card
                title="Medium Radius"
                description="Card with medium border radius (default)"
                borderRadius="md"
                bordered={true}
            />
            <Card
                title="Large Radius"
                description="Card with large border radius"
                borderRadius="lg"
                bordered={true}
            />
            <Card
                title="Full Radius"
                description="Card with full border radius"
                borderRadius="full"
                bordered={true}
            />
            <Card
                title="No Radius"
                description="Card with no border radius"
                borderRadius="none"
                bordered={true}
            />
        </div>
    ),
};

// Border Colors
export const BorderColors: StoryObj<typeof Card> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
            <Card
                title="Light Border"
                description="Card with light gray border"
                borderColor="200"
                bordered={true}
            />
            <Card
                title="Medium Border"
                description="Card with medium gray border"
                borderColor="300"
                bordered={true}
            />
            <Card
                title="Dark Border"
                description="Card with dark gray border"
                borderColor="500"
                bordered={true}
            />
        </div>
    ),
};

// With Children
export const WithChildren: StoryObj<typeof Card> = {
    render: () => (
        <Card
            title="Card with Actions"
            description="This card includes custom children content like buttons."
            borderRadius="md"
            bordered={true}
        >
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <Button variant="primary" size="sm">
                    Primary Action
                </Button>
                <Button variant="secondary" size="sm">
                    Secondary Action
                </Button>
            </div>
        </Card>
    ),
};

// Image Only
export const ImageOnly: StoryObj<typeof Card> = {
    args: {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
        imageAlt: "Image only card",
        borderRadius: "md",
        bordered: true,
    },
};

// Title and Image
export const TitleAndImage: StoryObj<typeof Card> = {
    args: {
        title: "Title with Image",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
        imageAlt: "Title and image card",
        borderRadius: "md",
        bordered: true,
    },
};

// Multiple Cards
export const MultipleCards: StoryObj<typeof Card> = {
    render: () => (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px",
                maxWidth: "1200px",
            }}
        >
            <Card
                title="Card 1"
                titleIcon="Home"
                description="First card with icon and description."
                image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                borderRadius="md"
                bordered={true}
            />
            <Card
                title="Card 2"
                subtitle="Subtitle"
                description="Second card with subtitle and description."
                borderRadius="md"
                bordered={true}
            />
            <Card
                title="Card 3"
                titleIcon="Star"
                subtitle="With icons"
                subtitleIcon="Clock"
                description="Third card with title icon, subtitle icon, and description."
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                borderRadius="md"
                bordered={true}
            />
        </div>
    ),
};
