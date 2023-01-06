import { Button, Col, Row, Space } from 'antd';
import './CollectionDetail.scss';

function CollectionDetail() {
  return (
    <div>
      <div className="banner">
        <div className="container collection">
          <Row className='px-32 inforCollection'>
            <Col span={12} className="block justify-start gutter-row inforCollectionCol">
              <h2 className='capitalize'>unlimited dainning table collection</h2>
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='collectionPrice font-bold mb-8 text-sm'><h4 className='capitalize text-white'>string from <span className='mainColor'>$ 299</span></h4></div>
              <Space className='h-12 leading-10 mainColorBg rounded-lg p-6 cursor-pointer'>
                <Button type="primary" className='capitalize shadow-none'>
                  <div className='flex self-center font-bold text-base'>view more</div>
                </Button>
              </Space>
            </Col>
            <Col span={12} className="flex justify-center gutter-row"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
  
  export default CollectionDetail;