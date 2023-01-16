import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './Cart.scss';

interface DataType {
    key: React.ReactNode;
    nameProduct: string;
    price: number;
    amount: number;
    pay: number;
}

const columns: ColumnsType<DataType> = [
    {
      title: 'Sản phẩm',
      dataIndex: 'nameProduct',
      key: 'nameProduct',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: '12%',
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      width: '10%',
      key: 'amount',
    },
    {
        title: 'Thành tiền',
        dataIndex: 'pay',
        width: '20%',
        key: 'pay',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle" className='cursor-pointer'>
            <Popconfirm title="Sure to delete?" className='popconfirm' >
                <DeleteOutlined />
            </Popconfirm>
        </Space>
      ),
      width: '10%',
    },
];

function Cart(props: any) {
  return (
    <div>
        <Space align="center" className="textAmountProducts">
            <span>{props.title}</span>
        </Space>
        <Table
            columns={columns}
            dataSource={props.cart}
        />
    </div>
  );
}

export default Cart;
