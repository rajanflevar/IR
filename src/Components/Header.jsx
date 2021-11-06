import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { FaBars } from 'react-icons/fa';

export default function Header() {

    const[navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 100){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)    
    return (
        <>
            <div className={navbar? "nav-container active": "nav-container"}>
                <div className="logo-container">
                    <h1>Impact Era</h1>
                </div>
                <div className="menu">
                    <FaBars size={30} />
                </div>
                <div className="navbar">
                    <ul className='navlinks'>
                        <li><Link className="navlink" to='/'>Home</Link></li>
                        <li><Link className="navlink" to='/About'>About Us</Link></li>
                        <li><Link className="navlink" to='/Services'>Services</Link></li>
                        <li><Link className="navlink" to='/Contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
