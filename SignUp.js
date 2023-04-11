import  Link  from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[mobileNum,setMobileNum]=useState('');
    const[email,setEmail]=useState('');
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPwd,setConfirmPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();

    const formHandler=(event)=>
    {
        event.preventDefault();
        if(firstname.length===0 || lastname.length===0 || mobileNum.length<10 || mobileNum.length>10 || email.length===0 || username.length===0 || password.length!==0 || password!==confirmPwd)
        {
          seterror(true);
        }
        if(firstname && lastname && mobileNum && email && username && password && confirmPwd)
        {

          const loginobj={
            fname:firstname,
            lname:lastname,
            mob:mobileNum,
            mail:email,
            name:username,
            pwd:password,
            cpwd:confirmPwd
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Description");
        }
      }
  return (
    <div className='body4'>
    <h4><form onSubmit={formHandler}>
    <br/>
    <img src="data:image/png;base64,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 " width="100px"></img>
    <h3>CREATE ACCOUNT</h3><br/>
    FIRST NAME: <input type="text" value={firstname} placeholder="FIRST NAME" onChange={e=>setFirstName(e.target.value)}/><br/>
    <div>
    {error && firstname.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
    </div><br/>
    LAST NAME:<input type="text" value={lastname} placeholder="LAST NAME" onChange={e=>setLastName(e.target.value)}/><br/>
    <div>
    {error && lastname.length===0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
    </div><br/>
    MOBILE NUMBER:<input type="number" value={mobileNum} placeholder="MOBILE NUMBER" onChange={e=>setMobileNum(e.target.value)}/><br/>
    <div>
    {error && mobileNum.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div>
    <div>
    {error && mobileNum.length>10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div><br/>
    E-MAIL ID:<input type="text" value={email} placeholder="E-MAIL ID" onChange={e=>setEmail(e.target.value)}/><br/>
    <div>
    {error && email.length===0?
      <label style={{color:'red'}}>E-mail ID is required</label>:""} 
    </div><br/>
    USERNAME:<input type="text" value={username} placeholder="USERNAME" onChange={e=>setUserName(e.target.value)}/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
    </div><br/>
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div><br/>
    CONFIRM PASSWORD:<input type="password" value={confirmPwd} placeholder="CONFIRM PASSWORD" onChange={e=>setConfirmPassword(e.target.value)}/><br/>
    <div>
    {error && password!==confirmPwd?
      <label style={{color:'red'}}>Password Confirmation Failed</label>:""}
    </div>
    <div>
    <br/><br/>
        <Link href="/Description"><button class="sign" >SUBMIT</button></Link><br/><br/><br/><br/>
        </div>
        <br/><br/><br/><br/>
    </form></h4>
    </div>
  )
}