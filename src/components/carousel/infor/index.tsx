import { Button, Space, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/amountProductsInCart";

import "./index.scss";

const { Title, Paragraph } = Typography;

interface InformationInCart {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice: number;
}

function InforCarousel(props: InformationInCart) {
  const navigate = useNavigate();
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-full items-start pt-20 pl-28 inforCarousel">
      <div className="flex flex-col justify-start items-start">
        <Title level={4} className="capitalize secondLightColor">
          great design collection
        </Title>
        <Title level={1} className="capitalize secondBoldColor nameProduct">
          {props.title}
        </Title>
        <Paragraph className="text-ellipsis text-base text-left leading-8 secondLightColor">
          {props.description}
        </Paragraph>
        <div className="flex items-start pt-4">
          <div className="flex font-medium price">$ {props.price}</div>
          <del className="secondLightColor pl-4 font-medium">
            $ {props.oldPrice}
          </del>
        </div>
        <Space className="my-8 styleMobile">
          <Button
            type="primary"
            onClick={() => {
              dispatch(addToCart(props));
            }}
            className="text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
          >
            <PlusCircleOutlined className="hover:mainColor align-[0.1em]" />
            Add To Cart
          </Button>

          <Button
            type="primary"
            onClick={() => moveToDetailProductPage(props.id)}
            className="text-base font-medium secondColorBg mainColor border-slate-100 buttonMore"
          >
            More Info
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default InforCarousel;
