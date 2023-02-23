import { Space, Table, Typography } from "antd";
import "./index.scss";

const { Title } = Typography;
interface PropsCart {
  columns: any;
  title: string;
  cart: any;
}

function Cart(props: PropsCart) {
  return (
    <div>
      <Space align="center">
        <Title level={4}>{props.title}</Title>
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
