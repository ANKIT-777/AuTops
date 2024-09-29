import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
// import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import  About from "./Components/About/About"
import  Blogs from "./Components/Blogs/Blogs"


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle = 'Our Projects' Title = 'What We Offer'/>
    {/* <Programs/> */}
    <About/>
    <Title subTitle = 'Our Blogs' Title = "What's trending in the industry?"/>
    <Blogs/>
    </div>
    
    </>
  )
}

export default App