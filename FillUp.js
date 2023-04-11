import Link  from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './FillUp.css'
function FillUp() {
  const[Name,setName]=useState('');
  const[Age,setAge]=useState('');
  const[Gender,setGender]=useState('');
  const[Location,setLocation]=useState('');
  const[Medical,setMedical]=useState('');
  const[error,setError]=useState(false);
  const navigate=useNavigate();
  const formHandler=(event)=>
  {
    event.preventDefault();
    if(Name.length===0 || Age.length===0 || Gender.length===0 || Location.length===0 || Medical.length===0)
    {
      setError(true);
    }
    if(Name && Age && Gender && Location && Medical) 
    {
    const loginObj={
        name:Name,age:Age,gen:Gender,loc:Location,med:Medical
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    navigate("/Hospitaldetails");
    }
  }
  return (
    <div className='body6'>
    <br/><br/>
    <h4><u>FILL THE REQUIRED DETAILS:</u></h4>
    <form onSubmit={formHandler} >
    <br/>
    Name: 
      <input type="Name" value={Name} placeholder="Name" onChange={e=>setName(e.target.value)}/>
    <div>
      {error && Name.length===0?
        <label style={{color:'red'}}>Name is required</label>:""}
    </div>
    <hr/>
    Age : 
    <input type="number" value={Age}  placeholder="Age" onChange={e=>setAge(e.target.value)}/> [in numbers]
    <div>
          {error && Age.length===0?
          <label style={{color:'red'}}>Age is required</label>:""}
    </div>
    <hr/>
    <div onChange={e=>setGender(e.target.value)}>
    <label for="gen">Gender : </label>  
    <input type="radio" name="gen" value="Male"  /> Male
    <input type="radio" name="gen" value="Female"  /> Female
    <input type="radio" name="gen" value="Other" /> Other
    </div>
    <div>
          {error && Gender.length===0?
          <label style={{color:'red'}}>Gender is required</label>:""}
    </div>
    <hr/>
    Location : 
    <input type="location" value={Location} placeholder="location" onChange={e=>setLocation(e.target.value)}/>
    <div>
          {error && Location.length===0?
          <label style={{color:'red'}}>Location is required</label>:""}
    </div>
    <hr/>
    Medical Condition : 
    <input type="condition" value={Medical} placeholder="condition" onChange={e=>setMedical(e.target.value)}/>
    <div>
          {error && Medical.length===0?
          <label style={{color:'red'}}>Medical Condition is required</label>:""}
    </div>

    <hr/>
    <br/>
      <Link href="/Hospitaldetails"><button class="fillup" >Submit</button></Link><br/><br/><br/>
    </form>
    <br/><br/><br/></div>
  )
}

export default FillUp