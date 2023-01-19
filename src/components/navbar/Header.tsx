import { useEffect, useState } from "react";
import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import './Header.scss';
import Search from "./search";

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 50) {
        if (!show) {
          setShow(true);
        }
      }
      if (window.pageYOffset < 50) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={show ? 'sticked' : 'sticky'}>
      <div><Search /></div>
      <div className="flex justify-around py-6 header container w-full">
        <div className="flex justify-around w-full items-center headerLogoNavBar">
          <div className="flex justify-center headerLogo"><Logo /></div>
          <div className="flex justify-center headerNavBar"><NavBar /></div>
        </div>
       
        <div className="flex justify-center w-1/4"><Toolbar /></div>
      </div>
    </div>
    
  );
}

export default Header;
