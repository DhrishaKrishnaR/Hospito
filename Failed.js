
import  Link from '@mui/material/Link'
import React from 'react'
import './Failed.css'
export default function Failed() {
  return (
    <div className='body11'>
    <br/><br/><br/><br/><br/><br/><br/>
      <img src="https://media.istockphoto.com/id/1026915588/vector/harmful-symbol-warning-sign-vector-illustration-eps10.jpg?s=612x612&w=0&k=20&c=mZ3b5zvq61kwfluwWqnvFRGMSy32M4D_r0a2gO8a110=" width="5%" height="10%"></img>
        <h2><br/>SORRY, YOUR APPOINTMENT HAS BEEN DECLINED<br/><br/>PLEASE TRY AGAIN<br/><br/>
      <Link href="/Slots"><button class="failed" href="/Slots">Back</button></Link>
      </h2>
      
    </div>
  )
}
