import React from "react";
import { Info } from '../components/info'


export const Iaas = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
            title="Infraestructura como Servicio"
            text="El proveedor ofrece al usuario recursos como capacidad de procesamiento, 
                almacenamiento o comunicaciones, que el usuario puede utilizar para ejecutar 
                cualquier tipo de software, desde sistemas operativos hasta aplicaciones."
            />
        </div>
    );
}