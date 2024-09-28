import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import  About from "./Components/About/About"


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle = 'Our Projects' Title = 'What We Offer'/>
    {/* <Programs/> */}
    <About/>
    </div>
    
    </>
  )
}

export default App