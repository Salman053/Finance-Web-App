import { Button } from '@/components/ui/button'
import { Battery } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3>This is authenticated Route</h3>
      <Button variant={'destructive'}>Click Me</Button>
    </div>
  ) 
}

export default page