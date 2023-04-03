import "./OurPortfolio.css"
import {GiOpenFolder}from "react-icons/gi"
import drivers from "../image/drivers.png"
import modules from "../image/modules.webp"
import apps from "../image/apps.webp"


const OurPortfolio = () => {
  return (
    <div className="all-our-portfolio" id="OurPortfolio">
      
      <h1><GiOpenFolder className="icon-portfolio"/>  OUR PORTFOLIO</h1>
      <div className="section-portfolio">
        <div className="drivers-portfolio">
            <img src={drivers} alt="" className="image-drivers"/>
            <h2>DRIVERS</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
            <button>CHECK DRIVERS</button>
        </div>

        <div className="modules">
            <img src={modules} alt="" className="image-modules"/>
            <h2>MODULES</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
            <button>CHECK MODULES</button>
        </div>
        <div className="apps">
            <img src={apps} alt="" className="image-apps"/>
            <h2>APPS</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
            <button>CHECK APPS</button>
        </div>
        </div>
        <div className="shadou-box"></div>
    </div>
  )
}

export default OurPortfolio
