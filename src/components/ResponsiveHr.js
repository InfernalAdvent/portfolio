import { useState, useEffect } from "react";

const ResponsiveHr = ({ smallWidth = "25%", largeWidth = "100%", className = "" }) => {
    const [hrWidth, setHrWidth] = useState(window.innerWidth < 576 ? smallWidth : largeWidth);

    useEffect(() => {
        const updateWidth = () => {
            setHrWidth(window.innerWidth < 576 ? smallWidth : largeWidth);
        };

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [smallWidth, largeWidth]);

    return (
        <hr 
            style={{ width: hrWidth, maxWidth: "100%", display: "block", margin: "auto" }} 
            className={`border-primary border-5 opacity-100 my-3 ${className}`}
        />
    );
};

export default ResponsiveHr;