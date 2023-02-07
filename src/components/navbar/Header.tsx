import { useEffect, useState } from "react";
import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import "./Header.scss";
import Search from "./search";

function Header() {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleShow = () => {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 && !show ? setShow(true) : setShow(false);
    }
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={show ? "sticked" : "sticky"}>
      <div className={showSearch? 'block' : 'hidden'}>
        <Search />
      </div>
      <div className="flex justify-around py-6 header container w-full">
        <div className="flex justify-around w-full items-center headerLogoNavBar">
          <div className="flex justify-center headerLogo">
            <Logo />
          </div>
          <div className="flex justify-center headerNavBar">
            <NavBar />
          </div>
        </div>

        <div className="flex justify-center w-1/4">
          <Toolbar handleSearch={()=> handleShowSearch()} />
        </div>
      </div>
    </div>
  );
}

export default Header;
