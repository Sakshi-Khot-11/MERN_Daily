import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import { registerUser } from '../services/userServices'
import {toast} from 'react-toastify'

function Register() {
  const[role,setRole]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  
  const register=async(event)=>{
console.log("Registration clicked")

console.log(email)
console.log(password)
console.log(role)

if(email==='')
  toast.warn("Enter email")
else if(password==='')
  toast.warn("Enter password")
else if(role==='')
  toast.warn("Enter role")
else{
  const result=await registerUser(email,password,role)
  if(result.status=='success')
  {
    navigate('/')
    toast.success('user registered successfully')
  }
  else
    toast.error(result.error);
    


}

  }
  return (
    
        <div className='container w-50'>
          <h3>Register</h3>

   
                {/* <div className="mt- 3 mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter name" onChange={e=>setName(e.target.value)}/>
                </div> */}
                <div className="mt- 3 mb-3"> 
                <label for="formGroupExampleInput" class="form-label">Enter email</label>
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className="mt- 3 mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter Role</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter role" onChange={e=>{setRole(e.target.value)}}/>
                </div>

                 <div className="mb-3">
                  <button className="btn btn-success" onClick={register}>Register</button>  
                </div>
                <div>
                  already have account?then to login <Link to='/'>Click Here!</Link>
                </div> 
                
                

       </div>






    // <div>
    //   <h1>Register</h1>
    // </div>
  )
}

export default Register
