import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import { Col, Row } from "antd";
import './Header.scss';

function Header() {
  return (
    <Row className="flex justify-around absolute z-10 w-full header">
      <Col span={6} className="flex justify-center"><Logo /></Col>
      <Col span={12} className="flex justify-center"><NavBar /></Col>
      <Col span={6} className="flex justify-center"><Toolbar /></Col>
    </Row>
  );
}

export default Header;
