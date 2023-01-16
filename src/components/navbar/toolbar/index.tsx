import './Toolbar.scss';
import {SearchOutlined, SettingOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Badge, Space, Dropdown} from 'antd';
import { productsCart } from '../../../mockdata/ProductsCart';
import { Link, useNavigate } from "react-router-dom";


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
];
function Toolbar() {
  const navigate = useNavigate();
  const moveToCart = () => {
      navigate(`/PageCart`);
  }

  return (
    <div className='flex flex-row justify-around text-lg'>
      <SearchOutlined className='cursor-pointer flex flex-col justify-center px-2 hover:text-[#e99c2e]'/>
      <SettingOutlined className='cursor-pointer flex flex-col justify-center px-2 hover:text-[#e99c2e]' />
      <Space size="middle" className='mt-2' onClick={moveToCart}>
        <Link to="/PageCart"></Link>
        <Badge size="default" count={2}>
          <Dropdown placement="topLeft" menu={{ items }}>
            <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-2 hover:text-[#e99c2e] text-xl' />
          </Dropdown>
        </Badge>
      </Space>
    </div>
  )
}
  
export default Toolbar;