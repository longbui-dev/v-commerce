import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import { Col, Row } from "antd";

function Header() {
  return (
    <Row className="flex justify-around p-6 absolute z-10 w-full">
      <Col span={6} className="flex justify-center"><Logo /></Col>
      <Col span={12} className="flex justify-center"> <NavBar /></Col>
      <Col span={6} className="flex justify-center"><Toolbar /></Col>
    </Row>
  );
}

export default Header;
