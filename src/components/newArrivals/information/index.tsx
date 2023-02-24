import { Typography } from "antd";
import "../../../App.scss";

const { Title } = Typography;
interface PropsInformationNewArrivals {
  title: string;
  price: number;
}

function InformationNewArrivals(props: PropsInformationNewArrivals) {
  return (
    <div className="p-4">
      <Title level={5} className="flex justify-center titleColor textHover">
        {props.title}
      </Title>
      <p className="flex justify-center mt-2 text-base titleColor">
        ${props.price}
      </p>
    </div>
  );
}

export default InformationNewArrivals;
