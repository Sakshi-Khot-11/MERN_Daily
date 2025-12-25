import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {Link} from 'react-router'
import { loginUser } from '../services/userServices'
import {toast} from 'react-toastify'

function Login() {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

const login=async (event)=>{
  console.log('sign in clickedd')
  console.log(`email-${email}`)
  console.log(`password-${password}`)
  if(email==='')
    // window.alert("email is mndatory")
  toast.warn('email must be entered')
  else if(password==='')
    toast.warn('password must be entered')
    // window.alert("password is mandatory")
  else{
    const result=await loginUser(email,password)
    console.log(result)
    if(result.status=='success'){
      navigate('/home')
      toast.success('Login successful')
    }
    else
      toast.error(result.error)
    
  }
  }

  return  (    
    
    <div className='container w-50'>
      <h3>Login</h3>

   
                <div className="mt- 3 mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter email</label>
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
                </div>

                 <div className="mb-3">
                  <button className="btn btn-success" onClick={login}>Login</button>  
                </div>
                <div>
                  Don't have account?then to register <Link to='/register'>Click Here!</Link>
                </div> 
                
                

       </div>


  
  )
}

export default Login
