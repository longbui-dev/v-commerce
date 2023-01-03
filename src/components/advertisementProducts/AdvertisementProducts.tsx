import { Col, Row } from "antd";
import BigAdver from "./bigAdver";
import SmallAdver from "./smallAdver";
import smallAdver1 from "../../assets/img/smallAdver1";
import smallAdver2 from "../../assets/img/smallAdver2";
import './AdvertisementProducts.scss'

function AdvertisementProducts() {
    return (
      <div>
        <Row className="flex justify-around py-24 px-44 container">
          <Col span={6} className="flex justify-center">
            <SmallAdver image={smallAdver1} title='aim chair' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit." />
          </Col>
          <Col span={12} className="flex justify-center"><BigAdver /></Col>
          <Col span={6} className="flex justify-center">
            <SmallAdver image={smallAdver2} title='Hanging Lamp' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit."/>
          </Col>
        </Row>
      </div>
    );
}

export default AdvertisementProducts;