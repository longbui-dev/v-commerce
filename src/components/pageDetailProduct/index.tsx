import { Col, Row } from 'antd'
import Picture from '../carousel/picture'
import { slideDatas } from '../../mockdata/Slide'
import '../carousel/index.scss'
import './index.scss'
import InforPageDetailProduct from './infor'
import { advertisementProducts } from '../../store/slices/allProducts'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useState } from 'react'

interface DetailProduct {
  id: string
  title: string
  image: string
  description: string
  price: number
}
const BASE_URL = process.env.REACT_APP_V_COMMERCE_URL

function PageDetailProduct() {
  const [products, setProducts] = useState([] as DetailProduct[])
  async function fetchArrivalsProducts(): Promise<DetailProduct[]> {
    const response = await fetch(`${BASE_URL}/products`)
    const rawProducts = await response.json()
    return rawProducts.map((rawProduct: any) => ({
      id: rawProduct.id,
      image: rawProduct.category.image,
      title: rawProduct.title,
      price: rawProduct.price,
      description: rawProduct.description,
    }))
  }
  const carouselProductShow = useSelector(advertisementProducts)
  const location = useLocation()
  const tabId = location.pathname.split('t/').pop()

  return (
    <div id="pageDetailProduct">
      <div className="secondColorBg max-w-full container">
        <div className="headerStyle pageDetailProduct">
          {carouselProductShow.map((detailProduct: DetailProduct) => {
            if (tabId === String(detailProduct.id)) {
              return (
                <Row
                  className="pb-10 z-10 container slideDisplayMobile"
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  key={detailProduct.id}
                >
                  <Col span={10} className="colPicture">
                    <Picture image={detailProduct.image} />
                  </Col>
                  <Col span={14} className="colInfor">
                    <InforPageDetailProduct
                      id={detailProduct.id}
                      title={detailProduct.title}
                      image={detailProduct.image}
                      price={detailProduct.price}
                      rate={slideDatas.data[0].rate}
                      reviews={slideDatas.data[0].reviews}
                      description={detailProduct.description}
                    />
                  </Col>
                </Row>
              )
            }
            return undefined
          })}
        </div>
      </div>
    </div>
  )
}

export default PageDetailProduct
