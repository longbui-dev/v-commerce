import './index.scss'
import {
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { Button, Badge, Space, Popover, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeInCarts, selectProductsInCart } from '../../../store/slices/cart'
interface PropsToolbar {
  id: number
  title: string
  image: string
  price: number
  handleSearch: any
}

function Toolbar(props: PropsToolbar) {
  const navigate = useNavigate()
  const moveToCart = () => navigate(`/PageCart`)
  const dispatch = useDispatch()
  const productsInCart = useSelector(selectProductsInCart)

  const buttonObject = (
    <div key={99999999} className="flex justify-end text-start w-52 mt-6">
      {/* <div className="text-[#6f6f6f] text-xs font-bold flex justify-center items-center">
        Total: $ {totalPrice}
      </div> */}
      <Button
        type="primary"
        className="text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
        onClick={moveToCart}
      >
        <Link to="/PageCart"></Link>
        View Cart
      </Button>
    </div>
  )

  const uniqueIds: any[] = []
  productsInCart.forEach((e: any) => {
    if (uniqueIds.indexOf(e.id) === -1) {
      uniqueIds.push(e.id)
    }
  })

  const items = uniqueIds
    ?.slice(0, 3)
    .map((uniqueId: any) => {
      const product = productsInCart.find((p: any) => p.id === uniqueId)
      return (
        <div
          key={product.id}
          className="flex justify-around w-52 mt-4 cursor-pointer"
        >
          <div className="w-max">
            <img src={product.image} alt="chair" className="w-12 h-auto pt-2" />
          </div>
          <div className="block pl-4">
            <div className="text-[#6f6f6f] text-sm font-bold capitalize">
              {product.title}
            </div>
            <div className="text-[#a09e9c] text-xs">
              {productsInCart.filter((e: any) => e.id === product.id).length} X
              - $ {product.price.toLocaleString('en-US')}
            </div>
          </div>
          <div
            className="top-0"
            onClick={() => dispatch(removeInCarts(product))}
          >
            x
          </div>
        </div>
      )
    })
    .concat(buttonObject)

  return (
    <div className="flex text-lg">
      <SearchOutlined
        className="cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]"
        onClick={() => props.handleSearch()}
      />
      <SettingOutlined className="cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]" />
      <Space size="middle" className="mt-2 iconCart">
        <Badge size="default" count={uniqueIds.length}>
          <Popover placement="bottomLeft" content={items}>
            <ShoppingCartOutlined className="cursor-pointer flex flex-col px-2 text-[#a9a6a6] hover:text-[#e99c2e] text-xl" />
          </Popover>
        </Badge>
      </Space>
    </div>
  )
}

export default Toolbar
