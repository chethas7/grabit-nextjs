import { productType } from '@/constants/data'
import Link from 'next/link'
import React from 'react'
interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => void
}

const HomeBar = ({ selectedTab, onTabSelect }: Props) => {
    return (
        <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3 text-sm font-light'>
                {productType?.map((item) => (
                    <button onClick={() => onTabSelect(item?.title)} className={`border border-shop_light_blue/20 px-4 py-1.5 md:px-6 md:py-2 hover:bg-shop_light_blue
                         hover:border-shop_light_blue hover:text-white hoverEffect 
                         ${selectedTab === item?.title ? "bg-shop_light_blue text-white border-shop_light_blue" : "bg-shop_light_blue/20 "}`} key={item?.title}>
                        {item?.title}
                    </button>
                ))}
            </div>
            <Link className={`border border-shop_light_blue/20 px-4 py-1.5 md:px-6 md:py-2 hover:bg-shop_light_blue hover:border-shop_light_blue hover:text-white hoverEffect`} href={"/shop"}>See All</Link>
        </div>
    )
}

export default HomeBar
