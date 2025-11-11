"use client";

import React from "react";
import { colors, radius, spacing } from "@ds/tokens";
import { Icon } from "../../Atoms/Icon/Icon";
import { Text } from "../../Atoms/Text/Text";
import * as LucideIcons from "lucide-react";

interface SidebarItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    /**
     * Icono a mostrar (nombre del icono de lucide-react)
     */
    icon?: keyof typeof LucideIcons;
    /**
     * Texto a mostrar
     */
    label: string;
    /**
     * Si el item está activo
     */
    active?: boolean;
    /**
     * Función a ejecutar cuando se hace click
     */
    onClick?: () => void;
    /**
     * Tamaño del icono
     */
    iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | string | number;
    /**
     * Color del icono y texto cuando está activo
     */
    activeColor?: keyof Omit<typeof colors, "gray"> | string;
    /**
     * Color del icono y texto cuando está inactivo
     */
    inactiveColor?: keyof Omit<typeof colors, "gray"> | string;
    /**
     * Si el sidebar está colapsado (solo muestra el icono)
     */
    collapsed?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    label,
    active = false,
    onClick,
    iconSize = "md",
    activeColor = "primary",
    inactiveColor = "textMuted",
    disabled = false,
    collapsed = false,
    className,
    style,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Determinar el color según el estado
    const getColor = (): string => {
        if (active) {
            return typeof activeColor === "string" && activeColor in colors && activeColor !== "gray"
                ? colors[activeColor as keyof Omit<typeof colors, "gray">]
                : activeColor;
        }

        if (isHovered && !disabled) {
            return typeof activeColor === "string" && activeColor in colors && activeColor !== "gray"
                ? colors[activeColor as keyof Omit<typeof colors, "gray">]
                : activeColor;
        }

        return typeof inactiveColor === "string" && inactiveColor in colors && inactiveColor !== "gray"
            ? colors[inactiveColor as keyof Omit<typeof colors, "gray">]
            : inactiveColor;
    };

    const itemColor = getColor();

    // Determinar el color de fondo
    const getBackgroundColor = (): string => {
        if (active) {
            return colors.background;
        }
        if (isHovered && !disabled) {
            return colors.background;
        }
        return "transparent";
    };

    const backgroundColor = getBackgroundColor();

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    return (
        <button
            {...props}
            disabled={disabled}
            onClick={handleClick}
            onMouseEnter={() => !disabled && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={className}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? 0 : spacing.sm,
                padding: collapsed ? spacing.sm : `${spacing.sm} ${spacing.md}`,
                minHeight: "40px",
                height: "40px",
                borderRadius: radius.md,
                backgroundColor: backgroundColor,
                border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                width: "100%",
                minWidth: collapsed ? "auto" : undefined,
                textAlign: collapsed ? "center" : "left",
                transition: "background-color 0.2s ease-in-out, padding 0.3s ease-in-out, gap 0.3s ease-in-out",
                position: "relative",
                flexShrink: 0,
                ...style,
            }}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            title={collapsed ? label : undefined}
        >
            {icon && (
                <Icon
                    name={icon}
                    size={iconSize}
                    color={itemColor}
                    aria-hidden="true"
                    style={{
                        flexShrink: 0,
                    }}
                />
            )}
            <Text
                as="span"
                size="md"
                weight={active ? "medium" : "regular"}
                color={itemColor}
                style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: collapsed ? 0 : 1,
                    width: collapsed ? 0 : "auto",
                    maxWidth: collapsed ? 0 : "100%",
                    transition: "opacity 0.2s ease-in-out, width 0.3s ease-in-out, max-width 0.3s ease-in-out",
                    pointerEvents: collapsed ? "none" : "auto",
                }}
            >
                {label}
            </Text>
        </button>
    );
};

SidebarItem.displayName = "SidebarItem";

