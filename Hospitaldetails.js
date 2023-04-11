
import Link from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Hospitaldetails.css';
function Hospitaldetails() {
    const[name,setname]=useState('');
    const[loc,setloc]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>{

      event.preventDefault();
      if(name.length===0 || loc.length===0)
      {
           seterror(true);
      }
      if(name && loc)
      {
        const loginobj={Name:name,Location:loc}
        alert(JSON.stringify(loginobj));
        navigate("/Doctors");
      }
    }
  return (
    <div className='body7'>
    <form onSubmit={formHandler}>
    <div className='hospi'>
    <br/><br/><br/>
    <h3>HOSPITAL DETAILS :</h3>
    HOSPITAL NAME : <input type="text" value={name} placeholder="name" onChange={(e)=>setname(e.target.value)}/><br/>
    <div>
    {error && name.length===0 ?<label style={{color:'red'}}>Hospital Name is required</label>: ""}
    </div>
    HOSPITAL LOCATION : <input type="text" value={loc} placeholder="loc" onChange={(e)=>setloc(e.target.value)}/><br/>
    <div>
    {error && loc.length===0 ?<label style={{color:'red'}}>Hospital Location is required</label>: ""}

    </div>
    <label for="dura">DURATION OF APPOINTMENT :</label> <br/>
    <input type="radio" name="dura" />15 min <br/>
    <input type="radio" name="dura"/>30 min <br/> 
    <input type="radio" name="dura"/>45 min <br/>
    <div className='hr'><input type="radio"/>1 hr </div><br/><br/>
    <Link href="/Doctors"><button className='button'>CHECK FOR AVAILABILITY</button></Link></div>
    </form>
    <br/>
    <br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Hospitaldetails