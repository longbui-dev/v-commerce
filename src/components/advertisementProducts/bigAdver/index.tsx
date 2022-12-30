import bigAdver from '../../../assets/img/bigAdver';
import Picture from './picture';
import InforBigAdver from './infor';
import './BigAdver.scss';
import { Card } from 'antd';

function BigAdver() {
  return (
    <Card
      hoverable
      className='flex flex-row bg-slate-100 cursor-pointer advertisementProducts'
    >
      <Picture image={bigAdver}/>
      <InforBigAdver />
    </Card>
  )
}
  
export default BigAdver;