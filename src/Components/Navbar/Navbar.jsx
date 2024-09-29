import './Navbar.css'
import logo from '../../assets/Transparent.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


import { useEffect, useState } from 'react'
const Navbar = () => {
  
const [sticky,setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY> 70 ? setSticky(true) : setSticky(false)
  })
},[])

  return (
    <nav className={`container ${sticky ? 'darknav' : '' } `}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li> <Link to= 'hero' smooth={true} offset={0} duration={500} > Home </Link> </li>
            <li> <Link to= 'abouts' smooth={true} offset={-260} duration={500} > Projects </Link> </li>
            <li> <Link to= 'blogs' smooth={true} offset={-250} duration={500} >Blogs </Link> </li>
            <li> <Link to= 'blogs' smooth={true} offset={0} duration={500} >About Us </Link> </li>
            <li> <Link to= 'contact' smooth={true} offset={-260} duration={500} ><button className='btn'> Contact Us  </button> </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar