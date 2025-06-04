"use client"
import { navbarData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarMenu = () => {
    const PathName = usePathname()


    return (
        <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor'>
            {navbarData?.map((item) => (
                <Link key={item?.title} href={item?.href} className={`hover:text-shop_light_blue hoverEffect relative group`}>
                    {item?.title}
                    <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_blue group-hover:w-1/2 hoverEffect group-hover:left-0 ${PathName === item?.href && "w-1/2"}`} />
                    <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_blue group-hover:w-1/2 hoverEffect group-hover:right-0 ${PathName === item?.href && "w-1/2"}`} />
                </Link>
            ))}
        </div>
    )
}

export default NavbarMenu
