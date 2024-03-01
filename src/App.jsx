 import { useState } from 'react'
import './App.css'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'

function App() {
  const {  handleSubmit,register,formState: { errors }} = useForm()
  const onSubmit=(data)=>{
    if(data.passworduser !== data.passwordconfirm){
      toast.error(" les mot de passes ne correspondent pas")
    }
    else{
      toast.success("inscription reussi")
    }
  }

  return (
      <main>
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <input type="text" 
        placeholder="Entrer votre nom" 
        {...register("nomUser",{required:"veiller saisire votre nom",
        minLength:{value:2,message:"votre nom doit avoire aumoin 2 characteres"}})}
        />
        <input type="email" placeholder="Entrer votre address mail" 
        {...register("adressmail",{required:"veiller saisire l'adresse mail",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })}
        />
        <input type="password" placeholder="Saisisser votre mot de passe"  
        {...register("passworduser",{required:"veiller saisire votre mot de passe",
        minLength:{value:5,message:"votre mot de passe doit avoire aumoin 5 characteres"}})}/>
        <input type="password" placeholder="confirmer le mot de passe"  
        {...register("passwordconfirm",{required:"veiller confirmer votre mot de passe",
        minLength:{value:5,message:"votre mot de passe doit avoire aumoin 5 characteres"}})}/>
        <button type="submit">Valider</button>
    </form>
     </main>
    
  )
}

export default App
