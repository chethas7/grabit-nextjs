import { SignedIn, SignInButton } from '@clerk/nextjs'
import React from 'react'

const Login = () => {
    return (
        <SignInButton mode='modal'>
            <button className='text-sm font-semibold text-lightColor hover:text-darkColor cursor-pointer hoverEffect'>
                Login
            </button>
        </SignInButton>
    )
}

export default Login
