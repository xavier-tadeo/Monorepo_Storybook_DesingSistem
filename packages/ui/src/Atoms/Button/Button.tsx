"use client";

import React from "react";
import { colors, radius, spacing, typography } from "@ds/tokens";
import { Text } from "../Text/Text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary" | "error" | "success" | "warning";
    size?: "sm" | "md" | "lg";
    textSize?: keyof typeof typography.fontSizes;
    textWeight?: keyof typeof typography.fontWeights;
    textFont?: keyof typeof typography.fonts;
    textLineHeight?: keyof typeof typography.lineHeights;
    textLetterSpacing?: keyof typeof typography.letterSpacings;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    textSize = "md",
    textWeight = "medium",
    textFont = "body",
    textLineHeight = "normal",
    textLetterSpacing = "normal",
    disabled = false,
    children,
    style,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

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

    const isTextComponent = React.isValidElement(children) &&
        (children.type === Text ||
            (typeof children.type === "object" && (children.type as any)?.displayName === "Text"));

    return (
        <button
            {...props}
            disabled={disabled}
            onMouseEnter={() => !disabled && setIsHovered(true)}
            onMouseLeave={() => !disabled && setIsHovered(false)}
            style={{
                background: isHovered && !disabled ? colors.surface : buttonColor,
                border: "none",
                color: isHovered && !disabled ? buttonColor : colors.surface,
                borderRadius: radius.md,
                padding: getSize(),
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                ...style,
            }}
        >
            {isTextComponent ? (
                children
            ) : (
                <Text
                    as="span"
                    size={textSize}
                    weight={textWeight}
                    font={textFont}
                    lineHeight={textLineHeight}
                    letterSpacing={textLetterSpacing}
                    style={{ color: "inherit" }}
                >
                    {children}
                </Text>
            )}
        </button>
    );
};
