import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate = useNavigate();
    const[input,setInput]=useState({
    name: "",
    email :"",
    password : ""
    })

const handleSubmit= (e)=> {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/login");

}


  return (
    <>
<h2>Create an Account</h2>
<form onSubmit={handleSubmit}>

<div className="form-floating mb-3">
  <input name="name" value={input.name} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} type="text" className="form-control" id="floatingInput" placeholder="enter Name"/>
  <label htmlFor="floatingInput">Name</label>
</div>

<div className="form-floating mb-3">
  <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})}  type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label htmlFor="floatingPassword">Password</label>
</div>

<button type="submit">Register</button>

<p>Have already an account ? <Link to="/login">Login here</Link></p>

 </form>       
    </>
  )
}

export default Register