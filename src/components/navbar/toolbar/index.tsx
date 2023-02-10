import './Toolbar.scss';
import {SearchOutlined, SettingOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Button, MenuProps, Badge, Space, Dropdown } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectProductsInCart, selectCount, selectTotalPrice, selectAmountProductsDuplicated } from '../../../store/slices/countAmountProductsInCart';

function Toolbar(props: any) {
  const navigate = useNavigate();
  const moveToCart = () => navigate(`/PageCart`);

  const showAmoutProduct = useSelector(selectCount) 
  const productsInCart = useSelector(selectProductsInCart);
  const totalPrice = useSelector(selectTotalPrice) 
  const amountProductsDuplicated = useSelector(selectAmountProductsDuplicated) 
  console.log(amountProductsDuplicated)
  
  const buttonObject: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex justify-around text-center w-52'>
          <div className='text-[#6f6f6f] text-xs font-bold flex justify-center items-center'>Total: $ {totalPrice}</div>
          <Button type="primary" className=' capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd' onClick={moveToCart}>
            <Link to="/PageCart"></Link>
              view cart
          </Button>
        </div>
      ),
    },
  ]
  const items: MenuProps['items'] = productsInCart.slice(0,3).map((product : any)=>{
    return ({
      key: product.id,
      label: (
        <div className='flex justify-around w-52'>
          <div><img src={product.image} alt="chair" className='w-12 h-auto pt-2' /></div>
          <div className='block pl-4'>
            <div className='text-[#6f6f6f] text-sm font-bold capitalize'>{product.productName}</div>
            <div className='text-[#a09e9c] text-xs'>{amountProductsDuplicated} X - $ {product.price}</div>
          </div>
          <div className='top-0'>x</div>
        </div>
      ),
    })
  }).concat(buttonObject)

  return (
    <div className='flex flex-row justify-around text-lg'>
      <SearchOutlined className='cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]' onClick={() => props.handleSearch()}/>
      <SettingOutlined className='cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]' />
      <Space size="middle" className='mt-2 iconCart'>
        <Badge size="default" count={showAmoutProduct}>
          <Dropdown placement="bottomLeft" menu={{ items }}>
            <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e] text-xl' />
          </Dropdown>
        </Badge>
      </Space>
    </div>
  )
}
  
export default Toolbar;