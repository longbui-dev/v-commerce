import { Col, Row } from 'antd';
import {ShoppingCartOutlined, HeartOutlined,ExpandOutlined} from '@ant-design/icons';
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
            <Row className="flex justify-around py-10 px-24 w-full newArrivals" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals1} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold mainColorBg textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Wooden Chair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals2} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Single Armchair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals3} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Wooden Armchair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals4} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold mainColorBg textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Stylish Chair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals1} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold mainColorBg textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Wooden Chair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals2} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Single Armchair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals3} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Wooden Armchair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
              <Col span={6} className="gutter-row relative cursor-pointer textHoverChangeColor">
                <div className='flex justify-center secondColorBg backgroundImg'>
                  <img src={arrivals4} alt="new arrivals" />
                  <div className='backgroundImgHover'></div>
                  <div className='capitalize font-semibold mainColorBg textSale'>sale</div>
                  <div className='newArrivalCart flex justify-between'>
                    <div className='flex justify-center'>
                      <ShoppingCartOutlined className='cursor-pointer flex flex-col justify-center px-3' />
                      <span className='capitalize flex items-center text-xs'>add to cart</span>
                    </div>
                    <div className='flex items-center'>
                      <HeartOutlined className='mr-4'/>
                      <ExpandOutlined className='mr-4'/>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>Stylish Chair</h4>
                  <p className='flex justify-center mt-2 text-base text-zinc-600'>$65.00</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}

export default NewArrivals;