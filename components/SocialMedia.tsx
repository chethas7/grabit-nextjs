import React from 'react'
import {
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    SlackIcon,
    YoutubeIcon,
} from "lucide-react";

import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string
}


const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <YoutubeIcon className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://github.com/chethas7",
        icon: <GithubIcon className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://linkedin.com/",
        icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        href: "https://facebook.com/",
        icon: <FacebookIcon className="w-5 h-5" />,
    },
    {
        title: "Slack",
        href: "https://slack.com/",
        icon: <SlackIcon className="w-5 h-5" />,
    },
];


const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLink.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Link href={item.href} target="_blank" rel="noopener noreferrer"
                                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_blue hoverEffect", iconClassName)}>
                                {item.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn("bg-white text-darkColor font-semibold border-shop_light_blue", tooltipClassName)}>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider >
    );
};

export default SocialMedia
