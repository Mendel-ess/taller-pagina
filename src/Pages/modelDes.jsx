import React from "react";
import { Info } from "../components/info";

export const ModelDes = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Modelo de Despliegue"
                text="Se refiere a la posición (localización) 
                y administración (gestión) de la infraestructura de la nube 
                (pública, privada, comunitaria, híbrida)."
            />
        </div>
    );
}