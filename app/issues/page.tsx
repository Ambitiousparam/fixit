import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const page = () => {
  return (
    <div className='px-4'>
     <Button>
      <Link href = "/issues/new">
        New issue
      </Link>
     </Button></div>
  )
}

export default page