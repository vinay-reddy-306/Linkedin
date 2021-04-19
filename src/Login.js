import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error=>alert(error))
    }
    
    const register = () => {
        if (!name) {
            return alert('Enter full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profileUrl,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profileUrl,
                    }))
                })
            }).catch(error => alert(error))
    }
    
    return (
        <div className='Login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'
                alt='LinkedIn' />
            <form>
                <input value={name}
                    type='text'
                    placeholder='Full Name (required if registering)'
                    onChange={(e) => setName(e.target.value)}
                />

                <input value={profileUrl}
                    onChange={(e)=>setProfileUrl(e.target.value)}
                    type='text'
                    placeholder='Profile Pic URl (Optional)'
                />

                <input value={email}
                    type='email'
                    placeholder='abc@email.com'
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input value={password}
                    type='password'
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type='submit' onClick={loginToApp}>Login</button>
            </form>
            <p>Not a member ?
             <span className='Login_register' onClick={register}> Register now</span>
            </p>
        </div>
    )
}

export default Login
