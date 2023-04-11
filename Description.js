import  Link from '@mui/material/Link';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Description.css'
function Description() {
    const [Location,setLoc]=useState('');
    const[error,setError]=useState(false);
    const navigate=useNavigate();
    const formHandler=(eve)=>
  {
    eve.preventDefault();
    if(Location.length===0)
    {
      setError(true);
    }
    if(Location)
    {
    const loginObj=
      {
      name:Location
      }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    navigate("/FillUp");
    }
  }
  return (
    <div className='body5'>
    <form onSubmit={formHandler}>
    <div className='des'>
    <br/><br/><br/>
    <h1> CONGRATULATIONS YOU HAVE SUCCESSFULLY LOGGED IN TO HOSPITO.......</h1><br/>
    <br/>
    <h2>Browse to find a better hospital avaliable for your problems<br/><br/>HOSPITO....!!!Most Recommended application by many users<br/></h2>
    <br/><br/><br/>
    <h2>EXPLORE TO  FIND HOSPITALS TO SERVE</h2>
    <br/>
    <div>
    <b>EXPLORE :</b><input type="text" value={Location}  placeholder="Enter the location" onChange={(e)=>setLoc(e.target.value)}/><br/>
    {error && Location.length===0?
   <label style={{color:'red'}}>
   Please enter the Location</label> :""}
   </div>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <Link href="/FillUp"><button class="fillup">PROCEED</button></Link>
   <br/>
   <br/>
    </form>
    </div>
  );
}
export default Description