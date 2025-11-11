import { SidebarItem } from "./SidebarItem";
import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@ds/tokens";
import { Text } from "../../Atoms/Text/Text";

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem,
    title: "Molecules/SidebarItem",
    argTypes: {
        icon: {
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
                "Map",
                "Globe",
                "Link",
                "Download",
                "Upload",
            ],
            description: "Icono de lucide-react a mostrar",
        },
        label: {
            control: "text",
            description: "Texto del item",
        },
        active: {
            control: "boolean",
            description: "Si el item está activo",
        },
        iconSize: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            description: "Tamaño del icono",
        },
        activeColor: {
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
            description: "Color cuando está activo",
        },
        inactiveColor: {
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
            description: "Color cuando está inactivo",
        },
        disabled: {
            control: "boolean",
            description: "Si el item está deshabilitado",
        },
    },
};

export default meta;

// Default
export const Default: StoryObj<typeof SidebarItem> = {
    args: {
        icon: "Home",
        label: "Home",
        active: false,
    },
};

// Active State
export const Active: StoryObj<typeof SidebarItem> = {
    args: {
        icon: "Home",
        label: "Home",
        active: true,
    },
};

// Without Icon
export const WithoutIcon: StoryObj<typeof SidebarItem> = {
    args: {
        label: "Menu Item",
        active: false,
    },
};

// With Action
export const WithAction: StoryObj<typeof SidebarItem> = {
    args: {
        icon: "Settings",
        label: "Settings",
        active: false,
        onClick: () => {
            alert("Settings clicked!");
        },
    },
};

// Multiple Items
export const MultipleItems: StoryObj<typeof SidebarItem> = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "250px",
                padding: "16px",
                backgroundColor: colors.surface,
                borderRadius: "8px",
            }}
        >
            <SidebarItem icon="Home" label="Home" active={true} />
            <SidebarItem icon="User" label="Profile" active={false} />
            <SidebarItem icon="Settings" label="Settings" active={false} />
            <SidebarItem icon="Bell" label="Notifications" active={false} />
            <SidebarItem icon="Mail" label="Messages" active={false} />
        </div>
    ),
};

// Icon Sizes
export const IconSizes: StoryObj<typeof SidebarItem> = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "250px",
            }}
        >
            <SidebarItem icon="Home" label="Small Icon" iconSize="sm" />
            <SidebarItem icon="Home" label="Medium Icon (default)" iconSize="md" />
            <SidebarItem icon="Home" label="Large Icon" iconSize="lg" />
        </div>
    ),
};

// Colors
export const Colors: StoryObj<typeof SidebarItem> = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "250px",
            }}
        >
            <SidebarItem
                icon="Home"
                label="Primary Color"
                active={true}
                activeColor="primary"
            />
            <SidebarItem
                icon="User"
                label="Secondary Color"
                active={true}
                activeColor="secondary"
            />
            <SidebarItem
                icon="Settings"
                label="Tertiary Color"
                active={true}
                activeColor="tertiary"
            />
            <SidebarItem
                icon="Bell"
                label="Success Color"
                active={true}
                activeColor="success"
            />
        </div>
    ),
};

// Disabled State
export const Disabled: StoryObj<typeof SidebarItem> = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "250px",
            }}
        >
            <SidebarItem icon="Home" label="Normal Item" active={false} />
            <SidebarItem icon="Settings" label="Disabled Item" disabled={true} />
            <SidebarItem icon="User" label="Active Item" active={true} />
        </div>
    ),
};

// Sidebar Example
export const SidebarExample: StoryObj<typeof SidebarItem> = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "280px",
                padding: "24px",
                backgroundColor: colors.surface,
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div
                style={{
                    marginBottom: "16px",
                    paddingBottom: "16px",
                    borderBottom: `1px solid ${colors.gray[200]}`,
                }}
            >
                <Text
                    as="h3"
                    size="lg"
                    weight="bold"
                    color="text"
                    style={{ margin: 0 }}
                >
                    Navigation
                </Text>
            </div>
            <SidebarItem
                icon="Home"
                label="Dashboard"
                active={true}
                onClick={() => console.log("Dashboard clicked")}
            />
            <SidebarItem
                icon="User"
                label="Profile"
                active={false}
                onClick={() => console.log("Profile clicked")}
            />
            <SidebarItem
                icon="Folder"
                label="Projects"
                active={false}
                onClick={() => console.log("Projects clicked")}
            />
            <SidebarItem
                icon="Mail"
                label="Messages"
                active={false}
                onClick={() => console.log("Messages clicked")}
            />
            <SidebarItem
                icon="Bell"
                label="Notifications"
                active={false}
                onClick={() => console.log("Notifications clicked")}
            />
            <div
                style={{
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: `1px solid ${colors.gray[200]}`,
                }}
            >
                <SidebarItem
                    icon="Settings"
                    label="Settings"
                    active={false}
                    onClick={() => console.log("Settings clicked")}
                />
            </div>
        </div>
    ),
};
