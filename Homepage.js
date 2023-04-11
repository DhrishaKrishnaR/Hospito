import React from 'react'
import VariantButtonGroup from './HomeButton';
import './Homepage.css';
function Homepage() {
  return (
    <div style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh'}} className='body1'>
    <h1><br/><br/>WELCOME TO<br/>HOSPITO</h1>
    <br/>
    <VariantButtonGroup/>
    <br/><br/>
    </div>
  )
}

export default Homepage