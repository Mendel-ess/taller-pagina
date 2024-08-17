import React from "react";
import { LuServerCog } from "react-icons/lu";
import { TbCloudComputing,TbCloudLock,TbCloudCode, TbCloudCog   } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { SiCloudinary } from "react-icons/si";
import { BsClouds } from "react-icons/bs";
import { GrDeploy, GrServerCluster } from "react-icons/gr";
import { Card } from "../components/card";


export const Home = () => {

    return (
        <div className="bg-indigo-100">
                <div className="flex justify-center py-3 m-4 bg-indigo-300 rounded-xl shadow-xl">
                    <TbCloudComputing className="size-32 font-medium text-center"/>
                    <h1 className="px-2 py-12 text-3xl font-medium text-center">ARQUITECTURA DE LA NUBE: MODELOS DE SERVICIO Y DESPLIEGUE</h1>
                </div>
                <div className="grid grid-cols-3 gap-3 h-screen">
                    <Card 
                        icon={<GrDeploy className="size-20"/>}
                        title="Modelo de Despliegue"
                        ruta="/modelo-despliegue"
                    />
                    <Card 
                        icon={<LuServerCog  className="size-20"/>}
                        title="Modelo de Servicio"
                        ruta="/modelo-servicio"
                    />
                    <Card 
                        icon={<TbCloudLock className="size-20"/>}
                        title="Nube Privada"
                        ruta="/nube-privada"
                    />
                    <Card 
                        icon={<IoCloudUploadOutline className="size-20"/>}
                        title="Nube Comunitaria"
                        ruta="/nube-comunitaria"
                    />
                    <Card 
                        icon={<SiCloudinary className="size-20"/>}
                        title="Nube Pública"
                        ruta="/nube-publica"
                    />
                    <Card 
                        icon={<BsClouds className="size-20"/>}
                        title="Nube Híbrida"
                        ruta="/nube-hibrida"
                    />
                    <Card 
                        icon={<GrServerCluster className="size-20"/>}
                        title="Infraestructura como Servicio"
                        ruta="/iaas"
                    />
                    <Card 
                        icon={<TbCloudCode  className="size-20"/>}
                        title="Plataforma como Servicio"
                        ruta="/paas"
                    />
                    <Card 
                        icon={<TbCloudCog  className="size-20"/>}
                        title="Software como servicio"
                        ruta="/saas"
                    />
                </div>
        </div>
    );

}


