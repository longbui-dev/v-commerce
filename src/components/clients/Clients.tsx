import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clients1 from "../../assets/img/imageDetail/clients1.png";
import clients2 from "../../assets/img/imageDetail/clients2.png";
import clients3 from "../../assets/img/imageDetail/clients3.png";
import clients4 from "../../assets/img/imageDetail/clients4.png";
import clients5 from "../../assets/img/imageDetail/clients5.png";
import "./Clients.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
function Clients() {
  return (
    <div className="flex h-52 items-center clients cursor-pointer">
      <div className="container m-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={true}
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          <img src={clients1} alt="client" />
          <img src={clients2} alt="client" />
          <img src={clients3} alt="client" />
          <img src={clients4} alt="client" />
          <img src={clients5} alt="client" />
        </Carousel>
      </div>
    </div>
  );
}

export default Clients;
