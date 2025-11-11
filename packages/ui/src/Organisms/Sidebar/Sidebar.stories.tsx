import { Sidebar, type SidebarItemData } from "./Sidebar";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: "Organisms/Sidebar",
    argTypes: {
        title: {
            control: "text",
            description: "Título del sidebar",
        },
        width: {
            control: "text",
            description: "Ancho del sidebar",
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
        iconSize: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            description: "Tamaño del icono",
        },
        showTitle: {
            control: "boolean",
            description: "Si mostrar el título del sidebar",
        },
        defaultCollapsed: {
            control: "boolean",
            description: "Si el sidebar está colapsado por defecto",
        },
        collapsible: {
            control: "boolean",
            description: "Si el sidebar puede ser colapsado",
        },
        collapsedWidth: {
            control: "text",
            description: "Ancho cuando está colapsado",
        },
    },
};

export default meta;

// Default
export const Default: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
    },
};

// With Sections
export const WithSections: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        sections: [
            {
                title: "Main",
                items: [
                    { id: "home", icon: "Home", label: "Dashboard" },
                    { id: "projects", icon: "Folder", label: "Projects" },
                    { id: "analytics", icon: "BarChart", label: "Analytics" },
                ],
            },
            {
                title: "Account",
                items: [
                    { id: "profile", icon: "User", label: "Profile" },
                    { id: "settings", icon: "Settings", label: "Settings" },
                    { id: "billing", icon: "CreditCard", label: "Billing" },
                ],
            },
        ],
        activeItemId: "home",
    },
};

// Interactive Sidebar
export const Interactive: StoryObj<typeof Sidebar> = {
    render: () => {
        const [activeItemId, setActiveItemId] = React.useState("home");

        const items: SidebarItemData[] = [
            { id: "home", icon: "Home", label: "Dashboard" },
            { id: "projects", icon: "Folder", label: "Projects" },
            { id: "analytics", icon: "BarChart", label: "Analytics" },
            { id: "messages", icon: "Mail", label: "Messages" },
            { id: "notifications", icon: "Bell", label: "Notifications" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ];

        return (
            <div style={{ display: "flex", height: "600px" }}>
                <Sidebar
                    title="Navigation"
                    items={items}
                    activeItemId={activeItemId}
                    onChange={(itemId) => {
                        setActiveItemId(itemId);
                        console.log(`Active item changed to: ${itemId}`);
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        padding: "24px",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <h2>Content Area</h2>
                    <p>Active Item: {activeItemId}</p>
                </div>
            </div>
        );
    },
};

// With Disabled Items
export const WithDisabledItems: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings", disabled: true },
            { id: "billing", icon: "CreditCard", label: "Billing", disabled: true },
        ],
        activeItemId: "home",
    },
};

// Without Title
export const WithoutTitle: StoryObj<typeof Sidebar> = {
    args: {
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        showTitle: false,
    },
};

// Custom Colors
export const CustomColors: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        activeColor: "secondary",
        inactiveColor: "text",
    },
};

// Custom Width
export const CustomWidth: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        width: "320px",
    },
};

// Many Items
export const ManyItems: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        sections: [
            {
                title: "Main",
                items: [
                    { id: "home", icon: "Home", label: "Dashboard" },
                    { id: "projects", icon: "Folder", label: "Projects" },
                    { id: "analytics", icon: "BarChart", label: "Analytics" },
                    { id: "reports", icon: "FileText", label: "Reports" },
                    { id: "calendar", icon: "Calendar", label: "Calendar" },
                ],
            },
            {
                title: "Communication",
                items: [
                    { id: "messages", icon: "Mail", label: "Messages" },
                    { id: "notifications", icon: "Bell", label: "Notifications" },
                    { id: "comments", icon: "MessageSquare", label: "Comments" },
                ],
            },
            {
                title: "Settings",
                items: [
                    { id: "settings", icon: "Settings", label: "Settings" },
                    { id: "billing", icon: "CreditCard", label: "Billing" },
                    { id: "team", icon: "Users", label: "Team" },
                    { id: "security", icon: "Shield", label: "Security" },
                ],
            },
        ],
        activeItemId: "home",
    },
};

