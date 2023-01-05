import React from "react";
import Title from "./title";
import Price from "./price";
import Description from "./description";
import ButtonComponent from "./button";
import './bigAdverInfor.scss';

function InforBigAdver(props: any) { 
    return (
        <div className="items-start p-12 inforAdvertisementProducts">
            <Title />
            <Description />
            <Price />
            <ButtonComponent />
        </div>
    )
}

export default InforBigAdver;