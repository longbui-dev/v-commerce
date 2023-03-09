import {
  ShoppingCartOutlined,
  HeartOutlined,
  ExpandOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/slices/cart'

interface PropsImageAnimation {
  sales: string
  image: string
}

function ImageAnimation(props: PropsImageAnimation) {
  const dispatch = useDispatch()

  const handleAmountProductsInCart = () => {
    dispatch(addToCart(props))
  }

  return (
    <div className="secondColorBg backgroundImg">
      <img src={props.image} alt="new arrivals" />
      <div className="backgroundImgHover"></div>
      <div
        className={
          props.sales
            ? 'capitalize font-semibold mainColorBg textSale'
            : 'hidden'
        }
      >
        {props.sales}
      </div>
      <div className="newArrivalCart flex justify-between">
        <div
          className="flex justify-center"
          onClick={handleAmountProductsInCart}
        >
          <ShoppingCartOutlined className="cursor-pointer flex flex-col justify-center px-3" />
          <span className="flex items-center text-xs">Add To Cart</span>
        </div>
        <div className="flex items-center">
          <HeartOutlined className="mr-4" />
          <ExpandOutlined className="mr-4" />
        </div>
      </div>
    </div>
  )
}

export default ImageAnimation
