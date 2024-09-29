import React from 'react'
import './Contact.css'
import messageicon from '../../assets/receive-mail.png'
import mobileicon from '../../assets/mobile.png';
import emailicon from '../../assets/email-opened.png';
import gpsicon from '../../assets/gps-navigator.png';
import entericon from '../../assets/whitenewarrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "00026f9a-b117-4762-b11e-690883d30364");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
        <div className="contact-call">
            <h3>
                
                Send Us a message
                <img src={messageicon} alt="" />
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis quibusdam at sequi unde deserunt et accusantium nisi vitae. Exercitationem assumenda dolores perferendis repellat quisquam iure? Exercitationem deleniti numquam quibusdam.

            </p>

            <ul>
                <li><img src={emailicon} alt="" /> ContactUs@gmail.com </li>
                <li><img src={mobileicon} alt="" /> +91 8942012908  </li>
                <li><img src={gpsicon} alt="" /> contactus.com, BKC Mumbai India  </li>
            </ul>
        </div>
        <div className="contact-call">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your Mobile Number' required />
                <label>Write your Message here...</label>
                <textarea name='Message' rows="6" placeholder='Enter your Message here' required />
                <button type='submit' className='btn dark-btn'>Submit <img src={entericon} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact
