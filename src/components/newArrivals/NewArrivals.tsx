import { Col, Row } from 'antd';
import ImageAnimation from './image';
import InformationNewArrivals from './information';
import { newArrivals } from '../../mockdata/NewArrivals';
import './NewArrivals.scss';

function NewArrivals() {
    return (
      <div>
        <div className='container m-auto'>
          <div className='flex justify-center'>
            <h1 className='capitalize text-4xl font-semibold text-gray-500'>new arrivals</h1>
          </div>

          <div>
            <Row className="flex justify-around py-10 px-24 w-full newArrivals" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {
                newArrivals.data.map(newArrival => (newArrival.sale === true)? (
                  <Col span={6} key={newArrival.id} className="gutter-row relative cursor-pointer textHoverChangeColor">
                    <ImageAnimation image={newArrival.image} sales="sale"/>
                    <InformationNewArrivals productName={newArrival.productName} price={newArrival.price}/>
                  </Col>
                ) : (
                  <Col span={6} key={newArrival.id} className="gutter-row relative cursor-pointer textHoverChangeColor">
                    <ImageAnimation image={newArrival.image} />
                    <InformationNewArrivals productName={newArrival.productName} price={newArrival.price}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </div>
    );
}

export default NewArrivals;