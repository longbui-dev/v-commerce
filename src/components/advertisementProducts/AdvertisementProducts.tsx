import { Col, Row } from "antd";
import BigAdver from "./bigAdver";
import SmallAdver from "./smallAdver";
import smallAdver1 from "../../assets/img/smallAdver1";
import smallAdver2 from "../../assets/img/smallAdver2";
import './AdvertisementProducts.scss'

function AdvertisementProducts() {
    return (
      <div className="flex justify-center">
        <Row className="flex justify-around py-24 px-12 container AdvertisementProducts" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6} className="flex justify-center gutter-row AdvertisementProductsIpad">
            <SmallAdver image={smallAdver1} title='aim chair' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit." />
          </Col>
          <Col span={12} className="flex justify-center gutter-row AdvertisementProductsIpad"><BigAdver /></Col>
          <Col span={6} className="flex justify-center gutter-row AdvertisementProductsIpad">
            <SmallAdver image={smallAdver2} title='Hanging Lamp' description="Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit."/>
          </Col>
        </Row>
      </div>
    );
}

export default AdvertisementProducts;