import React from 'react'
import './ArithmeticButtons.css'
export const ArithmeticButtons = ({type, text, func}) => {

  return (
    <button className={ type ? type : 'ArithmeticButtons'  }  onClick= {() => func(text)}>{text}</button>
  )
}
