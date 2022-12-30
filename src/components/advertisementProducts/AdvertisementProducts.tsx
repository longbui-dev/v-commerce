import { Col, Row } from "antd";
import BigAdver from "./bigAdver";
import SmallAdver from "./smallAdver";
import smallAdver1 from "../../assets/img/smallAdver1";
import smallAdver2 from "../../assets/img/smallAdver2";

function AdvertisementProducts() {
    return (
      <Row className="flex justify-around p-24 w-full">
        <Col span={6} className="flex justify-center">
          <SmallAdver image={smallAdver1} title='aim chair' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit." />
        </Col>
        <Col span={12} className="flex justify-center"><BigAdver /></Col>
        <Col span={6} className="flex justify-center">
          <SmallAdver image={smallAdver2} title='Hanging Lamp' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit."/>
        </Col>
      </Row>
    );
}

export default AdvertisementProducts;