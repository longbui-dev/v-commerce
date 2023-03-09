import { Col, Row } from "antd";
import Picture from "../carousel/picture";
import { slideDatas } from "../../mockdata/Slide";
import "../carousel/index.scss";
import "./index.scss";
import InforPageDetailProduct from "./infor";
import { advertisementProducts } from "../../store/slices/allProducts";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

interface DetailProduct {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

function PageDetailProduct() {
  const carouselProductShow = useSelector(advertisementProducts);
  const location = useLocation();
  const tabId = location.pathname.split("t/").pop();
  const numTabId = Number(tabId);

  return (
    <div id="pageDetailProduct">
      <div className="secondColorBg max-w-full container">
        <div className="headerStyle pageDetailProduct">
          {carouselProductShow.map((detailProduct: DetailProduct) => {
            if (numTabId === detailProduct.id) {
              return (
                <Row
                  className="pb-10 z-10 container slideDisplayMobile"
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  key={detailProduct.id}
                >
                  <Col span={10} className="colPicture">
                    {" "}
                    <Picture image={detailProduct.image} />
                  </Col>
                  <Col span={14} className="colInfor">
                    <InforPageDetailProduct
                      title={detailProduct.title}
                      price={detailProduct.price}
                      rate={slideDatas.data[0].rate}
                      reviews={slideDatas.data[0].reviews}
                      description={detailProduct.description}
                    />
                  </Col>
                </Row>
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </div>
  );
}

export default PageDetailProduct;
