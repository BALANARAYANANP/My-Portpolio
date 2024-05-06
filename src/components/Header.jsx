import React from 'react'
import {Link} from "react-scroll"
import "./Header.css"

const Header = () => {
  return ( 
    <nav className='header'>
        <div className='header__left'>
            
            <h1>React.<span>js</span> Develop<span>er</span></h1>
        </div>
        <div className='header__right'>
            <Link to="about" smooth={true} duration={500}>
                <h4>About Me</h4>
            </Link>
            <Link to="skill" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="Projects" smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to="Activities" smooth={true} duration={500}>
                <h4>Activities</h4>
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
                <h4>Contact </h4>
            </Link>
           

            
        </div>
    </nav>
  )
}

export default Header