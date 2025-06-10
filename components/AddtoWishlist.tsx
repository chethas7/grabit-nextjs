import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import React from 'react'

const AddtoWishlist = ({ product, className }: { product: Product; className?: string }) => {
    return (
        <div className={cn("absolute top-2 right-2 z-10", className)}>
            <div className='p-2.5 rounded-full hover:bg-shop_light_blue hover:text-white hoverEffect bg-white'>
                <Heart size={15} />
            </div>
        </div>
    )
}

export default AddtoWishlist
