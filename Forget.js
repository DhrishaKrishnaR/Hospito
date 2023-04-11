import { Link } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Forget.css';

export default function Forget() {
    const[email,setEmail]=useState('');
    const[otp,setOtp]=useState('');
    const[pass,setNew]=useState('');
    const[confirm,setConfirm]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        //validation:
        if(email.length===0 ||  otp.length<4 || otp.length>4 || otp.length===4 || pass.length===0 || pass!==confirm)
        {
          seterror(true);
        }
        if(email && otp && pass && confirm)
        {
          const loginobj={
            mail:email,
            verify:otp,
            newpassword:pass,
            confirmpassword:confirm
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Login");
        }
      }
  return (
    <div class="body3">
    <form onSubmit={formHandler}>
    <br/><br/><br/>
    <h1>ACCOUNT RECOVERY</h1><br/><br/>
    <b>E-MAIL ID:</b><input type="text" value={email} placeholder="ENTER E-MAIL ID" onChange={e=>setEmail(e.target.value)}/>
    <div>
    {error && email.length===0 ?
      <label style={{color:'white'}}>E-Mail ID  is required</label>:""}
    </div>
    <br></br><br></br>
    <b>OTP:</b><input type="number" value={otp} placeholder="ENTER OTP" onChange={e=>setOtp(e.target.value)}/><br/>
    <div>
    {error && otp.length<4?
      <label style={{color:'red'}}>Invalid OTP</label>:""}
    </div>
    <div>
    {error && otp.length>4?
      <label style={{color:'red'}}>Invalid OTP</label>:""}
    </div>
    <div>
    {error && otp.length===4?
      <label style={{color:'yellow'}}>OTP Verified</label>:""}
    </div>
    <br></br><br></br>
    <b>NEW PASSWORD:</b><input type="password" value={pass} placeholder="ENTER NEW PASSWORD" onChange={e=>setNew(e.target.value)}/>
    <div>
    {error && pass.length===0 ?
      <label style={{color:'white'}}>Password is required</label>:""}
    </div>
    <br></br><br></br>
    <b>CONFIRM PASSWORD:</b><input type="password" value={confirm} placeholder="CONFIRM PASSWORD" onChange={e=>setConfirm(e.target.value)}/>
    <div>
    {error && pass!==confirm ?
      <label style={{color:'white'}}>Password doesn't match</label>:""}
    </div>
    <br/>
    <div>
    <br/><br/>
    <Link href="/Login"><button class="forget">SUBMIT</button></Link>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </form>
    </div>
  )
}