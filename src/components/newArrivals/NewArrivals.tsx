import { Col, Row } from 'antd';
import './NewArrivals.scss';
import arrivals1 from '../../assets/img/arrivals1';
import arrivals2 from '../../assets/img/arrivals2';
import arrivals3 from '../../assets/img/arrivals3';
import arrivals4 from '../../assets/img/arrivals4';

function NewArrivals() {
    return (
      <div>
        <div className='container m-auto'>
          <div className='flex justify-center'>
            <h1 className='capitalize text-4xl font-semibold text-gray-500'>new arrivals</h1>
          </div>

          <div>
            <Row className="flex justify-around py-10 w-full" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={6} className="gutter-row">
                <div className='flex justify-center '><img src={arrivals1} alt="new arrivals" /></div>
                <div>
                  <h4 className='flex justify-center '>Wooden</h4>
                  <p className='flex justify-center '>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row">
                <div className='flex justify-center '><img src={arrivals2} alt="new arrivals" /></div>
                <div>
                  <h4 className='flex justify-center '>Wooden</h4>
                  <p className='flex justify-center '>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row">
                <div className='flex justify-center '><img src={arrivals3} alt="new arrivals" /></div>
                <div>
                  <h4 className='flex justify-center '>Wooden</h4>
                  <p className='flex justify-center '>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row">
                <div className='flex justify-center '><img src={arrivals4} alt="new arrivals" /></div>
                <div>
                  <h4 className='flex justify-center '>Wooden</h4>
                  <p className='flex justify-center '>$65.00</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}

export default NewArrivals;