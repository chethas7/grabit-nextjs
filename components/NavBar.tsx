import React from 'react'
import Container from './Container'
import Logo from './Logo'
import NavbarMenu from './NavbarMenu'
import SearchBar from './SearchBar'
import WishlistIcon from './WishlistIcon'
import CartIcon from './CartIcon'
import Login from './Login'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const NavBar = async () => {
    const user = await currentUser()
    console.log(user);

    return (
        <header className='bg-white py-5'>
            <Container className='flex items-center justify-between text-lightColor'>
                {/* LEFT */}
                <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
                    <MobileMenu />
                    <Logo />
                </div>
                <NavbarMenu />
                <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
                    <SearchBar />
                    <WishlistIcon />
                    <CartIcon />
                    <ClerkLoaded>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        {!user && <Login />}
                    </ClerkLoaded>
                </div>
                {/* MIDDLE */}
                {/* RIGHT */}
            </Container>
        </header>
    )
}

export default NavBar
