import { Button, Col, Row } from "antd";
import ImageAnimation from "./image";
import {useDispatch} from 'react-redux'
import InformationNewArrivals from "./information";
import "./NewArrivals.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAllProducts, inforProductsNewArrivals } from "../../store/slices/allProducts";

function NewArrivals() {
  const [itemsShown, setItemsShown] = useState(8);

  const dispatch = useDispatch();

  const productsNewArrivals = useSelector(inforProductsNewArrivals)

  useEffect(() => { 
    dispatch(fetchAllProducts() as any)
  }, [dispatch, itemsShown]);

  const showMore = () => {
    setItemsShown(itemsShown + 4)
  }

  return (
    <div id="newArrival">
      <div className="container m-auto">
        <div className="flex justify-center">
          <h1 className="capitalize text-4xl font-semibold text-gray-500">
            new arrivals
          </h1>
        </div>

        <div>
          <Row
            className="flex justify-around py-10 px-24 w-full newArrivals"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {productsNewArrivals.slice(0, itemsShown).map((productsNewArrival: any) =>
              // newArrival.sale === true ? 
              (
                <Col
                  span={6}
                  key={productsNewArrival.idProductsNewArrivals}
                  className="gutter-row relative cursor-pointer textHoverChangeColor"
                >
                  <ImageAnimation image={productsNewArrival.imageProductsNewArrivals} sales="Hot" />
                  <InformationNewArrivals
                    productName={productsNewArrival.nameProductsNewArrivals}
                    price={productsNewArrival.priceProductsNewArrivals}
                  />
                </Col>
              ) 
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
            )}

            <Button type="primary" onClick={showMore} className='flex justify-center items-center capitalize p-6 mt-8 buttonNewProducts'>
              <div className='flex justify-center font-bold text-base '>view more</div>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;