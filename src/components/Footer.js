import "./Footer.css"
import hops from "../image/hops.png"
import logo from "../image/logo.webp"
import { GiHops } from "react-icons/gi"
import {MdViewModule} from "react-icons/md"
import {MdContactPhone} from "react-icons/md"
import  control from "../image/control.webp"
import  rti from "../image/rti.webp"
import  elan from "../image/elan.webp"
import imgFooter from "../image/footer.webp"

const Footer = () => {
  return <footer>
    <div className="info-footer" id="Contact">
      
    
      <img src={hops} alt=""/>
      <img src={logo} alt=""/>
      <div className="all-summary">
          <div className="hop-soft">
          < GiHops className="icon-footer"/>
          <h4>HOP SOFT</h4>
          <p>Home</p>
          <p>About us</p>
          <p>Our Portfolio</p>
          <p>Contact</p>

          </div>
          <div className="drivers">
          <MdViewModule className="icon-footer" />
          <h4>DRIVERS</h4>
          <p>Lighting</p>
          <p>Security</p>
          <p>Climate</p>
          <p>Audio Visuals</p>
          <p>Utilities</p>


          </div>
          <div className="contact-us">
            <MdContactPhone className="icon-footer"/>
            <h4>CONTACT US</h4>
            <p>přesná adresa</p>
            <p>nepřečtu</p>
            <p>Australia</p>
            <div>
              <p>For technical support for our </p>
               <p> products please email us on:</p>
              <p>support@hopsoft.com.au</p>
              <p>admin@hopsoft.com.au</p>
              <p>ABN: 82 639 873 064</p>
            </div>


          </div>
      </div>
    </div>
    <div className="all-footer">
        <div className="link-footer">
            <p >&copy;2023 by Hopsoft, admin@hopsoft.com.au </p>
        </div>
        <div className="logs-footer">
            <img src={control} alt="" className="control-footer"/>
            <img src={rti} alt="" className="rti-footer"/>
            <img src={elan} alt="" className="elan-footer"/>
        </div>
    </div>
    <img src={imgFooter} alt="" className="img-footer"/>
    
  </footer>
}

export default Footer