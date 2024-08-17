import React from "react";
import { Info } from "../components/info";

export const Paas = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Plataforma como Servicio"
                text="Al usuario se le permite desplegar aplicaciones propias 
                (ya sean adquiridas o desarrolladas por el mismo) en la infraestructura de la nube de su proveedor,
                quien ofrece la plataforma de desarrollo y las herramientas de programación. En este caso,
                es el usuario quien mantiene el control de la aplicación, aunque no de toda la infraestructura
                subyacente."
            />
        </div>
    );
}