import React from "react";

function Description(props: any) { 
    return (
        <div className="flex flex-col justify-start">
            <p className="text-ellipsis overflow-hidden ... pt-4 text-sm text-left text-stone-400 w-46 h-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
    )
}

export default Description;