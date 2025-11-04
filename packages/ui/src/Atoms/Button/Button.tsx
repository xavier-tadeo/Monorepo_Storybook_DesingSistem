import React from "react";
import { colors, radius } from "@ds/tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    children,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const background =
        variant === "primary"
            ? colors.primary
            : variant === "secondary"
                ? colors.secondary
                : "transparent";

    const color = variant === "tertiary" ? colors.text : colors.background;
    const colorHover = variant === "tertiary" ? colors.background : colors.primary;
    const backgroundHover = variant === "tertiary" ? colors.primary : colors.background;
    return (
        <button
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? backgroundHover : background,
                border: "none",
                color: isHovered ? colorHover : color,
                borderRadius: radius.md,
                padding: "8px 16px",
                cursor: "pointer",
                textDecoration:
                    variant === "tertiary" && isHovered ? "underline" : "none"
            }}
        >
            {children}
        </button>
    );
};
