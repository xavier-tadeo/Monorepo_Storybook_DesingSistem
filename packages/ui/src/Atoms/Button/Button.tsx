"use client";

import React from "react";
import { colors, radius, spacing } from "@ds/tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary" | "error" | "success" | "warning";
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    children,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Obtener el color del botón según la variante
    const getButtonColor = () => {
        switch (variant) {
            case "primary":
                return colors.primary;
            case "secondary":
                return colors.secondary;
            case "tertiary":
                return colors.tertiary;
            case "error":
                return colors.error;
            case "success":
                return colors.success;
            case "warning":
                return colors.warning;
            default:
                return colors.primary;
        }
    };

    const buttonColor = getButtonColor();

    const getSize = () => {
        switch (size) {
            case "sm":
                return `${spacing.xs} ${spacing.sm}`;
            case "md":
                return `${spacing.sm} ${spacing.md}`;
            case "lg":
                return `${spacing.md} ${spacing.lg}`;
            default:
                return `${spacing.sm} ${spacing.md}`;
        }
    };

    return (
        <button
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? colors.surface : buttonColor,
                border: "none",
                color: isHovered ? buttonColor : colors.surface,
                borderRadius: radius.md,
                padding: getSize(),
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    );
};
