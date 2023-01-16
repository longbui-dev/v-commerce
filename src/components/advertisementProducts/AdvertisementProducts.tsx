import { Col, Row } from "antd";
import BigAdver from "./bigAdver";
import SmallAdver from "./smallAdver";
import smallAdver1 from "../../assets/img/smallAdver1";
import smallAdver2 from "../../assets/img/smallAdver2";
import { advertisementProducts } from "../../mockdata/AdvertisementProducts";
import './AdvertisementProducts.scss';

function AdvertisementProducts() {
    return (
      <div className="flex justify-center">
        <Row className="flex justify-around py-24 px-12 container AdvertisementProducts" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6} className="flex justify-center gutter-row AdvertisementProductsIpad">
            <SmallAdver image={smallAdver1} productName={advertisementProducts.data[0].productName} description={advertisementProducts.data[0].description} />
          </Col>
          <Col span={12} className="flex justify-center gutter-row AdvertisementProductsIpad">
            <BigAdver 
              productName={advertisementProducts.data[1].productName} 
              description={advertisementProducts.data[1].description} 
              price={advertisementProducts.data[1].price} 
              image={advertisementProducts.data[1].image}
            />
          </Col>
          <Col span={6} className="flex justify-center gutter-row AdvertisementProductsIpad">
            <SmallAdver image={smallAdver2} productName={advertisementProducts.data[2].productName} description={advertisementProducts.data[2].description}/>
          </Col>
        </Row>
      </div>
    );
}

export default AdvertisementProducts;