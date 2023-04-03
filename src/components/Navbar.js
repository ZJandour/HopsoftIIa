import "./Navbar.css"
import logo from "../image/logo.webp"
import  control from "../image/control.webp"
import  rti from "../image/rti.webp"
import  elan from "../image/elan.webp"
import home from "../image/house-navbar.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { RxSpeakerLoud } from "react-icons/rx";
import { BsThermometerSun } from "react-icons/bs";
import { RiSoundModuleFill } from "react-icons/ri";
import { WiDaySleet } from "react-icons/wi";
import { GiComputerFan } from "react-icons/gi";
import { BsHouseLock} from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";
import { GiBusDoors } from "react-icons/gi";
import { GiHops } from "react-icons/gi"
import links from "../data"
import { useState } from "react";

const Navbar = () => {
        const [showMenu, setShowMenu] = useState(false)
  
    return (
    <nav>
        <div className="navigation">
            <div className="nav-header">
                <img src={logo} alt=""/>
                <button onClick={() => setShowMenu(!showMenu) }>  
                   <GiHamburgerMenu className="hamburger-icon"/>
                </button >
            </div>
            <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
                <ul>
                    {
                        links.map( (oneLink) => {
                            const {id, text, url} = oneLink

                            return <li key={id}>
                                <a href={url}className="nav-link" >{text}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="icons">
                <img src={control} alt="" className="control"/>
                <img src={rti} alt="" className="rti"/>
                <img src={elan} alt="" className="elan"/>
            </div>
        </div>
            <div className="all-home-motto">
                 <img src={home} alt="" className="home-navbar"/>
                    <div className="motto">
                        <h2>DRIVER</h2>
                        <h2>DEVELOPMENT</h2>
                        <h3>With more than</h3>
                        <h3>10 years</h3><h3>of experience</h3>
                        <button id="ourPortfolio">OUR PORTFOLIO</button>
                        
                    </div>
                    
            </div>   
            <div className="icon">
                <GoLightBulb/>
                <RxSpeakerLoud/>
                <BsThermometerSun/>
                <RiSoundModuleFill/>
                <WiDaySleet/>
                <GiComputerFan/>
                <BsHouseLock/>
                <BsShieldLock/>
                <GiBusDoors/>
                <div className="green">
                    <p>DRIVERS   </p>
                    < GiHops/>
                    <p>  MODULES  </p>
                    < GiHops/>
                    <p>  APPS </p>
                </div> 
            </div> 
    </nav>
  )
}

export default Navbar