import './ButtonPack.css'
import { ArithmeticButtons } from './ArithmeticButtons';

import React from 'react'

// export const ArithmeticButtons = ({type, text, func}) => {

export const ButtonPack = ({updateCalc, calculate}) => {
  return (
    <div>
    <table>

          <tr>
            <th className="TableCol"><ArithmeticButtons text={ '+' } func = {updateCalc}/></th>
            <th className="TableCol"><ArithmeticButtons text={ '-' } func = {updateCalc}/></th>
            <th className="TableCol"><ArithmeticButtons text={ '*' } func = {updateCalc}/></th>
            <th className="TableCol"><ArithmeticButtons text={ '/' } func = {updateCalc}/></th>
          </tr>

          <tr>
            <th colSpan={3}><ArithmeticButtons text={ '=' } type = {'SpecialButton'} func = {calculate}/></th>
            <th className="TableCol"><ArithmeticButtons text={ '0' } type = {'Numbers0'} func = {updateCalc} /></th>
          </tr>
          </table>
          <table>

          <tr>
          <th className="TableCol"><ArithmeticButtons text={ '1' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '2' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '3' } type = {'Numbers'} func = {updateCalc}/></th>
          </tr>

          <tr>
          <th className="TableCol"><ArithmeticButtons text={ '4' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '5' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '6' } type = {'Numbers'} func = {updateCalc}/></th>
          </tr>

          <tr>
          <th className="TableCol"><ArithmeticButtons text={ '7' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '8' } type = {'Numbers'} func = {updateCalc}/></th>
          <th className="TableCol"><ArithmeticButtons text={ '9' } type = {'Numbers'} func = {updateCalc}/></th>

          </tr>

          </table>

          </div>
  )
}
