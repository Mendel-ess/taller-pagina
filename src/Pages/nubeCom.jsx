import React from "react";
import { Info } from "../components/info";

export const NubeComun = () => {
    return (
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Nube Comunitaria"
                text="Una nube comunitaria (community) es aquella que 
                ha sido organizada para servir a una función o propósito común.
                Puede ser utilizada por una o varias organizaciones que comparten objetivos comunes,
                como políticas, misión, seguridad y necesidades de cumplimiento normativo (compliance). 
                Una nube comunitaria puede ser administrada por las organizaciones constituyentes o por terceros.
                Este modelo es reconocido principalmente por el NIST; la mayoría de las organizaciones y 
                asociaciones relacionadas con la nube dividen los modelos de despliegue en tres categorías: 
                pública, privada e híbrida."
            />
        </div>
    );
}