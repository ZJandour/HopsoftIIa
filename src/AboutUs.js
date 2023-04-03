import About from "./image/businessman-3087395__340.jpg"
import {MdPeopleOutline} from "react-icons/md"
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="all-about-us" id="About us">
      <img src={About} alt=""/>
      <div className="text-about-us">
        
        <h1><MdPeopleOutline className="icon"/>ABOUT US</h1>
        <p>Hop Soft Pty Ltd is one of the leading software developers in the automation industry. We develop a wide variety of drivers, plugins, modules and apps.
            Our aim is to deliver feature rich, affordable, documented and well tested products.  All our developers are industry experts with more than 10 years of experience in the field. 
            We offer a variety of services such as contract work for manufacturers, co-funded contracts for integrators and also complete projects funded by us.</p>
        </div>
    </div>
  )
}

export default AboutUs