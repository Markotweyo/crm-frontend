import React, {useState} from 'react'
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password.reset/PasswordReset.comp'
import './entry.style.css'





export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')

    const handleOnChange= e  => {
        const {name, value}=e.target
        
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    
    }

    const handleOnSubmit= e =>{
        e.preventDefault();

        if (!email || !password){
           return alert("Fill all the form")
        }
        //TODO Call the API to submit the form
        console.log(email, password)
    }
    const handleOnResetSubmit = e =>{
        e.preventDefault();

        if (!email){
          return alert("Enter Email address")
        }
        console.log(email)
    }
    const formSwitcher= frmType=>{
        setFormLoad(frmType)
    }
     
    return (
        <div className= 'entry-page bg-info' >
            
            <div className='form-box bg-light p-5'>
            {formLoad==='login' && (
                <LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                pass={password}
                />
            )}
                
            {formLoad==='reset' && (
                <ResetPassword
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                />
            )} 
            </div>
              
            
        </div>
    )
}
