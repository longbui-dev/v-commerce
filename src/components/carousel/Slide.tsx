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
    <Carousel autoplay dots={{ className: "dots"}} className="container"> 
      <div>
        <div style={contentStyle}>
          <Row className="flex justify-around py-10 z-10 w-full header container">
            <Col span={14} className="flex justify-center"><InforCarousel /></Col>
            <Col span={10} className="flex justify-center"> <Picture image={imgSlider1}/></Col>
          </Row>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Row className="flex justify-around py-10 z-10 w-full header container">
          <Col span={14} className="flex justify-center"><InforCarousel /></Col>
          <Col span={10} className="flex justify-center"> <Picture image={imgSlider1}/></Col>
        </Row>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Row className="flex justify-around py-10 z-10 w-full header container">
          <Col span={14} className="flex justify-center"><InforCarousel /></Col>
          <Col span={10} className="flex justify-center"> <Picture image={imgSlider1}/></Col>
        </Row>
        </div>
      </div>
    </Carousel>
  </div>
);
    
export default Slide;