import React from "react";
import Title from "./title";
import Price from "./price";
import Description from "./description";
import ButtonComponent from "./button";

function InforBigAdver(props: any) { 
    return (
        <div className="items-start pt-10 pr-4 inforAdvertisementProducts">
            <Title />
            <Description />
            <Price />
            <ButtonComponent />
        </div>
    )
}

export default InforBigAdver;