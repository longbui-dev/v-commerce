import { Button, Col, Row, Typography } from "antd";
import ImageAnimation from "./image";
import InformationNewArrivals from "./information";
import "./index.scss";
import { useEffect, useState } from "react";

const { Title } = Typography;

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

async function fetchArrivalsProducts(
  offset: number,
  limit: number
): Promise<Product[]> {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );
  const rawProducts = await response.json();
  return rawProducts.map((rawProduct: any) => ({
    id: rawProduct.id,
    image: rawProduct.category.image,
    title: rawProduct.title,
    price: rawProduct.price,
  }));
}

const limit = 8;

function NewArrivals() {
  const [errMsg, setErrMsg] = useState<String>("");
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([] as Product[]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setOffset(offset + 8);
      const listProduct = await fetchArrivalsProducts(offset, limit);
      setProducts([...products, ...listProduct]);
    } catch (err: any) {
      setErrMsg(err?.message);
    }
  };

  const showMore = () => {
    fetchProducts();
  };

  return (
    <div id="newArrival">
      <div className="container m-auto">
        <div className="flex justify-center">
          <Title level={2} className="titleColor">
            New Arrivals
          </Title>
        </div>

        <div>
          <Row
            className="py-10 px-24 newArrivals"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {products.map((product: any) => (
              // newArrival.sale === true ?
              <Col
                span={6}
                key={product.id}
                className="relative cursor-pointer textHoverChangeColor"
              >
                <ImageAnimation
                  {...product}
                  productName={product.title}
                  sales="Hot"
                />
                <InformationNewArrivals {...product} />
              </Col>
              // : (
              //   <Col
              //     span={6}
              //     key={newArrival.id}
              //     className="gutter-row relative cursor-pointer textHoverChangeColor"
              //   >
              //     <ImageAnimation image={newArrival.image} />
              //     <InformationNewArrivals
              //       productName={newArrival.productName}
              //       price={newArrival.price}
              //     />
              //   </Col>
              // )
            ))}

            <Button
              type="primary"
              onClick={showMore}
              className="flex items-center p-6 mt-8 buttonNewProducts"
            >
              <div className="font-bold text-base ">View More</div>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
