"use client";

import React from "react";
import { colors, radius, spacing } from "@ds/tokens";
import { SidebarItem } from "../../Molecules/SidebarItem/SidebarItem";
import { Text } from "../../Atoms/Text/Text";
import { Icon } from "../../Atoms/Icon/Icon";
import * as LucideIcons from "lucide-react";

export interface SidebarItemData {
    /**
     * Identificador único del item
     */
    id: string;
    /**
     * Icono a mostrar (nombre del icono de lucide-react)
     */
    icon?: keyof typeof LucideIcons;
    /**
     * Texto a mostrar
     */
    label: string;
    /**
     * Si el item está deshabilitado
     */
    disabled?: boolean;
    /**
     * Datos adicionales asociados al item
     */
    data?: any;
}

export interface SidebarSection {
    /**
     * Título de la sección (opcional)
     */
    title?: string;
    /**
     * Items de la sección
     */
    items: SidebarItemData[];
}

interface SidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /**
     * Items del sidebar (array plano o array de secciones)
     */
    items?: SidebarItemData[];
    /**
     * Secciones del sidebar (permite agrupar items con títulos)
     */
    sections?: SidebarSection[];
    /**
     * ID del item activo
     */
    activeItemId?: string;
    /**
     * Función que se ejecuta cuando se hace click en un item
     */
    onChange?: (itemId: string, item: SidebarItemData) => void;
    /**
     * Título del sidebar (opcional)
     */
    title?: string;
    /**
     * Ancho del sidebar
     */
    width?: string | number;
    /**
     * Color activo para los items
     */
    activeColor?: keyof Omit<typeof colors, "gray"> | string;
    /**
     * Color inactivo para los items
     */
    inactiveColor?: keyof Omit<typeof colors, "gray"> | string;
    /**
     * Tamaño de los iconos
     */
    iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | string | number;
    /**
     * Si mostrar el título del sidebar
     */
    showTitle?: boolean;
    /**
     * Si el sidebar está colapsado por defecto
     */
    defaultCollapsed?: boolean;
    /**
     * Si el sidebar puede ser colapsado
     */
    collapsible?: boolean;
    /**
     * Ancho cuando está colapsado
     */
    collapsedWidth?: string | number;
    /**
     * Callback cuando cambia el estado de colapsado
     */
    onCollapseChange?: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    items,
    sections,
    activeItemId,
    onChange,
    title,
    width = "280px",
    activeColor = "primary",
    inactiveColor = "textMuted",
    iconSize = "md",
    showTitle = true,
    defaultCollapsed = false,
    collapsible = true,
    collapsedWidth = "80px",
    onCollapseChange,
    className,
    style,
    ...props
}) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

    const handleItemClick = (item: SidebarItemData) => {
        if (!item.disabled && onChange) {
            onChange(item.id, item);
        }
    };

    const handleToggleCollapse = () => {
        if (collapsible) {
            const newCollapsedState = !isCollapsed;
            setIsCollapsed(newCollapsedState);
            if (onCollapseChange) {
                onCollapseChange(newCollapsedState);
            }
        }
    };

    // Convertir items planos a secciones si es necesario
    const getSections = (): SidebarSection[] => {
        if (sections) {
            return sections;
        }
        if (items) {
            return [{ items }];
        }
        return [];
    };

    const sidebarSections = getSections();

    const currentWidth = isCollapsed
        ? typeof collapsedWidth === "number"
            ? `${collapsedWidth}px`
            : collapsedWidth
        : typeof width === "number"
            ? `${width}px`
            : width;

    const sidebarStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: currentWidth,
        height: "100%",
        backgroundColor: colors.surface,
        borderRight: `1px solid ${colors.gray[200]}`,
        paddingTop: spacing.lg,
        paddingBottom: spacing.lg,
        paddingLeft: isCollapsed ? spacing.sm : spacing.lg,
        paddingRight: isCollapsed ? spacing.sm : spacing.lg,
        gap: spacing.md,
        overflowY: "auto",
        overflowX: "hidden",
        transition: "width 0.3s ease-in-out, padding-left 0.3s ease-in-out, padding-right 0.3s ease-in-out",
        position: "relative",
        ...style,
    };

    return (
        <aside
            {...props}
            className={className}
            style={sidebarStyle}
            role="navigation"
            aria-label={title || "Sidebar navigation"}
        >
            {/* Header con título y botón toggle - altura fija */}
            {(showTitle && title) || collapsible ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isCollapsed ? "center" : "space-between",
                        minHeight: "48px",
                        height: "48px",
                        marginBottom: spacing.sm,
                        paddingBottom: spacing.md,
                        paddingTop: spacing.md,
                        borderBottom: `1px solid ${colors.gray[200]}`,
                        gap: spacing.sm,
                        flexShrink: 0,
                        position: "relative",
                    }}
                >
                    {showTitle && title && (
                        <Text
                            as="h2"
                            size="lg"
                            weight="bold"
                            color="text"
                            style={{
                                margin: 0,
                                flex: isCollapsed ? 0 : 1,
                                opacity: isCollapsed ? 0 : 1,
                                width: isCollapsed ? 0 : "auto",
                                transition: "opacity 0.2s ease-in-out, flex 0.3s ease-in-out, width 0.3s ease-in-out",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                pointerEvents: isCollapsed ? "none" : "auto",
                            }}
                        >
                            {title}
                        </Text>
                    )}
                    {collapsible && (
                        <button
                            onClick={handleToggleCollapse}
                            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                            aria-expanded={!isCollapsed}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: spacing.xs,
                                borderRadius: radius.sm,
                                border: "none",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                color: colors.textMuted,
                                transition: "all 0.2s ease-in-out",
                                minWidth: "32px",
                                minHeight: "32px",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.background;
                                e.currentTarget.style.color = colors.text;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = colors.textMuted;
                            }}
                        >
                            <Icon
                                name={isCollapsed ? "ArrowRight" : "ArrowLeft"}
                                size="sm"
                                color="currentColor"
                            />
                        </button>
                    )}
                </div>
            ) : null}

            {sidebarSections.map((section, sectionIndex) => (
                <div
                    key={sectionIndex}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: spacing.xs,
                    }}
                >
                    {section.title && (
                        <div
                            style={{
                                minHeight: isCollapsed ? "0px" : "32px",
                                height: isCollapsed ? "0px" : "auto",
                                padding: isCollapsed ? "0px" : `${spacing.xs} ${spacing.sm}`,
                                marginBottom: isCollapsed ? "0px" : spacing.xs,
                                overflow: "hidden",
                                transition: "min-height 0.3s ease-in-out, height 0.3s ease-in-out, padding 0.3s ease-in-out, margin-bottom 0.3s ease-in-out",
                            }}
                        >
                            <Text
                                as="h3"
                                size="sm"
                                weight="semibold"
                                color="textMuted"
                                style={{
                                    margin: 0,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    opacity: isCollapsed ? 0 : 1,
                                    transition: "opacity 0.2s ease-in-out",
                                }}
                            >
                                {section.title}
                            </Text>
                        </div>
                    )}

                    {section.items.map((item) => (
                        <SidebarItem
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            active={activeItemId === item.id}
                            disabled={item.disabled}
                            onClick={() => handleItemClick(item)}
                            iconSize={iconSize}
                            activeColor={activeColor}
                            inactiveColor={inactiveColor}
                            collapsed={isCollapsed}
                        />
                    ))}

                    {sectionIndex < sidebarSections.length - 1 && (
                        <div
                            style={{
                                minHeight: isCollapsed ? "0px" : "1px",
                                height: isCollapsed ? "0px" : "auto",
                                margin: isCollapsed ? "0px" : `${spacing.md} 0`,
                                borderBottom: isCollapsed ? "none" : `1px solid ${colors.gray[200]}`,
                                overflow: "hidden",
                                transition: "min-height 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out",
                            }}
                        />
                    )}
                </div>
            ))}
        </aside>
    );
};

Sidebar.displayName = "Sidebar";

