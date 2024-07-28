import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/assets/logoipsum-296.svg' 
const HeaderLogo = () => {
  return (
    <Link href={'/'}>
        <div className="items-center hidden lg:flex">
            <Image  src={logo} alt='logo'/>
            <p className='text-white text-2xl font-semibold ml-2'>
              Finance
            </p>
        </div>
    </Link>
  )
}

export default HeaderLogo