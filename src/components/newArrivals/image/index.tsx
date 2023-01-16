import {ShoppingCartOutlined, HeartOutlined,ExpandOutlined} from '@ant-design/icons';

function ImageAnimation(props: any) {
    return (
        <div className='flex justify-center secondColorBg backgroundImg'>
            <img src={props.image} alt="new arrivals" />
            <div className='backgroundImgHover'></div>
            <div className={props.sales ? 'capitalize font-semibold mainColorBg textSale' : 'hidden'}>{props.sales}</div>
            <div className='newArrivalCart flex justify-between'>
                <div className='flex justify-center'>
                    <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                    <span className='capitalize flex items-center text-xs'>add to cart</span>
                </div>
                <div className='flex items-center'>
                    <HeartOutlined className='mr-4'/>
                    <ExpandOutlined className='mr-4'/>
                </div>
            </div>
        </div>
    );
}

export default ImageAnimation;