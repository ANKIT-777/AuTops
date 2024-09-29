import './Blogs.css'
import nexticon from  '../../assets/next-button.png'
import backicon from  '../../assets/back-button.png'
import person1 from '../../assets/perosn1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import person4 from '../../assets/person4.png'
import person5 from '../../assets/peroson5.png'
import { useRef } from 'react'

const Blogs = () => {

    const slider = useRef();
    let tx =0;
    


    
    const slideBackward = ()=>{
        console.log(`click done ${tx}`)
        if(tx < 0){
            tx +=20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    


    const slideForward = ()=>{
        console.log(`click done ${tx}`)
        if(tx > -50){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    

  return (
    <div className="blogs">
        <img src={backicon} alt="" className='back-button' onClick={slideBackward} />
        <img src={nexticon} alt="" className='next-button' onClick={slideForward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={person1} alt="" />
                            <div>
                                <h3>Name</h3>
                                <span>Mumbai,In</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                        </p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={person2} alt="" />
                            <div>
                                <h3>Name</h3>
                                <span>Mumbai,In</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                        </p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={person3} alt="" />
                            <div>
                                <h3>Name</h3>
                                <span>Mumbai,In</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                        </p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={person4} alt="" />
                            <div>
                                <h3>Name</h3>
                                <span>Mumbai,In</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                        </p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={person5} alt="" />
                            <div>
                                <h3>Name</h3>
                                <span>Mumbai,In</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                        </p>

                    </div>
                </li>
            </ul>
        </div>



    </div>
  )
}

export default Blogs