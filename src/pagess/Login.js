import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
const navigate=useNavigate();

  const[input,setInput]=useState({
    name: "",
    email :"",
    password : ""
    })


    const handleLogin =(e)=>{
      e.preventDefault();
      const loggeduser= JSON.parse(localStorage.getItem("user"));
      if(input.email===loggeduser.email && input.password===loggeduser.password){
        localStorage.setItem('loggedin',true)
        navigate('/')
      }
      else {
        alert ("Wrong Email Or Password")
      }
    }

  return (
    <div>
<h2>Login</h2>
<form onSubmit={handleLogin}>
<div className="form-floating mb-3">
  <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div>

<button type='submit'>Login</button>

<p>Dont have an account ? <Link to="/register">Register here</Link></p>

</form>
</div>
    
  )
}

export default Login