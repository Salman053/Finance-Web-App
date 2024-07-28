'use client'
import React, { useState } from 'react'

import { usePathname } from 'next/navigation'
import NavButton from './NavButon'
import logo from '../public/assets/logoipsum-296.svg'
import {
    Sheet, SheetContent, SheetTrigger
} from '@/components/ui/sheet'

import { useMedia } from 'react-use'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'

const routes = [
    {
        href: '/',
        labeL: 'overview'
    },
    {
        href: "/transactions",
        labeL: 'transactions'
    }, {
        href: "/accounts",
        labeL: 'accounts'
    }
    , {
        href: "/categories",
        labeL: 'categories'
    }, {
        href: "/settings",
        labeL: 'settings'
    }
]
const Navigation = () => {
    const [isOpen, setIsOPen] = useState(false)
    const router = useRouter()
    const isMobile = useMedia("(max-width:1024px", false)
    const pathname = usePathname()

    const onClick = (href: string) => {
        router.push(href);
        setIsOPen(false)
    }
    if (isMobile) {
        return (
            <Sheet open={isOpen}  onOpenChange={setIsOPen}>
                <SheetTrigger>
                    <Button variant={'outline'} size={'sm'}
                        className='font-normal  bg-white/10 hover:bg-white/20 hover:text-white border-none focus-within:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
                    >
                        <Menu className='size-4' />
                    </Button>
                </SheetTrigger>
                <SheetContent side={'left'} className='px-2  w-[40%] bg-blue-400'>
                    <Image src={logo} alt='logo' />
                    <nav className='flex flex-col gap-y-2 pt-6  '>
                        {routes.map((route) => (
                            <Button key={route.href}
                                className='capitalize w-full justify-start   '
                                variant={route.href === pathname ? 'secondary' : 'ghost'}
                                onClick={() => onClick(route.href)}
                            >
                                {route.labeL}
                            </Button>
                        ))}
                    </nav>

                </SheetContent>
            </Sheet>
        )
    }

    return (
        <nav className='hidden capitalize  lg:flex items-center gap-2 overflow-x-auto'>
            {routes.map((route) => (
                <NavButton key={route.href} label={route.labeL} href={route.href} />
            ))}
        </nav>
    )
}

export default Navigation