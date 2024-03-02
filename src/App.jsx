import { useState } from 'react'
import './App.css'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

function App() {
  const navigate=useNavigate()
  const {  handleSubmit,register,formState: { errors }} = useForm()
  const onSubmit=(data)=>{
    if(data.passworduser !== data.passwordconfirm){
      toast.error(" passwords do not match")
    }
    else{


      toast.success("Successful connection")
      navigate("/home")
    }
  }  

  return (
      <main>
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <input type="text" 
        placeholder="Enter your name" 
        {...register("nomUser",{required:"please enter your name",
        minLength:{value:2,message:"your name must have at least 2 characters"}})}
        />
        <input type="email" placeholder="Enter your email address" 
        {...register("adressmail",{required:"make sure to enter the email address",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })}
        />
        <input type="password" placeholder="Enter your password"  
        {...register("passworduser",{required:"make sure you enter your password",
        minLength:{value:5,message:"your password must have at least 5 characters"}})}/>
        <input type="password" placeholder="Confirm password"  
        {...register("passwordconfirm",{required:"make sure to confirm your password",
        minLength:{value:5,message:"your password must have at least 5 characters"}})}/>
        <button type="submit">Login</button>
    </form>
     </main>
    
  )
}

export default App
