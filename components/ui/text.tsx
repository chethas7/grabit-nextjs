import { cn } from "@/lib/utils"

export const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <h2 className={cn("text-2xl md:text-3xl font-bold text-shop_btn_dark_blue capitalize tracking-wide", className)}>{children}</h2>
}