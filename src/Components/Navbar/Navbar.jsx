import './Navbar.css'
import logo from '../../assets/Transparent.png'
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
            <li>Home</li>
            <li>Projects </li>
            <li>Blogs </li>
            <li>About Us </li>
            <li><button className='btn'> Contact Us </button></li>
        </ul>
    </nav>
  )
}

export default Navbar