import React from 'react';
import { Carousel } from 'antd';
import Picture from './picture';
import imgSlider1 from '../../assets/img/slider1';
import imgSlider2 from '../../assets/img/slider2';
import imgSlider3 from '../../assets/img/slider3';
import InforCarousel from './infor';
import { Col, Row } from "antd";
import './Slide.scss';

const contentStyle: React.CSSProperties = {
  height: '850px',
  textAlign: 'center',
  background: '#f1f5f9',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '30px',
  width: '100%',
};

const Slide: React.FC = (props) => (
  <div className='bg-slate-100'>
    <Carousel autoplay dots={{ className: "dots"}} className="flex justify-center"> 
      <div>
        <div style={contentStyle}>
          <Row className="flex justify-center py-10 z-10 w-full header container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={14} className="flex justify-center gutter-row"><InforCarousel /></Col>
            <Col span={10} className="flex justify-center gutter-row"> <Picture image={imgSlider1}/></Col>
          </Row>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Row className="flex justify-center py-10 z-10 w-full header container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={14} className="flex justify-center gutter-row"><InforCarousel /></Col>
          <Col span={10} className="flex justify-center gutter-row"> <Picture image={imgSlider2}/></Col>
        </Row>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Row className="flex justify-around py-10 z-10 w-full header container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={14} className="flex justify-center gutter-row"><InforCarousel /></Col>
          <Col span={10} className="flex justify-center gutter-row"> <Picture image={imgSlider3}/></Col>
        </Row>
        </div>
      </div>
    </Carousel>
  </div>
);
    
export default Slide;