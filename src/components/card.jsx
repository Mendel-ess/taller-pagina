import React from "react";
import { Link } from "react-router-dom";

export const Card = ({icon, title, ruta}) => {
    return (
        <div className="px-4">
            <Link className="" to={ruta}>
            <div className="flex flex-col justify-center bg-white rounded-xl shadow-xl">
                <div className="flex justify-center pt-4">
                    {icon}
                </div>
                <p className="px-2 py-2 text-2xl font-medium text-center">{title}</p>
            </div>
            </Link>
        </div>
    );
}