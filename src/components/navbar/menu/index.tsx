import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './Menu.scss';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'New Arrival',
    key: 'newArrival',
  },
  {
    label: 'Features',
    key: 'features',
  },
  {
    label: 'Blog',
    key: 'blog',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
];

function NavBar() {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className='flex flex-row w-full border-0 border-white bg-gray-200'>
        <Menu onClick={onClick} selectedKeys={[current]} items={items} className='flex w-full text-sm font-bold text-gray-500'/>
    </div>
  )
}
  
export default NavBar;