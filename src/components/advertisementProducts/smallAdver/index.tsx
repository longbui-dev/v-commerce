import { Card } from "antd";
import "./index.scss";

const { Meta } = Card;

interface PropsSmallAdver {
  image: string;
  title: string;
  description: string;
}

const SmallAdver = (props: PropsSmallAdver) => (
  <Card
    hoverable
    cover={
      <img
        alt="advertimentProducts"
        src={props.image}
        className="px-14 py-6 smallAdverImg"
      />
    }
    className="w-60 secondColorBg productHover"
  >
    <Meta
      className="capitalize text-center smallAdverInfor"
      title={props.title}
      description={props.description}
    />
  </Card>
);

export default SmallAdver;
