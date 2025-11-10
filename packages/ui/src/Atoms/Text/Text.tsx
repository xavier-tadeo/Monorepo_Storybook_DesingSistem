import React from "react";
import { typography } from "@ds/tokens";

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps {
    as?: TextElement;
    size?: keyof typeof typography.fontSizes;
    weight?: keyof typeof typography.fontWeights;
    lineHeight?: keyof typeof typography.lineHeights;
    letterSpacing?: keyof typeof typography.letterSpacings;
    font?: keyof typeof typography.fonts;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
    as = "p",
    size = "md",
    weight = "regular",
    lineHeight = "normal",
    letterSpacing = "normal",
    font = "body",
    children,
    className,
    style,
    ...props
}) => {
    const textStyle: React.CSSProperties = {
        fontSize: typography.fontSizes[size],
        fontWeight: typography.fontWeights[weight],
        lineHeight: typography.lineHeights[lineHeight],
        letterSpacing: typography.letterSpacings[letterSpacing],
        fontFamily: typography.fonts[font],
        ...style,
    };

    const Component = as;

    return (
        <Component className={className} style={textStyle} {...props}>
            {children}
        </Component>
    );
};

Text.displayName = "Text";