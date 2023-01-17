import {  Space, Table } from 'antd';
import './Cart.scss';

function Cart(props: any) {
  return (
    <div>
        <Space align="center" className="textAmountProducts">
          <span>{props.title}</span>
        </Space>
        <Table
          columns={props.columns}
          dataSource={props.cart} 
          pagination={false}
        />
    </div>
  );
}

export default Cart;
