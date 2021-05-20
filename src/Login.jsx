import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://qph.fs.quoracdn.net/main-qimg-fc0b01fe10a0b8c602fb0106d8189d9b" alt="" />

            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
