import { Col, Row } from 'antd';
import ImageAnimation from './image';
import arrivals1 from '../../assets/img/arrivals1';
import arrivals2 from '../../assets/img/arrivals2';
import arrivals3 from '../../assets/img/arrivals3';
import arrivals4 from '../../assets/img/arrivals4';
import InformationNewArrivals from './information';
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
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals1} sales="sale"/>
                <InformationNewArrivals title="Wooden Chair" price="$65.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals2} sales="sale"/>
                <InformationNewArrivals title="Single Armchair" price="$85.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals3} />
                <InformationNewArrivals title="Wooden Armchair" price="$45.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals4} sales="sale"/>
                <InformationNewArrivals title="Stylish Chair" price="$95.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals1} sales="sale"/>
                <InformationNewArrivals title="Wooden Chair" price="$35.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals2} sales="sale"/>
                <InformationNewArrivals title="Single Armchair" price="$25.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals3} />
                <InformationNewArrivals title="Wooden Armchair" price="$15.00"/>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <ImageAnimation image={arrivals4} sales="sale"/>
                <InformationNewArrivals title="Stylish Chair" price="$55.00"/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}

export default NewArrivals;