import './Programs.css'
import weautomation from '../../assets/Webautomation.jpg'
import mobileautomation from '../../assets/Mobile-Test-Automation.jpg'
import aiautomation from '../../assets/AI-in-Test-Automation-1.jpg'
import webautomationlog from '../../assets/internet.png'
import mobileautomationlog from '../../assets/native.png'
import aiautomationlog from '../../assets/ai-assistant.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={weautomation} alt="" />
            <div className="caption">
                <img src={webautomationlog} alt="" />
                <p>Web Automation</p>
            </div>
        </div>
        <div className="program">
            <img src={mobileautomation} alt="" />
            <div className="caption">
                <img src={mobileautomationlog} alt="" />
                <p>Mobile Automation</p>
            </div>
        </div>
        <div className="program">
            <img src={aiautomation} alt="" />
            <div className="caption">
                <img src={aiautomationlog} alt="" />
                <p>ai Automation</p>
            </div>
        </div>
        

    </div>
  )
}

export default Programs