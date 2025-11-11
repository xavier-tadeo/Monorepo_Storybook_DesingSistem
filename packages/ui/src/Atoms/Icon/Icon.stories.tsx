import { Icon } from "./Icon";
import type { Meta, StoryObj } from "@storybook/react";
import { Heart, Star, User, Settings, Bell, Search, Home, Mail } from "lucide-react";

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: "Atoms/Icon",
    argTypes: {
        name: {
            control: "select",
            options: [
                "Heart",
                "Star",
                "User",
                "Settings",
                "Bell",
                "Search",
                "Home",
                "Mail",
                "ArrowRight",
                "ArrowLeft",
                "Check",
                "X",
                "AlertCircle",
                "Info",
            ],
            description: "Nombre del icono de lucide-react",
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            description: "Tamaño del icono",
        },
        color: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "text",
                "textMuted",
            ],
            description: "Color del icono",
        },
        strokeWidth: {
            control: { type: "number", min: 1, max: 5, step: 0.5 },
            description: "Grosor del stroke del icono",
        },
    },
};

export default meta;

// Default
export const Default: StoryObj<typeof Icon> = {
    args: {
        name: "Heart",
        size: "md",
        color: "primary",
    },
};

// Sizes
export const Sizes: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="xs" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>xs (16px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="sm" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>sm (24px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="md" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>md (32px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>lg (48px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="xl" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>xl (64px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="2xl" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>2xl (96px)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="3xl" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>3xl (128px)</span>
            </div>
        </div>
    ),
};

// Colors
export const Colors: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
                <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    Primary Colors
                </h3>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="primary" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Primary</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="secondary" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Secondary</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="tertiary" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Tertiary</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    Semantic Colors
                </h3>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Star" size="lg" color="success" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Success</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Bell" size="lg" color="warning" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Warning</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Settings" size="lg" color="error" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Error</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    Text Colors
                </h3>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="User" size="lg" color="text" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Text</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="User" size="lg" color="textMuted" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Text Muted</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    Custom Colors
                </h3>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="#FF6B6B" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Custom Red</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="#4ECDC4" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Custom Teal</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <Icon name="Heart" size="lg" color="#95E1D3" />
                        <span style={{ fontSize: "12px", color: "#666" }}>Custom Mint</span>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// Stroke Width
export const StrokeWidth: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="xl" color="primary" strokeWidth={1} />
                <span style={{ fontSize: "12px", color: "#666" }}>Stroke 1</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="xl" color="primary" strokeWidth={1.5} />
                <span style={{ fontSize: "12px", color: "#666" }}>Stroke 1.5</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="xl" color="primary" strokeWidth={2} />
                <span style={{ fontSize: "12px", color: "#666" }}>Stroke 2 (default)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="xl" color="primary" strokeWidth={2.5} />
                <span style={{ fontSize: "12px", color: "#666" }}>Stroke 2.5</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="xl" color="primary" strokeWidth={3} />
                <span style={{ fontSize: "12px", color: "#666" }}>Stroke 3</span>
            </div>
        </div>
    ),
};

// Common Icons
export const CommonIcons: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Home" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Home</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="User" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>User</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Settings" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Settings</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Bell" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Bell</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Search" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Search</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Mail" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Mail</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Heart" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Heart</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Icon name="Star" size="lg" color="primary" />
                <span style={{ fontSize: "12px", color: "#666" }}>Star</span>
            </div>
        </div>
    ),
};

// Using Icon Component Directly
export const UsingIconComponent: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Icon icon={Heart} size="lg" color="primary" />
            <Icon icon={Star} size="lg" color="secondary" />
            <Icon icon={User} size="lg" color="tertiary" />
            <Icon icon={Settings} size="lg" color="error" />
        </div>
    ),
};

// Accessibility
export const Accessibility: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
                <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    With aria-label
                </h3>
                <Icon name="Heart" size="lg" color="primary" aria-label="Favorite" />
            </div>
            <div>
                <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600, color: "#666" }}>
                    With custom role
                </h3>
                <Icon name="Settings" size="lg" color="primary" role="button" aria-label="Settings" />
            </div>
        </div>
    ),
};

