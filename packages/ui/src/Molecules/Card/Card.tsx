import React from "react";
import { colors, radius, spacing } from "@ds/tokens";
import { Text } from "../../Atoms/Text/Text";
import { Icon } from "../../Atoms/Icon/Icon";
import * as LucideIcons from "lucide-react";

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Título de la card
     */
    title?: string;
    /**
     * Icono del título (nombre del icono de lucide-react)
     */
    titleIcon?: keyof typeof LucideIcons;
    /**
     * Subtítulo de la card
     */
    subtitle?: string;
    /**
     * Icono del subtítulo (nombre del icono de lucide-react)
     */
    subtitleIcon?: keyof typeof LucideIcons;
    /**
     * Descripción de la card
     */
    description?: string;
    /**
     * URL de la imagen
     */
    image?: string;
    /**
     * Texto alternativo de la imagen
     */
    imageAlt?: string;
    /**
     * Border radius de la card
     */
    borderRadius?: keyof typeof radius;
    /**
     * Si mostrar el borde de la card
     */
    bordered?: boolean;
    /**
     * Color del borde (clave de colors.gray o color personalizado)
     */
    borderColor?: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | string;
    /**
     * Ancho del borde
     */
    borderWidth?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    titleIcon,
    subtitle,
    subtitleIcon,
    description,
    image,
    imageAlt,
    borderRadius = "md",
    bordered = true,
    borderColor = "200",
    borderWidth = "1px",
    className,
    style,
    children,
    ...props
}) => {
    const getBorderColor = (): string => {
        if (!borderColor) {
            return colors.gray[200];
        }

        if (typeof borderColor === "string") {
            // Verificar si es una clave válida de colors.gray
            if (borderColor in colors.gray) {
                return colors.gray[borderColor as unknown as keyof typeof colors.gray];
            }
            // Si no es una clave de gray, devolver el valor directamente (color personalizado)
            return borderColor;
        }

        return colors.gray[200];
    };

    const cardStyle: React.CSSProperties = {
        backgroundColor: colors.surface,
        borderRadius: radius[borderRadius],
        padding: spacing.lg,
        border: bordered ? `${borderWidth} solid ${getBorderColor()}` : "none",
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        ...style,
    };

    return (
        <div {...props} className={className} style={cardStyle}>
            {/* Imagen */}
            {image && (
                <div
                    style={{
                        width: `calc(100% + ${spacing.lg} * 2)`,
                        marginTop: `-${spacing.lg}`,
                        marginLeft: `-${spacing.lg}`,
                        marginRight: `-${spacing.lg}`,
                        marginBottom: spacing.md,
                        borderRadius: borderRadius === "none"
                            ? "0"
                            : borderRadius === "full"
                                ? radius.full
                                : `${radius[borderRadius]} ${radius[borderRadius]} 0 0`,
                        overflow: "hidden",
                        backgroundColor: colors.gray[100],
                        position: "relative",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        height: 0,
                    }}
                >
                    <img
                        src={image}
                        alt={imageAlt || title || "Card image"}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                        }}
                    />
                </div>
            )}

            {/* Título con icono */}
            {title && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: spacing.sm,
                    }}
                >
                    {titleIcon && (
                        <Icon
                            name={titleIcon}
                            size="md"
                            color="text"
                        />
                    )}
                    <Text
                        as="h3"
                        size="lg"
                        weight="bold"
                        font="heading"
                        color="text"
                        style={{ margin: 0, flex: 1 }}
                    >
                        {title}
                    </Text>
                </div>
            )}

            {/* Subtítulo con icono */}
            {subtitle && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: spacing.sm,
                    }}
                >
                    {subtitleIcon && (
                        <Icon
                            name={subtitleIcon}
                            size="sm"
                            color="textMuted"
                        />
                    )}
                    <Text
                        as="h4"
                        size="md"
                        weight="medium"
                        font="heading"
                        color="textMuted"
                        style={{ margin: 0, flex: 1 }}
                    >
                        {subtitle}
                    </Text>
                </div>
            )}

            {/* Descripción */}
            {description && (
                <Text
                    as="p"
                    size="md"
                    weight="regular"
                    font="body"
                    color="text"
                    lineHeight="relaxed"
                    style={{ margin: 0 }}
                >
                    {description}
                </Text>
            )}

            {/* Contenido adicional (children) */}
            {children}
        </div>
    );
};

Card.displayName = "Card";
