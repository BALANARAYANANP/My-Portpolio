import React from 'react'
import { Element } from 'react-scroll'
import skills from '../../assests/skills.jpg'
import "./Skillcont.css"
import LinearProgress from "@material-ui/core/LinearProgress";

const Skillcont = () => {
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
                        <LinearProgress variant='determinate' value={90}/>
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Javascript</h5>
                    <div className="skillcont__slider skillcont__slider2">
                        <LinearProgress variant='determinate' value={75}/>
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Css3</h5>
                    <div className="skillcont__slider skillcont__slider3">
                        <LinearProgress variant='determinate' value={60}/>
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>HTML5</h5>
                    <div className="skillcont__slider skillcont__slider4">
                        <LinearProgress variant='determinate' value={80}/>
                    </div>
                </div>
                <div className="skillcont__skillset">
                    <h5>Git</h5>
                    <div className="skillcont__slider skillcont__slider5">
                        <LinearProgress variant='determinate' value={30}/>
                    </div>
                </div>

            </div>
        </Element>
    </div>
  )
}

export default Skillcont