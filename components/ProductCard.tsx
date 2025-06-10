import { urlFor } from '@/sanity/lib/image'
import { Flame, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddtoWishlist from './AddtoWishlist'
import { SubTitle, Title } from './ui/text'
import PriceView from './PriceView'

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
            <div className='p-3 flex-col gap-2'>
                <SubTitle className="text-sm line-clamp-2 h-[2.8em] leading-tight">
                    {product?.name}
                </SubTitle>
                {product?.categories && (
                    <p className="line-clamp-1 text-xs font-medium text-shop_light_gray">
                        {product.categories.map(category => `#${category}`).join(" ")}
                    </p>
                )}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                className={
                                    index < 4 ? "text-amber-400" : "text-gray-300"
                                }
                                fill={index < 4 ? "#FBBF24" : "#E5E7EB"}
                                size={13} // Optional: adjust star size
                            />
                        ))}
                    </div>
                    <p className="text-lightText text-xs tracking-wide">5 Reviews</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <p className="font-light text-shop_light_gray">In Stock</p>
                    <p
                        className={`${product?.stock === 0 ? "text-red-600" : "text-shop_dark_green/80 font-semibold"}`}
                    >
                        {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
                    </p>
                </div>
                <PriceView
                    price={product?.price}
                    discount={product?.discount}
                    className="text-sm"
                />
            </div>
        </div>
    )
}

export default ProductCard
