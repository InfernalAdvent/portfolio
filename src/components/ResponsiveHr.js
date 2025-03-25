import { useState, useEffect } from "react";

const ResponsiveHr = ({ smallWidth = "25%", largeWidth = "70%", className = "responsive-hr" }) => {      /* Définition des props et de l'état */
    const [hrWidth, setHrWidth] = useState(window.innerWidth < 576 ? smallWidth : largeWidth);  /* Si l'écran fait moins de 576px on applique smallWidth, sinon largeWidth */

    useEffect(() => { /* On utilise useEffect pour gérer le redimmensionnement */
        const updateWidth = () => {
            setHrWidth(window.innerWidth < 576 ? smallWidth : largeWidth);
        };

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [smallWidth, largeWidth]);

    return (
        <hr 
            style={{ width: hrWidth, maxWidth: "70%", display: "block", margin: "auto", }} 
            className={`border-primary border-5 opacity-100 my-3 ${className}`}
        />
    );
};

export default ResponsiveHr;