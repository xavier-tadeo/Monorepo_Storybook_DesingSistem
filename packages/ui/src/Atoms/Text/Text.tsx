import React from "react";
import { typography, colors } from "@ds/tokens";

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type ColorKey = keyof Omit<typeof colors, "gray">;
type ColorValue = ColorKey | string;

interface TextProps {
    as?: TextElement;
    size?: keyof typeof typography.fontSizes;
    weight?: keyof typeof typography.fontWeights;
    lineHeight?: keyof typeof typography.lineHeights;
    letterSpacing?: keyof typeof typography.letterSpacings;
    font?: keyof typeof typography.fonts;
    color?: ColorValue;
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
    color: colorProp,
    children,
    className,
    style,
    ...props
}) => {
    const getColor = (): string => {
        // Si se pasa la prop color, tiene prioridad
        if (colorProp) {
            // Si es una clave de colors, devolver el valor correspondiente
            if (colorProp in colors && colorProp !== "gray") {
                return colors[colorProp as ColorKey];
            }
            // Si no, devolver el string directamente (color personalizado)
            return colorProp;
        }

        // Si no se pasa color prop, usar el color del style si existe
        if (style?.color) {
            return style.color as string;
        }

        // Por defecto, usar colors.text
        return colors.text;
    };

    // Extraer color del style para evitar duplicados
    const { color: _, ...restStyle } = style || {};

    const textStyle: React.CSSProperties = {
        fontSize: typography.fontSizes[size],
        fontWeight: typography.fontWeights[weight],
        lineHeight: typography.lineHeights[lineHeight],
        letterSpacing: typography.letterSpacings[letterSpacing],
        fontFamily: typography.fonts[font],
        color: getColor(),
        ...restStyle,
    };

    const Component = as;

    return (
        <Component className={className} style={textStyle} {...props}>
            {children}
        </Component>
    );
};

Text.displayName = "Text";