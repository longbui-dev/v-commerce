import { Button, Space } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import './Button.scss'

function ButtonComponent(props: any) { 
    return (
        <Space className='flex flex-row items-start my-8 styleMobile'>
            <Button type="primary" className='flex justify-center capitalize p-8 text-base font-medium buttonAdd buttonStyles'>
                <div className='flex self-center'>
                    <PlusCircleOutlined className='flex justify-center hover:text-orange-500 mt-1 mr-2'/>
                    add to cart
                </div>
            </Button>

            <Button type="primary" className='flex justify-center capitalize p-8 text-base font-medium bg-slate-100 border-slate-100 buttonStyles hover:border-orange-500 buttonMore'>
                <div className='flex self-center'>
                    more info
                </div>
            </Button>
        </Space>
    )
}

export default ButtonComponent;