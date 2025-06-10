import { twMerge } from "tailwind-merge";

interface Props {
    amount: number | undefined; // USD amount from database
    className?: string;
    exchangeRate?: number; // Optional custom rate
}

const PriceFormatter = ({
    amount,
    className,
    exchangeRate = 85.56 // Default exchange rate
}: Props) => {
    // Convert USD to INR
    const inrAmount = amount ? amount * exchangeRate : 0;

    // Format as Indian Rupees
    const formattedPrice = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(inrAmount);

    return (
        <span className={twMerge("text-sm font-semibold text-darkColor", className)}>
            {formattedPrice}
        </span>
    );
};

export default PriceFormatter;