import {React, useState } from "react"
import '../App.css';
import { Input } from 'antd';
import { Button, Space } from 'antd';

export default function Login()
{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState();
    const[iscolor,setIsColor]=useState(false);
    function handlesubmit(e)
    {
        e.preventDefault();
        if(username==="root" && password==="123")
        {
            setMessage("Logged in Succsfully");
            setIsColor(true);
            // console.log("login succsful");
            // alert('login succsful');
            // return <h1>Login Susccsful</h1>
        }
        else
        {
            setMessage("Invalid Username and Password");
           setIsColor(false);
            // console.log("invalid username and password");
            // return <p>invalid username and password</p>
        }
        setUsername("");
        setPassword("");
    }
    return(
        // <div className="box">
          <div className="loginpage">
           <h1>Login Form</h1>
            <div className="m1">
            <h4>UserName</h4> 
            <Input size="large" className="login" type="text" placeholder="Enter a username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>

          
               <div className="pwd">
            <h5>Password</h5>
            <Input.Password type="text"  className="login"  placeholder="Enter a password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>  

      

            {/* <Button type="primary" onClick={handlesubmit} className="submit" size="large">login</Button> */}
            
            <div className="m2">
            <Button type="primary" onClick={handlesubmit} className="submit" size="large">login</Button>
            </div>
             <Test msg={message} iscolor={iscolor} />
          </div>

          
        
    )
}
function Test({msg,iscolor})
{
  if(iscolor)
  {
    return <p style={{color:"green"}}>{msg}</p>
  }
  else{
    return <p style={{color:"red"}}>{msg}</p>
  }
}