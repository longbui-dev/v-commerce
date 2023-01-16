import { cart, sumMoney } from '../../mockdata/Cart';
import Cart from './cart';
import './PageCart.scss';

function PageCart() {
  return (
    <div id="pageCart">
        <div className="container py-8 pageCart">
            <Cart cart={cart} title="Bạn có 2 sản phẩm trong giỏ hàng"/>
            <div className='flex'>
                <textarea placeholder='Ghi chú'/>
                <Cart cart={sumMoney} title="Tổng chi phí giỏ hàng"/>
            </div>
        </div>
    </div>
  );
}

export default PageCart;
