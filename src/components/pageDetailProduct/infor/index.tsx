import { Button, Rate, Space, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Radio, Collapse } from 'antd'
import './index.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectProductsInCart } from '../../../store/slices/cart'

const { Panel } = Collapse
const { Title } = Typography
interface PropsInforPageDetailProduct {
  rate: any
  title: string
  price: number
  reviews: number
  description: string
  image: string
  id?: string
  amountAddPageDetail?: number
}

function InforPageDetailProduct(props: PropsInforPageDetailProduct) {
  const [amountAddPageDetail, setAmountAddPageDetail] = useState<number>(1)

  const dispatch = useDispatch()
  const productsInCart = useSelector(selectProductsInCart)

  const handleDecrement = () => {
    setAmountAddPageDetail(amountAddPageDetail - 1)
  }
  const handleIncrement = () => {
    setAmountAddPageDetail(amountAddPageDetail + 1)
  }

  console.log('productsInCart outside', productsInCart)
  const onChange = (key: string | string[]) => {}
  return (
    <div className="w-full pt-8 pl-28 inforCarousel">
      <div className="flex flex-col items-start">
        <Title level={2} className="capitalize titleColor pt-6">
          {props.title}
        </Title>
        <div className="flex items-center pt-4 titleColor">
          Starts from
          <div className="font-medium text-lg pl-4">${props.price}</div>
        </div>
        <div className="pt-4 ">
          <Rate
            allowHalf
            disabled
            defaultValue={props.rate}
            className="text-sm pr-4"
          />
          <span className="titleColor">({props.reviews} Review)</span>
        </div>
        <div className="flex items-center pt-4 titleColor">
          Amount:
          <div className="font-medium text-lg pl-4">{amountAddPageDetail}</div>
        </div>
        <Radio.Group className="py-5">
          <Radio.Button
            onClick={handleDecrement}
            disabled={amountAddPageDetail === 1}
            value="decrement"
          >
            -
          </Radio.Button>
          <Radio.Button value={amountAddPageDetail}>
            {amountAddPageDetail}
          </Radio.Button>
          <Radio.Button onClick={handleIncrement} autoFocus value="increment">
            +
          </Radio.Button>
        </Radio.Group>

        <Collapse onChange={onChange} ghost className="text-start">
          <Panel header="Description" key="1">
            <p>{props.description}</p>
          </Panel>
        </Collapse>
        <Space className="my-8 styleMobile">
          <Button
            type="primary"
            onClick={() => {
              props = { ...props, amountAddPageDetail }
              // console.log('props', props)
              dispatch(addToCart(props))
              // console.log(
              //   'productsInCart',
              //   productsInCart.fill(props, productsInCart.length - 1),
              //   productsInCart,
              // )
            }}
            className="text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
          >
            <PlusCircleOutlined className="hover:mainColor align-[0.1em]" />
            Add To Cart
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default InforPageDetailProduct
