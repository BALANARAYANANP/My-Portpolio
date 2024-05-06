import React from 'react'
import './ActBox.css';

const ActBox = ({number,title,style}) => {
  return (
    
        <div style={{...style}} className='act'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ActBox