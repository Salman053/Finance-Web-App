"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const WelcomeMsg = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className='space-y-2 mb-4'>
      <h1 className='text-2xl lg:text-4xl text-white font-medium capitalize'>
        Welcome Back {isLoaded? ', ': ' '}{user?.firstName} 👋🏻
      </h1>
      <p className='text-sm lg:text-base text-[#89b6fd]'>
        This is your Financial Overview Report
      </p>
    </div>
  )
}

export default WelcomeMsg