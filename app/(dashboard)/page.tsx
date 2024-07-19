import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Battery } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3>This is authenticated Route</h3>
      <Button variant={'destructive'}>Click Me</Button>
      <UserButton/>
    </div>
  ) 
}

export default page