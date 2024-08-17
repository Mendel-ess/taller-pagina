import React from "react";
import { Info } from "../components/info";

export const NubeHib = () => {

    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Nube Híbrida"
                text="Resultado de la combinación de dos o más nubes individuales que pueden ser propias,
                compartidas o públicas, lo que permite portar datos o aplicaciones entre ellas."
            />
        </div>
    );
}