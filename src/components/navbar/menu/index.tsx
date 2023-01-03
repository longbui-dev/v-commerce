import { useEffect, useState } from 'react';
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
  const [headerBgColor, setHeaderBgColor] = useState("#f1f5f9")

  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setHeaderBgColor("white")
      : setHeaderBgColor("#f1f5f9")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }) 
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className='flex flex-row w-full border-0 border-white '>
        <Menu onClick={onClick} selectedKeys={[current]} items={items} style={{backgroundColor: headerBgColor}} className='flex w-full bg-slate-100 text-sm font-bold text-gray-500'/>
    </div>
  )
}
  
export default NavBar;