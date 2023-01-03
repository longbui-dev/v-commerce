import { useEffect, useState } from "react";
import Logo from "./logo";
import NavBar from "./menu";
import Toolbar from "./toolbar";
import './Header.scss';

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
    <div style={{background: headerBgColor, transition:headerTransition}} className="sticky">
      <div className="flex justify-around py-10 header container w-full">
        <div className="flex justify-around w-full headerLogoNavBar">
          <div className="flex justify-center headerLogo"><Logo /></div>
          <div className="flex justify-center headerNavBar"><NavBar /></div>
        </div>
       
        <div className="flex justify-center w-40"><Toolbar /></div>
      </div>
    </div>
    
  );
}

export default Header;
