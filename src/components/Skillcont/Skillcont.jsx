import React from 'react'
import { Element } from 'react-scroll'
import  { useState, useEffect } from 'react';
import skills from '../../assests/skills.jpg'
import "./Skillcont.css"

import CustomLinearProgress from './CustomLinerPrrogress';

const Skillcont = () => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Element className='Skillcont' id='skill'>
            <div className='skillcontimg'>
                <img src={skills} alt=''/>
            </div>
            
            <div className='skillconttext'>
                <h2>SKILLSET</h2>
            
                <div className="skillcont__skillset">
                    <h5>React</h5>
                    <div className="skillcont__slider skillcont__slider1">
                    <CustomLinearProgress value={progress} color="blue" />
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Javascript</h5>
                    <div className="skillcont__slider skillcont__slider2">
                    <CustomLinearProgress value={progress} color="#f64c08" />
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Css3</h5>
                    <div className="skillcont__slider skillcont__slider3">
                    <CustomLinearProgress value={progress} color="yellow" />
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>HTML5</h5>
                    <div className="skillcont__slider skillcont__slider4">
                    <CustomLinearProgress value={progress} color="violet" />
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Git</h5>
                    <div className="skillcont__slider skillcont__slider5">
                    <CustomLinearProgress value={progress} color="pink" />
                    </div>
                </div>

            </div>
        </Element>
    </div>
  )
}

export default Skillcont