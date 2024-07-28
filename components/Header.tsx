import React from 'react'
import HeaderLogo from './HeaderLogo'
import Navigation from './Navigation'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from './WelcomeMsg'

const Header = () => {
    return (
        <header className='bg-gradient-to-b from-blue-700 to-blue-500 lg:px-14 px-4 py-8 pb-36'>
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <ClerkLoading>
                        <Loader2 className='animate-spin size-9 text-slate-400 '/>
                    </ClerkLoading>
                    <ClerkLoaded>

                    <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                </div>
                <WelcomeMsg/>
            </div>
        </header>
    )
}

export default Header