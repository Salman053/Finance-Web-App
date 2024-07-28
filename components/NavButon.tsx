import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}

const NavButton = ({ href, label, isActive }: Props) => {
    const pathname = usePathname()
    return (
        <Button
            asChild size={'sm'} variant={'outline'}
            className={cn(
                "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-within:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
                isActive || pathname==="/dashboard" ? 'bg-white/10 text-white' : 'bg-transparent'
            )}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
}

export default NavButton;
