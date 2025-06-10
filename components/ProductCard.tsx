import { urlFor } from '@/sanity/lib/image'
import { Flame } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddtoWishlist from './AddtoWishlist'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="text-sm border-[1px]  border-shop_dark_blue/20 bg-white group">
            <div className="relative group overflow-hidden bg-shop_light_bg">
                {product?.images && (
                    <Link href={`/product/${product?.slug?.current}`}>
                        <Image
                            src={urlFor(product.images[0]).url()}
                            alt="productImage"
                            width={700}
                            height={700}
                            priority
                            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect
                          ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
                        />
                    </Link>
                )}
                <AddtoWishlist product={product} />
                {product?.status === "sale" ? (
                    <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-lightGreen hover:text-shop_dark_green hoverEffect">
                        Sale!
                    </p>
                ) : (
                    <Link
                        href={"/deal"}
                        className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
                    >
                        <Flame
                            size={18}
                            fill="#fb6c08"
                            className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
                        />
                    </Link>
                )}
            </div>
            <div className='p-3'>Product Details</div>
        </div>
    )
}

export default ProductCard
