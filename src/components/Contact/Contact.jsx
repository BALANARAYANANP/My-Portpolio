import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import{FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"
import './Contact.css'

const Contact = () => {
  return (
    
        <Element className="Contact" id="Contact">
            <h1>Contact</h1>
            <div className='contact_cont'>
            <p> E-mail: <span>dhonibalabala@gmail.com</span></p>
            <p>
                Github : <span>BALANARAYANANP</span>
            </p>
            
            <div className="contact_icons">
                <a href='https://www.linkedin.com/in/balanarayanan-p-45513626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                    <IconButton>
                        <FaLinkedin/>
                    </IconButton>
                </a>
                <a href='https://github.com/BALANARAYANANP'>
                    <IconButton>
                        <FaGithub/>
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/balanarayanan_perumal?igsh=eG1qOHhha3Q5b3M0'>
                    <IconButton>
                        <FaInstagram/>
                    </IconButton>
                </a>
            </div>
            </div>
        </Element>
    
  )
}

export default Contact