// Without Icons
export const WithoutIcons: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", label: "Home" },
            { id: "profile", label: "Profile" },
            { id: "settings", label: "Settings" },
        ],
        activeItemId: "home",
    },
};

// Collapsible Sidebar
export const Collapsible: StoryObj<typeof Sidebar> = {
    render: () => {
        const [activeItemId, setActiveItemId] = React.useState("home");

        const items: SidebarItemData[] = [
            { id: "home", icon: "Home", label: "Dashboard" },
            { id: "projects", icon: "Folder", label: "Projects" },
            { id: "analytics", icon: "BarChart", label: "Analytics" },
            { id: "messages", icon: "Mail", label: "Messages" },
            { id: "notifications", icon: "Bell", label: "Notifications" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ];

        return (
            <div style={{ display: "flex", height: "600px" }}>
                <Sidebar
                    title="Navigation"
                    items={items}
                    activeItemId={activeItemId}
                    onChange={(itemId) => {
                        setActiveItemId(itemId);
                        console.log(`Active item changed to: ${itemId}`);
                    }}
                    collapsible={true}
                />
                <div
                    style={{
                        flex: 1,
                        padding: "24px",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <h2>Content Area</h2>
                    <p>Active Item: {activeItemId}</p>
                    <p>Click the toggle button to collapse/expand the sidebar.</p>
                </div>
            </div>
        );
    },
};

// Collapsed by Default
export const CollapsedByDefault: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        defaultCollapsed: true,
        collapsible: true,
    },
};

// Non-Collapsible
export const NonCollapsible: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        collapsible: false,
    },
};

// Custom Collapsed Width
export const CustomCollapsedWidth: StoryObj<typeof Sidebar> = {
    args: {
        title: "Navigation",
        items: [
            { id: "home", icon: "Home", label: "Home" },
            { id: "profile", icon: "User", label: "Profile" },
            { id: "settings", icon: "Settings", label: "Settings" },
        ],
        activeItemId: "home",
        collapsible: true,
        collapsedWidth: "64px",
    },
};

// Full Example
export const FullExample: StoryObj<typeof Sidebar> = {
    render: () => {
        const [activeItemId, setActiveItemId] = React.useState("dashboard");

        return (
            <div style={{ display: "flex", height: "700px", fontFamily: "system-ui" }}>
                <Sidebar
                    title="My App"
                    sections={[
                        {
                            title: "Main",
                            items: [
                                { id: "dashboard", icon: "Home", label: "Dashboard" },
                                { id: "projects", icon: "Folder", label: "Projects" },
                                { id: "analytics", icon: "BarChart", label: "Analytics" },
                                { id: "reports", icon: "FileText", label: "Reports" },
                            ],
                        },
                        {
                            title: "Communication",
                            items: [
                                { id: "messages", icon: "Mail", label: "Messages" },
                                { id: "notifications", icon: "Bell", label: "Notifications" },
                                { id: "comments", icon: "MessageSquare", label: "Comments" },
                            ],
                        },
                        {
                            title: "Account",
                            items: [
                                { id: "profile", icon: "User", label: "Profile" },
                                { id: "settings", icon: "Settings", label: "Settings" },
                                { id: "billing", icon: "CreditCard", label: "Billing" },
                                { id: "help", icon: "HelpCircle", label: "Help", disabled: true },
                            ],
                        },
                    ]}
                    activeItemId={activeItemId}
                    onChange={(itemId, item) => {
                        setActiveItemId(itemId);
                        console.log(`Navigated to: ${item.label} (${itemId})`);
                    }}
                    width="280px"
                    collapsible={true}
                />
                <main
                    style={{
                        flex: 1,
                        padding: "32px",
                        backgroundColor: "#fafafa",
                        overflowY: "auto",
                    }}
                >
                    <h1 style={{ marginTop: 0, fontSize: "24px", fontWeight: 600 }}>
                        {activeItemId.charAt(0).toUpperCase() + activeItemId.slice(1)}
                    </h1>
                    <p style={{ color: "#666", marginTop: "8px" }}>
                        This is the content area for the {activeItemId} page.
                    </p>
                </main>
            </div>
        );
    },
};

