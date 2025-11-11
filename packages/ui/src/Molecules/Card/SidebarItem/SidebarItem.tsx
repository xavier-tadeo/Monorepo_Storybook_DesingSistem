"use client";

import React from "react";
import { colors, radius, spacing } from "@ds/tokens";
import { Icon } from "../../../Atoms/Icon/Icon";
import { Text } from "../../../Atoms/Text/Text";
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
                gap: spacing.sm,
                padding: `${spacing.sm} ${spacing.md}`,
                borderRadius: radius.md,
                backgroundColor: backgroundColor,
                border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                width: "100%",
                textAlign: "left",
                transition: "all 0.2s ease-in-out",
                ...style,
            }}
            aria-label={label}
            aria-current={active ? "page" : undefined}
        >
            {icon && (
                <Icon
                    name={icon}
                    size={iconSize}
                    color={itemColor}
                    aria-hidden="true"
                />
            )}
            <Text
                as="span"
                size="md"
                weight={active ? "medium" : "regular"}
                color={itemColor}
            >
                {label}
            </Text>
        </button>
    );
};

SidebarItem.displayName = "SidebarItem";

