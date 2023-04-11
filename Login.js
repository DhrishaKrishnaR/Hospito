
import  Link from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        //validation:
        if(username.length===0 || password.length===0)
        {
          seterror(true);
        }
        if(username && password)
        {

          const loginobj={
            name:username,
            pwd:password
          }
          //console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Description");
          
        }
      }
  return (
    <div className='body12'>
    <div><img src="https://t3.ftcdn.net/jpg/02/35/13/34/360_F_235133400_ZwaHUzKb3xCmR1DyQZQ5RE4uMJTeuHHK.jpg" height="50%" width="80%"></img>
    </div>
    <div >
    <form className='img' onSubmit={formHandler}>
    <br/><br/>
    <h1>LOGIN</h1>
    USERNAME:<input type="Name" value={username} placeholder="username" onChange={e=>setUserName(e.target.value)}/><br/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
    </div>
    PASSWORD:<input type="password" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    <h6><Link href='/ForgetPassword'>FORGOT PASSWORD</Link></h6>
    <Link href="/Description"><button class="login" >LOGIN</button></Link>
    </form>
    </div>
    </div>
  )
}
export default Login