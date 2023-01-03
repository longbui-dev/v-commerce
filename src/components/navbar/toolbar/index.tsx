import './Toolbar.scss';
import {SearchOutlined, SettingOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Badge, Space, Tooltip } from 'antd';

function Toolbar() {
  const text = <span>Cart</span>;
  return (
    <div className='flex flex-row w-4/12 justify-around text-lg'>
      <SearchOutlined className='cursor-pointer flex flex-col justify-center hover:text-orange-500'/>
      <SettingOutlined className='cursor-pointer flex flex-col justify-center hover:text-orange-500' />
      <Space size="middle" className='mt-2'>
        <Badge size="default" count={2}>
          <Tooltip placement="topLeft" title={text}>
            <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center hover:text-orange-500 text-xl' />
          </Tooltip>
        </Badge>
      </Space>
    </div>
  )
}
  
export default Toolbar;