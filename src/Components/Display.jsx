import React from 'react'
import './Display.css'

export const Display = ({result, value}) => {
  return (
    <div className='Screen'>
        {value || "0"} 

    </div>
  )
}
