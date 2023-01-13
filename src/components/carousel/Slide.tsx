import React from 'react';
import { Col, Row, Carousel } from 'antd';
import Picture from './picture';
import InforCarousel from './infor';
import { slideDatas } from '../../mockdata/Slide';
import './Slide.scss';

const Slide: React.FC = (props) => (
  <div id='slide' className='bg-slate-100'>
    <Carousel autoplay  dots={{ className: "dots"}} className="flex justify-center"> 
      {
        slideDatas.data.map((slideData) => (
          <div key={slideData.id}>
            <div className="headerStyle">
              <Row className="flex justify-center pb-10 z-10 w-full container slideDisplayMobile" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={14} className="flex justify-center gutter-row colInfor">
                  <InforCarousel productName={slideData.productName} description={slideData.description} price={slideData.price} oldPrice={slideData.oldPrice}/>
                </Col>
                <Col span={10} className="flex justify-center gutter-row colPicture"> <Picture image={slideData.image}/></Col>
              </Row>
            </div>
          </div>
        ))
      }
    </Carousel>
  </div>
);
    
export default Slide;