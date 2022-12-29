import React from 'react';
import { Carousel } from 'antd';
import Picture from './picture';
import imgSlider1 from '../../assets/img/slider1';
import imgSlider2 from '../../assets/img/slider2';
import imgSlider3 from '../../assets/img/slider3';
import InforCarousel from './infor';
import './Slide.scss';

const contentStyle: React.CSSProperties = {
  height: '850px',
  textAlign: 'center',
  background: '#f1f5f9',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '130px',
  width: '100%',
};

const Slide: React.FC = (props) => (
  <Carousel dots={{ className: "dots"}}> 
    <div>
      <div style={contentStyle}>
        <InforCarousel />
        <Picture image={imgSlider1}/>
      </div>
    </div>
    <div>
    <div style={contentStyle}>
        <InforCarousel />
        <Picture image={imgSlider2}/>
      </div>
    </div>
    <div>
    <div style={contentStyle}>
        <InforCarousel />
        <Picture image={imgSlider3}/>
      </div>
    </div>
  </Carousel>
);
    
export default Slide;