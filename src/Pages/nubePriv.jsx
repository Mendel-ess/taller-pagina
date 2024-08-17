import React from "react";
import { Info } from "../components/info";

export const NubePriv = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Nube Privada"
                text="En una nube privada, los servicios de la nube no se ofrecen al público en general.
                La infraestructura es íntegramente gestionada por una organización."
            /> 
        </div>
    );
}