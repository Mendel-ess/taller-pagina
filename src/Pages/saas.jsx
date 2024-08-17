import React from "react";
import { Info } from "../components/info";

export const Saas = () => {
    return ( 
        <div className="container w-screen h-screen content-center mx-auto">
            <Info 
                title="Software como Servicio"
                text="Al usuario se le ofrece la capacidad de que las aplicaciones suministradas 
                por su proveedor corran en una infraestructura de la nube, siendo dichas 
                aplicaciones accesibles a través de un navegador web, como en el caso del correo 
                electrónico web (webmail), que es quizás el ejemplo más representativo de este modelo de 
                servicio debido a su extensión. El usuario carece de control sobre la infraestructura o 
                sobre las propias aplicaciones, excepto por las posibles configuraciones de usuario."
            />
        </div>
    );
}