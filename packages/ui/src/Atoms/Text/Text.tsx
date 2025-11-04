import React from "react";
import { typography } from "@ds/tokens";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: keyof typeof typography.fontSizes;
}

export const Text: React.FC<TextProps> = ({
    variant = "md",
    children,
    ...props
}) => {
    return <p {...props} style={{ fontSize: typography.fontSizes[variant] }}>{children}</p>;
};