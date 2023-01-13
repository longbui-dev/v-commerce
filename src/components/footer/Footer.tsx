import { BehanceOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import './Footer.scss';

function Footer() {
    return (
      <div id="contact" className="secondColorBg h-40 flex justify-center items-center">
        <div className='container block justify-center'>
          <div className="block align-[4px]">
            <div className="flex items-center justify-center gap-x-4 py-3 colorFooter">
              <FacebookOutlined />
              <InstagramOutlined />
              <LinkedinOutlined />
              <GoogleOutlined />
              <BehanceOutlined />
            </div>

            <span className="flex items-center justify-center colorFooter">© 2045 All Rights Reserved | Design by: ThemeSINE</span>
          </div>
        </div>
      </div>
    );
}

export default Footer;