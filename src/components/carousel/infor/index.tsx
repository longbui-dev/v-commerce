import Title from "./title";
import Price from "./price";
import Description from "./description";
import ButtonComponent from "./button";
import './Carousel.scss'

function InforCarousel(props: any) { 
    return (
        <div className="w-full items-start pt-20 pl-48 inforCarousel">
            <Title />
            <Description />
            <Price />
            <ButtonComponent />
        </div>
    )
}

export default InforCarousel;