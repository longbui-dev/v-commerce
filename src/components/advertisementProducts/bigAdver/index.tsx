import bigAdver from '../../../assets/img/bigAdver';
import Picture from './picture';
import InforBigAdver from './infor';
import './BigAdver.scss';
import { Card } from 'antd';
import { Col, Row } from "antd";

function BigAdver() {
  return (
    <Card
      hoverable
      className='flex flex-row bg-slate-100 cursor-pointer advertisementProducts'
    >
      <Row className="flex justify-center z-10 w-full container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="flex justify-center gutter-row"><Picture image={bigAdver}/></Col>
        <Col span={16} className="flex justify-center gutter-row bigAdverMobile"><InforBigAdver /></Col>
      </Row>
    </Card>
  )
}
  
export default BigAdver;