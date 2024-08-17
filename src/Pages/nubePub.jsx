import React from "react";
import { Info } from "../components/info";

export const NubePub = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Nube Pública"
                text="La infraestructura es operada por un proveedor que ofrece servicios al público en general."
            />
        </div>
    );
}