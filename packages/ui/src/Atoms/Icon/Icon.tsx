import React from "react";
import { colors, sizes } from "@ds/tokens";
import * as LucideIcons from "lucide-react";

type ColorKey = keyof Omit<typeof colors, "gray">;
type ColorValue = ColorKey | string;
type SizeKey = keyof typeof sizes;
type SizeValue = SizeKey | string | number;

// Tipo para los iconos de lucide-react
type LucideIcon = React.ComponentType<{
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
    style?: React.CSSProperties;
}>;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "color" | "size"> {
    /**
     * Nombre del icono de lucide-react (ej: "Heart", "Star", "User")
     * O un componente de icono directamente
     */
    name?: keyof typeof LucideIcons;
    icon?: LucideIcon;
    /**
     * Tamaño del icono
     * Puede ser una clave de sizes ("xs", "sm", "md", "lg", "xl", "2xl", "3xl")
     * O un valor personalizado (string o number)
     */
    size?: SizeValue;
    /**
     * Color del icono
     * Puede ser una clave de colors ("primary", "secondary", "error", etc.)
     * O un valor personalizado (hex, rgb, etc.)
     */
    color?: ColorValue;
    /**
     * Grosor del stroke del icono
     */
    strokeWidth?: string | number;
    /**
     * Etiqueta accesible para el icono
     */
    "aria-label"?: string;
    /**
     * Role para accesibilidad
     */
    role?: string;
    /**
     * Clase CSS personalizada
     */
    className?: string;
    /**
     * Estilos inline personalizados
     */
    style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
    name,
    icon: IconComponent,
    size = "md",
    color,
    strokeWidth = 2,
    "aria-label": ariaLabel,
    role = "img",
    className,
    style,
    ...props
}) => {
    // Determinar qué icono usar
    const getIconComponent = (): LucideIcon | null => {
        if (IconComponent) {
            return IconComponent;
        }
        if (name && name in LucideIcons) {
            const IconFromLucide = LucideIcons[name] as LucideIcon;
            return IconFromLucide;
        }
        return null;
    };

    const IconToRender = getIconComponent();

    if (!IconToRender) {
        if (!name && !IconComponent) {
            console.warn("Icon component requires either a 'name' or 'icon' prop.");
        } else if (name) {
            console.warn(`Icon "${name}" not found in lucide-react. Please check the icon name.`);
        }
        return null;
    }

    // Obtener el tamaño
    const getSize = (): string | number => {
        if (typeof size === "string" && size in sizes) {
            return sizes[size as SizeKey];
        }
        return size;
    };

    const iconSize = getSize();

    // Extraer color del style para evitar conflictos
    const { color: styleColor, ...restStyle } = style || {};

    const iconStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...restStyle,
    };

    // Determinar qué color usar: prop color tiene prioridad, luego style.color, luego default
    const getFinalColor = (): string => {
        // Si se pasa la prop color, tiene prioridad
        if (color !== undefined) {
            // Si es una clave de colors, devolver el valor correspondiente
            if (color in colors && color !== "gray") {
                return colors[color as ColorKey];
            }
            // Si no, devolver el string directamente (color personalizado)
            return color;
        }

        // Si no se pasa color prop, usar el color del style si existe
        if (styleColor) {
            return styleColor as string;
        }

        // Por defecto, usar colors.text
        return colors.text;
    };

    const finalColor = getFinalColor();

    return (
        <IconToRender
            size={iconSize}
            color={finalColor}
            strokeWidth={strokeWidth}
            aria-label={ariaLabel}
            role={role}
            className={className}
            style={iconStyle}
            {...(props as any)}
        />
    );
};

Icon.displayName = "Icon";

