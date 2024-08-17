import React from "react";


export const Info = ({title, text}) => {

    return (
        <div className="w-auto h-1/2 bg-indigo-100 rounded-xl shadow-xl content-center">
            <h1 className="text-4xl font-medium text-center">{title}</h1>
            <p className="text-xl text-center pt-4 mx-12">{text}</p>
        </div>
    );
}