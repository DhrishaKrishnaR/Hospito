import  Link  from '@mui/material/Link'
import React from 'react'
import'./Doctors.css'
function Doctors() {
  return (
    <div className='body8'>
    <h3 className='style'>SELECTED HOSPITAL : XYZ HOSPITAL,KUNIYAMUTHUR,COIMBATORE -641008.</h3>
    <h4 className='one'>DOCTORS AVAILABLE:</h4>
    <p className='two'>1.Dr.ARCHANA(MBBS)<br></br>
    EXPERIENCE : 5 YEARS<br></br>
    SLOTS      : 7      <br></br>
    AVAILABILITY : 9-12 PM ,6-10PM<br></br>
    <br></br>
    <Link href="/Slots"><button class='book' >BOOK SLOTS</button></Link>
    <br>
    </br>
    <br></br>
    <br></br>
    2.Dr.GOKUL(MBBS,MD)<br></br>
    EXPERIENCE : 10 YEARS<br></br>
    SLOTS      : 2      <br></br>
    AVAILABILITY : 8-11 AM ,6-9 PM<br></br>
    <br></br>
    <Link href="/Slots"><button class='book'> BOOK SLOTS</button></Link>
    <br></br>
    <br></br>
    <br></br>
    2.Dr.DHANUSH(MBBS)<br></br>
    EXPERIENCE : 6 YEARS<br></br>
    SLOTS      : 11      <br></br>
    AVAILABILITY : 6-12PM ,4-11PM<br></br>
    <br></br>
    <Link href="/Slots"><button class='book' >BOOK SLOTS</button></Link>
    <br></br>
    <br></br>
    </p><br/><br/>
    </div>
  )
}

export default Doctors