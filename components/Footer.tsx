import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './ui/text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer = () => {
    return (
        <footer className='bg-white border-t'>
            <Container>
                <FooterTop />
                <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* LOGO & SOCIALMEDIA */}
                    <div className='space-y-4'>
                        <Logo />
                        <SubText className='text-gray-600 text-sm'> Discover curated furniture collections at Shopcartyt, blending
                            style and comfort to elevate your living spaces.</SubText>
                        <SocialMedia className="text-darkColor/60"
                            iconClassName="border-darkColor/60 hover:border-shop_light_blue hover:text-shop_light_blue"
                            tooltipClassName="bg-darkColor text-white" />
                    </div>
                    {/* QUICK LINKS */}
                    <div>
                        <SubTitle>Quick Links</SubTitle>
                        <ul className='space-y-3 mt-4'>
                            {quickLinksData?.map((item) => (
                                <li key={item?.title}>
                                    <Link href={item?.href} className='hover:text-shop_light_blue hoverEffect font-medium'>
                                        {item?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* CATEGORIES */}
                    <div>
                        <SubTitle>Categories</SubTitle>
                        <ul className='space-y-3 mt-4'>
                            {categoriesData?.map((item) => (
                                <li key={item?.title}>
                                    <Link href={`/category/${item?.href}`} className='hover:text-shop_light_blue hoverEffect font-medium'>
                                        {item?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* NEWS-LETTER */}
                    <div className='space-y-4'>
                        <SubTitle>
                            News Letter
                        </SubTitle>
                        <SubText>
                            Subscribe to our newsletter to receive updates and exclusive
                            offers
                        </SubText>
                        <form className='space-y-3'>
                            <Input type="email" required placeholder='enter your email address' />
                            <Button>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="py-6 border-t text-center text-sm text-gray-600">
                    <div>
                        © {new Date().getFullYear()} <Logo className="text-sm" />. All
                        rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
