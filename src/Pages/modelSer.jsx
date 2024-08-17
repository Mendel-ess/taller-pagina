import React from "react";
import { Info } from "../components/info";

export const ModelSer = () => {

    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Modelo de Servicio"
                text="Se refiere a los tipos específicos de servicios a 
                los que se puede acceder en una plataforma de computación en 
                la nube (software como servicio, plataforma como servicio e infraestructura como servicio)."
            />
        </div>
    );
}