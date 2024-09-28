import './Hero.css'
import dark_arrow from '../../assets/newarrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>Automation is the Future</h1>
            <p>Embrace the future today. Scale your business, reduce margins of error, and unlock new levels of scalability. Don’t miss the opportunity to automate your website and streamline your operations. Let us bring the future to your doorstep. Ask us how.</p>
            <button className='btn'> Explore More
                <img src={dark_arrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Hero