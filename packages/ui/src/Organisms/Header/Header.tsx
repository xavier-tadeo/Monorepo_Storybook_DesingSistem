import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    description,
    image,
    link,
    ...props
}) => {
    return <div {...props}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={title} />
        <a href={link}>{link}</a>
    </div>;
};