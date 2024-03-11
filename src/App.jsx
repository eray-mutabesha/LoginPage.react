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
    
     if(data.nomUser.length ==""){
     toast.error("Completez le nom SVP!!")
    }
     else if(data.passworduser.length ==""){
    toast.error("veiller saisir le mot de pass")
   }
  
    else{
      toast.success("Successful connection")
      navigate("/home")
    }
  }  
  
  return (
      <main>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Log in to your acount</h1>
        <p ></p>
        <input type="text" 
        placeholder="Enter your name" 
        
        {...register("nomUser",{
        minLength:{value:2,message:"your name must have at least 2 characters"}})}
        />
        {errors.nomUser && (
        <span style={{ color: 'red' }}>{errors.nomUser.message}</span>
      )}
        
        <input type="password" 
        placeholder="Enter your password"  
        {...register("passworduser",{
        minLength:{value:5,message:"identifient incorrect"}})}/>
      {errors.passworduser && (
        <span style={{ color: 'red' }}>{errors.passworduser.message}</span>
      )}
        <button type="submit">Login</button>
    </form>
     </main>
    
  )
}

export default App
