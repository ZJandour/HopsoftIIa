import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutUs  from "./AboutUs"
import OurPortfolio from "./Portfolio/OurPortfolio"
import AllCategories from "./Portfolio/AllCategories"


const App = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <OurPortfolio/>
      <AllCategories/>
      <Footer/>
     
    </div>
  )
}

export default App
