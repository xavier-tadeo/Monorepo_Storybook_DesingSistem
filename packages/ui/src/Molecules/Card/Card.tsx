import React from "react";
import { colors, radius, spacing } from "@ds/tokens";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    image,
    link,
    ...props
}) => {
    return <div {...props} style={{ backgroundColor: colors.background, borderRadius: radius.md, padding: spacing.md }}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>{link}</a>
    </div>;
};