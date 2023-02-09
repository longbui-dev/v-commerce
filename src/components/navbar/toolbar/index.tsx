import './Toolbar.scss';
import {SearchOutlined, SettingOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Button, MenuProps, Badge, Space, Dropdown } from 'antd';
import { productsCart } from '../../../mockdata/ProductsCart';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { productsInCart, selectCount } from '../../../store/slices/countAmountProductsInCart';

function Toolbar(props: any) {
  const navigate = useNavigate();
  const moveToCart = () => navigate(`/PageCart`);

  const showAmoutProduct = useSelector(selectCount) 
  const productInCart = useSelector(productsInCart);
  console.log(productInCart)

  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex justify-around w-52'>
          <div><img src={productsCart.data[0].image} alt="chair" className='w-12 h-12' /></div>
          <div className='block'>
            <div className='text-[#6f6f6f] text-sm font-bold capitalize'>{productsCart.data[0].productName}</div>
            <div className='text-[#a09e9c] text-xs'>1 X - $ {productsCart.data[0].price}</div>
          </div>
          <div className='top-0'>x</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='flex justify-around w-52'>
          <div><img src={productsCart.data[1].image} alt="chair" className='w-12 h-12' /></div>
          <div className='block'>
            <div className='text-[#6f6f6f] text-sm font-bold capitalize'>{productsCart.data[1].productName}</div>
            <div className='text-[#a09e9c] text-xs'>1 X - $ {productsCart.data[1].price}</div>
          </div>
          <div className='top-0'>x</div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className='flex justify-around w-52'>
          <div><img src={productsCart.data[2].image} alt="chair" className='w-12 h-12' /></div>
          <div className='block'>
            <div className='text-[#6f6f6f] text-sm font-bold capitalize'>{productsCart.data[2].productName}</div>
            <div className='text-[#a09e9c] text-xs'>1 X - $ {productsCart.data[2].price}</div>
          </div>
          <div className='top-0'>x</div>
        </div>
      ),
    }, 
    {
      key: '4',
      label: (
        <div className='flex justify-around text-center w-52'>
          <div className='text-[#6f6f6f] text-xs font-bold flex justify-center items-center'>Total: ${productsCart.data[2].price}</div>
          <Button type="primary" className=' capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd' onClick={moveToCart}>
            <Link to="/PageCart"></Link>
              view cart
          </Button>
        </div>
      ),
    },
  ];

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