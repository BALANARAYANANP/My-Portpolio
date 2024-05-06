import React from 'react'
import ActBox from '../ActBox/ActBox'
import './ActCont.css'
import { Element } from 'react-scroll'

const ActCont = () => {
  return (
    <Element className='Activities' id="Activities">
        <h1>Activities</h1>
        <div className='Actinfo'>
          <a href='https://drive.google.com/file/d/1rlHBstxzDMtJIFqBWe9UWhVDmIACKqGB/view?usp=drivesdk'>
            <ActBox number="2+" title="Sysposium"/></a>
            <a href='https://drive.google.com/file/d/1tJ_GQWZ3wZmo9fOE-mdvskSNgKKGVSlb/view?usp=drivesdk'>
            <ActBox number="5" title="Webinars & Workshops" style={{backgroundColor:"#f64c08"}}/></a>
            <a href='https://drive.google.com/file/d/1s4r7Tpu51JPg1rdqyrT5xDOIRZoT2iu_/view?usp=drivesdk'>
            <ActBox number="2" title="Certification"/></a>
            <a href='https://drive.google.com/file/d/1rvLoOSlw61zj0UAtIN0i0ENrUAcYI3Bb/view?usp=drivesdk'>
            <ActBox number="3  " title="Achievements"/></a>
            <a href='https://drive.google.com/file/d/1rdrfJcgC8RRqfjDO95_BmAsSaNT9p3ks/view?usp=drivesdk'>
            <ActBox number="1" title="Internship"/></a>

        </div>
    </Element>
  )
}

export default ActCont