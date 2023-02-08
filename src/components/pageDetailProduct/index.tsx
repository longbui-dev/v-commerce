import { Col, Row } from "antd";
import Picture from "../carousel/picture";
import { slideDatas } from "../../mockdata/Slide";
import "../carousel/Slide.scss";
import "./PageDetailProduct.scss";
import InforPageDetailProduct from "./infor";
import { advertisementProducts } from "../../store/slices/allProducts";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useLocation } from "react-router";

function PageDetailProduct() {
  
  const carouselProductShow = useSelector(advertisementProducts)
  const location = useLocation();
  const tabId = location.pathname.split("t/").pop();

  return (
    <div id="pageDetailProduct">
      <div className="bg-slate-100 flex justify-center max-w-full container">
        <div className="headerStyle pageDetailProduct">
          {
            carouselProductShow.map((detailProduct: any)=>{
              console.log(detailProduct.idAdvertisementProducts)
            })
          }
          <Row
            className="flex justify-center pb-10 z-10 w-full container slideDisplayMobile"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col
              span={10}
              className="flex justify-center gutter-row colPicture"
            >
              {" "}
              <Picture image={slideDatas.data[0].image} />
            </Col>
            <Col span={14} className="flex justify-center gutter-row colInfor">
              <InforPageDetailProduct
                productName={slideDatas.data[0].productName}
                price={slideDatas.data[0].price}
                rate={slideDatas.data[0].rate}
                reviews={slideDatas.data[0].reviews}
                description={slideDatas.data[0].description}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PageDetailProduct;
