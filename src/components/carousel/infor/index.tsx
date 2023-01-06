import { Button, Space } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import './Information.scss';

function InforCarousel(props: any) { 
    return (
        <div className="w-full items-start pt-20 pl-28 inforCarousel">
            <div className="flex flex-col justify-start items-start">
                <h4 className="capitalize text-gray-400 text-2xl">great design collection</h4>
                <h1 className="capitalize text-gray-500 text-4xl pt-6">mapple wood accent chair</h1>
                <p className="text-ellipsis overflow-hidden ... pt-8 text-base text-left leading-8 text-stone-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <div className="flex flex-row justify-start items-start pt-4">
                    <div className="flex flex-row justify-start items-start font-medium price">$ 399.000</div><del className="text-stone-400 pl-4 font-medium">$ 499.000</del>
                </div>
                <Space className='my-8 styleMobile'>
                    <Button type="primary" className=' capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd'>
                        <PlusCircleOutlined className='hover:text-orange-500 align-[0.1em]'/>
                        add to cart
                    </Button>

                    <Button type="primary" className='capitalize text-base font-medium secondColorBg mainColor border-slate-100 hover:border-orange-500 buttonMore'>
                        more info
                    </Button>
                </Space>
            </div>
        </div>
    )
}

export default InforCarousel;