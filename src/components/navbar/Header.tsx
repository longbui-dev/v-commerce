import { useEffect, useState } from "react";
import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import { Col, Row } from "antd";
import './Header.scss';

// interface HeaderType {
//   headerBgColor?: String,
//   headerTransition?: String
// }

function Header() {
  const [headerBgColor, setHeaderBgColor] = useState("#f1f5f9")
  const [headerTransition, setHeaderTransition] = useState("none")
  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setHeaderBgColor("white")
      : setHeaderBgColor("#f1f5f9")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  return (
    <div style={{background: headerBgColor, transition:headerTransition}} className="sticky flex justify-around ">
      <Row className="flex justify-around py-10 w-full header container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="flex justify-center gutter-row"><Logo /></Col>
        <Col span={10} className="flex justify-center gutter-row"><NavBar /></Col>
        <Col span={6} className="flex justify-center gutter-row"><Toolbar /></Col>
      </Row>
    </div>
    
  );
}

export default Header;
