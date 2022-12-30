import { Button, Space } from 'antd';
import './Button.scss'

function ButtonComponent(props: any) { 
    return (
        <Space className='flex flex-row items-start my-12'>
            <Button type="primary" className='flex justify-center capitalize p-5 text-base font-medium border-slate-500 hover:text-slate-50 discoverMore'>
                <div className='flex self-center text-slate-500 hover:text-slate-50 discoverMoreHover'>
                    discover more
                </div>
            </Button>
        </Space>
    )
}

export default ButtonComponent;