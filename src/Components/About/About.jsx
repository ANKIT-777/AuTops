import './About.css'
import aboutWeb from '../../assets/aboutWeb.jpg'
import aboutMobile from '../../assets/aboutMobile.jpg'
import aboutAi from '../../assets/aboutAi.png'
import playicon from '../../assets/play-button.png'


const About = () => {
  return (
    <div className="abouts">
    <div className="about">
        <div className="about-left">
        <img src={aboutWeb} alt="" className='about-img' />
            <img src={playicon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>
            Web Automation
            </h3>
            <h2>
            Speed, precision, and flawless execution—delivered on time.
            </h2>
            <p>
            With our proprietary tools and frameworks, we streamline complex scripting processes, reduce workload by up to 55%, and consistently deliver projects ahead of deadlines. We harness the power of industry leaders like Selenium and Playwright to ensure flawless execution.
            </p>
        </div>
    </div>
    <div className="about">
        <div className="about-left">
        <img src={aboutMobile} alt="" className='about-img' />
            <img src={playicon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>
            Mobile Automation
            </h3>
            <h2>
            Seamless automation for every device, across every platform.
            </h2>
            <p>
            From smartphones to tablets, we automate entire mobile ecosystems with the same precision and efficiency as our web solutions. Our tools are built for multi-environment performance, ensuring smooth integration across all mobile platforms.
            </p>
        </div>
    </div>
    <div className="about">
        <div className="about-left">
        <img src={aboutAi} alt="" className='about-img' />
            <img src={playicon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>
            AI Automation
            </h3>
            <h2>
            AI-powered insights that detect issues before they become problems.
            </h2>
            <p>
            Our AI solutions are designed to detect hidden vulnerabilities and performance bottlenecks in your system. By leveraging machine learning models, we not only identify the weakest links but also generate comprehensive reports, giving you data-driven insights to enhance reliability and scalability.
            </p>
        </div>
    </div>
    </div>
  )
}

export default About