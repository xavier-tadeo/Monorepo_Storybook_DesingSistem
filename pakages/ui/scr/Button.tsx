import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => (
    <button
        style={{
            background: "#0070f3",
            color: "white",
            padding: "10px 16px",
            borderRadius: 8
        }}
    >
        {children}
    </button>
);
