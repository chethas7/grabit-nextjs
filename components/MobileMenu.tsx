"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import MobileDropDown from './MobileDropDown'

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer' />
            </button>
            <div className='md:hidden'>
                <MobileDropDown isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
        </>
    )
}

export default MobileMenu
